import React, { useEffect, useState } from 'react'
import logo from '../assets/images/Logo_ML.png'
import iconSearch from '../assets/icons/ic_Search.png'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
  search: string | any
}

const Header = (props: Props) => {
  const [searchText, setSearchText] = useState<string | any>('')
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(props.search)
  },[props.search])

  const goToSearch = () => {
    if (searchText){
      navigate(`/items?search=${searchText}`)
    } else {
      navigate('/')
    }
  }

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      goToSearch()
    }
  }
  return (
    <div className='header_container'>
      <div className='header_searchbar'>
        <Link className="header_logo" to={'/'}>
          <img alt='logo-meli' src={logo} />
        </Link>
        <div className='header_searchbox'>
          <input type='text' value={searchText} placeholder='Nunca dejes de buscar'
            onChange={e => setSearchText(e.target.value)} 
            onKeyDown={handleKeyDown}
            />
          <button
            className='header_button'
            onClick={goToSearch}
          >
            <img alt='icon-search' src={iconSearch} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header