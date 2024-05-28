export interface Item {
  author: {
    name: String,
    lastname: String
  } | any,
  item: {
    id: String,
    title: String,
    price: {
      currency: String,
      amount: Number,
      decimals: Number
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String,
    category: [String],
  } | any
}