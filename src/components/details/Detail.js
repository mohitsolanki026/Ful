import React from "react";
import Detailcomp from "../detail comp/Detailcomp";
import Image from "../../svgtopng/kitty.png";
import Image2 from "../../svgtopng/kitty2.png";
import Image3 from "../../svgtopng/kitty3.png";
import Image4 from "../../svgtopng/kitty4.png";

import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import SecurityIcon from '@mui/icons-material/Security';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import WebhookIcon from '@mui/icons-material/Webhook';

import "./Detail.css";
function Detail() {
  const keyPoints = [
    "Website lookup capabilities and technology comparable to the best in the industry.",
    " Generate high quality leads with our technology reports.",
    "Identify technographic segmentation.",
  ];
  return (
    <div>
      <div className="Detail">
        <div className="d-img">
          <img src={Image} className="Detail-img" />
        </div>
        <div className="Detail-text">
          <Detailcomp
            icon={<DataSaverOffOutlinedIcon style={{ color: "#4f46e5" }} />}
            title="Data Enrichment"
            heading="Our data is available for all your general purpose tools"
            paragraph="Import your website list and our technology stack will do all the heavy lifting, pulling contact information that would take weeks or months to gather with traditional market research methods. Our tools and technologies crawl and scan websites completely autonomously."
            keyPoints={keyPoints}
          />
        </div>
      </div>
      <div className="Detail">
        <div className="Detail-text">
          <Detailcomp
            icon={<SecurityIcon style={{ color: "#4f46e5" }} />}
            title="Security Reconnaissance"
            heading="Your security is our top priority."
            paragraph="Security professionals worldwide use our web technologies. This solution helps you track security threats on your website. The technology also provides you with detailed information on vulnerabilities and exploitation risks."
            keyPoints={keyPoints}
          />
        </div>
        <div className="d-img">
          <img src={Image2} className="Detail-img" />
        </div>
      </div>
      <div className="Detail">
        <div className="d-img">
          <img src={Image3} className="Detail-img" />
        </div>
        <div className="Detail-text">
          <Detailcomp
            icon={<MarkEmailReadIcon style={{ color: "#4f46e5" }} />}
            title="Email Verification"
            heading="Never worry about non-delivery of your emails"
            paragraph="Our email extension technology verifies deliverability and checks the server connection to ensure that your email delivery rate remains high, keeping you off the contact blocklist. Our technologies allow us to do all of this without having to send an email to the contact."
            keyPoints={keyPoints}
          />
        </div>
      </div>
      <div className="Detail">
        <div className="Detail-text">
          <Detailcomp
            icon={<WebhookIcon style={{ color: "#4f46e5" }} />}
            title="APIs"
            heading="Get unlimited access to our APIs"
            paragraph="With Ful.io APIs, you have access to any technology stack, contact details, relevant social handles, and much more. Much like BuiltWith, our technology lets you analyze many websites at once, track data on technology usage, and even build your own analytics dataset."
            keyPoints={keyPoints}
          />
        </div>
        <div className="d-img">
          <img src={Image4} className="Detail-img" />
        </div>
      </div>
    </div>
  );
}

export default Detail;
