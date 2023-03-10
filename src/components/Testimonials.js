import React from 'react'
import RewCard from './RewCard'
import p1 from "../svgtopng/p1.webp";
import p2 from "../svgtopng/p2.webp";
import p3 from "../svgtopng/p3.png";
import p4 from "../svgtopng/p4.webp";
import p5 from "../svgtopng/p5.webp";
import p6 from "../svgtopng/p6.jpg";
import "./Testimonial.css"
function Testimonials() {
  return (
    <div className='test-container' >
      <h2  style={{textAlign:"center",padding:"10px"}}>Testimonials</h2>
      <div className="test-components">
        <RewCard
        image={p1}
        name="Todd Dunsmore"
        companyName={"Doja Marketing/Defi Founder"}
        message={"These web technologies quickly became a game-changer for our business. Lead generation projects that used to take a whole team are completely automatic now. We were able to segment traffic based on location, identify more prospects, and onboard more clients. I can't say enough good things about Ful.io."}
        />
          <RewCard
        image={p2}
        name="Nicholas Altimore"
        companyName={"Sirlinksalot"}
        message={"Companies need an edge, and Ful.io provided that edge for us. We'd previously used BuiltWith, but the data and analytics capabilities of Ful.io were a better fit for us."}
        />
          <RewCard
        image={p3}
        name="Chris Richardse"
        companyName={"Utterly Digital"}
        message={"We used to manually upload contact details and other data, but it took way too long. We needed a solution that could automate the process and free up resources. Ful.io just works for us. Their technology is incredible."}
        />
          <RewCard
        image={p4}
        name="Robert Kaene"
        companyName={"The Wednesday Club"}
        message={"Ful.io's apps and tools have completely changed the way we look at traffic and identify prospects. Before, our R&D team tried BuiltWith, then worked to develop our own technology. But with Ful.io, we can save both time and money."}
        />
          <RewCard
        image={p5}
        name="Mad Singers"
        companyName={"SEO Mastery Summit"}
        message={"We're always looking for new ways to boost our advertising efforts and analyze websites to improve our processes. Ful.io has been a perfect partner throughout. We've been able to discover more valuable data on prospects than we ever did on our own."}
        />
          <RewCard
        image={p6}
        name="Todd Dunsmore"
        companyName={"Doja Marketing/Defi Founder"}
        message={"These web technologies quickly became a game-changer for our business. Lead generation projects that used to take a whole team are completely automatic now. We were able to segment traffic based on location, identify more prospects, and onboard more clients. I can't say enough good things about Ful.io."}
        />

      </div>
    </div>
  )
}

export default Testimonials