const { Client, Collection } = require("discord.js")
const { set, connect } = require("mongoose");
const mongoose = require('mongoose')
require('dotenv').config()

const DATABASE = process.env.DATABASE_TOKEN;
 
module.exports = () => {
    if (!DATABASE) return
     set('strictQuery', true); connect(DATABASE)
.then(console.log("Connected to MongoDB Database!"))
.catch(err => console.log(err))


}

/* 
  𝖢 O D E D  B Y: 𝖮𝗀𝗀𝗒𝖭𝗈𝗍𝖮𝗉#𝟤𝟧𝟧𝟫
  S U P P O R T | S E R V E R : https://dsc.gg/hypnos-codes
  */