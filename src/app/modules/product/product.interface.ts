type TProduct = {
  productName: string
  category: string
  stockQuantity?: number
  brand: string
  rating?: number
  productDescription: string
  price: number
  image: string
}

export type TCartItemModify = {
  id: string
  quantity: number
  stockQuantity: number
}

export default TProduct
