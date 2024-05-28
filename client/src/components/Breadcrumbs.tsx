import React from 'react'

type Props = {
  categories: [] | any
}

const Breadcrumbs = (props: Props) => {

  return (
    <div className='breadcrum_container'>
      <div className='breadcrum_wrapper'>
        {
          props.categories &&
          props.categories.map((cat: string | any, index: number) => {
          return (
            <div key={cat} className='breadcrum_text'>
              <p className='breadcrum_category'>{cat}</p>
              {
                index < props.categories.length -1 &&
                <p className='breadcrum_separator'>{'>'}</p>
              }
            </ div>
          )
        })}
      </div>
    </div>
  )
}

export default Breadcrumbs