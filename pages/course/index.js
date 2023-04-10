import React from "react";

const marquee = ({ array }) => {
  return (
    <div class="marquee">
      <ul class="marquee__content">
        {array.map((array, index) => {
          return <li key={index}>{array}</li>;
        })}
      </ul>
      <ul class="marquee__content" aria-hidden="true">
        {array.map((array, index) => {
          return <li key={index}>{array}</li>;
        })}
      </ul>
    </div>
  );
};

function Course() {
  const experiences = Array(10).fill("Expérience");
  const scolarity = Array(10).fill("Scolarité");

  return (
    <section className="landing">
      <h1 className="landing__title">Parcours</h1>
      <div className="course">
        {marquee({
          array: experiences,
        })}
        <ul className="course__list">
          <li>
            <span>2023</span>
            <div className="course__list__title">
              <h2>Stage Technicien Réseau</h2>
            </div>
          </li>
          <li>
            <span>2022</span>
            <div className="course__list__title">
              <h2>Stage Développeur Web</h2>
            </div>
          </li>
        </ul>
        {marquee({
          array: scolarity,
        })}
        <ul className="course__list">
          <li>
            <span>2020</span>
            <div className="course__list__title">
              <h2>Baccalauréat STI2D</h2>
            </div>
          </li>
          <li>
            <span>2016</span>
            <div className="course__list__title">
              <h2>Brevet des Collèges</h2>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Course;
