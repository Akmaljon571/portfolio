import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { skillsSection } from '../portfolio';

const Skills = () => {
  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg">
         <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Skills</h4>
            </div>
          </div>
        {skillsSection.data.map((section, index) => {
          return (
            <Row className="my-5" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <Fade left duration={2000}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Fade>
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <Fade right duration={2000}>
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => (
                      index == 1 ? (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, '')}
                          >
                            <Icon
                              icon={skill.fontAwesomeClassName}
                              data-inline="false"
                            ></Icon>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, '')}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      ) : <div style={{
                        borderRadius: "50%",
                        display: "flex",
                        width: '60px',
                        height: "60px",
                        backgroundColor: "#fff",
                        margin: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                      }} key={i}>
                        {i == 0 ? 
                        <img title='Html' width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt='icons' />
                        :
                        i == 1 ? 
                        <img title='Css' width={40} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" alt='icons' />
                        :
                        i == 2 ? 
                        <img title='Js' width={40} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" alt='icons' />
                        :
                        i == 3 ? 
                        <img title='react.js' width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt='icons' />
                        :
                        i == 4 ? 
                        <img title='Redux.js' width={50} height={50} src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt='icons' />
                        :
                        i == 5 ? 
                        <img title='Next.js' width={50} height={50} src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt='icons' />
                        :
                        i == 6 ? 
                        <img title='Git' width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt='icons' />
                        :
                        i == 7 ? 
                        <img title='Node.js' width={80} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt='icons' />
                        :
                        i == 8 ? 
                        <img title='GraphQl' width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" alt='icons' />
                        :
                        i == 9 ? 
                        <img title='Nest.js' width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png" alt='icons' />
                        :
                        <img width={50} height={50} src="" alt="chiqmadi" />
                        }
                      </div>
                    ))}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Skills;
