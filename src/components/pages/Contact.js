import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


function Contact(props) {
  return (
    <div className="contactBackground">
      <hr />
      <h1 className="textContact">Contact Me!</h1>
      <hr />
      <hr />
      <h3 className="textContact"> I am available for freelance work.</h3>
      <div class="col-md-12 text-center">
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="#" role="button">My GitHub</a>
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="#" role="button">My LinkedIn</a>
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="#" role="button">My Resume</a>
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="#" role="button">Call Me</a>
      <a class="btn btn btn-outline-danger btn-lg margin-right" href="#" role="button">Email Me</a>
</div>
    </div>
  );
}

export default Contact;
