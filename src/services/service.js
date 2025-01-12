import api from "./axios"

export const getProductData =async()=>{
    try{
        const response=await api.get('api/v1/products');
        return response.data
    }
    catch(err){
        console.error(err)
    }
}