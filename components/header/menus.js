import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function HeaderMenus() {
    return (
      <>
        {
            <div>
<DropdownButton
            as={ButtonGroup}
            key={"HR"}
            id={`dropdown-variants-HR`}
            variant={"HR".toLowerCase()}
            title={"HR"}
          >
            <Dropdown.Item eventKey="1">Manage Users</Dropdown.Item>
            <Dropdown.Item eventKey="1">OPD Room Slot Details</Dropdown.Item>
            <Dropdown.Item eventKey="1">Room Rent Report</Dropdown.Item>
            <Dropdown.Item eventKey="1">Rota</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            key={"Lab"}
            id={`dropdown-variants-Lab`}
            variant={"Lab".toLowerCase()}
            title={"Lab"}
          >
            <Dropdown.Item eventKey="1">Pending</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            key={"Work Order"}
            id={`dropdown-variants-Work-Order`}
            variant={"Work Order".toLowerCase()}
            title={"Work Order"}
          >
            <Dropdown.Item eventKey="1">Camp List</Dropdown.Item>
            <Dropdown.Item eventKey="1">Campleted Camps</Dropdown.Item>
          </DropdownButton>

            </div>
        
          
        }
      </>
    );
  }

  export default HeaderMenus;
