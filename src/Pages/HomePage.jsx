import { Link } from 'react-router-dom';
import React from "react";
import '../css/Home.css';

const HomePage = () => {
    return (
      <div className="home-page">
      
      <>
        <h1>SECOND LIFE PRODUCTS</h1>
        <p>Welcome to The Second Life Products Network™! We are a grassroots & entirely nonprofit movement of people who are
           giving and getting stuff for free in their own Towns. It's all about reuse and keeping good stuff out of
            landfills. Membership is free. And now you can also set up your own, smaller personal Friends Circle for 
            gifting and lending of items with just your friends! <Link to='/signup'>Signup Now </Link></p>
              <h2>Changing the world one gift at a time™</h2>
              <p>Our mission is to build a worldwide sharing movement that reduces waste, saves precious resources & eases the
                 burden on our landfills while enabling our members to benefit from the strength of a larger community.</p>  
                  <h3>MEMBERSHIP IS ALWAYS FREE</h3>
                  <h3>OPERATION IS GRASSROOTS AND 100% NONPROFIT</h3>
                  <h3>LOCAL TOWNS ARE MODERATED BY VOLUNTEERS</h3>
                  <h3>ZERO TOLERANCE OF SCAMS, SPAM AND ADULT CONTENT</h3>   
      </>
      </div>
    )
  }
  
  export default HomePage;
  