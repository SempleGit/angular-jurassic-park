
const cart = () => {

  const items = [];
  const getItems = () => items;

  const addToCart = (item) => {
    const foundItem = getCartItem(item)
    if (foundItem)  {
      foundItem.quantity++;
    } else {
      item.quantity = 1;
      items.push(item);
    }
    console.log(items);
    // Adds item to cart or increments if there already.
  }

  const removeOneFromCart = (item) => {
    const foundItem = getCartItem(item)
    if (foundItem) {
      if (foundItem.quantity > 1)  {
        foundItem.quantity--;
      } else {
        items.splice(items.indexOf(element => element.id === item.id), 1);
      }
    } else {
      console.log('not found');
    }
    console.log(items);
    // Removes 1 item from the cart, if only 1 item in the cart will call to remove completely.
  }

  const clearCart = () => {
    items = [];
    // Removes item from cart.
  }

  const getCartItem = (item) => {
    return items.find(element => item.id === element.id)
  }

  return {getItems, addToCart, clearCart, removeOneFromCart};
};

module.exports = cart();
