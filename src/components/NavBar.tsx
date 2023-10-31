import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
       <ul>
        <li><Link to='/'>Home</Link></li>
        
       </ul>
       <ul>
        
        <li><Link to='/clients'>Cadastrar novo cliente</Link></li>
       </ul>
              
    </nav>
  )
}

export default NavBar