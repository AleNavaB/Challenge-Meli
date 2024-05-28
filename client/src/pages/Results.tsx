import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
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
  const [search, setSearch] = useState<null | string>()
  const [items, setItems] = useState<any | Array<Item>>()
  const [categories, setCategories] = useState<any | Array<Item>>()

  useEffect(()=>{
    setSearch(searchParams.get('search'))
  }, [searchParams])

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