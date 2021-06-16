import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "../styles/main.scss"
import Form from '../pages/Form'

const Layout = ({ children }) => {
  const reusableComponents = { Form }
  return (
    <>
      <p>Header</p>
      <hr/>
        <MDXProvider components={reusableComponents}>{children}</MDXProvider>
      <hr/>
      <p>Footer</p>
    </>
  )

}

export default Layout