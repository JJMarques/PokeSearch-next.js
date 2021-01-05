import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
    <Link to="/page-2" style={{ textDecoration: 'none' }}>
      <h1>Inicio</h1>
    </Link>
    <div style={{ maxWidth: '400px', width: '400px' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
