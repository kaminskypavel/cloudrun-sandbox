import express from 'express'
import { Request, Response } from 'express';

const router = express.Router();

router.get('/', function (req:Request, res:Response) {
    res.send('ok')
})

router.post('/', function (req, res) {
    const {text} = req.body;
    res.send('ok')
})


export default router;
