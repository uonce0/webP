const cart = [
    { item: "노트북", price: 1200000, quantity: 1 }, 
    { item: "마우스", price: 35000, quantity: 2 }, 
    { item: "키보드", price: 89000, quantity: 1 } 
   ];
   
   let totalPrice = 0;
   for (let i = 0;i<cart.length;i++) {
        totalPrice += cart[i].price * cart[i].quantity;
   }

   totalPrice = 0;
   cart.forEach(goods => {
    totalPrice += goods.price * goods.quantity;
   }
   )
   totalPrice = cart.reduce((sum, goods) => sum + goods.price*goods.quantity, 0);

   console.log(`total price = ${totalPrice}`);

   const itemTotals = cart.map(goods => ({
    item: goods.item,
    price: goods.price,
    quantity: goods.quantity
    }));
    
   console.log('item totals = ',itemTotals);


const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map( name => (
    name.toUpperCase()
));
console.log(`upper cased name = ${uppercasedNames}`);

const capitalStartnames = names.map( n => n[0].toUpperCase() + n.slice(1));
console.log(`capital start name = ${capitalStartnames}`);