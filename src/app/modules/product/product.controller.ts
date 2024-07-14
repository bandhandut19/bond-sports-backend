import { Request, Response } from 'express'
import { ProductServices } from './product.service'
import httpStatus from 'http-status'

const createProduct = async (req: Request, res: Response) => {
  try {
    const productInfo = req.body
    const result = await ProductServices.createProductIntoDB(productInfo)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product Added SuccessFully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Product Additon Unsuccessful',
      error: error,
    })
  }
}
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB()
    res.status(httpStatus.OK).json({
      success: true,
      message: 'All Products Fetched SuccessFully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Product Fetching Unsuccessful',
      error: error,
    })
  }
}
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await ProductServices.getSingleProductFromDB(id)
    console.log(id)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product Fetched SuccessFully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Product Fetching Unsuccessful',
      error: error,
    })
  }
}

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
}
