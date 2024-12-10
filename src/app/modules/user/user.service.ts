import config from '../../config'
import { TAuth } from './user.interface'
import { User } from './user.model'
import jwt from 'jsonwebtoken'
const loginIntoDB = async (payload: TAuth) => {
  const { email, password } = payload
  const user = await User.findOne({ email: email }).select('+password')

  //   console.log(user)
  const hashedPassword = user?.password as string
  if (!(await User.isValidPassword(password, hashedPassword))) {
    throw new Error('Password is incorrect')
  }
  const validUser = await User.findOne({ email: email }).select(
    '_id  name email',
  )
  //   console.log(validUser)
  const jwtPayload = {
    user_email: user?.email,
    user_name: user?.name,
  }
  //   console.log(jwtPayload)

  const userAccessToken = jwt.sign(
    jwtPayload,
    config.jwt_access_secret_key as string,
    {
      expiresIn: config.jwt_access_expires_in,
    },
  )
  console.log(userAccessToken)

  return {
    userAccessToken,
    jwtPayload,
    validUser,
  }
}

export const UserServices = {
  loginIntoDB,
}
