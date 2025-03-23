import React, { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from '../components/header'; 
import Footer from '../components/footer'; 

function Registrations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page


  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/patients', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      setData(result);
      setCurrentPage(1); // Reset to first page after fetching new data
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="container mt-5">
      <Header />
      <div className="mb-3">
       
        
      </div>

      <div className="mb-3">
        
      </div>

      

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error.message}</p>}

      {currentItems.length > 0 && (
        <>
        <Button variant="primary">Add New Patient</Button>
          <table className="table table-striped mt-4">
          
            <thead>
              <tr>
                {Object.keys(currentItems[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, index2) => (
                    <td key={index2}>{String(value)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center">
            <nav>
              <ul className="pagination">
                {currentPage > 1 && (
                  <li className="page-item">
                    <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                      Previous
                    </button>
                  </li>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => paginate(number)}>
                      {number}
                    </button>
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li className="page-item">
                    <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                      Next
                    </button>
                  </li>
                )}
              </ul>
            </nav>
            <div className="form-group">
              <label htmlFor="itemsPerPage">Items per page:</label>
              <select
                className="form-control"
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Registrations;