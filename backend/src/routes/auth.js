import express from 'express';
import Router from 'express';

const router = Router();


router.get('/', (req, res) => {
    return res.send('Working')
})

export {router};