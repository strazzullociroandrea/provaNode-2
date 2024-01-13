/**
 * 2) Scrivere un programma che richiede all'utente delle credenziali, e le verifica sul server di login
 */


import fetch from 'node-fetch';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs');
const json = JSON.parse(fs.readFileSync("conf.json"));
const token = json.token;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const login = (username, password) =>{
    return new Promise((resolve,reject)=>{
        fetch("https://ws.progettimolinari.it/credential/login",{
            method: "POST",
            headers: {
                "content-type": "application/json",
                key: token
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => resolve(response.json()))
        .catch(error => reject(error));
    })
}

const readInput = (domanda) =>{
    return new Promise((resolve, reject)=>{
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(domanda,input=>{
            readline.close();
            resolve(input);
        })
    });
}

readInput("Inserisci l'username: \n").then(username =>{
    readInput("Inserisci la password:\n").then(password=>{
        login(username,password).then(response=>console.log(response)).catch(error => console.log(error));
    });
});
