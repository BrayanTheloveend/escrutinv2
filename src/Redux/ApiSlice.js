
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const ApiSlice = createApi({
    reducerPath: 'Api',
    tagTypes: ['Categories', 'Users', 'User', 'Articles', 'Research', 'Promotion', 'DetailsArticles', 'Orders', 'Order', 'System'],
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_PORT}/api`,

     prepareHeaders: (headers)=>{
        const token = localStorage.getItem('token');
        return headers.set('Authorization', `Bearer ${token}`)
    },
}),

    endpoints: (builder) =>({

        

    })

})


export const {} = ApiSlice
