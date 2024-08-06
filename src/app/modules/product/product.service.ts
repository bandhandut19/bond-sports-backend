import TProduct from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const userQuery = query.product as string | undefined
  if (userQuery) {
    const queryResult = await Product.find({
      productName: new RegExp(userQuery, 'i'), // 'i' makes it case-insensitive
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

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
}
