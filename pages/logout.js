import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import axios from 'axios'; // If using axios for API calls
import { useRouter } from 'next/navigation'


const  LogOutMenu  = () => {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      // If your backend requires an API call for logout:
      const response = await axios.post('/api/logout', {});

      console.log('Logout successful:', response.data);

      // localStorage.removeItem('token'); // If using local storage
      // sessionStorage.removeItem('token'); //If using session storage.

      // Redirect to the login page or home page.
      router.push('/'); // React Router v6

    } catch (error) {
      console.error('Logout failed:', error);
      router.push('/home');
    }
  };

    return (
      <>
        {['kumar@gmail.com'].map(
          (variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1" onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </>
    );
  }

  export default LogOutMenu;
