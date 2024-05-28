import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Description from '../components/Description'

type Props = {
  search: string | any
}
interface Item {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string,
  condition: string,
  free_shipping: Boolean,
  sold_quantity: number,
  description: string
}
const DescriptionItem = (props: Props) => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | any>()
  const [categories, setCategories] = useState()

  useEffect(() => {
    const getDescription = async () => {
      const { data } = await axios.get(`/api/items/${id}`)
      setItem(data.item)
      if (data.item) {
        setCategories(data.item.category)
      }
    }
    getDescription()
  }, [id])



  return (
    <>
      <Header search={props.search} />
      <Breadcrumbs categories={categories} />
      <div className='description_container'>
        {item && <Description item={item} />}
      </div>
    </>
  )
}

export default DescriptionItem