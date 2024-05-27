import React from 'react'
import '../css/abc.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import java from '../assets/images/mocsoft_java.jpg'
import python from '../assets/images/mocsoft_python.jpg'
import angular from '../assets/images/mocsoft_angular.jpg'
import kotlin from '../assets/images/mocsoft_Kotlin-logo.svg'
import node from '../assets/images/mocsoft_node.jpg'
import react from '../assets/images/mocsoft_react.jpg'
import computer from '../assets/images/mocsoft_computer.jpg'

const aboutus = () => {
  return (
    <div>
    <div className="container styles_containerMargin__pgluH mt-5">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="row">
            <div className="col-md-12 col-12 styles_headingText__EO63g">
              <h1>
              <span style={{ color: "rgb(233, 68, 53)" ,}}>Mocsoft</span>

              </h1>
            </div>
            <div className="col-md-12 col-12">
              <p className="styles_aboutText__P8gAv">
              is a leading software company specializing in government projects, with a primary focus on designing and developing cutting-edge systems and software tailored to the needs of law enforcement and public safety agencies. With a strong track record of delivering innovative solutions for the public sector, Mocsoft has established itself as a trusted partner in the realm of government software development.
              </p>
              <p className="styles_aboutText__P8gAv">
              Our team of highly skilled software engineers, data analysts, and technology experts is dedicated to creating sophisticated software solutions that empower police departments and public safety organizations. We specialize in developing comprehensive systems that aid in data analysis, criminal activity monitoring, and decision-making enhancement for law enforcement agencies. Mocsoft's commitment to delivering top-tier software ensures that our products are at the forefront of addressing the evolving needs of our government partners.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 text-center">
          <img
            src={computer} className="img-fluid"
            alt="We are Mocsoft"
          />
        </div>
      </div>
    </div>
    <div className="container styles_topBuffer___TJSc">
      <div className="row">
        <div className="col-md-6 col-md-6">
          <div className="row">
            
            <div className="col-md-12 col-md-12">
              <p className="styles_aboutText__P8gAv">
              With a history of successful government projects, Mocsoft remains committed to advancing public safety and security through state-of-the-art software solutions. Our dedication to innovation, security, and efficiency makes us the go-to choice for government agencies seeking reliable, technology-driven tools. Mocsoft, your trusted partner in the development of government software that safeguards our communities and supports the vital work of law enforcement. We
                are passionate about building products that are not just useful
                but also delightful to use. We have delivered platforms built in
                Java, Kotlin, Python, NodeJS, Angular, React, C, C++
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-md-6 styles_imageGrid__l2uIW">
          <div className="row justify-content-center">
            <div className="col-4 col-sm-4 styles_workWith__xhVTu">
              <img
                className="img-fluid"
                src={java}
                alt="Java"
              />
            </div>
            <div className="col-4 col-sm-4 styles_workWith__xhVTu">
              <img className="img-fluid" src={python}alt="python" />
            </div>
            <div className="col-4 col-sm-4 styles_workWith__xhVTu">
              <img className="img-fluid" src={node} alt="node" />
            </div>
            <div className="col-4 col-sm-4 styles_workWith__xhVTu">
              <img className="img-fluid" src={react} alt="react" />
            </div>
            <div className="col-4 col-sm-4 styles_workWith__xhVTu">
              <img
                className="img-fluid"
                src={angular}
                alt="angular"
              />
            </div>
            <div className="col-4 col-sm-4 styles_workWith__xhVTu">
              <img
                className="img-fluid"
                src={kotlin} alt="Kotlin"
                style={{ height: 80, marginTop: 10 }}
              />
            </div>
          </div>
          {/* <div className="row styles_andMore__YSe8Q">
            <div className="col-md-12 col-12">And More</div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default aboutus