import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import { useRouter } from 'next/navigation'
import Spinner from 'react-bootstrap/Spinner';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter()
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/home');
        setMessage(response.data.Name);
        setLoginSuccess(true)
      } catch (error) {
        await new Promise(resolve => router.push('/', undefined, { shallow: true }, resolve))
        setMessage(error.response.data.message);
        setError(error);
        // Optionally redirect to login page if unauthorized
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div><Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>; // Or a loading spinner
  }
  
  if (!loginSuccess) {
    return <div>Error: {error.message}</div>; // Or display error details
  }

  if (loginSuccess) {
    return (
      <div className="container mt-5">
        <Header />
        <h2 className="text-center mb-4">Welcome to ArogyaWahan Application</h2>
        {message && <p className="text-center">{message}</p>}
        {user && <p className="text-center">Welcome, {user}!</p>}
        <Footer />
      </div>
    );
  }

}