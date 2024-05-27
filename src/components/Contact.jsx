import React from 'react'
import contact from '../assets/images/mocsoft_contact.png'

const Contact = () => {
  return (
    <div>
        <div className="container styles_containerMargin__QmfkH mt-5">
  <div className="row">
    <div className="col-md-8 col-12 styles_leftBuffer__Q9eZy">
      <span className="styles_heading__6H4AQ">
        {" "}
        Let's start a conversation.
      </span>
    </div>
  </div>
  <div className="row">
    <div className="col-md-7 col-12">
      <form id="contact-form">
        <div className="row form-group styles_topBuffer__DD5s4 mb-2">
          <div className="col-md-6">
            <label className="styles_label__rqH9T" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="your name"
              placeholder="Full name here"
            />
          </div>
          <div className="col-md-6 styles_topBufferMobile__ccvL4">
            <label htmlFor="phoneNumber" className="styles_label__rqH9T">
              Your Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              name="phone"
              aria-describedby="phone number"
              placeholder="Phone number here"
              min={6000000000}
              max={9999999999}
            />
          </div>
          <div className="col-md-12 styles_topBuffer__DD5s4">
            <label htmlFor="emailAddress" className="styles_label__rqH9T">
              Your Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              name="email"
              aria-describedby="email address"
              placeholder="Email address here"
            />
          </div>
          {/* <div className="col-md-12 styles_topBuffer__DD5s4">
            <label className="styles_label__rqH9T">
              Estimated duration of your project (optional)
            </label>
          </div> */}
          {/* <div
            className="col-md-3 styles_customControl__y6Tmx custom-radio"
            style={{ display: "flex", gap: 8 }}
          >
            <input
              type="radio"
              className="custom-control-input"
              id="1-4"
              name="duration"
              defaultValue="1-4 months"
            />
            <label className="custom-control-label text-muted" htmlFor="1-4">
              1-4 months
            </label>
          </div> */}
          {/* <div className="col-md-3 styles_customControl__y6Tmx custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="4-11"
              name="duration"
              defaultValue="4-11 months"
            />
            <label className="custom-control-label text-muted" htmlFor="4-11">
              4-11 months
            </label>
          </div> */}
          {/* <div className="col-md-3 styles_customControl__y6Tmx custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="4-above"
              name="duration"
              defaultValue="1 year or more"
            />
            <label
              className="custom-control-label text-muted"
              htmlFor="4-above"
            >
              1 year or more
            </label>
          </div> */}
          <div className="col-md-12 styles_topBuffer__DD5s4">
            <label className="styles_label__rqH9T" htmlFor="comment">
              What can we help you with?
            </label>
            <textarea
              className="form-control"
              placeholder="Write a bit about your project/requirement here"
              rows={5}
              id="comment"
              name="details"
              defaultValue={""}
            />
          </div>
          <div className="col-md-12 test-right styles_topBuffer__DD5s4 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                backgroundColor: "rgb(233, 68, 53)",
                border: 0,
                width: 180
              }}
            >
              SUBMIT DETAILS
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="col-md-5 col-12">
      <img className="img-fluid" src={contact} />
    </div>
  </div>
  <div className="mt-5">
    <div className="mb-3 styles_reachUs__yqYyy">
      <strong>Reach Us</strong>
    </div>
    <div className="row">
      <div className="col-md-3 col-6">
        <span className="styles_officeHeading__NCBnS">
          <strong>Mumbai Office</strong>
        </span>
        <address className="mt-2 styles_officeAddress__i47sw">
              D449, Vashi Plaza Sector 17
              <br />
              Navi Mumbai (New Mumbai)
              <br /> India, Maharashtra
        </address>
      </div>
      <div className="col-md-3 col-6">
        <span className="styles_officeHeading__NCBnS">
          <strong>Patna Office</strong>
        </span>
        <address className="mt-2 styles_officeAddress__i47sw">
            Gagan Apartment,
              <br />
              Exhibition Road, Patna - 800001
        </address>
      </div>
    </div>
    <div className="row mb-4 styles_emailPhone__MrCW6">
      <div className="col-md-3 col-6">
        <i className="fa fa-envelope" aria-hidden="true" />
        &nbsp;info@mocsoft.in
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Contact