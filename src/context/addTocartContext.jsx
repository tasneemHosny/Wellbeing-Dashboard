import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useState } from "react";

export let AddToCartContext=createContext()
function AddToCartProvider({children}) {
    let[numOfCartItems,setNumOfCartItems]=useState(0)
    let[totalCartPrice,setTotalCartPrice]=useState(0)
    let[cartProducts,setCartProducts]=useState(null)
    let token={headers:{token:localStorage.getItem("token")}}
    async function AddToCart(productId){
        try {
            const res= await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
                {productId: productId},
                token
            )
            setNumOfCartItems(res.data.numOfCartItems)
            setTotalCartPrice(res.data.totalCartPrice)
            setCartProducts(res.data.data.products)
            return res.data
        } catch (error) {
            console.log(error)        
        }
    }
    async function getFromCart(){
        try {
            const res=await axios.get("https://ecommerce.routemisr.com/api/v1/cart",token)
            setNumOfCartItems(res.data.numOfCartItems)
            setTotalCartPrice(res.data.totalCartPrice)
            setCartProducts(res.data.data.products)
        }
        catch(error){
            console.log(error)   
        }
    }
    return (  
        <AddToCartContext.Provider value={{AddToCart,numOfCartItems,cartProducts,totalCartPrice,getFromCart}}>
            {children}
        </AddToCartContext.Provider>
    );
}

export default AddToCartProvider;