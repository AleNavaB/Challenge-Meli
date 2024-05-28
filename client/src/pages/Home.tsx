import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet'

interface Props {}

const Home = (props: Props) => {
  const location = useLocation()
  const [url, setUrl] = useState<string | any>()
  useEffect(() => {
    const { pathname } = location
    setUrl(pathname)
  }, [location])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercado libre | Challenge tecnico front end</title>
        <link rel="canonical" href={`http://localhost:3000${url}`} />
        <meta name="description" content="Aplicacion para el challenge tecnico de Mercado libre, busqueda de productos con su vista detallada" />
      </Helmet>
      <Header search="" />
    </>
  )
}

export default Home