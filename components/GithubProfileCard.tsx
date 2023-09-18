import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = (git: GithubUserType) => {
  return (
    <Card className="section-sm bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src='/img/site/photo_2023-09-18_16-43-09.jpg'
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                />
            </Col>
            <Col lg="8" className="order-lg-1">
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                {git.location}
                <i style={{marginLeft: "15px"}} className="ni ni-pin-3 text-info mr-2" />
              </div>
              <SocialLinks style={{marginTop: "50px"}} />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
