import { useState, createContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation'
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/opd', { username, password });
      console.log(response.data.user) 
      setUser(response.data.user)
      setMessage(response.data.message);
      // Optionally redirect to a protected page
      router.push('/opd')
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
        <Header/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">TODO RENT</h2>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}