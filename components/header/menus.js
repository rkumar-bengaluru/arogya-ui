import React from 'react';
import { useState, createContext } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/navigation'

function HeaderMenus() {
  const router = useRouter()

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setDropdownOpen(true);
  }

  const handleMouseOut = () => {
      setDropdownOpen(false);
  }

  const fetchRegistration = async () => {
    console.log("navigating to registrations")
    router.push('/registrations')
  }

  const goHome = async () => {
    console.log("navigating to registrations")
    router.push('/home')
  }

  const fetchCampaigns = async () => {
    console.log("navigating to registrations")
    router.push('/campaigns')
  }

  const fetchUsers = async () => {
    console.log("navigating to registrations")
    router.push('/users')
  }

  const fetchOpd = async () => {
    console.log("navigating to registrations")
    router.push('/opd')
  }

  const fetchRent = async () => {
    console.log("navigating to registrations")
    router.push('/rent')
  }

  const fetchRota = async () => {
    console.log("navigating to registrations")
    router.push('/rota')
  }

  const fetchAllCamps = async () => {
    console.log("navigating to registrations")
    router.push('/completed_camps')
  }
    return (
      <>
        {
            <div>
              <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
              <Nav.Link onClick={goHome}>Home</Nav.Link>
<DropdownButton
            as={ButtonGroup}
            key={"HR"}
            id={`dropdown-variants-HR`}
            variant={"HR".toLowerCase()}
            title={"HR"}
          >
            <Dropdown.Item onClick={fetchUsers} eventKey="1">Manage Users</Dropdown.Item>
            <Dropdown.Item onClick={fetchOpd} eventKey="1">OPD Room Slot Details</Dropdown.Item>
            <Dropdown.Item onClick={fetchRent} eventKey="1">Room Rent Report</Dropdown.Item>
            <Dropdown.Item onClick={fetchRota} eventKey="1">Rota</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            key={"Lab"}
            id={`dropdown-variants-Lab`}
            variant={"Lab".toLowerCase()}
            title={"Lab"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Dropdown.Item onClick={fetchRegistration} eventKey="1">Pending</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            key={"Work Order"}
            id={`dropdown-variants-Work-Order`}
            variant={"Work Order".toLowerCase()}
            title={"Work Order"}
          >
            <Dropdown.Item onClick={fetchCampaigns}  eventKey="1">Camp List</Dropdown.Item>
            <Dropdown.Item onClick={fetchAllCamps} seventKey="1">Campleted Camps</Dropdown.Item>
          </DropdownButton>
          </div>
          </nav>

            </div>
        
          
        }
      </>
    );
  }

  export default HeaderMenus;
