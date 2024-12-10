/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'
import { UserServices } from './user.service'

const login = async (req: Request, res: Response) => {
  const payload = req.body
  try {
    const result = await UserServices.loginIntoDB(payload)

    const { userAccessToken, validUser } = result
    res.cookie('accessToken', userAccessToken, {
      httpOnly: true,
    })

    if (result) {
      return res.status(201).json({
        message: 'User logged in successfully',
        data: result,
      })
    } else {
      return res
        .status(500)
        .json({ error: 'An error occured while logging in' })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const UserControllers = {
  login,
}
