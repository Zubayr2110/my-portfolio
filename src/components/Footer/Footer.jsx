import { useNavigate } from 'react-router-dom'
import { FooterInstaIcon, FooterTelegramIcon, FooterWhatsapp, FooterYoutubeIcon, Footeremailimg } from '../export_img'

import './Footer.css'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="footer">
        <p className='footer_text'>&copy; 2023 My Portfolio. All rights reserved.</p>
        <a href='https://mail.google.com/chat/u/0/#chat/dm/_mluS0AAAAE' className='footer_email'  >
          <img src={ Footeremailimg } alt="icon" className='footer_emailicon1' />
          <p className='footer_emailtext'>workaccaunt6@gmail.com</p>
        </a>
        <div className='footer_link'>
          <a href=''><img src={ FooterInstaIcon } alt="instagram Icon" /></a>
          <a href='https://'><img src={ FooterWhatsapp } alt="instagram Icon" className='footerwhatsappicon' /></a>
          <a href='https://t.me/zubayr_2110'><img src={ FooterTelegramIcon } alt="Telegram Icon" className='footerticon'  /></a>
          <a href='https://www.youtube.com/@Zubayr_Tolqinov'><img src={ FooterYoutubeIcon } alt="Telegram Icon"  /></a>
        </div>
    </footer>
  )
}
