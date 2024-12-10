import express from 'express'
import { ProductRoutes } from '../app/modules/product/product.route'
import { UserRoutes } from '../app/modules/user/user.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
