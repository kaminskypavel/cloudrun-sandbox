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

export type Props = {
    language: "javascript"| "node" | "python";
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


export const runScript = (props: Props, timeout = 5 * 1000) => {
    return new Promise((resolve, rej) => {
        const {language, scriptFile, scriptString} = props;

        let child: any = null;

        if (!scriptFile && !scriptString) {
            throw new Error("script string/path is not provided");
        }

        const flag = getArguments(props);

        child = spawn(language,
            flag,
            {cwd: __dirname});


        setTimeout(() => {
            const isAlive = child !== null;

            if (isAlive) {
                killChild(child);
                throw new Error("process has timed out");
            }

        }, timeout)

        // result
        child.stdout.on('data', (data: string) => {
            // console.log("process finished ✅");
            // console.log(`stdout:\n${data} `);
            resolve(data.toString().trim())
        });

        child.stderr.on('stderr', (data: string) => {
            killChild(child);
            // console.error(`stderr: ${data}`);
            throw new Error(`stderr: ${data}`);
        });

        child.on('error', (error: Error) => {

            killChild(child);
            // console.error(`Failed to start subprocess: ${error.message}`);
            throw new Error(`Failed to start subprocess: ${error.message}`);
        });

        child.on('close', (code: number) => {
            if (code !== 0) {
                // console.log(`child process exited with code ${code}`);
                throw new Error(`child process exited with code ${code}`);
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
