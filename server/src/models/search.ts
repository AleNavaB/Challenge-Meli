export interface Search 
{
  author: {
    name: String,
    lastname: String
  },
  categories: [String] | any,
  items: [
    {
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
      city: String
    }
  ] | any
}