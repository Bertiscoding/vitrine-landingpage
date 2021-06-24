import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "../styles/main.scss"
import Form from '../components/Form/Form'

const Layout = ({ children }) => {
  const reusableComponents = { Form }
  return (
    <div className="container-mdx">
      <p className="margin-y-xxl">Header from Layout</p>
        <MDXProvider components={reusableComponents}>{children}</MDXProvider>
      <p className="margin-y-xxl">Footer from Layout</p>
    </div>
  )

}

export default Layout
