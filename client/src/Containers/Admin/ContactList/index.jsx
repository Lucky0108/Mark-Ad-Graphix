import React from 'react'
import { Table } from 'react-bootstrap'
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel'
import './ContactList.css'

/**
* @author
* @function ContactList
**/

const ContactList = (props) => {
  return(
    <AdminLeftPanel>
      <div className="contact-list-wrap">
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>yadavlakshay76@gmail.com</td>
            <td>Lalalalallalalalalallala</td>
            <td>9891433344</td>
            <td>India</td>
            <td>Flex Banner</td>
            <td><textarea rows="3" id="address" style={{minWidth: "100%", resize:"none"}}>Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	</textarea> </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>yadavlakshay76@gmail.com</td>
            <td>Lalalalallalalalalallala</td>
            <td>9891433344</td>
            <td>India</td>
            <td>Flex Banner</td>
            <td><textarea rows="3" id="address" style={{minWidth: "100%", resize:"none"}}>Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	</textarea> </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>yadavlakshay76@gmail.com</td>
            <td>Lalalalallalalalalallala</td>
            <td>9891433344</td>
            <td>India</td>
            <td>Flex Banner</td>
            <td><textarea rows="3" id="address" style={{minWidth: "100%", resize:"none"}}>Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	Lalalalallalalalalallala	</textarea> </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </AdminLeftPanel>
   )
  }


export default ContactList