import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

export default function Header() {
  const [seacrText, setSearchText] = useState("");

  console.log(seacrText)
  const cartData = useSelector((state) => state.cartProduct.cartProducts);

  const allProduts = useSelector((state) => state.product.products);
  
  

  const navCategoryies = allProduts.map((cat) => cat.category);
  
  const filteredCategory = navCategoryies.filter((value, index) =>{
    return navCategoryies.indexOf(value) == index;
  })

  // console.log(filteredCategory)

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {
          filteredCategory.map((nv, index) =>(
            <li className="nav-item">
            <Link className="nav-link" to={nv}>{nv}</Link>
          </li>
          ))
        }
        <li className="nav-item">
          <Link className="nav-link btn btn-warning" to="/cart">Cart <span className='badge bg-danger'>{cartData.length}</span></Link>
        </li>
       
       
       
      </ul>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="text"
         placeholder="Search"  onChange={(e) => setSearchText(e.target.value)}  value={seacrText}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}
