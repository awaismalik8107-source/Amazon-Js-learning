export const cart=[


];


export function addToCart(productId){
   let flag;

    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId)
      {
        flag=cartItem;
      }//use a flag
    });
    if(flag)
    {
      flag.quantity+=1;
    }
    else{
    
    cart.push({
      productId : productId,
      quantity : 1

    });
    
  }
}

