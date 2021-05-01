import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap'
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel'
import { contactList } from '../../../user/user'
import './ContactList.css'

/**
* @author
* @function ContactList
**/

const ContactList = (props) => {

  const toastId = React.useRef(null);
  const [queryList, setQueryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    setLoading(true)
    contactList()
      .then((res) => { 
        setLoading(false)
        setQueryList(res.data.queries);
      })
      .catch((err) => { 
        setLoading(false)
        toast.error(err.response.data.message)
        setErrorMessage(false)
      })
  }, [])

  const renderQueryList = () => {
    return loading ? toastId.current = toast.info("Loading...", {autoClose: false}) : (
      toast.dismiss(toastId.current),
      toast.success("Queries Succfully Loaded!", {autoClose: 2000}),
      queryList.map((query, index) => {
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
    )
   
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