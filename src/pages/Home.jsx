import Navbar from '../components/Navbar.jsx'
import {getAllProducts} from '../api/getAllProducts.js'
import {useEffect,useState} from 'react';
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../contexts/cart-context.jsx';
import {getAllCategories} from '../api/getAllCategories.js'
import {getProductsByCategory} from '../utils/getProductsByCategory.js'
const Home=()=>{
   const [products,setProducts]=useState([]);
   const [category,setcategory]=useState([]);
   const [selectedcategory,setSelectedCategory]=useState("All");
   const {cart}=useCart();
   console.log({cart});
   useEffect(()=>{
      (async ()=>{
        const data=await getAllProducts();
        const categories=await getAllCategories();
        const updatedCategories=[...categories, {id:'1a',name:'All'}]
        setProducts(data);
        setcategory(updatedCategories);
      }
      )()
   },[])
   const onCategoryClick=(category)=>{
     setSelectedCategory(category);
   }
   const filterByCategories=getProductsByCategory(products,selectedcategory);
   return(
    <>
     <Navbar/>
     <main className="flex flex-col flex-wrap gap-8 justify-center pt-8">
      <div className="flex gap-4 justify-center mb-4 mt-4 hover:cursor-pointer">
         {
            category?.length>0 && category.map(category=><div onClick={()=>{onCategoryClick(category.name)}} className="bg-green-400 font-semibold rounded-full ">{category.name}</div>)
         }
      </div>
      <div className="flex flex-wrap gap-8">
         {
        filterByCategories?.length>0 ? filterByCategories.map(product=><ProductCard key={product.id} product={product}/> ):<h2>No Products Found</h2>
        }
      </div>
     
     </main>
    </>
   )
}
export default Home;