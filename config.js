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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_09_09_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgODUsXG4gICAgICAgIDExLFxuICAgICAgICA2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSbUxGYUNtby9wbzY2S2NrUHVTODNTWHhCZ1lXOGdrUTFHbVMvdUZoTjlZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTc4MjYyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTBGRkY1MTYwN0E0MjM1ODQ0Q0FBMzQwQzFGMDE1NDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2NjcyMTUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGODlGRDdGMDBBRkMxREY5M0FEOTk1NEZBODc0MTAzNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjY2NzIxNTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGtaMWQ0U2tUNzJZejVvZXdVcG4xQVwiLFxuICBcInBob25lSWRcIjogXCJjOWUzYjg2NS0yYTY5LTRhNDktOGU2ZC0wMjU0OTJjOTU3MDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgNzEsXG4gICAgICAxOTksXG4gICAgICAxNzgsXG4gICAgICAxOTcsXG4gICAgICAxODksXG4gICAgICA3MSxcbiAgICAgIDkwLFxuICAgICAgMTcxLFxuICAgICAgMjQ5LFxuICAgICAgMTQwLFxuICAgICAgNSxcbiAgICAgIDE4OSxcbiAgICAgIDE2NCxcbiAgICAgIDkyLFxuICAgICAgMTIyLFxuICAgICAgMTQzLFxuICAgICAgMjEwLFxuICAgICAgNixcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDMzLFxuICAgICAgOTksXG4gICAgICAxMDYsXG4gICAgICAzMCxcbiAgICAgIDE5MCxcbiAgICAgIDEzMyxcbiAgICAgIDE0MyxcbiAgICAgIDExNixcbiAgICAgIDIwMixcbiAgICAgIDExNSxcbiAgICAgIDE2NixcbiAgICAgIDY1LFxuICAgICAgMTU1LFxuICAgICAgMTYxLFxuICAgICAgNTcsXG4gICAgICAxMDUsXG4gICAgICAxMTEsXG4gICAgICAzMyxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyREU3VktXUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Vu/CdlpfwnZaU8J2Wi/CdlorwnZaY8J2WmPCdlpTwnZaXXCIsXG4gICAgXCJsaWRcIjogXCIyNTk0ODk1NzYwMDU4Nzc6NDFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUtnNWFNSEVKUGFxN2NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYVHR0K0ZmcloxZ1FNcVZETGtPeHdJcUZpSXY3eXd2aE04T1RYeitnZDE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFsSk1KUzJudmVjSEFDMGhxT1EvckhWMWl5dnFTcERhYzUvZmRDUEFwQkRvSXRDNWVRbktya29MWVYraGk5RUVXaUtTR281L3dReUxMZHA2L2FveENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1OWWlBbzF1NXdmNmkyWVp3eDlLdzFtNndKUGhsVkNLY3lTQlUvWXlPQnZhZEc1Q3RRYit5N2pWTTBvSWdZeFhvRTdpdFF6ekVpZU9kYk8xR2xwN2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTc4MjYyNjo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY2NzIxNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMSFZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxIVi5qc29uIjogIntcImtleURhdGFcIjpcIk9jQ0RSVWM0WGkrbTlaSWpvRi9zWndkYXFnOHNLR2R2Y01tdVgwaGtMYUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NDEwNzM5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2NjcxOTIzNjQxXCJ9Igp9"  // PUT your SESSION_ID 


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
