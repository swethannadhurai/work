import { useState } from 'react'
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState[true];

  useEffect[ () => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      }
    }
  }]
  return (
    <>
     
    </>
  )
}

export default App
