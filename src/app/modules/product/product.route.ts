import express from 'express'
import { ProductControllers } from './product.controller'
const router = express.Router()

router.post('/create-product', ProductControllers.createProduct)
router.get('/', ProductControllers.getAllProduct)
router.get('/:id', ProductControllers.getSingleProduct)
router.patch('/modifyquantity', ProductControllers.modifyQuantity)
router.patch('/updateproduct/:id', ProductControllers.updateProduct)
router.delete('/:id', ProductControllers.deleteProduct)
export const ProductRoutes = router
