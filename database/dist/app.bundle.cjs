(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const s=require("express"),o=require("mysql2"),t=require("dotenv");t.config();const r=o.createPool({host:process.env.HOST,user:process.env.USER,password:process.env.PASSWORD,database:process.env.DATABASE}).promise(),n=require("cors");t.config();const c=s();c.use(n()),c.get("/projetos",(async(e,s)=>{const o=await async function(){const[e]=await r.query("SELECT * FROM projetos");return e}();s.status(200).send(o)})),c.get("/projects",(async(e,s)=>{const o=await async function(){const[e]=await r.query("SELECT * FROM projects");return e}();s.status(200).send(o)})),c.use(((e,s,o,t)=>{console.error(e.stack),o.status(500).send("Deu ruim =/")}));const a=process.env.PORT||8181;c.listen(a,(async()=>{console.log("Server is running on port "+a)})),module.exports=e})();