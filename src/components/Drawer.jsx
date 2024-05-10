import CartItem from "./CartItem";

function Drawer({ onCartClose, cartItems }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onCartClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          {cartItems &&
            cartItems.map((cartItem, id) => (
              <CartItem key={id}
                title={cartItem.title}
                imageUrl={cartItem.imageUrl}
                price={cartItem.price}
              />
            ))
          }
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>0 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>0 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
