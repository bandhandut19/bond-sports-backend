import TProduct, { TCartItemModify } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  console.log(query)
  if (query.category) {
    const queryResult = await Product.find({
      category: { $regex: query.category as string, $options: 'i' },
    })
    return queryResult
  }
  if (query.search) {
    console.log('first')
    const queryResult = await Product.find({
      productName: { $regex: query.search as string, $options: 'i' },
    })
    console.log('result:', queryResult)
    return queryResult
  } else {
    console.log('query is ', query)
    const result = await Product.find()
    return result
  }
  // const search = ''
  // const { category, minPrice, maxPrice, brand, sort, order = 'asc' } = query
  // const filter = {} as any
  // if (search) filter.productName = { productName: new RegExp(search, 'i') }
  // if (category) filter.category = { $regex: category, $options: 'i' }
  // if (minPrice) filter.price = { ...filter.price, $gte: minPrice }
  // if (maxPrice) filter.price = { ...filter.price, $lte: maxPrice }
  // if (brand) filter.brand = { $regex: brand, $options: 'i' }
  // const sortOrder = order === 'asc' ? 1 : -1
  // const sortField = sort ? { [sort as any]: sortOrder } : { createdAt: -1 }
  // const result = await Product.find(filter).sort(sortField as any)
  // return result
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
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  modifyProductQuantityIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
}
