import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function About() {
  return (
    <div className="about-content">
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Project</h3>
              <div className="underline mx-auto"></div>
              <p className="about-paragraph">
                A land registration system using blockchain is an innovative
                project that aims to revolutionize the way land ownership is
                recorded, verified, and transferred. By leveraging the features
                of blockchain technology, such as decentralization,
                transparency, and immutability, this project seeks to address
                the challenges associated with traditional land registration
                systems and create a more efficient and trustworthy framework.
                The project entails the development of a digital platform that
                serves as a decentralized ledger for recording and managing land
                ownership records. Each land parcel is assigned a unique
                identifier, and details such as ownership history, boundaries,
                and encumbrances are recorded as transactions on the blockchain.
                These transactions are time-stamped, cryptographically secured,
                and distributed across a network of computers, making it nearly
                impossible for unauthorized modifications or fraudulent
                activities to occur unnoticed.
              </p>
              <Link to="#" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Vision, Mission and Values</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4 text-center">
              <h5>Our Mission</h5>
              <p className="home-content">
                The mission of a land registration system using blockchain is to
                create a transparent, secure, and efficient method for recording
                and managing land ownership and related transactions. By
                leveraging blockchain technology, the project aims to overcome
                traditional challenges associated with land registries, such as
                fraud, corruption, disputes, and lack of trust.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <h5>Our Vision</h5>
              <p className="home-content">
                The vision for a land registration system using blockchain
                project is to create a modern, inclusive, and reliable land
                management infrastructure that leverages the benefits of
                blockchain technology. The project envisions a future where land
                registration processes are transparent, efficient, and secure,
                leading to improved land governance and socio-economic
                development.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <h5>Our Values</h5>
              <p className="home-content">
                The values for a land registration system using blockchain
                project typically revolve around principles such as
                transparency, security, efficiency, trust, inclusivity, and
                accountability.These values collectively contribute to the
                overall objective of improving land governance, reducing fraud,
                fostering economic development, and ensuring equitable access to
                land resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
