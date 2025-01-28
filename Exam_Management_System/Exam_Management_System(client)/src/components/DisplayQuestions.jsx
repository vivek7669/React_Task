import { useState, useEffect } from "react";
import api from "../services/handleData";
import { Container, Card, ListGroup, Button, Row, Col, Badge} from "react-bootstrap";
import Navbar from "./Navbar";
import "./DisplayQuestions.css"

const DisplayQuestions = () => {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    (async function getMcqs() {
      let allMcqs = await api.get(`/exam/exam-questions`);
      setDisplayData(allMcqs.data.questions);
    })();
  }, []);

  const handleDelete = (id) => {
   
    alert(`Deleting question with ID: ${id}`);
    setDisplayData(displayData.filter(question => question._id !== id));
  };

  const handleEdit = (id) => {
    alert(`Editing question with ID: ${id}`);
  };
  
  return (
    
    <Container>
      < Navbar />
      <h1 className="my-4 text-center">Exam Questions</h1>
      <Row className="d-flex justify-content-center align-items-center">
        {displayData?.map((question, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{question?.questionText}</Card.Title>

                {/* Displaying difficulty and marks */}
                <div className="d-flex justify-content-between mb-3">
                  <Badge bg="primary">{question?.difficulty}</Badge>
                  <span>Marks: {question?.marks}</span>
                </div>

                {/* List of options with highlighting the correct one */}
                <ListGroup variant="flush">
                  {question?.options?.map((option, idx) => (
                    <ListGroup.Item
                      key={idx}
                      className={option === question?.correctAnswer ? "bg-success text-white" : ""}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                {/* Button to show the correct answer */}
                <div className="d-flex flex-column p-justify-content-center align-items-center mt-3">
                <Button variant="info" className="mt-3" onClick={() => alert(`Correct Answer: ${question?.correctAnswer}`)}>
                  Show Correct Answer
                </Button>
                  <Button variant="warning" className="me-2 mt-2" onClick={() => handleEdit(question._id)}>
                    Edit
                  </Button>
                  <Button variant="danger" className="me-2 mt-2" onClick={() => handleDelete(question._id)}>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DisplayQuestions;
