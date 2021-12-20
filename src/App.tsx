import { useEffect, useState } from 'react';
import './App.css';
import { fetchData, ProductList } from './api/products';
import { Filters } from './components/filters/filters';
import { ProductTable } from './components/product-table/product-table';

export interface IProducts{
  unfilteredProducts: ProductList[];
  filterdProducts: ProductList[];
  setFilteredProducts: (value: React.SetStateAction<ProductList[]>) => void
}

function App() {
  
  const [products, setProducts] = useState<ProductList[]>([]);
  const [filterdProducts, setFilteredProducts] = useState<ProductList[]>([]);

  useEffect(() => {
    const initialiseProducts = async () => {
      const res = await fetchData();
      setProducts(res);
      setFilteredProducts(res);
    }
    initialiseProducts() 
   
  }, []);
  
  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-2">
          <Filters 
          unfilteredProducts={products} 
          filterdProducts={filterdProducts}
          setFilteredProducts={setFilteredProducts}      
          />
        </div>
        <div className="col-md-10">
          <h1>Edvora</h1>
          <h3>Products</h3>
     
          <ProductTable products={filterdProducts} />
          <hr />
          <ProductTable products={filterdProducts} />
        </div>
      </div>

    </div>
  );
}

export default App;
