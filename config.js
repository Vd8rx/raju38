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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_43_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVdmpzS0c2L1JDSTI1UFBBM3BDRUJMTDZtbWZWMG9lRVhhY2xaMHU0YktrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTc4MjYyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzc5RTVFODQ2NjE4OTBGOUY0NDlBODZDQjRENjJCN0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3NzkzODEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNQWFdNcC15U2phYi03V1J0ZDE5TkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTRiMmViZmItMGFmOC00MjY0LTkxNGUtYjM2NGI3YzgxMzliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDExMixcbiAgICAgIDI1LFxuICAgICAgMzcsXG4gICAgICAxNDYsXG4gICAgICAyMjIsXG4gICAgICAyMyxcbiAgICAgIDYxLFxuICAgICAgMTIzLFxuICAgICAgMTc3LFxuICAgICAgNjMsXG4gICAgICAzOCxcbiAgICAgIDEzLFxuICAgICAgMjUsXG4gICAgICAyNDIsXG4gICAgICAxMjMsXG4gICAgICA4NCxcbiAgICAgIDIyNCxcbiAgICAgIDE4OSxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAyMTEsXG4gICAgICAyMzAsXG4gICAgICAyNDIsXG4gICAgICAyMTQsXG4gICAgICAyNDcsXG4gICAgICA3MSxcbiAgICAgIDE3NyxcbiAgICAgIDg3LFxuICAgICAgODksXG4gICAgICAyMjgsXG4gICAgICAxMzUsXG4gICAgICA1NixcbiAgICAgIDExMyxcbiAgICAgIDI0OSxcbiAgICAgIDc2LFxuICAgICAgMTkxLFxuICAgICAgMTQ2LFxuICAgICAgMTU1LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw4OUw5SkNEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE3ODI2MjY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZW78J2Wl/CdlpTwnZaL8J2WivCdlpjwnZaY8J2WlPCdlpdcIixcbiAgICBcImxpZFwiOiBcIjI1OTQ4OTU3NjAwNTg3Nzo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU2c1YU1IRUkyVjhMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhUdHQrRmZyWjFnUU1xVkRMa094d0lxRmlJdjd5d3ZoTThPVFh6K2dkMTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV29CWEo4RmQvWFNBR0pXL2pRbk5rL01GTmVSM3p2RkNwN2Q5NkE3U0owYUFrNTdLa1NIQUhLeHNJMDYrRWVFNzBjanJTb1Vkbmo2S3ppWFVycVJhQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRUt4K3k0NGZ5M2ZLYnBMOVpHenI1d3puZ25MOHQxSGQ4aE0vQmlrQWczWnBQVmtoN0xSYnpmK3FmU0RjMzNXVEswZG01MXJmREFpNlNURnJxT1ZvQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzc5MzgwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJRU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlFTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL1hSbEUzRHpBQXYvMWFBQTFnZk8vUGN1ZWdIbWRpRjFuU25XMzZrQ3VoST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU0MTA3Mzk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
