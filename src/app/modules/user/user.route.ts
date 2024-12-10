import express from 'express'
import { UserControllers } from './user.controller'

const UserRouter = express.Router()

UserRouter.post('/login', UserControllers.login)

export const UserRoutes = UserRouter
