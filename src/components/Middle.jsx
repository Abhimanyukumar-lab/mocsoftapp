import React from 'react'
import '../css/abc.css';
import './Middle.css';
import mumbaiPoliceLogo from '../assets/images/Mumbai_Police.png';
import biharPoliceLogo from '../assets/images/bihar_police_new_logo.png';
import cidLogo from '../assets/images/cid_logo.png';
import iitPatnaLogo from '../assets/images/iit_Patna_Logo_h.png';
import stfLogo from '../assets/images/stf_logo.png';
import darbhangaLogo from '../assets/images/darbahanga_police_logo.png';
import jamuiLogo from '../assets/images/jamui_police_logo.png';
import begusaraiLogo from '../assets/images/begusarai_police_logo.png';

export const Middle = () => {
  return (
    <div>
      <div className="container styles_companiesSection__Luurd">
  <div className="row">
    <div className="col-lg-12 col-12" style={{ textAlign: "center" }}>
      <div className="styles_companyTitle__jtdyi">
          Prestigious Instituitions We Have Worked With
      </div>
    </div>
    <div className="col-lg-12 col-12" style={{ marginTop: 30 }}>
      <div className=" row styles_companyImgBox__pnzpd">
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={biharPoliceLogo}
            alt="biharPolice"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={mumbaiPoliceLogo}
            alt="mumbaiPolice"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={cidLogo}
            alt="cidLogo"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={iitPatnaLogo}
            alt="iit"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={stfLogo}
            alt="stf"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={darbhangaLogo}
            alt="darbhangaLogo"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={begusaraiLogo}
            alt="begusaraiLogo"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6 styles_companyImage__hrSSZ">
          <img
            src={jamuiLogo}
            alt="jamuiLogo"
          />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}







export default Middle