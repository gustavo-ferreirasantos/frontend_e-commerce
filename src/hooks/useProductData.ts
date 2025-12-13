import axios, { type AxiosPromise } from "axios";
import type { ProductData } from "../interface/ProductData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://backend-e-commerce-sqj5.onrender.com"


const fectData = async (): AxiosPromise<ProductData[]> => {
    const response = axios.get(API_URL + "/product")
    return response;
}

export function userProductData(){
    const query = useQuery({
        queryFn: fectData,
        queryKey: ["product-data"],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }


}