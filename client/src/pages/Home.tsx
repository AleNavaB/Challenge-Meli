import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useSearchParams } from 'react-router-dom';


interface Props {}

const Home = (props: Props) => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<string | any>()
  
  useEffect(()=>{
    setSearch(searchParams.get('search'))
  }, [searchParams])
  return (
    <>
      <Header search={search} />
    </>
  )
}

export default Home