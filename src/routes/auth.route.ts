import AuthController from "../controllers/auth.controller";

const express = require('express');

export const AuthRouter = express.Router();
const ResourceUrl = 'auth';
AuthRouter.route(`/${ResourceUrl}/login`).post(AuthController.Login);