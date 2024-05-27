import React from 'react'
import '../css/abc.css';
import strategy from '../assets/images/mocsoft_strategy.svg'
import branding from '../assets/images/mocsoft_branding.svg'
import devOps from '../assets/images/mocsoft_devOps.svg'
import mobile from '../assets/images/mocsoft_mobile.svg'
import ui from '../assets/images/mocsoft_ui.svg'
import web from '../assets/images/mocsoft_web.svg'

const OurServices = () => {
  return (
    <>
    <div className="container styles_wideContainer__EvtTO" id="services">
  <div className="row">
    <div className="col-md-12 col-12" style={{ textAlign: "center" }}>
      <h2 className="styles_companyTitle__jtdyi">Our Services</h2>
    </div>
  </div>
  <div className="styles_section__amNg5 row">
    <div className="col-md-4 col-6">
      <div className="styles_card__kztxC" style={{ border: "none" }}>
        <img src={strategy} alt="Strategy & Planning" />
        <p className="styles_title__erKnM">Strategy &amp; Planning</p>
        <p>
          We work with you to find the right answers to your questions. Our
          strength lies in identifying the requirements from complex and
          ambiguous problems by holistic systems thinking approach.
        </p>
      </div>
    </div>
    <div className="col-md-4 col-6">
      <div className="styles_card__kztxC" style={{ border: "none" }}>
        <img src={branding} alt="Branding & Identity" />
        <p className="styles_title__erKnM">Branding &amp; Identity</p>
        <p>
          Every company is unique. Bringing it out in products and services is
          essential for connecting with desired target audiences. We will help
          you discover that essence and stand out from the crowd.
        </p>
      </div>
    </div>
    <div className="col-md-4 col-6">
      <div className="styles_card__kztxC" style={{ border: "none" }}>
        <img src={ui} alt="UI/UX Design" />
        <p className="styles_title__erKnM">UI/UX Design</p>
        <p>
          We are user focussed with no exceptions. We use user-centred design
          methods to uncover insights that champion user experience. We then
          convert them into beautiful &amp; functional UIs that users will love.
        </p>
      </div>
    </div>
    <div className="col-md-4 col-6">
      <div className="styles_card__kztxC" style={{ border: "none" }}>
        <img src={mobile} alt="Mobile Development" />
        <p className="styles_title__erKnM">Mobile App Development</p>
        <p>
          Our team has built apps used by millions of users. We create
          high-quality, well-tested, maintainable, and future-ready apps that
          you will love, and your users deserve.
        </p>
      </div>
    </div>
    <div className="col-md-4 col-6">
      <div className="styles_card__kztxC" style={{ border: "none" }}>
        <img src={web} alt="Web Development" />
        <p className="styles_title__erKnM">Web Development</p>
        <p>
          We believe content on the web should be accessible to all human beings
          on all networks. We stress heavily on web performance optimizations.
          We build single page apps to Progressive web apps.
        </p>
      </div>
    </div>
    <div className="col-md-4 col-6">
      <div className="styles_card__kztxC" style={{ border: "none" }}>
        <img src={devOps} alt="Server Dev Dev-Ops" />
        <p className="styles_title__erKnM">Server Dev Dev-Ops</p>
        <p>
          Want to move fast while not breaking things? We help you with tooling,
          versioning and branching strategies, and confident releases. The
          solutions designed are scalable both horizontally and vertically.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default OurServices