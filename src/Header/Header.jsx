import { useState } from 'react'
import './Header.css'

function Header() {

  return (
    <div className='container'>
      <header>
        <div className='header_logo'>
            <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="142" height="26" viewBox="0 0 142 26" fill="none">
                    <path d="M10.0558 0L4.35686 0L8.50875 4L10.0558 0Z" fill="white"/>
                    <path d="M34.9647 26H0L10.0558 0L21.7107 0L14.2333 19.3333H25.8882L33.3656 0H45.0205L34.9647 26Z" fill="white"/>
                    <path d="M59.4732 6.66667L54.5742 19.3333H77.884L75.3056 26H40.3409L50.3967 0H85.3614L82.783 6.66667H59.4732Z" fill="white"/>
                    <path d="M99.6687 6.66667L92.1804 26H80.5086L87.9969 6.66667H82.7792L85.3614 0H113.923L111.341 6.66667H99.6687Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M119.248 0H116.596L106.339 26H108.991L119.248 0ZM121.974 0H127.639L117.329 26H111.664L121.974 0ZM130.352 0H142L131.703 26H120.055L130.352 0Z" fill="#FF001D"/>
                </svg>
            </div>
            <button className='services'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.25C0.335786 0.25 0 0.585786 0 1C0 1.41421 0.335786 1.75 0.75 1.75H16.75C17.1642 1.75 17.5 1.41421 17.5 1C17.5 0.585786 17.1642 0.25 16.75 0.25H0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H16.75C17.1642 5.25 17.5 5.58579 17.5 6C17.5 6.41421 17.1642 6.75 16.75 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11C0 10.5858 0.335786 10.25 0.75 10.25H16.75C17.1642 10.25 17.5 10.5858 17.5 11C17.5 11.4142 17.1642 11.75 16.75 11.75H0.75C0.335786 11.75 0 11.4142 0 11Z" fill="white"/>
                </svg>
                Услуги
            </button>
        </div>
        <menu>
            <ul>
                <li><a href="">Работы</a></li>
                <li><a href="">О компании</a></li>
                <li><a href="">Акции</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
            <a href="">+7 495 207-75-70</a>
        </menu>
      </header>
      <div className='headerLine' />
      <h1>Премиальное<br />обслуживание<br />вашего автомобиля</h1>
      <div className='rw-btn'>
        <button className='red-btn'>
            Запись в сервис
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M10 16.5L14 12.5L10 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button className='white-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M9.84998 15H14.15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 11.75H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.84998 8.5H14.15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 11.791C21 16.33 16.952 19.973 12 19.973C11.359 19.973 10.735 19.91 10.131 19.794" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.599 18.326C4.42 16.836 3 14.474 3 11.791" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.59901 18.326C6.59801 19.18 6.60001 20.332 6.60001 21.541" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 11.791C3 7.25199 7.048 3.60999 12 3.60999C16.952 3.60999 21 7.25299 21 11.792" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.13 19.79L6.59998 21.54" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Консультация
        </button>
      </div>
    </div>
  )
}

export default Header
