'use client'
import { useEffect, useState } from "react";

export async function loadData(pageNumber, perPage) {
    try {
      const response = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/blog?page=${pageNumber}&per_page=${perPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const totalCount = response.headers.get('X-WP-Total');
      return { data, totalCount };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { data: [], totalCount: 0 };
    }
  }
  

  export default function Page() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const perPage = 12;
  
    const fetchData = async () => {
        const response = await loadData(page, perPage);
        setData(response.data);
        setTotalCount(response.totalCount);
      };
      
  
    useEffect(() => {
      fetchData();
    }, [page]);
  
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };
  
    const renderPageButtons = () => {
      const pageCount = Math.ceil(totalCount / perPage);
      const buttons = [];
      for (let i = 1; i <= pageCount; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            disabled={data.length === 0}
            className={i === page ? "active" : ""}
          >
            {i}
          </button>
        );
      }
      return buttons;
    };
  
    return (
      <div>
        <div>
          {data.map((ele) => (
            <div key={ele.id}>
              <h1>{ele.title.rendered}</h1>
            </div>
          ))}
          <p>Total Posts: {totalCount}</p>
          <div>
            {renderPageButtons()}
          </div>
        </div>
      </div>
    );
  }
  
  