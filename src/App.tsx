import { useState } from 'react';
import './App.css'
import {Card} from './components/card/card.tsx'
import { userProductData } from './hooks/useProductData.ts';
import { CreateModal } from './components/create-modal/create-modal.tsx';


function App() {
  const {data} = userProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }


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
      {isModalOpen && <CreateModal/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
