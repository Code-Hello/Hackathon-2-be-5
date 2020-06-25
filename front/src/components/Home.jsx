import React, { useState } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';

import DateTime from './Date';

export default function Home() {
  const [isDoneOne, setIsDoneOne] = useState(false);
  const [isDoneTwo, setIsDoneTwo] = useState(false);
  const [isDoneThree, setIsDoneThree] = useState(false);

  const handleClickOne = () => {
    setIsDoneOne(!isDoneOne);
  };

  const handleClickTwo = () => {
    setIsDoneTwo(!isDoneTwo);
  };

  const handleClickThree = () => {
    setIsDoneThree(!isDoneThree);
  };

  return (
    <>
      <Row style={{ margin: '3rem' }}>
        <Col className="d-flex justify-content-center text-center">
          <h2>Hi, Marc !</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center text-center">
          <ListGroup className="w-75">
            <ListGroupItem style={{ border: '2px solid #5bd1ff' }}>
              <DateTime />
            </ListGroupItem>
            <ListGroupItem
              className="d-flex align-items-center mt-3 border-top"
              style={
                isDoneOne
                  ? { backgroundColor: '#8080803d', boxShadow: 'none' }
                  : { boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }
              }
            >
              <Col xs="2" style={{ fontSize: '1.5rem' }}>
                8h
              </Col>
              <Col>
                <Row>
                  <Col className="justify-content-center">
                    Sabril - 2cp de 500g
                  </Col>
                </Row>
                <Row>
                  <Col className="justify-content-center">
                    Pregabaline - 2cp de 300g
                  </Col>
                </Row>
                <hr style={{ borderColor: 'orange' }} />
                <Row>
                  <Col className="justify-content-center font-italic">
                    Doliprane - 1cp de 1g
                  </Col>
                </Row>
              </Col>
              <Col xs="2">
                <InputGroup className="justify-content-end align-items-end">
                  <InputGroupAddon addonType="prepend">
                    <Input
                      style={{ transform: 'scale(2)' }}
                      addon
                      type="checkbox"
                      onClick={handleClickOne}
                      aria-label="Checkbox for following text input"
                    />
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </ListGroupItem>
            <ListGroupItem
              className="d-flex align-items-center mt-3 border-top"
              style={
                isDoneTwo
                  ? { backgroundColor: '#8080803d', boxShadow: 'none' }
                  : { boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }
              }
            >
              <Col xs="2" style={{ fontSize: '1.5rem' }}>
                12h
              </Col>
              <Col>
                <Row>
                  <Col className="justify-content-center">
                    <span />
                  </Col>
                </Row>
                <hr style={{ borderColor: 'orange' }} />
                <Row>
                  <Col className="justify-content-center font-italic">
                    Doliprane - 1cp de 1g
                  </Col>
                </Row>
              </Col>
              <Col xs="2">
                <InputGroup className="justify-content-end align-items-end">
                  <InputGroupAddon addonType="prepend">
                    <Input
                      addon
                      type="checkbox"
                      onClick={handleClickTwo}
                      style={{ transform: 'scale(2)' }}
                      aria-label="Checkbox for following text input"
                    />
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </ListGroupItem>
            <ListGroupItem
              className="d-flex align-items-center mt-3 border-top"
              style={
                isDoneThree
                  ? { backgroundColor: '#8080803d', boxShadow: 'none' }
                  : { boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }
              }
            >
              <Col xs="2" style={{ fontSize: '1.5rem' }}>
                20h
              </Col>
              <Col>
                <Row>
                  <Col className="justify-content-center">
                    Sabril - 2cp de 500g
                  </Col>
                </Row>
                <Row>
                  <Col className="justify-content-center">
                    Pregabaline - 2cp de 300g
                  </Col>
                </Row>
                <hr style={{ borderColor: 'orange' }} />
                <Row>
                  <Col className="justify-content-center font-italic">
                    Doliprane - 1cp de 1g
                  </Col>
                </Row>
              </Col>
              <Col xs="2">
                <InputGroup className="justify-content-end align-items-end">
                  <InputGroupAddon addonType="prepend">
                    <Input
                      addon
                      type="checkbox"
                      onClick={handleClickThree}
                      style={{ transform: 'scale(2)' }}
                      aria-label="Checkbox for following text input"
                    />
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </ListGroupItem>
            {/* {items.map((item) => {
              return (
                <ListGroupItem
                  className={
                    isDone
                      ? 'd-flex aligh-content-center mt-3 border-top bg-secondary'
                      : 'd-flex aligh-content-center mt-3 border-top'
                  }
                  style={{ boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }}
                >
                  <Col xs="2">{item.hour}h</Col>
                  <Col className="d-flex">
                    <Col className="justify-content-center">
                      {item.treatments}
                    </Col>
                    <Col xs="2">
                      <InputGroup className="justify-content-end align-items-end">
                        <InputGroupAddon addonType="prepend">
                          <Input
                            addon
                            onChange={handleClick}
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Col>
                </ListGroupItem>
              );
            })} */}
          </ListGroup>
        </Col>
      </Row>
      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..." />
          <strong className="mr-auto">You took your medication</strong>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Good job !</div>
      </div>
    </>
  );
}

// {items
//   .filter((item) => item.hour === '9')
//   .map((filteredItem) => (
//     <Col>{filteredItem.treatments}</Col>
//   ))}