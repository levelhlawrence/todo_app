const express = require("express");
const app: any = express();
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
// Port
const PORT = process.env.PORT;

// --Exporting from here
export { express, app, PORT };
