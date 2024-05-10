import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://663c478b17145c4d8c35a86c.mockapi.io/items').then(res => {
      return res.json();
    }).then(res => {
      setItems(res);
    })
  }, []);

  const addToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }


  return (
    <div className="wrapper clear">
      {cartOpen &&
        <Drawer
          cartItems={cartItems}
          onCartClose={() => setCartOpen(false)} />}
      <Header onCartOpen={() => setCartOpen(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, id) => (
                <Card key={id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  onClickFavourite={() => console.log('Добавлено в закладки')}
                  onPlus={(obj) => addToCart(obj)}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
