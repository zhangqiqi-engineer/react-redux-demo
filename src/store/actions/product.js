

export const loadProduct = payload => async dispatch =>{
    console.log(payload);
    // const res = await post('');
    const res =[];
    dispatch(
        {
            type: 'PRODUCT_LOADED',
            payload:res,
        }
    )
}