import { useState } from 'react'
import logo from '../assets/logo.svg'
import burger from '../assets/burger.svg'
import messages from '../assets/messages.svg'
import arrowRight from '../assets/arrow_right.svg'
import './Header.css'

function Header() {

  return (
    <section className='container main_section'>
      <header>
        <div className='header_logo'>
            <img src={logo} alt="" className='logo' />
            <button className='services'>
                <img src={burger} alt='' />
                <span>Услуги</span>
            </button>
        </div>
        <nav>
            <ul>
                <li><a href="">Работы</a></li>
                <li><a href="">О компании</a></li>
                <li><a href="">Акции</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
            <a href="tel:+74952077570">+7 495 207-75-70</a>
        </nav>
      </header>
      <div className='headerLine' />
      <main>
        <h1>Премиальное обслуживание вашего автомобиля</h1>
        <div className='rw-btn'>
          <button className='red-btn'>
              <span>Запись в сервис</span>
              <img src={arrowRight} alt='' />
          </button>
          <button className='white-btn'>
              <img src={messages} alt='' />
              Консультация
          </button>
        </div>
      </main>
    </section>
  )
}

export default Header
