const client = require("../index")

 client.rest.on('rateLimited', async (client, info) => {

                  console.log(`RATE LIMIT >> ${info.timeDifference ? info.timeDifference : info.timeout ? info.timeout: 'Unknown timeout '}`)
    })


/* 
  𝖢 O D E D  B Y: 𝖮𝗀𝗀𝗒𝖭𝗈𝗍𝖮𝗉#𝟤𝟧𝟧𝟫
  S U P P O R T | S E R V E R : https://dsc.gg/hypnos-codes
  */