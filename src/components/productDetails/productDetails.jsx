import { useParams } from "react-router-dom";
import img from "./../../assets/images/slider-2.jpeg";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Bars } from 'react-loader-spinner';
import { useContext, useState } from "react";
import { AddToCartContext } from "../../context/addTocartContext";
function ProductDetails() {
    let[loader,setIsLoading]=useState(false)
    const { id } = useParams();
    let {AddToCart}=useContext(AddToCartContext) 
    async function getSpecificProduct() {
        const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        return response.data;
    }
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: getSpecificProduct
    });
    async function addProduct() {
        setIsLoading(true)
        let data=await AddToCart(id)
        if(data){
            toast.success(data.message);
            setIsLoading(false)
        }
        else{
            toast.error(data.message);
            setIsLoading(false)
        }
        console.log(data)
    }
    const product = data?.data;
    if (isLoading) {
        return (
            <div className="h-[100vh] bg-slate-300 flex justify-center items-center">
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    return (
        <section className="py-5">
            <div className="lg:w-[60%] md:w-[90%] m-auto flex gap-6 px-[50px]">
                <div className="lg:w-1/3  md:w-1/2">
                    <img src={product?.imageCover} alt={product?.title || "Product Image"} className="w-full" />
                </div>
                <div className="lg:w-2/3 md:w-1/2 flex justify-center flex-col">
                    <h2 className="font-semibold text-xl">{product?.title}</h2>
                    <p className="text-gray-500 my-2">{product?.description}</p>
                    <h4>{product?.category?.name}</h4>
                    <div className="flex justify-between gap-2">
                        <h4>{product?.price} EGP</h4>
                        <div className="flex gap-2 justify-between items-center">
                            <h4>{product?.ratingsAverage}</h4>
                            <i className="fa-solid fa-star text-yellow-500"></i>
                        </div>                                
                    </div>
                    <button onClick={addProduct} type="button" className="w-full mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        {loader?<i className="fa-solid fa-spin fa-spinner "></i>:"Add to Cart"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
