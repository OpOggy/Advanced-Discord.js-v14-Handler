const client = require("../index");
const { glob } = require('glob')
const { promisify } = require('util')

const globPromise = promisify(glob)

module.exports = async (client) => {

    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`)
    commandFiles.map((value) => {
        const file = require(value)
        const splitted = value.split('/')
        const directory = splitted[splitted.length - 2]

        if (file.name) {
            const properties = { directory, ...file }
            client.commands.set(file.name, properties)
        }
    })

    const eventfiles = await globPromise(`${process.cwd()}/events/*.js`)
    eventfiles.map((value) => require(value))

  
}

/* 
  𝖢 O D E D  B Y: 𝖮𝗀𝗀𝗒𝖭𝗈𝗍𝖮𝗉#𝟤𝟧𝟧𝟫
  S U P P O R T | S E R V E R : https://dsc.gg/hypnos-codes
  */