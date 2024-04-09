
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './Main/MainPage';
import ProductsAbout from './Main/ProductsAbout';
import Cart from './components/Cart';
import Inventory from './components/Inventory';
import MoreProducts from './components/MoreProducts';
import Error from './Main/Error';

const router = createBrowserRouter ( [ 
    {path : "/", element: <MainPage></MainPage>,
    children : [
      {path: "/",
        loader : async () => {
          return fetch ( 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json' )
        } ,      element : <ProductsAbout></ProductsAbout>},
      {path: "home",
        loader : async () => {
          return fetch ( 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json' )
        } ,      element : <ProductsAbout></ProductsAbout>},



      {path : "cart", element :<Cart></Cart>},
      {path : "home/cart", element :<Cart></Cart>},
      {path : "inventory", element : <Inventory></Inventory>},
      {path : "more/products", element : <MoreProducts></MoreProducts>}
    ]
  },

  {path : "*", element : <Error></Error>}
])





function App() {
  return (
    <div className="App">

    <RouterProvider router={ router }></RouterProvider>

    </div>
  );
}

export default App;
