import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret_key: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  ADMIN_NAME: process.env.ADMIN_NAME,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_ADDRESS: process.env.ADMIN_ADDRESS,
  ADMIN_PHONE: process.env.ADMIN_PHONE,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
}
