import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const sneakers = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    imageUrl: '/img/sneakers/1.jpg',
    price: "12 999",
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    imageUrl: '/img/sneakers/2.jpg',
    price: "13 699",
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    imageUrl: '/img/sneakers/3.jpg',
    price: "8 499",
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    imageUrl: '/img/sneakers/4.jpg',
    price: "8 999",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {
            sneakers.map((obj) => (
              <Card title={obj.title}
                imageUrl={obj.imageUrl}
                price={obj.price}
                onClick={() => console.log(obj)} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
