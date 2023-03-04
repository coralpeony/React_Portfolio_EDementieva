import React from "react";

function Home() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-md-12 bg-gradient">
          <div className="card-body ">
            <img
              src="/images/avatar.jpg"
              className="card-img-top"
              alt="red hair girl"
              style={{ width: 500 }}
            />

            <h3 className="card-title ">CoralPeony</h3>
            <h1 className="d-flex justify-content-center">
              Welcome to my Portfolio
            </h1>

            <p>
              I'm thrilled to have this opportunity to introduce myself.
              I am a graduate of the Skills Boot Camp in Front-End Web
              Development, and I am passionate about learning, developing, and
              creating websites. With a strong foundation in HTML, CSS,
              JavaScript, and React, I am ready to take on new challenges and
              bring your web projects to life. Throughout my journey in the
              bootcamp, I have acquired valuable skills in creating responsive
              and visually appealing websites. I have also learned the
              importance of teamwork and communication, which are essential for
              any successful project. I am eager to collaborate with like-minded
              individuals and organizations to bring innovative ideas to life. With my passion for coding
            , I am confident that I can make a
              positive impact in the world of web development. Thank you for
              taking the time to get to know me. I look forward to connecting
              with you and exploring exciting opportunities together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
