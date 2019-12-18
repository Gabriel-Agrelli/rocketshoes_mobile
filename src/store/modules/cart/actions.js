export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: product,
  };
}
