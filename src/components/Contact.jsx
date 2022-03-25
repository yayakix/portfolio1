import React from "react";

function Contact(){
    return <div>
    <div className="contact-form">
    <h1 className="contact-div">Contact Me</h1>
  <form className="form-div">

    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" placeholder="Your name.."/>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your email"/>
    <br/>

    <label for="country">Company</label>
    <input type="text" id="company" name="company" placeholder="Company"/>
    <br/>
    <label for="subject">Message</label>
    <textarea id="subject" rows="8" cols="50" name="subject" placeholder="Write something.." ></textarea>

    <input id="submit" type="submit" value="Submit"/>

  </form>
  </div>
</div>
}

export default Contact;