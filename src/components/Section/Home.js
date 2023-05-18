import React from "react";
import Slider from "../body/Slider";

function Home() {
  return (
    <div className="home-wrapper">
      <Slider />

      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <h2>More About Us</h2>
          </div>
          <p>
            A land registration system using blockchain is an innovative project
            that aims to revolutionize the way land ownership is recorded,
            verified, and transferred. By leveraging the features of blockchain
            technology, such as decentralization, transparency, and
            immutability, this project seeks to address the challenges
            associated with traditional land registration systems and create a
            more efficient and trustworthy framework. The project entails the
            development of a digital platform that serves as a decentralized
            ledger for recording and managing land ownership records. Each land
            parcel is assigned a unique identifier, and details such as
            ownership history, boundaries, and encumbrances are recorded as
            transactions on the blockchain. These transactions are time-stamped,
            cryptographically secured, and distributed across a network of
            computers, making it nearly impossible for unauthorized
            modifications or fraudulent activities to occur unnoticed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
