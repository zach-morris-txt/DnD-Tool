import express from 'express';
import {PORT} from './constants/index.js';
import {router} from './routes/auth.js'

const app = express();



app.use('/api', router)

const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`This app is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
    }
}

appStart()

export { app };