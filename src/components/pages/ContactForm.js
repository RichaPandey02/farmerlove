import React, { useState } from "react";
import contactus from "../styles/contactus.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "./Card";
// import Footer from "../layout/Footer";

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
    if (item.length < 3  ) {
      setUserErr(true);
    }
    
    else {
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

  
  const onSubmit = async (e) => {
    if (
      user.length < 3 ||
      user.value === null ||
      topic.value === null ||
      details.value === null ||
      topic.length < 5 ||
      details.length < 10
    ) {
      alert("type correct value");
    }

   
    
    else {
      e.preventDefault();
      await axios.post("http://localhost:3000/api/contactUs", user);
      history.push("/home");

      // alert("you query has been submitted..... 😊😊");
    }
  };

  return (
    // <div>
    //   <Card />

    //   <div className="container">
    //     <div class=" container__hero-large ">
    //       <h1 className="container__name">Contact Us</h1>
    //     </div>
    //     <form onSubmit={(e) => onSubmit(e)}>
    //       <ul>
    //         <li>
    //           <label id="fname" for="search">
    //             <span>
    //               Name <span class="container__required-star">*</span>
    //             </span>
    //           </label>
    //           <input
    //             type="text"
    //             name="Fullname"
    //             id="search"
    //             required
    //             required
    //             minLength={3}
    //             maxLength={50}
    //             value={Fullname}
    //             onChange={(e) => onInputChange(e)}
    //           />
    //           {userErr ? (
    //             <span className="contact-form__txt">
    //               {" "}
    //               Please Type correct value...
    //             </span>
    //           ) : (
    //             ""
    //           )}
    //         </li>
    //         <li>
    //           <label id="fname2" for="search2">
    //             <span>
    //               Topic<span class="container__required-star">*</span>
    //             </span>
    //           </label>
    //           <input
    //             type="text"
    //             id="search2"
    //             name="Topic"
    //             required
    //             value={Topic}
    //             required
    //             onChange={(e) => onInputChange(e)}
    //           />
    //           {topicErr ? (
    //             <span className="contact-form__txt">
    //               Please Type corrcet value..
    //             </span>
    //           ) : (
    //             ""
    //           )}
    //         </li>
    //         <li>
    //           <label for="details" id="search">
    //             <span>
    //               Details<span className="container__required-star">*</span>
    //             </span>
    //           </label>
    //           <input
    //             type="textarea rows=4"
    //             cols="50"
    //             id="search"
    //             name="Details"
    //             value={Details}
    //             onChange={(e) => onInputChange(e)}
    //           />
    //           {detailsErr ? (
    //             <span className="contact-form__txt">
    //               Please Type corrcet value..
    //             </span>
    //           ) : (
    //             ""
    //           )}
    //         </li>
    //         <li>
    //           <input type="submit" />
    //         </li>
    //       </ul>
    //     </form>
    //   </div>
    //   <Footer />
    // </div>

    <div>
      <Card />
      <br/>
      <h1 className="contact-heading">Contact Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div id="contact-form">
              <form onSubmit={(e) => onSubmit(e)} class="form">
                <div className="form-group ">
                  <input
                    type="text"
                    name="Fullname"
                    id="search"
                    placeholder="Enter your name"
                    required
                    className="form-control"
                    minLength={3}
                    maxLength={50}
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
                  <label className="form-label" id="fname" for="search">
                    Name
                  </label>
                </div>
                <div className="form-group ">
                  <input
                    type="text"
                    id="search2"
                    name="Topic"
                    required
                    value={Topic}
                    class="form-control"
                    placeholder="Enter your Topic"
                    onChange={(e) => onInputChange(e)}
                  />
                  {topicErr ? (
                    <span  className="contact-form__txt">
                      Please Type corrcet value..
                    </span>
                  ) : (
                    ""
                  )}
                  <label className="form-label" id="fname2" for="search2">
                    Topic
                  </label>
                </div>
                <div className="form-group ">
                  <textarea
                    className="form-control textarea"
                    name="Details"
                    onChange={(e) => onInputChange(e)}
                    id="search"
                    value={Details}
                    rows="4"
                    placeholder="Write a details"
                  ></textarea>
                   {detailsErr ? (
               <span className="contact-form__txt">
                  Please Type corrcet value..
                </span>
              ) : (
                ""
              )}
                  <label class="form-label" for="details" id="search">
                    Details
                  </label>
                </div>
                <button type="submit" className="submit-button">
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;