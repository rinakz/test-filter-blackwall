import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDirections, getFilter } from '../Redux/action'

function Main() {

  useEffect(() => {
    dispatch(getDirections())
    dispatch(getFilter())
  }, [])

  const [category, setCategory] = useState([
    {name: 'Все', codes: null},
    {name: 'Криптовалюты', codes: ['BTC', 'ETH', 'USDTTRC']},
    {name: 'Банки', codes: ['ACRUB', 'SBERRUB', 'TCSBRUB']},
    {name: 'Наличные', codes: ['CASHUSD', 'CASHRUB']}
  ])

  const [selectCategory, setSelectCategory] = useState(null)
  const [directSelect, setDirectSelect] = useState('')
  const [filterSelect, setFilterSelect] = useState(true)

  const { directions } = useSelector( s => s)
  const { filter } = useSelector( s => s) 

  const dispatch = useDispatch()


  // console.log ( filter )
  // console.log(selectCategory)
  // console.log(directSelect)

  return (
    <div className='app'>
      <div className='nav'>
        <p>Отдаете</p>
        {category.map((el, i) => <button key={i} value={el.codes} onClick={(e) => {setSelectCategory(e.target.value); setFilterSelect(false)}}>{el.name}</button>)}
      </div>

      <div className='wrapper'>
        <p>Получаете</p>
        <select onChange={(e) => {setDirectSelect(e.target.value); setFilterSelect(true)}}>
          {directions.filter(el => selectCategory ? selectCategory.split(',').includes(el.code) : true)
          .map((el, i) => <option key={i} value={el.code}>{el.name}</option>)}
        </select>
        <p>⇵</p>
        <select>
          {filter.filter(el => el.from.code === directSelect && filterSelect === true)
          .map(el => el.to.map((item, i) => <option key={i}>{item.name}</option>))}
        </select>
      </div>

    </div>
  )
}

export default Main
