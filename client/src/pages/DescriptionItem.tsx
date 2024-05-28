import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import Description from '../components/Description'
import { Helmet } from 'react-helmet'

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
  const { id } = useParams()
  const location = useLocation()
  const [item, setItem] = useState<Item | any>()
  const [categories, setCategories] = useState()
  const [url, setUrl] = useState<string | any>()

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

  useEffect(() => {
    const { pathname, hash } = location
    setUrl(`${pathname}${hash}`)
  }, [location])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${item?.title} | Challenge tecnico front end Mercado libre`}</title>
        <link rel="canonical" href={`http://localhost:3000${url}`} />
        <meta name="description" content="Aplicacion para el challenge tecnico de Mercado libre, vista detallada" />
      </Helmet>
      <Header search={props.search} />
      <Breadcrumbs categories={categories} />
      <div className='description_container'>
        {item && <Description item={item} />}
      </div>
    </>
  )
}

export default DescriptionItem