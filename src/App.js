import GeneralNav from './components/GeneralNav';
import BrandsNav from './components/BrandsNav';
import './styles/app.scss';
import Categories from './components/Categories';
import Breadcrumb from './components/Breadcrumbs';
import { Divider } from '@material-ui/core';
import data from './utils/data';
import ProductList from './components/ProductList';
import Home from './components/Home';

function App() {
  const { products } = data;
  console.log(products);
  return (
    <div className='App'>
      <GeneralNav />
      <BrandsNav />
      <Categories />
      <Breadcrumb />
      <Divider />
      <div className='container'>
        <Home products={products} />
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
