import React from "react";
import './Home.css'
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { FaEye } from "react-icons/fa";
import Heading from "../Heading";

const Home = () => {
  return (
    <>
      
      <Container className="Heading">
      <Heading Heading="Project List"/>
      </Container>
    
      <Container className="MainContainer">
        <Container>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Project Name</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Home;
