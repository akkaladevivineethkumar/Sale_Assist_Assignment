import Header from './component/Header'
import ProductsSlider from './component/ProductsSlider'
import ProductDetails from './component/ProductDetails';
// import './Apps.css';

const App = () => {
  return (
    <div style={{ padding: '18px', backgroundColor: 'black'}}>
      <Header />
      <ProductsSlider />
      <ProductDetails />
    </div>
  );
}
export default App;
