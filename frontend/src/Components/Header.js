import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='banner'>
        <img src='images/banner.png' className='bannerBg' alt='banner'></img>
        <img src='images/milmaLogo.png' className='bannerLogo' alt='milmaLogo'></img>
        <img src='images/bannerImage.png' className='bannerImage' alt='bannerImage'></img>
        <img src='images/bannerHeading.png' className='bannerHeading' alt='bannerHeading'></img>
    </div>
  )
}

export default Header