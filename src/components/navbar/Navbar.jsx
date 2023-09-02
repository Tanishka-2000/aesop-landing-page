import './styles.css'

function Navbar() {
  return (
    <nav>
        <ul className='large'>
            <li><a href="#">Skin Care</a></li>
            <li><a href="#">Body & Hand</a></li>
            <li><a href="#">Hair</a></li>
            <li><a href="#">Fragrance</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Kits & Travel</a></li>
            <li><a href="#">Gifts</a></li>
            <li><a href="#">Read</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Facial Appointments</a></li>
            <li className="search"><a href="#"><i className="fa-solid fa-magnifying-glass" size="lg"></i></a></li>
            <li className="nav-right"><a href="#">Log in</a></li>
            <li><a href="#">cabinet</a></li>
            <li><a href="#">cart</a></li>
        </ul>

        <ul className='medium'>
          <li><a href="">Shop</a></li>
          <li><a href="">Read</a></li>
          <li><a href="">Stories</a></li>
          <li className="search"><a href="#"><i className="fa-solid fa-magnifying-glass" size="lg"></i></a></li>
          <li className="nav-right"><a href="#">Log in</a></li>
          <li><a href="#">cabinet</a></li>
          <li><a href="#">cart</a></li>
        </ul>

        <ul className='small'>
          <li className="logo"><a href="">Aesop</a></li>
          <li className="nav-right"><a href="#"><i className="fa-solid fa-magnifying-glass" size="lg"></i></a></li>
          <li><a href=""><i className="fa-regular fa-heart"></i></a></li>
          <li><a href="#">cart</a></li>
          <li><a href="#"><i className="fa-solid fa-grip-lines"></i></a></li>
        </ul>
    </nav>
  )
}

export default Navbar