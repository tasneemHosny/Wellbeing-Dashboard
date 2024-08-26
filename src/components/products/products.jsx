import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bars} from 'react-loader-spinner'
import HomeSlider from "../homeSlider/homeSlider";
import { Link } from "react-router-dom";
import CategorySlider from "../categorySlider.jsx/categorySlider";
function Products() {
    async function getProducts(){
        return await axios.get("https://ecommerce.routemisr.com/api/v1/products") //should return promise
    }
    const {data,isLoading,isFetching,error,refetch}=useQuery({
        queryKey: ['products'],
        queryFn:getProducts,
        // refetchInterval:2000, // time between every refetch
        // refetchOnMount:false, //by default it's true => refetch is done continously to to update changes
        // cacheTime:500,//time query save data in cache every time component is unmount
        // enabled:false //it we don't want to call it in run time and use refetch func to call it in specefic event 
    }) //=> handle aysnc state management=>store data in cache=>calling api done in didmounting and when unmounting component(move to anther component) and then return to this copmonent it eneter didmount again and call api every time the user enter component
    //react query => share aysnc data (from api) over all component
    console.log(data?.data.data)
    if(isLoading){
        return(
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
        )
    }
    return (  
    <>
    <section className="py-8">
    <div className="w-full md:w-[90%] m-auto">
        <HomeSlider></HomeSlider>
        <CategorySlider></CategorySlider>
        <div className="flex flex-wrap items-center">
        {data?.data.data.map(function(item,index){
        return(
            <div className="w-full lg:w-1/6 md:w-1/4 sm:w-1/2 p-3" key={index}>
            <div className="inner p-3 bg-slate-300">
            <Link to={`/productDetails/${item.id}`}>
            <img src={item.imageCover} alt="" className="w-full" />
                <h2 className="text-green-700 mb-2">{item.category.name}</h2>
                <h2>{item.title.split(" ").slice(0,2)}</h2>
                <div>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-3">
                    <h4>{item.price} EGP</h4>
                    <h4><i className="fa-solid fa-star text-yellow-500 me-2"></i>{item.ratingsAverage}</h4>
                </div>
            </Link>
                <button type="button" className="w-full mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to Cart</button>
            </div>
        </div>
        )
        })}
        </div>
    </div>
    </section>
    </>
);
}

export default Products;