"use client"
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import { DataProject } from '../types/sections';
import Link from 'next/link';
const Projects = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch('/lottie/project.json')
      const all = await res.json()
      setData(all?.data)
    })()
  }, [setData])
  
  return (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "50px",
              marginTop: "100px"
            }}
          >
            {data?.map((e: DataProject, i) => (
              <div style={{
                width: "500px",
                border: "1px solid #ddd",
                padding: "0 0 22px 0",
                height: "450px",
                borderRadius: "15px"
              }} className='items' key={i}>
                <img style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "15px 15px 0 0",
                  marginBottom: "30px"                  
                }} width={100} height={100} src={'/img/site' + e.img + '.png'} alt="logo" />
                <h4 style={{margin: '20px'}}>{e.title}</h4>
                <Link style={{margin: "20px"}} href={e.link}>
                  Web Site
                  <svg style={{marginLeft: "10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                  </svg>
                </Link>
              </div>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default Projects;
