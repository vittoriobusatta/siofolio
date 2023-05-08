import React from "react";

const marquee = ({ array }) => {
  return (
    <div className="marquee">
      <ul className="marquee__content">
        {array.map((array, index) => {
          return (
            <>
              <li key={index}>{array}</li>
              <div className="marquee__content__line"></div>
            </>
          );
        })}
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        {array.map((array, index) => {
          return (
            <>
              <li key={index}>{array}</li>
              <div className="marquee__content__line"></div>
            </>
          );
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
            <a href="https://siofolio.notion.site/Parcours-677b5852bad54fe6b50ca5327b9524c6">
              <span>2023</span>
              <div className="course__list__title">
                <h2>Stage Technicien Réseau</h2>
              </div>
            </a>
          </li>
          <li>
            <a href="https://siofolio.notion.site/Parcours-677b5852bad54fe6b50ca5327b9524c6">
              <span>2022</span>
              <div className="course__list__title">
                <h2>Stage Développeur Web</h2>
              </div>
            </a>
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
