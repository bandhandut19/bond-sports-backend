import { model, Schema } from 'mongoose'
import TProduct from './product.interface'

const productSchema = new Schema<TProduct>({
  productName: {
    type: String,
    required: [true, 'Product Name is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  stockQuantity: {
    type: Number,
    required: [true, 'Stock quantity is required'],
  },
  brand: {
    type: String,
    required: [true, 'Brand Name is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Product Rating is required'],
  },
  productDescription: {
    type: String,
    required: [true, 'Product Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product Price is required'],
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
})

export const Product = model<TProduct>('product', productSchema)
