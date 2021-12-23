 const notices = (state={isAllRead:false,count:0},anction)=>{
    switch(anction.type){
        case "Read_All":
        return {...state,isAllRead:true};
        default:
        return{state};

    }
}
export default notices;