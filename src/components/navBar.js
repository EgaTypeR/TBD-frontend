import "../navbar.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom"

function NavBar(){
  

  return(
    <nav className="nav">
      <Link to="/" className="site-title">Home</Link>
      <ul>
        <CustomLink to="/book">Book</CustomLink>
        <CustomLink to="/language">Language</CustomLink>
        <CustomLink to="/publisher">Publisher</CustomLink>
        <CustomLink to="/sql-builder">SQL Build</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end:true})
  
  return(
    <li className={isActive? "active": ""}>
    <Link to={to} {...props}>{children}</Link>
  </li>
  )
}

export default NavBar