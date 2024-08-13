import TProduct, { TCartItemModify } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const filterQuery: Record<string, unknown> = {}
  // Category filter
  if (query.category || query.filterCategory) {
    filterQuery.category = {
      $regex: (query.category || query.filterCategory) as string,
      $options: 'i',
    }
  }
  // Brand filter
  if (query.filterBrand) {
    filterQuery.brand = {
      $regex: query.filterBrand as string,
      $options: 'i',
    }
  }
  // Search filter
  if (query.search) {
    filterQuery.productName = {
      $regex: query.search as string,
      $options: 'i',
    }
  }
  // Price range filter
  if (query.minPrice || query.maxPrice) {
    filterQuery.price = {}
    if (query.minPrice) {
      ;(filterQuery.price as Record<string, number>).$gte = Number(
        query.minPrice,
      )
    }
    if (query.maxPrice) {
      ;(filterQuery.price as Record<string, number>).$lte = Number(
        query.maxPrice,
      )
    }
  }
  // Sort filter
  let sortQuery: Record<string, 1 | -1> = {}
  if (query.filterSort) {
    const sortField = query.filterSort === 'Price' ? 'price' : 'rating'
    sortQuery[sortField] = query.filterOrder === 'Descending' ? -1 : 1
  }

  const queryResult = await Product.find(filterQuery).sort(sortQuery)

  return queryResult
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
