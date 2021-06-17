import React from 'react'
import "../styles/main.scss"
import Form from '../components/Form'
import HeaderText from '../markdown/headertext.mdx'

const ReactTest = () => {
 return (
   <main>
    <div className="container">
     <title>Home Page</title>
     <HeaderText/>
     <div className="container-center">
      <Form/>
     </div>
    </div>
   </main> 
 )
}

export default ReactTest