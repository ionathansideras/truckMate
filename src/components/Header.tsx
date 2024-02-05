import truckImg from '../assets/header-truck-logo.svg'

export default function Header() {
  return (
    <header>
      <div className='header-logo'>
        <img src={truckImg} alt='logo' />
        <h1 className='header-logo-text1'>Truck</h1>
        <h1 className='header-logo-text2'>mate</h1>
      </div>
      <nav className='header-links'>
        <button className='header-button'>Home</button>
        <button className='header-button'>Contact</button>
        <button className='header-button-start'>Get Started</button>
      </nav>
    </header>
  )
}
