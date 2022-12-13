import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import ImgHeader from './balance-sheet-header-img.jpeg'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-6'>
          <img className='header-image' src={ImgHeader} />
        </div>
        <div className='col-md-6'></div>
        
      </div>
      </div>
  )
}

export default Home