import {runScript} from "./../executor"
import {NextFunction, Request, Response} from 'express'

export const evaluateCode = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {script: scriptString, language} = req.body;

        try {
            const evaluatedResult = await runScript({language, scriptString})

            res.send({
                status: "ok",
                data: evaluatedResult
            })
        } catch (e) {
            res.send({
                status: "error",
                error: e
            })
        }
    } catch (e) {

    }
}
