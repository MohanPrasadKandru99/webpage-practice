import React, { useEffect, useRef } from "react";
import "./Section2.css";
import { Element } from "react-scroll";

const cards = [
  {
    title: "Data Engineering",
    iconClass: "ti-vector",
    subtitle: "Transforming data into valuable insights"
  },
  {
    title: "Analytics",
    iconClass: "ti-write",
    subtitle: "Analyzing trends and patterns"
  },
  {
    title: "Cloud Services",
    iconClass: "ti-package",
    subtitle: "Scalable and reliable cloud solutions"
  },
  {
    title: "IT Services",
    iconClass: "ti-map-alt",
    subtitle: "Efficient and secure IT infrastructure"
  },
  {
    title: "App Services",
    iconClass: "ti-bar-chart",
    subtitle: "Developing innovative applications"
  },
  {
    title: "Cyber Security",
    iconClass: "ti-support",
    subtitle: "Protecting your digital assets"
  }
];

const Section2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateOnLoad();
    window.addEventListener("scroll", handleScrollAnimations);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);

  const animateOnLoad = () => {
    const cards = sectionRef.current.querySelectorAll(".card");
    cards.forEach((card, index) => {
      card.classList.add(`card-animation-${index % 4}`);
    });
  };

  const handleScrollAnimations = () => {
    const cards = sectionRef.current.querySelectorAll(".card");
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (cardPosition < screenHeight) {
        card.classList.add("animate");
      } else {
        card.classList.remove("animate");
      }
    });
  };

  return (
    <section className="section" id="collab" ref={sectionRef}>
      <div className="container">
        <h2 className="mb-5 pb-4 text-white text-center">What we can do</h2>
        <div className="row">
          {cards.map((card, index) => (
            <Element key={index} name={`card-${index}`} className="col-md-4 col-sm-6">
              <div className={`card mb-5 card-animation-${index % 4}`} data-animation={index % 4 === 0 ? "top" : index % 4 === 1 ? "bottom" : index % 4 === 2 ? "left" : "right"}>
                <div className="card-header has-icon">
                  <i className={`ti ${card.iconClass} text-danger`} aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">{card.title}</h5>
                  <p className="card-subtitle">{card.subtitle}</p>
                </div>
              </div>
            </Element>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
