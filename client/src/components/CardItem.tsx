import React from 'react'
import iconShipping from '../assets/icons/ic_shipping.png'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'

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
    city: string
  }
}

const CardItems = ({ item }: Props) => {
  const navigate = useNavigate();

  const goToDescription = () => {
    navigate(`/items/${item.id}`)
  }
  return (
    <div className='carditem_container'>
      <img className='carditem_image' alt={item.title} src={item.picture} onClick={goToDescription}/>
      <div className='carditem_description'>
        <p className='carditem_price' onClick={goToDescription}>
          {formatPrice(item.price)}
          {item.free_shipping && <img alt='free-shipping' src={iconShipping} /> }
        </p>
        <p className='carditem_city'>
            {item.city}
        </p>
        <p className='carditem_title' onClick={goToDescription}>
          {item.title}
        </p>
      </div>
    </div>
  )
}

export default CardItems