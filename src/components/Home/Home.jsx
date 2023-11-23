import Header from '../Header/Header'
import './Home.css'
import Footer from '../Footer/Footer.jsx'
import Homep from './Homep.jsx'

export default function Home() {
  return (
    <div className='homecontainer'>
      <Header />
      <Homep />
      <Footer />
    </div>
  )
}
