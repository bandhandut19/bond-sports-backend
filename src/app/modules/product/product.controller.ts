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
    const result = await ProductServices.getAllProductFromDB(req.query)
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

const modifyQuantity = async (req: Request, res: Response) => {
  try {
    const cartItemInfo = req.body
    const result =
      await ProductServices.modifyProductQuantityIntoDB(cartItemInfo)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Quantity Modified Successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Quantity Modification was Unsuccessful',
      error: error,
    })
  }
}
const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProductInfo = req.body
    const id = req.params.id
    const result = await ProductServices.updateProductIntoDB(
      updatedProductInfo,
      id,
    )
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product Updated Successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Product Updation was Unsuccessful',
      error: error,
    })
  }
}
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await ProductServices.deleteProductFromDB(id)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product Deleted Successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Product Deletion was Unsuccessful',
      error: error,
    })
  }
}
export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  modifyQuantity,
  updateProduct,
  deleteProduct,
}
