function getPrice(arr){
    return  Math.floor(arr.map((e)=>((e.price*e.quantity)*100)/(100-e.discountPercentage)).reduce((acc,curr)=>acc+curr,0))
  }
  
  export default getPrice;