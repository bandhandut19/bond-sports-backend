import { Model } from 'mongoose'

export type TUser = {
  name: string
  email: string
  password: string
}

export type TAuth = {
  email: string
  password: string
}
export interface UserModel extends Model<TUser> {
  isEmailExists(email: string): boolean
  encryptPassword(plainPassword: string): Promise<string>
  isValidPassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}
