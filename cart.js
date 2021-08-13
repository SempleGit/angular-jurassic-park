const cart = (shopItems, items = []) => {
  // const items = currentItems;
  const getItems = () => items;

  const addToCart = (item) => {
    const foundItem = getCartItem(item)
    if (foundItem)  {
      foundItem.quantity++;
    } else {
      const shopItem = getShopItem(item);
      shopItem.quantity = 1;
      items.push(shopItem);
    }
    // Adds item to cart or increments if there already.
    return items;
  }

  const removeOneFromCart = (item) => {
    const foundItem = getCartItem(item)
    if (foundItem) {
      foundItem.quantity--;
      if (foundItem.quantity < 1)  {
        items.splice(items.findIndex(element => element.id === item.id), 1);
      }
    } else {
      console.log('not found');
    }
    // Removes 1 item from the cart, if less than 1 item in the cart will call to remove completely.
  }

  const clearCart = () => {
    items.forEach(item => {
        item.quantity = 0
      });
      items.splice(0);
      // Removes all items from cart.
    }
  
  const getCartItem = (item) => {
      return items.find(element => item.id === element.id)
    }
  
  const getShopItem = (item) => {
      return shopItems.find(element => item.id == element.id)
    }
  
    return {getItems, addToCart, clearCart, removeOneFromCart};
  };
      
  module.exports = cart;

// function Cart(shopItems, items) {
//   this.items = items;

//   this.getItems = () => {
//     return this.items;
//   }

//   this.addToCart = function (item) {
//     const foundItem = getCartItem(item)
//     if (foundItem)  {
//       foundItem.quantity++;
//     } else {
//       const shopItem = getShopItem(item);
//       shopItem.quantity = 1;
//       console.log(shopItems);

//       this.items.push(shopItem);
//     }
//     return this.items;
//     // Adds item to cart or increments if there already.
//   }

//   removeOneFromCart = (item) => {
//     const foundItem = getCartItem(item)
//     if (foundItem) {
//       foundItem.quantity--;
//       if (foundItem.quantity < 1)  {
//         this.items.splice(this.items.findIndex(element => element.id === item.id), 1);
//         console.log(this.items);
//       }
//     } else {
//       console.log('not found');
//     }
//     // Removes 1 item from the cart, if less than 1 item in the cart will call to remove completely.
//   }

//   clearCart = () => {
//     this.items.forEach(item => {
//       item.quantity = 0
//     });
//     this.items.splice(0);
//     // Removes all items from cart.
//   }

//   getCartItem = (item) => {
//     return this.items.find(element => item.id === element.id)
//   }

//   getShopItem = (item) => {
//     return shopItems.find(element => item.id == element.id)
//   }
// };

// module.exports = Cart;
