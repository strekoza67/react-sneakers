const CartItem = ({ title, imageUrl, price }) => {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="cartItemImg"></div>

      <div className="mr-20 flex">
        <p className="mb-5">{title}</p>
        <b>{price} руб.</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
    </div>
  )
}

export default CartItem;
