import { createSlice } from "@reduxjs/toolkit";
//import {v4 as uuid} from 'uuid'


const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {
    articleSet: [], 
    total : 0
}

export const reduxSlice =createSlice({
    name: 'items',
    initialState: initialState,
    reducers:{

        addItems: (state, {payload})=>{
            const check = state.articleSet.findIndex(elt => elt._id === payload._id ) 
            if(check !== -1){
                state.articleSet[check].quantity += parseInt(payload.quantity)
            }else{
                state.articleSet.push(payload)
            }

            state.total = state.articleSet.reduce((sum, elt)=> sum += parseInt(elt.price) * parseInt(elt.quantity), 0)
            localStorage.setItem('cart', JSON.stringify(state))
        },

        updateQuantity: (state, {payload})=>{
            const check = state.articleSet.findIndex(elt => elt._id === payload._id ) 
            if(check !== -1){
                state.articleSet[check].quantity = parseInt(payload.quantity)
            }

            state.total = state.articleSet.reduce((sum, elt)=> sum += parseInt(elt.price) * parseInt(elt.quantity), 0)
            localStorage.setItem('cart', JSON.stringify(state))
        },

       
        clearItems: (state)=>{
            localStorage.setItem('cart', JSON.stringify({
                articleSet: [], 
                total : 0
            }))
            return state = {
                articleSet: [], 
                total : 0
            }
        }
    }
})

export const { addItems, removeItems, clearItems, updateQuantity } = reduxSlice.actions
export default reduxSlice