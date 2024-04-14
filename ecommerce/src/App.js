import Header from './component/Header'
import ProductsSlider from './component/ProductsSlider'
import ProductDetails from './component/ProductDetails';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <ProductsSlider />
      <ProductDetails />
    </div>
  );
}

export default App;
