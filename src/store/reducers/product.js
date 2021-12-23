 const product = (state={list:[],page:1,total:0},anction)=>{
    switch(anction.type){
        case "PRODUCT_LOADED":
        return {...state};
        default:
        return{state};

    }
}

export default product;