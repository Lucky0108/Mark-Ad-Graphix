import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel'
import { getNewsletter } from '../../../user/user'
import './Newsletter.css'
// import { Editor } from "react-draft-wysiwyg";

/**
* @author
* @function Newsletter
**/

const Newsletter = (props) => {

  const [newsletterList, setNewsletterList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const loadMails = () => {
    setLoading(true)
      getNewsletter()
      .then((res) => {
        setLoading(false)
        setNewsletterList(res.data.mails)
      })
      .catch((err) => { 
        setLoading(false)
        setErrorMessage(err.response.data.message)
      })
  }

  const renderNewsltterList = () => {
    return newsletterList.map((query, index) => {
        return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{query} </td>
        </tr>
        )
      })
  }

  useEffect(() => {
    loadMails()
  }, [])

  return(
    <AdminLeftPanel>
    <div className="newsletter-editor-wrap container">
    {errorMessage ? errorMessage :
    <Table bordered hover responsive="sm">
      <thead>
        <tr className="text-center">
          <th>#</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {loading ? <p>Loading...</p> : renderNewsltterList()}
      </tbody>
    </Table>
    }
    {/* <Editor
      // editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      // onEditorStateChange={this.onEditorStateChange}
    /> */}
    <a className="newsletter-btn btn btn-outline-success" href={`mailto:${newsletterList}`} target="_blank" rel="noopener noreferrer">Send Mail</a>
    </div>
    </AdminLeftPanel>
    
   )
  }


export default Newsletter