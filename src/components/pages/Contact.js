import React, { useState } from "react";
import cnt from "../styles/cnt.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import { pattern } from "react-dom-factories";
import Footer from "../layout/Footer"

const Contact = () => {
  let history = useHistory();
  const [user, setUser] = useState({});
  const [topic, settopic] = useState({});
  const [details, setdetails] = useState({});

  const [userErr, setUserErr] = useState(false);
  const [topicErr, settopicErr] = useState(false);
  const [detailsErr, setdetailsErr] = useState(false);

  const { Fullname, Topic, Details } = user;
  const onInputChange = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
    let topics = e.target.value;
    if (item.length < 5) {
      settopicErr(true);
    } else {
      settopicErr(false);
    }
    settopic(topics);
    let detailss = e.target.value;
    if (detailss.length < 10) {
      setdetailsErr(true);
    } else {
      setdetailsErr(false);
    }
    setdetails(detailss);
  };

  let patternname = /^[a-zA-Z ]{2,30}$/
  const onSubmit = async (e) => {
    if (
      user.length < 3 ||
      user.value === null ||
      topic.value === null ||
      details.value ===null  ||
      topic.length < 5 ||
      details.length < 10 
    
      
      
    ) {
      alert("type correct value");
    }
  
     if (patternname.test(user)) {
     alert("please enter valid value")
     }
    //   if(pattern.test(user.value))
    // {
    //   alert("type correct value")
    // }
    // if(!pattern.test(topic))
    // {
    //   alert("type correct value")
    // }
    //  if(!pattern.test(details))
    // {
    //   alert("type correct value")
    // }
    else {
      e.preventDefault();
      await axios.post("http://localhost:3000/api/contactUs", user);
      history.push("/home");

      alert("you query has been submitted..... 😊😊");
    }
  };

  return (
    <div>
      <Card />
      <br></br>
      
      <div className="container">
        <div class="hero-large ">ContactUs</div>
        <form onSubmit={(e) => onSubmit(e)}>
          <ul>
            <li>
              <label id="fname" for="search">
                <span>
                  Name <span class="required-star">*</span>
                </span>
              </label>
              <input
                type="text"
                name="Fullname"
                id="search"
                required
                value={Fullname}
                onChange={(e) => onInputChange(e)}
              />
              {userErr ? (
                <span className="contact-form__txt">
                  {" "}
                  Please Type correct value...
                </span>
              ) : (
                ""
              )}
            </li>
            <li>
              <label id="fname2" for="search2">
                <span>
                  Topic<span class="required-star">*</span>
                </span>
              </label>
              <input
                type="text"
                id="search2"
                name="Topic"
                required
                value={Topic}
                required
                onChange={(e) => onInputChange(e)}
              />
              {topicErr ? (
                <span className="contact-form__txt">
                  Please Type corrcet value..
                </span>
              ) : (
                ""
              )}
            </li>
            <li>
              <label for="details">
                <span>
                  Details<span className="required-star">*</span>
                </span>
              </label>
              <input
                type="textarea rows=4"
                cols="50"
                name="Details"
                value={Details}
                onChange={(e) => onInputChange(e)}
              />
              {detailsErr ? (
                <span className="contact-form__txt">
                  Please Type corrcet value..
                </span>
              ) : (
                ""
              )}
            </li>
            <li>
              <input type="submit" />
            </li>
          </ul>
        </form>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
