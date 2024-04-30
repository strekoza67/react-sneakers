
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.svg" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase"> React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex align-center">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/heart.svg" alt="" />
            <span>Закладки</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="sneakers d-flex justify-between">
          <div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/sneakers-1.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/sneakers-2.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/sneakers-3.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/sneakers-4.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>

  );
}

export default App;
