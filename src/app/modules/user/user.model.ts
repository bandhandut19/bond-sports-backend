import { model, Schema } from 'mongoose'
import { TUser, UserModel } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const UserSchema = new Schema<TUser, UserModel>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})
UserSchema.statics.encryptPassword = async function (plainPassword: string) {
  return await bcrypt.hash(plainPassword, Number(config.salt))
}
UserSchema.pre('save', async function () {
  this.password = await User.encryptPassword(this.password)
})
UserSchema.post('save', async function (doc, next) {
  doc.password = ''
  next()
})

UserSchema.statics.isValidPassword = async function (
  plainPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainPassword, hashedPassword)
}
export const User = model<TUser, UserModel>('user', UserSchema)
