import express from 'express';
import Router from 'express';
import {Database} from '../libraries/database.js';
const db = new Database();
const migrateRoute = Router();


//Migrations
migrateRoute.all("/", async (req, res) => {
    await db.query(`
        DROP TABLE IF EXISTS users;
        CREATE TABLE users (
            userId SERIAL PRIMARY KEY,  
            firstName VARCHAR(255) NOT NULL,  
            lastName VARCHAR(255) NOT NULL,   
            email VARCHAR(255) NOT NULL UNIQUE,  
            password VARCHAR(255) NOT NULL,  
            phone VARCHAR(50)                
            );

        `)
    await db.query(`
        DROP TABLE IF EXISTS organisation;
        CREATE TABLE organisation (
            orgId VARCHAR(255) NOT NULL UNIQUE,  
            name VARCHAR(255) NOT NULL,  
            owner VARCHAR(255) NOT NULL,  
            description VARCHAR(255) NULL        
            );
        `)
    await db.query(`
        DROP TABLE IF EXISTS organisation_user;
        CREATE TABLE organisation_user (
            orgId VARCHAR(255) NOT NULL,  
            userId VARCHAR(255) NOT NULL        
            );
        `)
        res.status(201).json({
            "message":"migrated successfully"
        })
})


export {migrateRoute};