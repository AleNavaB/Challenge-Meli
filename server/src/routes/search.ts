import express from 'express'
import axios from 'axios'
import { Search } from '../models/search'
import { formatPrice } from '../utils/formatPrice'

const router = express.Router()
const apiUrl = process.env.APP_API_URL || 'https://api.mercadolibre.com'


router.get('/items', async (req, res) => {
  // get list of items
  const { data: response } = await axios.get(`${apiUrl}/sites/MLA/search?q=${req.query.q}&limit=4`)
  // // get category most repeat
  const categories = response.results.map(({ category_id }: { category_id: any }) => category_id)
  let category_id = ''
  let counter = 0
  let count = 0
  categories.map((cat_a: string) => {
    count = 0
    categories.map((cat_b: string) => {
      if (cat_a == cat_b) { count++ }
    })
    if (count > counter) {
      counter = count;
      category_id = cat_a;
    }
  })
  let categoryPath = []
  if (category_id.length > 0) {
    const { data: category } = await axios.get(`${apiUrl}/categories/${category_id}`)
    categoryPath = category.path_from_root.map(({ name }: { name: any }) => name)
  }
  // build res json
  const results: Search = {
    author: {
      name: 'Alejandro',
      lastname: 'Nava'
    },
    items: response.results.map(({ id, title, currency_id, price, thumbnail, condition, shipping }: { id: any; title: any; currency_id: any; price: any; thumbnail: any; condition: any; shipping: any }
    ) => ({
      id,
      title,
      price: formatPrice(price, currency_id),
      picture: thumbnail,
      condition,
      free_shipping: shipping.free_shipping
    })),
    categories: categoryPath
  }
  res.json(results)
})

export default router
