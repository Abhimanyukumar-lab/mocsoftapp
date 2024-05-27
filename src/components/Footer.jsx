import React from 'react'
import '../css/abc.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import mocLogo from '../assets/images/mocsoftlogo.png'


const visitorCounterCode = `
  <!-- RevolverMaps Visitor Counter Code -->
  <script type="text/javascript" src="//rf.revolvermaps.com/w/0/0/2.js?i=5l5uzyry4mw&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=0" async="async"></script>
  <!-- End of RevolverMaps Visitor Counter Code -->
`;

const Footer = () => {
  return (
    <>
    <div className="container-fluid  styles_footerContainer__JY2aC">
  <div className="container">
    {/* <div className="row styles_inner__zteNS">
      <div
        className="col-md-10 col-8 styles_imageDivStyle__zsgjz"
        style={{ textAlign: "left" }}
      >
        <img
          alt="mocsoft"
          src={mocLogo}
          style={{ paddingLeft: 12 ,height:33}}
        />
      </div>
      <div
        className="col-md-2 col-4 styles_imageDivStyle__zsgjz styles_socialLinks__i6QcV"
        style={{ textAlign: "right" }}
      >
        <div style={{ display: "inline-block" }}>
          <a
            target="_blank"
            rel="noopener"
            href="/"
          >
            <span>Facebook</span>
            <i className="fa fa-facebook-square" />
          </a>
        </div>
        <div style={{ display: "inline-block", marginLeft: 10 }}>
          <a
            target="_blank"
            rel="noopener"
            href="/"
          >
            <span>LinkedIn</span>
            <i className="fa fa-linkedin-square" />
          </a>
        </div>
        <div style={{ display: "inline-block", marginLeft: 10 }}>
          <a target="_blank" rel="noopener" href="/">
            <span>Twitter</span>
            <i className="fa fa-twitter-square" />
          </a>
        </div>
      </div>
    </div> */}
    <div className="row styles_inner__zteNS">
      <div className="col-md-4 col-12">
        <div className="col-md-12 col-12  styles_footerHeading__KFMpf">
          Important Links
        </div>
        <div className="col-md-12 col-12  styles_footerHeading__KFMpf">
          <div className="row">
            <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <Link to="/">Home</Link>
            </div>
            <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <Link to="/our-services">Services</Link>
            </div>
            {/* <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <Link target="_blank" href="/blog">
                Blog
              </Link>
            </div> */}
            <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <Link to="/our-work">Our Work</Link>
            </div>
            <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <Link to="/aboutus">About us</Link>
            </div>
            <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <Link to="/contact/">Contact us</Link>
            </div>
            {/* <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <Link
                target="_blank"
                to="/careers"
              >
                Careers
              </Link>
            </div> */}
            {/* <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <a href="/tnc/">Terms &amp; Conditions</a>
            </div> */}
            {/* <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <a href="/refund/">Refund</a>
            </div> */}
            {/* <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
              <a href="/privacy/">Privacy Policy</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div className="col-md-12 col-12  styles_footerHeading__KFMpf">
          Contact
        </div>
        <div className="styles_footerHeading__KFMpf">
          <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
            <span>
              <i className="fa fa-envelope" style={{ width: 16 }} />
            </span>
            <span>info@mocsoft.in</span>
          </div>
          <div className="col-md-12 col-12  styles_footerLinks__mNc2n">
            <span style={{ fontWeight: 600, marginTop: 12 }}>
              <span>
                <i className="fa fa-map-marker" style={{ width: 16 }} />
              </span>
              <span>Mumbai Office</span>
            </span>
            <p
              style={{
                fontSize: 12,
                color: "#f8f8ffba",
                paddingLeft: 16,
                paddingTop: 4
              }}
            >
              D449, Vashi Plaza Sector 17
              <br />
              Navi Mumbai (New Mumbai)
              <br /> India, Maharashtra
            </p>
          </div>
          <div
            className="col-md-12 col-12  styles_footerLinks__mNc2n"
            style={{ marginTop: 75 }}
          >
            <span style={{ fontWeight: 600, marginTop: 12 }}>
              <span>
                <i className="fa fa-map-marker" style={{ width: 16 }} />
              </span>
              <span>Patna Office</span>
            </span>
            <p
              style={{
                fontSize: 12,
                color: "#f8f8ffba",
                paddingLeft: 16,
                paddingTop: 4
              }}
            >
              Gagan Apartment,
              <br />
              Exhibition Road, Patna - 800001
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12 styles_lvTouchedContainer__IqfGQ">
      <div
        className="col-md-10 col-8 styles_imageDivStyle__zsgjz"
        style={{ textAlign: "left" }}
      >
        <img
          alt="mocsoft"
          src={mocLogo}
          style={{ paddingLeft: 55 ,height:33}}
        />
      </div>
        <div className="col-md-12 col-12 styles_oneMn__JsNT1">
          <span className="styles_lvTouched__qQWU8">Million Lives Touched</span>
          <br />
          <span className="styles_startJourney__QK94t">
            Start your journey with us :)
          </span>
        </div>
      </div>
    </div>
    <div className="row styles_companyInfo__h6G_k styles_inner__zteNS">
  <div className="col-md-8 col-12 styles_copyRight__MF_FI text-left">
    Copyright Mocsoft Technologies Pvt Ltd - 2024
  </div>
</div>

    <div className="col-md-4 col-12">
              {/* Embed the visitor counter code here */}
              <div dangerouslySetInnerHTML={{ __html: visitorCounterCode }} />
            </div>
  </div>
</div>

    
    </>
  )
}

export default Footer