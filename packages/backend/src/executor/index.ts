export const {spawn} = require('child_process');
const TIMEOUT = 5 * 1000;

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
    language: "node" | "python";
    scriptString?: string;
    scriptFile?: string;
}

export const getArguments = ({language, scriptFile, scriptString}: Props) => {
    if (scriptFile)
        return [scriptFile];

    if (scriptString) {
        switch (language) {
            case "node":
                return ["-p", scriptString];
            case "python":
                return ["-c", scriptString]
            default:
                return ""
        }
    }
}


export const runScript = (props: Props) => {
    const {language, scriptFile, scriptString} = props;

    let child: any = null;

    if (!scriptFile && !scriptString) {
        throw new Error("script string/path is not provided");
    }

    const flag = getArguments(props);

    console.debug("running", language, flag);

    child = spawn(language,
        flag,
        {cwd: __dirname});


    setTimeout(() => {
        console.log("⌚ TIMEOUT");
        killChild(child);
    }, TIMEOUT)

    // result
    child.stdout.on('data', (data: string) => {
        console.log("process finished");
        console.log(`stdout:\n${data} `);

    });

//
    child.stderr.on('stderr', (data: string) => {
        console.error(`stderr: ${data}`);
        killChild(child);
    });

    child.on('error', (error: Error) => {
        console.error(`Failed to start subprocess: ${error.message}`);
        killChild(child);
    });

    child.on('close', (code: number) => {
        if (code !== 0) {
            console.log(`child process exited with code ${code}`);
        } else {
            child = null;
        }
    });

    // on exit remove refrence to child as it dead
    child.on('exit', function (code: number) {
        child = null;
    });


}
