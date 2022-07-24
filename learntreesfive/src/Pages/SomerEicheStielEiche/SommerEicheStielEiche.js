import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";



const ExternalLink = () => {
   return <div>
      <a href="https://www.google.com/search?q=sommer+eiche&rlz=1C1CHBF_deDE926DE926&sxsrf=ALiCzsZlZhJrszfwqbkmvuZnbIq0opPU3w:1658236232104&tbm=isch&source=iu&ictx=1&vet=1&fir=x5tSTU9oPyPknM%252C5cE6Rycn-bkAGM%252C_%253BGOwgNAzmjkq7dM%252CBqdroGtEQ1hEGM%252C_%253B4nydX7FP4qwtwM%252CuAxh1yuZPtLNkM%252C_%253Bv91du8F8zSXvPM%252C4A5lWj7wYXHb1M%252C_%253BBQR5HfdBM3m5IM%252C90ucXToG1JWEhM%252C_%253BmXJ-c8Uc-nfZaM%252CkveyyVpceqQBxM%252C_%253BUD9KnH4IzI6pJM%252CFgyeBrIbNK4PvM%252C_%253Bk40V1m6KX722bM%252CyeZU2dUwVnIffM%252C_%253B90C7yn215AzUMM%252CNK1OF5BUrXRGmM%252C_%253B9ZW-eoLtUmeaZM%252CWTuR1e5SuYKePM%252C_%253Bzc337e7sM2jmpM%252CJBx_DxHw2ZSSdM%252C_%253BxSstUn2byVhduM%252CbAGuSATxLQHquM%252C_%253Bt5aMVdIgpPFMEM%252CAydiy2Qk46HnaM%252C_%253Bn0T28R7S_7iJ3M%252CmJ0Cu2ZzVhWrQM%252C_%253B1fUEmj2JvadQQM%252Co26SG4Sbp9MTPM%252C_%253BZXIqUMdY0glbcM%252CLFzOOYo9afYArM%252C_&usg=AI4_-kTXNanLRhUpvQxgg7JbAQbISnddBQ&sa=X&ved=2ahUKEwihx8Wsg4X5AhVPi_0HHeFTAegQ9QF6BAgSEAE#imgrc=4nydX7FP4qwtwM" target="_blank"><div className="externalLink">More info Here</div></a>
   </div>
}

const GewohnlicheEsche= () => {
return( 
    <>
    <div className="page-body">
      <Navbar />
      <div className="">
                            <div className="about-page-back">
                            <Link to = '/home'> <a className="navbar-brand">Back</a></Link>
                            </div>
              </div>
      <AppLogo />
      <div>
                 <hr style={{
                    background: 'grey',
                    color: 'black',
                    borderColor: 'black',
                    height: '3px',
                 }}></hr>
                 </div>
                 <div className="group">Scientific name:</div>
                 <div classname="scientific-name">Quercus robur</div>
                 <div>
                  <img src="https://www.lfl.bayern.de/mam/cms07/iab/bilder/quercus_robur_wuchs_in_flur.jpg" alt="image" />
                 </div>
              
                 <div>
                  <ExternalLink />
                 </div>

   </div>
   </>
);
};



export default GewohnlicheEsche;