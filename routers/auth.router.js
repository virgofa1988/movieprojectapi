const express = require("express");
const { dangNhap } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/", dangNhap);

module.exports = { authRouter };
