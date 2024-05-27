import React from 'react'
import '../css/abc.css';
import vishal from '../assets/images/mocsoft_vishal_sharma.jpg'
import awakash from '../assets/images/mocsoft_awakash.jpg'
import santosh from '../assets/images/mocsoft_santosh.jpg'

const People = () => {
  return (
    <>
    <div className="container styles_wideContainer__EvtTO">
  <div className="row">
    <div className="col-md-12 col-12">
      <h2 className="styles_companyTitle__jtdyi">What people say about us</h2>
    </div>
    <div className="styles_section__amNg5 col-md-12 col-12">
      <div>
        <div className="styles_sliderContainer__Clen3">
          <div className="row styles_sliderWrapper__aC9_B" style={{ marginRight: '71px' }}>
            <div className="styles_workCard__Aa55Z styles_peopleCard__cHb8r  col-md-4 col-12">
              <div className="col-md-12 col-12">
                <img
                  className="styles_workImage__eKzFj"
                  src={vishal}
                  alt="vishal"
                />
              </div>
              <div className="col-md-12 col-12" style={{ marginTop: 15 }}>
                <span className="styles_workTitle__IqPRF">Vishal Sharma</span>
              </div>
              <div className="col-md-12 col-12">
                <span className="styles_designation__gsgyq">
                SP Purnea, 2019
                </span>
              </div>
              <div className="col-md-12 col-12">
                <p
                  className="styles_workContent__4UH3W"
                  style={{ padding: 10 }}
                >
                  SP Office Purnea appreciates MOCSOFT TECHNOLOGIES PVT LTD for its special effort which has made this possible to achieve the digitization of various process of police functioning at Purnea Police district office.
                </p>
              </div>
            </div>
            <div className="styles_workCard__Aa55Z styles_peopleCard__cHb8r  col-md-4 col-12">
              <div className="col-md-12 col-12">
                <img
                  className="styles_workImage__eKzFj"
                  src={santosh}
                  alt="santosh"
                />
              </div>
              <div className="col-md-12 col-12" style={{ marginTop: 15 }}>
                <span className="styles_workTitle__IqPRF">Santosh Kumar</span>
              </div>
              <div className="col-md-12 col-12">
                <span className="styles_designation__gsgyq">
                  SP Sheohar - 2019, SP STF (Bihar) - 2023
                </span>
              </div>
              <div className="col-md-12 col-12">
                <p
                  className="styles_workContent__4UH3W"
                  style={{ padding: 10 }}
                >
                  SP Office Sheohar digital initiative is widely appreciated, (PSAM) Police Service Automation Management System implemented at Sheohar which is helping citizen of Sheohar as well as police personal official in many ways.

                </p>
              </div>
            </div>
            <div className="styles_workCard__Aa55Z styles_peopleCard__cHb8r  col-md-4 col-12">
              <div className="col-md-12 col-12">
                <img
                  className="styles_workImage__eKzFj"
                  src={awakash}
                  alt="awakash"
                />
              </div>
              <div className="col-md-12 col-12" style={{ marginTop: 15 }}>
                <span className="styles_workTitle__IqPRF">Awakash Kumar</span>
              </div>
              <div className="col-md-12 col-12">
                <span className="styles_designation__gsgyq">
                  SP Begusarai - 2019, SSP Darbhanga - 2022
                </span>
              </div>
              <div className="col-md-12 col-12">
                <p
                  className="styles_workContent__4UH3W"
                  style={{ padding: 10 }}
                >
                  SP Office Begusarai appreciates the work of MOCSOFT TECHNOLOGIES PVT LTD for its continuous effort in providing digital solution to district police office and wishing them for their successful future endeavour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default People