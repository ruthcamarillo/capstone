import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Emergency Contacts</h3>
          <p>Call 911 for immediate assistance in case of emergency.</p>
          <p>For non-emergency assistance, call (555) 555-5555.</p>
        </div>
        <div className="footer-section">
          <h3>Get Involved</h3>
          <p>Donate to help support disaster relief efforts.</p>
          <a href="https://secure.habitat.org/site/Donation2?df_id=4973&4973.donation=form1&s_src=DNWW14071000043&mrkgadid=3311692688&mrkgcl=1005&mrkgen=gtext&mrkgbflag=1&mrkgcat=exact&acctid=21700000001719422&device=c&network=g&matchtype=e&locationid=%7bloc_phyiscal_ms%7d&creative=652274748619&targetid=kwd-6201014221&campaignid=138111921&adgroupid=8353760961&gclid=EAIaIQobChMI3vDOmeq2_gIV5MfjBx2OGgf8EAAYASAAEgK0mfD_BwE&gclsrc=aw.ds">
  <button className="footer-button">Donate Now</button>
</a>

        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="footer-social">
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-attribution">
        <p>&copy; 2023 Disaster Dispatch. All Rights Reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;

// import React from 'react';
// // import './DisasterFooter.css';

// function Footer() {
//   return (
//     <footer className="disaster-footer">
//       <div className="disaster-footer-content">
//         <div className="disaster-footer-section">
//           <h3>Emergency Contacts</h3>
//           <p>Call 911 for immediate assistance in case of emergency.</p>
//           <p>For non-emergency assistance, call (555) 555-5555.</p>
//         </div>
//         <div className="disaster-footer-section">
//           <h3>Get Involved</h3>
//           <p>Donate to help support disaster relief efforts.</p>
//           <button className="disaster-footer-button">Donate Now</button>
//         </div>
//         <div className="disaster-footer-section">
//           <h3>Follow Us</h3>
//           <ul className="disaster-footer-social">
//             <li><a href="#">Facebook</a></li>
//             <li><a href="#">Twitter</a></li>
//             <li><a href="#">Instagram</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="disaster-footer-attribution">
//         <p>&copy; 2023 Disaster Dispatch. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default DisasterFooter;
// export default Footer;
// >>>>>>> 20fe82f (working on footer)
