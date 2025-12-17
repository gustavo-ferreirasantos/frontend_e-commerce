import axios, { type AxiosPromise } from "axios";
import type { ProductData } from "../interface/ProductData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://backend-e-commerce-sqj5.onrender.com"


const  postData = async (data: ProductData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/product', data);
    return response;
}

export function useProductDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['product-data']})
        }
    })

    return mutate;
}