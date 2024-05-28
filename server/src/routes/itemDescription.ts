import express from 'express'
import axios from 'axios'
import { Item } from '../models/item'
import { formatPrice } from '../utils/formatPrice'

const router = express.Router()
const apiUrl = process.env.APP_API_URL || 'https://api.mercadolibre.com'

router.get('/items/:id', async (req, res) => {
  let description_text = ''
  let data_item: {} | any = null
  let categoryPath = []
  try {
    const { data: item } = await axios.get(`${apiUrl}/items/${req.params.id}`)
    data_item = item
  } catch (err) { }

  if (data_item) {
    const { data: description } = await axios.get(`${apiUrl}/items/${req.params.id}/description`)
    description_text = description.plain_text
    
    const { category_id } : String | any = data_item
    if (category_id) {
      const {data: category}  = await axios.get(`${apiUrl}/categories/${category_id}`)
      categoryPath = category.path_from_root.map(({ name }: { name: any }) => name)
    }
  }

  const itemDescription: Item = {
    author: {
      name: 'Alejandro',
      lastname: 'Nava'
    },
    item: !data_item ? null : {
      id: data_item.id,
      title: data_item.title,
      price: formatPrice(data_item.price, data_item.currency_id),
      picture: data_item.thumbnail,
      condition: data_item.condition,
      free_shipping: data_item.shipping.free_shipping,
      sold_quantity: data_item.sold_quantity,
      description: description_text,
      category: categoryPath
    }
  }
  res.json(
    itemDescription
  )
})
export default router
