import dotenv from 'dotenv';
dotenv.config();

import {jwtService} from '../libraries/jwt.js';
import {Database} from '../libraries/database.js';
const db = new Database();



async function loggedIn(req, res, next) {
    let token = req.headers.authorization || req.headers.Authorization;
    token = token.split(" ")[1]
    try {
        let { userId } = await jwtService.verifyToken(token)
        const user = await db.query(`SELECT email from users where userid =$1`, [userId])
        if (user.rowCount > 0) {
            req.userId = userId
            return next()
        }
        return res.status(400).json({
            "status": "Bad Request",
            "message": "Client error",
            "statusCode": 400
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            "status": "Bad Request",
            "message": "Client error",
            "statusCode": 400
        })
    }
}


export {loggedIn};