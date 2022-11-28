import React from "react";
import "./Testimonials.css";
import test1 from "../../Images/Ellipse 175.png";
import test2 from "../../Images/Ellipse 175 (1).png";
import test3 from "../../Images/Ellipse 175 (2).png";
import star from "../../Images/star.svg";

export default function Testimonials() {
  const testimonial = [
    {
      name: "Viezh Robert",
      title: "Warsaw, Poland",
      image: test1,
      content:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      rating: 4.5,
    },
    {
      name: "Yessica Christy",
      title: "Shanxi, China",
      image: test2,
      content:
        "““I like it because I like to travel far and still can connect with high speed.”.”.",
      rating: 4.5,
    },
    {
      name: "Kim Young Jou",
      title: "Seoul, South Korea",
      image: test3,
      content:
        "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
      rating: 4.5,
    },
  ];

  return (
    <>
      <div id="Testimonials" className="testcontainer">
        <div className="testimonialswrap">
          <div className="testimonial-text section-text">
            <h2 className="testimonial-header sub-heading">
              Trusted by Thousands of Happy Customer
            </h2>
            <p className="testimonial-desc sub-desc">
              This are the stories of our customers who have joined us with
              great pleasure when using this crazy features.
            </p>
          </div>
          <div className="slider">
            <div className="testimonials">
              <div className="testimonial-box-container">
                {testimonial.map((item) => (
                  <>
                    <div className="testimonial-box">
                      <div className="box-top">
                        <div className="profile">
                          <div className="profile-img">
                            <img src={item.image} alt="" />
                          </div>

                          <div className="name-user">
                            <strong>{item.name}</strong>
                            <span>{item.title}</span>
                          </div>
                        </div>
                        <div className="reviews">
                          <p className="person-rating">{item.rating}</p>
                          <img className="rating-icon" src={star} alt="star" />
                        </div>
                      </div>

                      <div className="client-comment">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <div className="item-links">
              <div className="control-pointers-pos-1"></div>
              <div className="control-pointers-pos-2"></div>
              <div className="control-pointers-pos-2"></div>
              <div className="control-pointers-pos-2"></div>
            </div>
            <div className="sliderbtns">
              <div id="arrow-left" className="arrows">
                <h1>&larr;</h1>
              </div>
              <div id="arrow-right" className="arrows">
                <h1>&rarr;</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
