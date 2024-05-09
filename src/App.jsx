import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch('https://663c478b17145c4d8c35a86c.mockapi.io/items').then(res => {
      return res.json();
    }).then(res => {
      setItems(res);
    })
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpen && <Drawer onCartClose={() => setCartOpen(false)} />}
      <Header onCartOpen={() => setCartOpen(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map((item) => (
              <Card title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onClickFavourite={() => console.log('Добавлено в закладки')}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
