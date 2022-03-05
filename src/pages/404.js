import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col} from 'react-bootstrap'
import * as styles from './404.module.css'

const NotFoundPage = () => (
  <Layout>
    <Container className={styles.centeredContainer}>
      <Seo title="404: Not found" />
      <Row className="mx-auto w-25">
        <Col>
          <h1 className='text-light'>404: Not Found</h1>
          <p className='text-light'>You just hit a route that doesn&#39;t exist...</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
