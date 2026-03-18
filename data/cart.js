

export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
cart=[

];
}

function saveCart()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}


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
  saveCart();
}


export function removeProduct(productId)
{
  const newCart=[];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId)
    {
      newCart.push(cartItem);
    }
  });

  cart=newCart;
  saveCart();
}