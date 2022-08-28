export const incNumber=(incre)=>{
    return{
        type:"Increment",
        payload:incre
    }
}

export const decNumber=(decre)=>{
    return{
        type:"Decrement",
        payload:decre
    }
}