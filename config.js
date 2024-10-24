const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314927710";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_17_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICA4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5SzdzTWFSdm5LTS9vcXVFYS92ODZEbTIvWUtvQzdpaFlLMS9lN2VlZWl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDgwNjIxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkM2QkNENzE3QkYwNDAwMUEwN0E4NjNERjRERUY0RTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NTIwMjY5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZQRHpiT1FLVGctekk5dkxDNHB0OGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY1ODZlNWUtNWYwZC00NWRiLTg3YWQtZmEyOTEyMGE4OTI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDEyMixcbiAgICAgIDk5LFxuICAgICAgMjIzLFxuICAgICAgMjQxLFxuICAgICAgMTQ1LFxuICAgICAgMTM5LFxuICAgICAgMjQ5LFxuICAgICAgMTE2LFxuICAgICAgMjUsXG4gICAgICA0NSxcbiAgICAgIDE3LFxuICAgICAgMTk0LFxuICAgICAgNDIsXG4gICAgICAxOTcsXG4gICAgICAxMDgsXG4gICAgICA2NyxcbiAgICAgIDExMCxcbiAgICAgIDcxLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTg1LFxuICAgICAgMTQ4LFxuICAgICAgMjQxLFxuICAgICAgMTE3LFxuICAgICAgMjM2LFxuICAgICAgODMsXG4gICAgICAxMDAsXG4gICAgICAyNDQsXG4gICAgICAyNDAsXG4gICAgICAyMTAsXG4gICAgICAyNyxcbiAgICAgIDIwMixcbiAgICAgIDEzMSxcbiAgICAgIDEzMSxcbiAgICAgIDgsXG4gICAgICAyMTIsXG4gICAgICAxMjIsXG4gICAgICAxMjEsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWN0JLR0MzNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZjvCdkIrhrYTigorMtuG3pOKCicy2zaXigoLMtuG3nuKCg8y2zaTigoLMtuG3oeKChMy2za3igoDMtsy24aqz4oKIzLbht5zigoDMts2l4oKGzLbht57igoLMtuG3nuKCgcy2zaTigoDMtuG3olwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjY1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQRWtlSUZFSUhGMmJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS3k1cTNzRStNeUo5OFlxOUlZd0w5QldlQzR5RTFDa1JhMncwRVVPMStVTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0MGcwM1N5bXNZdUtPelg4bThqN1dFbGhpaVJycEFMT1ArVWNzeHJXY2YwSW84eS9OT0JmSGtEMDRNSkkxVjJ4TXdzazByV09rV2NwRDRKQmZIb3NEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSK3krYnVjWEo5SVUrSHhkdVBPUTVTTWIzYVVPTkZVY2M0MUR2d2hvMzcyZnIxeXJOQ2pJR25Id1FoODNVWFBKVEVNWitOelpaTVlpZzREUlhjN09pdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1MjAyNjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBQmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFCay5qc29uIjogIntcImtleURhdGFcIjpcImYrcUJFNkxqYXBCbmhCdzBleVVJRGd5N0h5MUQ2S3FYRGd0N0JUK2lNQ0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0Nzk4NTQxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NTIwMjYzNzI4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Raju",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
