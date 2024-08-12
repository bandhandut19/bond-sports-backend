import TProduct, { TCartItemModify } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const userQuery = query.product as string | undefined
  const categoryQuery = query.category as string | undefined
  if (userQuery) {
    const queryResult = await Product.find({
      productName: new RegExp(userQuery, 'i'), // 'i' makes it case-insensitive
    })
    return queryResult
  }
  if (categoryQuery) {
    const queryResult = await Product.find({
      category: new RegExp(categoryQuery, 'i'), // 'i' makes it case-insensitive
    })
    return queryResult
  } else {
    console.log('query is ', userQuery)
    const result = await Product.find()
    return result
  }
}
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

const modifyProductQuantityIntoDB = async (cartItemInfo: TCartItemModify) => {
  const updatedStockQuantity =
    cartItemInfo.stockQuantity - cartItemInfo.quantity
  const result = await Product.findByIdAndUpdate(
    cartItemInfo.id,
    { stockQuantity: updatedStockQuantity },
    { new: true },
  )
  return result
}
const updateProductIntoDB = async (
  updatedProductInfo: TProduct,
  id: string,
) => {
  const result = await Product.findByIdAndUpdate(id, updatedProductInfo, {
    new: true,
  })
  return result
}
export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  modifyProductQuantityIntoDB,
  updateProductIntoDB,
}
