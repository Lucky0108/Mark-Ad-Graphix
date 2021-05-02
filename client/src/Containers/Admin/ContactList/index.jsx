import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel'
import { contactList, removeQuery } from '../../../user/user'
import './ContactList.css'

/**
* @author
* @function ContactList
**/

const ContactList = (props) => {

  const [queryList, setQueryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const loadQueries = () => {
    setLoading(true)
      contactList()
      .then((res) => { 
        setLoading(false)
        setQueryList(res.data.queries);
      })
      .catch((err) => { 
        setLoading(false)
        setErrorMessage(err.response.data.message)
      })
  }

  const queryDelete = (_id) => {
    setLoading(true)
    removeQuery(_id)
    .then((res) => {
      setLoading(false)
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    })
    .catch((err) => {
      setLoading(false)
      setErrorMessage(err.response.data.message)
       // eslint-disable-next-line no-restricted-globals
       location.reload()
    })
  }

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
          <td><Button variant="outline-success" onClick={queryDelete.bind(this,query._id)}> Resolved </Button> </td>
        </tr>
        )
      })
  }

  // loadQueries()
  useEffect(() => {
    loadQueries()
  }, [])



  return(
    <>
    <AdminLeftPanel>
      <div className="contact-list-wrap">
        {errorMessage ? errorMessage :
         <Table bordered hover responsive="sm">
         <thead>
           <tr className="text-center">
             <th>#</th>
             <th>Name</th>
             <th>Email</th>
             <th>Subject</th>
             <th>Phone</th>
             <th>Country</th>
             <th>Requirement</th>
             <th>Message</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
         {loading ? <p>Loading...</p> : renderQueryList()}
         </tbody>
       </Table>
        }
      </div>
    </AdminLeftPanel>
   </>
   )
  }


export default ContactList