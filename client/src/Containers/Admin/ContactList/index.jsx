import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel'
import { contactList } from '../../../user/user'
import './ContactList.css'

/**
* @author
* @function ContactList
**/

const ContactList = (props) => {

  const [queryList, setQueryList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    contactList()
      .then((res) => { 
        setQueryList(res.data.queries);
      })
      .catch((err) => { 
        setErrorMessage(err.response.data.message);
      })
  })

  const renderQueryList = () => {
    return queryList.map((query, index) => {
      return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{query.name} </td>
        <td><a href={`mailto:${query.email}`} target="_blank" rel="noopener noreferrer" >{query.email}</a> </td>
        <td>{query.subject ? query.subject : '-'} </td>
        <td>{query.phone ? <a href={`tel:${query.phone}`}>{query.phone}</a> : '-'} </td>
        <td>{query.country ? query.country : '-'} </td>
        <td>{query.Interest ? query.Interest : '-'} </td>
        <td><textarea rows="3" id="address" style={{minWidth: "100%", resize:"none", backgroundColor: "#fff"}} value={query.message} disabled /> </td>
      </tr>
      )
    })
  }

  return(
    <AdminLeftPanel>
      
      <div className="contact-list-wrap">
      <div style={{marginTop: "30px"}}> 
      {errorMessage ? errorMessage :  
        <Table bordered hover responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Requirement</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
          {renderQueryList()}
          </tbody>
        </Table>} 
      </div>
      </div>
    </AdminLeftPanel>
   )
  }


export default ContactList