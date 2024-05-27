import '../assets/css/OurWork.css';
import Darpan from '../assets/images/Bihar_police.png'
import STF from '../assets/images/stf_logo.png'



export const OurWork = () => {
  return (
    <div>
      <div className="container styles_companiesSection__Luurd" id="work">
  <div className="row">
    <div className="col-md-12 col-12">
      <h2 className="styles_companyTitle__jtdyi">Our Work</h2>
    </div>
    <div className="col-md-12 col-12">
      <div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: 10,
            paddingLeft: 10
          }}
        >
          <div className="styles_btn__qBe3X styles_prev__lH7Sx ">
            <i className="fa fa-angle-left" />
          </div>
          <div className="styles_btn__qBe3X styles_next__jIYIo ">
            <i className="fa fa-angle-right" />
          </div>
        </div> */}
        <div className="styles_sliderContainer__Clen3">
          <div className="row styles_sliderWrapper__aC9_B">
            <div className="styles_workCard__Aa55Z">
              <div className="row" style={{ height: 100 }}>
                <div className="col-md-3 col-3">
                  <img
                    className="styles_workImage__eKzFj"
                    style={{ marginTop: 0 }}
                    src={Darpan}
                    alt="Darpan"
                  />
                </div>
                <div className="col-md-9 col-9">
                  <div className="row">
                    <span className="col-md-12 col-12 styles_workTitle__IqPRF">
                      Darpan
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-auto styles_badgeModify__atuKf">
                      UI/UX Design
                    </div>
                    <div className="col-auto styles_badgeModify__atuKf">
                      Mobile Development
                    </div>
                    <div className="col-auto styles_badgeModify__atuKf">
                      Web Development
                    </div>
                  </div>
                </div>
              </div>
              <div className="row undefined" style={{ height: 100 }}>
                <div className="col-md-12 col-12">
                  <p className="styles_workContent__4UH3W">
                    Data Analysis Software for Reforming Police Functions & Addressing Emergent Needs. 
                    It helps police departments reform their functions and address emergent needs by identifying crime patterns, developing targeted strategies, and improving accountability.
                  </p>
                </div>
              </div>
              <div className="row" style={{ height: 60 }}>
                <div className="col-12 styles_link__f779x">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://biharpolicedg.bihar.gov.in/"
                  >
                    <div className="d-flex p-2">
                      <div className="styles_viewProejct__V2jME">
                        View Project
                      </div>
                      <i
                        style={{
                          marginLeft: 10,
                          lineHeight: 18,
                          color: "#e94435"
                        }}
                        className="fa fa-arrow-right"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="styles_workCard__Aa55Z">
              <div className="row" style={{ height: 100 }}>
                <div className="col-md-3 col-3">
                  <img
                    className="styles_workImage__eKzFj"
                    style={{ marginTop: 0, height:"120px" }}
                    src={STF}
                    alt="ICMS Portal"
                  />
                </div>
                <div className="col-md-9 col-9">
                  <div className="row">
                    <span className="col-md-12 col-12 styles_workTitle__IqPRF">
                      ICMS Portal
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-auto styles_badgeModify__atuKf">
                      UI/UX Design
                    </div>
                    <div className="col-auto styles_badgeModify__atuKf">
                      Web Development
                    </div>
                  </div>
                </div>
              </div>
              <div className="row undefined" style={{ height: 100 }}>
                <div className="col-md-12 col-12">
                  <p className="styles_workContent__4UH3W">
                  The Integrated Criminal Monitoring System (ICMS) is a software platform developed for the STF Technical and Analysis Wing (S-TAW) to help police departments track and monitor criminal activity.
                  </p>
                </div>
              </div>
              <div className="row" style={{ height: 60 }}>
                <div className="col-12 styles_link__f779x">
                  <a
                    target="_blank"
                    rel="noopener"
                    href=""
                  >
                    <div className="d-flex p-2">
                      <div className="styles_viewProejct__V2jME">
                        View Project
                      </div>
                      <i
                        style={{
                          marginLeft: 10,
                          lineHeight: 18,
                          color: "#e94435"
                        }}
                        className="fa fa-arrow-right"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
        <a
          className="styles_buttonWhiteColor___S7qf"
          style={{ textDecoration: 'underline', marginRight: 150}}
          href="/work"
        >
          View More
        </a>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}



export default OurWork