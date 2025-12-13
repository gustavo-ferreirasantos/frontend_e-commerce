import './App.css'
import {Card} from './components/card/card.tsx'
import { userProductData } from './hooks/useProductData.ts';


function App() {
  const {data} = userProductData();

  return (
    <div className="container">
      <h1>Produtos</h1>
      <div className="card-grid">
        {data?.map(productData => 
          <Card 
            price={productData.price} 
            title={productData.title} 
            image={productData.image}
          />
        )}
      </div>
    </div>
  )
}

export default App
