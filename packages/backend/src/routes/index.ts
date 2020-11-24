import express, {Request, Response} from 'express'
import {evaluateCode} from "../controllers";

const router = express.Router();

router.get('/ping', function (req: Request, res: Response) {
    res.send('pong')
})

router.post('/eval', function (req, res) {
    const {script} = req.body;
    try {
        const evalResponse = evaluateCode(script);
        console.log(evalResponse);
        res.send({
            status: "ok",
            data: evalResponse
        })
    } catch (e) {
        console.log(e);
        res.send({
            status: "error",
            error: e
        })
    }
})


export default router;
