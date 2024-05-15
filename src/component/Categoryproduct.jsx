import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function Categoryproduct() {
    const [priceFilter, setpriceFilter] = useState({min:0, max:0});
    const [brandList, setBrandList] = useState([]);
    const [brand, setBrand] = useState('');
    const [catpr, setCatpr] = useState([]);
    const [brandProduct, setBrandproduct] = useState([]);

    const allProducts = useSelector((state) => state.product.products)
// console.log(allProduts)
    const {cat} = useParams()
    // const categoryPrdc = allProduts.filter((catProduct) => catProduct.category === cat);

    useEffect(()=>{
       setBrandproduct(allProducts);
    },[allProducts])



    // useEffect(() =>{
    //     if(priceFilter.min && priceFilter.max){
    //         const priceFiltered = allProduts.filter((item) => item.price > priceFilter.min && item.price < priceFilter.max && item.category === cat)
    //         setCatpr(priceFiltered)
    //     }
    // },[priceFilter])


    // useEffect(()=>{
    //     const brandProducts = allProducts.filter((product) => product.category === cat).map((el) => el.brand);
    //     setBrandList(brandProducts)
    // },[]);

    useEffect(() =>{
       if(brand !== ''){
        const brandPro = allProducts.filter((product) => product.category === cat && product.brand === brand);
        setBrandproduct(brandPro);
       }
    },[brand])

    useEffect(()=>{
        setBrandproduct(allProducts);
     },[])
    // console.log(brandProducts)

    


// const usercat = allProduts.map((itm) => {
//     const {title, price, brand, category} = itm;
//     const prs = String(price).slice(0,2);

//     return `${title.slice(0,4)}${prs}${brand.slice(0, 2)}${category.slice(0,2)}`;

// })

// console.log(usercat)


  return (
   <>
  
    <section className='pt-4 pb-4 homecart'>
    <div className="container">
      <div className="row">
      
    <div className='col-md-3'>
    <div class="card">
  <h5 class="card-header bg-primary">Filter by Price</h5>
  <div class="card-body">
  <ul class="list-group">
  <li class="list-group-item" onClick={()=> setpriceFilter({min:10, max:100})}>10-100</li>
  <li class="list-group-item" onClick={()=> setpriceFilter({min:100, max:200})}>100-200</li>
    <li class="list-group-item" onClick={()=> setpriceFilter({min:200, max:500})}>200-500</li>
    <li class="list-group-item" onClick={()=> setpriceFilter({min:500, max:1000})}>500-1000</li>
    <li class="list-group-item" onClick={()=> setpriceFilter({min:1000, max:2000})}>1000-2000</li>
    
  </ul>
  </div>
</div>
<br/>

<div class="card">
  <h5 class="card-header bg-primary">Filter by Brand</h5>
  <div class="card-body">
  <ul class="list-group">
  {
    allProducts.filter((product) => product.category === cat).map((el, index) =>(
        <li class="list-group-item" onClick={()=> setBrand(el.brand)} key={index}>{el.brand}</li>
    ))
  }
 
    
  </ul>
  </div>
</div>

    </div>
    <div className='col-md-9'>
{
    brandProduct.length > 0 &&
    <div className='row'>
{
            brandProduct.map((item, index) =>{
                if(item.category !== cat){
                    return null;
                }
                return (
                    <div className='col-md-3 pt-4' key={index}>

                            <Link to={`/product/${item.id}`}>
                            <div className="card text-center">
                    <img src={item.images[0]} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5 className='btn btn-danger'>{item.price}</h5>
                        
                    </div>
                    </div>
                </Link>
                 </div>
                );
            })
         }
</div>

}

{
    catpr.length < 1 && <h4> No data Found!</h4>
}
    </div>
       
      </div>
    </div>
   </section>
 
   </>
  )
}
