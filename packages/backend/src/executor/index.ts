export const SUPPORTED_LANGUAGES = ["javascript", "node", "python"];

export const {spawn} = require('child_process');

export const killChild = (child: any) => {
    if (child) {
        console.log(`kill: killing pid  = ${child.pid}`);
        child.stdin.pause();
        child.kill()
    } else {
        console.log("kill: skipping a dead child process");
    }
}

export type SupportedLanguages = (typeof SUPPORTED_LANGUAGES)[number];

export type Props = {
    language: SupportedLanguages;
    scriptString?: string;
    scriptFile?: string;
}

export const getArguments = ({language, scriptFile, scriptString}: Props) => {
    if (scriptFile)
        return [scriptFile];

    if (scriptString) {
        switch (language) {
            case "javascript":
            case "node":
                return ["-p", scriptString];
            case "python":
                return ["-c", scriptString]
            default:
                return ""
        }
    }
}

export const sanitizeLanguage = (language: string) => {
    switch (language) {
        case "javascript":
        case "typescript":
        case "node":
            return "node"

        case "python":
        case "python3":
            return "python"

        default:
            throw new Error(`unknown programming language ${language}`)
    }
}


export const runScript = (props: Props, timeout = 5 * 1000) => {
    return new Promise((resolve, reject) => {
        const {language, scriptFile, scriptString} = props;

        let child: any = null;

        if (!scriptFile && !scriptString) {
            throw new Error("script string/path is not provided");
        }

        const flag = getArguments(props);
        const cmd = sanitizeLanguage(language);

        child = spawn(cmd,
            flag,
            {cwd: __dirname});


        setTimeout(() => {
            const isAlive = child !== null;

            if (isAlive) {
                killChild(child);
                reject("process has timed out");
            }

        }, timeout)

        // the only positive outcome
        child.stdout.on('data', (data: string) => {
            // console.log("process finished ✅");
            // console.log(`stdout:\n${data} `);
            resolve(data.toString().trim())
        });

        // all from here are errors runing the code
        child.stderr.on('stderr', (data: string) => {
            killChild(child);
            // console.error(`stderr: ${data}`);
            reject(`stderr: ${data}`);
        });

        child.on('error', (error: Error) => {

            killChild(child);
            // console.error(`Failed to start subprocess: ${error.message}`);
            reject(`Failed to start subprocess: ${error.message}`);
        });

        child.on('close', (code: number) => {
            if (code !== 0) {
                // console.log(`child process exited with code ${code}`);
                reject(`child process exited with code ${code}`);
            } else {
                child = null;
            }
        });

        // on exit remove refrence to child as it dead
        child.on('exit', function (code: number) {
            child = null;
        });
    })
}
