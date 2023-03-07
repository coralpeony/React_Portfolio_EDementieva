import React from 'react';
//import { Link, Route, Routes } from 'react-router-dom';


function Contact(props) {
  return (
    <div className="contactBackground">
      <hr />
      <h1 className="textContact">Contact Me!</h1>
      <hr />
      <hr />
      <h3 className="textContact"> I am available for freelance work.</h3>
      <div class="col-md-12 text-center">
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="https://github.com/coralpeony" role="button">My GitHub</a>
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="https://www.linkedin.com/in/elena-dementieva-165b59140/" role="button">My LinkedIn</a>

      <a class="btn btn btn-outline-danger btn-lg margin-right" href={require("../../assets/cv.pdf")} /*download*/ role="button">My Resume</a>
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="#" role="button">My email: coralpeony21@gmail.com</a>

{/* submit form */}

<form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>
</div>

    </div>
  );
}

export default Contact;
