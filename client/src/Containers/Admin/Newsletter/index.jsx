import React from 'react'
import { Button } from 'react-bootstrap'
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel'
import './Newsletter.css'
import { Editor } from "react-draft-wysiwyg";

/**
* @author
* @function Newsletter
**/

const Newsletter = (props) => {
  return(
    <AdminLeftPanel>
    <div className="newsletter-editor-wrap container">
    <Editor
      // editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      // onEditorStateChange={this.onEditorStateChange}
    />
    <Button className="newsletter-btn" variant="outline-success">Send Mail</Button>
    </div>
    </AdminLeftPanel>
    
   )
  }


export default Newsletter