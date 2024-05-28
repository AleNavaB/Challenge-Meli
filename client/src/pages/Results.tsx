import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Helmet from 'react-helmet'
import axios from 'axios'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import CardItem from '../components/CardItem'

type Props = {}
interface Item {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: Boolean
}
const Results = (props: Props) => {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const [search, setSearch] = useState<null | string>()
  const [items, setItems] = useState<any | Array<Item>>()
  const [categories, setCategories] = useState<any | Array<Item>>()
  const [url, setUrl] = useState<string | any>()

  useEffect(() => {
    setSearch(searchParams.get('search'))
  }, [searchParams])

  useEffect(() => {
    const { pathname, search } = location
    setUrl(`${pathname}${search}`)
  }, [location])

  useEffect(()=>{
    if (search) {
      getResults(search)
    }
  }, [search])

  const getResults = async (param: string) => {
    const { data } = await axios.get(`/api/items?q=${param}`)
    setItems(data.items)
    setCategories(data.categories)
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${search} | Challenge tecnico front end Mercado libre`}</title>
        <link rel="canonical" href={`http://localhost:3000${url}`} />
        <meta name="description" content="Aplicacion para el challenge tecnico de Mercado libre, busqueda de productos" />
      </Helmet>
      <Header search={search} />
      {categories && <Breadcrumbs categories={categories} />}
      <div className='results_container'>
        <div className='results_container_wrapper'>
        { items && items.map((item : any | []) => {
            return (
              <CardItem key={item.id} item={item} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Results