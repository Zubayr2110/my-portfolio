import { Link, useNavigate } from 'react-router-dom'
import { FooterInstaIcon, FooterTelegramIcon, FooterWhatsapp, FooterYoutubeIcon, Footeremailimg } from '../export_img'

import './Footer.css'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="footer">
        <p className='footer_text'>&copy; 2023 My Portfolio. All rights reserved.</p>
        <Link to='https://mail.google.com/chat/u/0/#chat/dm/_mluS0AAAAE' target="_blank" className='footer_email'  >
          <img src={ Footeremailimg } alt="icon" className='footer_emailicon1' />
          <p className='footer_emailtext'>workaccaunt6@gmail.com</p>
        </Link>
        <div className='footer_link'>
          <Link to='https://instagram.com/zubayr_2110/' target="_blank"><img src={ FooterInstaIcon } alt="instagram Icon" /></Link>
          <Link to='https://Wa.me/998801206' target="_blank"><img src={ FooterWhatsapp } alt="instagram Icon" className='footerwhatsappicon' /></Link>
          <Link to='https://t.me/zubayr_2110' target="_blank"><img src={ FooterTelegramIcon } alt="Telegram Icon" className='footerticon'  /></Link>
          <Link to='https://youtube.com/@Zubayr_Tolqinov' target="_blank"><img src={ FooterYoutubeIcon } alt="Telegram Icon" className='footeryicon' /></Link>
        </div>
    </footer>
  )
}
