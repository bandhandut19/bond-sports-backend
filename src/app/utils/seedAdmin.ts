import config from '../config'
import { TUser } from '../modules/user/user.interface'
import { User } from '../modules/user/user.model'

const initialAdmin: TUser = {
  name: config.ADMIN_NAME as string,
  email: config.ADMIN_EMAIL as string,
  password: config.ADMIN_PASSWORD as string,
}

// Function to set initial admin
export const seedAdmin = async () => {
  const email = initialAdmin.email
  const existingAdmin = await User.findOne({ email: email })

  if (!existingAdmin) {
    const adminUser = new User(initialAdmin)

    await adminUser.save()
    console.log('Admin created.')
  } else {
    console.log('Admin already created. comment out the function call')
  }
}
