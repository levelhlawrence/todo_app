"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.app = exports.express = void 0;
const express = require("express");
exports.express = express;
const app = express();
exports.app = app;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
// Port
const PORT = process.env.PORT;
exports.PORT = PORT;
