import { useEffect, useState } from 'react'
import './App.css'
import { getProducts } from './api/services';
import Pagination from './components/Pagination';
import Content from './components/Content';
import Filter from './components/Filter';
import { useCurrentPage, useItemsPerPage } from './store';

function App() {
  const currentPage = useCurrentPage((state) => state.page);
  const itemsPerPage = useItemsPerPage((state) => state.limit);
  const [meta, setMeta] = useState({});
  const [products, setProducts] = useState([]);

  const fetchData = async (limit, page) => {
    const res = await getProducts(limit, page);
    setProducts(res.data);
    setMeta(res.meta);
  }

  useEffect(() => {
    itemsPerPage !== 0 &&
      currentPage !== 0 &&
      fetchData(itemsPerPage, currentPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div>
      <Filter itemsPerPage={itemsPerPage} />
      <Pagination currentPage={currentPage} meta={meta} />
      <Content products={products} />

    </div>
  )
}

export default App
