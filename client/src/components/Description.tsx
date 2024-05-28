import React from 'react'
import { formatDecimals, formatPrice } from '../utils/formatPrice'
import Buttom from './Buttom'


interface Props {
  item: {
    id: string
    title: string
    price: {
      currency: string
      amount: number
      decimals: number
    }
    picture: string
    condition: string
    free_shipping: Boolean,
    sold_quantity: number,
    description: string
  }
}

const Description = ({ item }: Props) => {
  const formatCondition = (condition: string) => {
    if (condition === 'new') return 'Nuevo'
    return 'Usado'
  }
  const formatSolds = (sold_quantity: number) => {
    return ` - ${sold_quantity | 0} vendidos`
  }
  return (
    <div className='description_wrapper'>
      <div className='description_wrapper_left'>
        <img className='description_image_preview' alt={item.title} src={item.picture} />
        <div className='description_info'>
          <p className='description_info_title'>
            Descripción del producto
          </p>
          <p className='info_description'>
            {item.description}
          </p>
        </div>
      </div>
      <div className='description_wrapper_right'>
        <p className='info_specs'>
          {formatCondition(item.condition)}
          {formatSolds(item.sold_quantity)}
        </p>
        <p className='info_title'>
          {item.title}
        </p>
        <p className='info_price'>
          {formatPrice(item.price)}          
          {item.price && 
            <span className='info_price_decimals'>
              {formatDecimals(item.price.decimals)}
            </span>
            }
        </p>
        <div className='info_button'>
          <Buttom />
        </div>
      </div>
    </div>
  )
}

export default Description