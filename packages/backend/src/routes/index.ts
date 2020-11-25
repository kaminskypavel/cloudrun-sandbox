import express, {NextFunction, Request, Response} from 'express'
import {body, validationResult} from 'express-validator';
import {evaluateCode} from "../controllers";
import {SUPPORTED_LANGUAGES} from "../executor";

const router = express.Router();

const validator = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    next();
}

router.get('/ping', (req: Request, res: Response) => {
    res.send('pong')
})

router.post('/eval', [
    body('language').isIn(SUPPORTED_LANGUAGES),
    body('script').notEmpty()
], validator, evaluateCode)


export default router;
