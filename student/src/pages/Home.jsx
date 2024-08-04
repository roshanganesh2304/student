import React from 'react'
import { useEffect,useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
 

function Home() {
  return (
    <div className='container-fluid p-5'>
      <Row>
        <Col sm={12} md={3}>
        <Link to={'/add'} className='btn btn-success shadow'>Add New Student</Link>
        </Col>
        <Col sm={12} md={9}>
          <table className='table table-info border shadow'></table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Roshan</td>
              <td>9876543</td>
              <td><button>Edit</button></td>
            </tr>
          </tbody>
        </Col>
      </Row>
    </div>
  )
}

export default Home