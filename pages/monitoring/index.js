import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const article = ({ array, openPreview }) => {
  const { subtitle, title, description } = array;
  return (
    <>
      <article className="monitoring__article" onClick={openPreview}>
        <div>
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </div>
        <div className="monitoring__article__bottom">
          <p>{description}</p>
          <svg
            width="44"
            height="40"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9424 0H10.7994V8.76712H0.741699V11.2329H10.7994V20H13.9424V11.2329H24.0001V8.76712H13.9424V0Z"
              fill="#0B632E"
            />
          </svg>
        </div>
      </article>
    </>
  );
};

function Monitoring() {
  const [previewIndex, setPreviewIndex] = useState(2);
  const [previewActive, setPreviewActive] = useState(false);
  const overlayInner = useRef([]);

  useEffect(() => {
    gsap.set(overlayInner.current, {
      x: "-100%",
    });
  }, []);

  const openPreview = (index) => {
    console.log("index", index);
    setPreviewIndex(index);
    setPreviewActive(true);

    gsap.to(overlayInner.current[index], {
      x: 0,
      duration: 0.6,
    });
  };

  const closePreview = () => {
    setPreviewActive(false);
    gsap.to(overlayInner.current[previewIndex], {
      x: "-100%",
      duration: 0.6,
    });
  };

  const legalMonitoring = {
    subtitle: "Veille Juridique",
    title:
      "Intelligence artificielle : enjeux juridiques et protection des travailleurs",
    description:
      "Découvrez les enjeux juridiques majeurs liés à l'utilisation de l'Intelligence Artificielle (IA) dans le monde du travail. Cet article examine les défis auxquels sont confrontés les travailleurs, tels que la protection de l'emploi, la sécurité et la confidentialité des données personnelles. Il se penche également sur les responsabilités des employeurs et des concepteurs d'IA en cas d'erreurs ou de dommages causés par les systèmes automatisés. ",
  };

  const computerMonitoring = {
    subtitle: "Veille Informatique",
    title: "Intelligence artificielle : quels sont les métiers menacés ?",
    description:
      "Découvrez les métiers susceptibles d'être menacés par l'Intelligence Artificielle (IA) et l'automatisation croissante des tâches dans cet article. Il examine les secteurs d'activité où l'IA pourrait avoir un impact significatif sur l'emploi, tels que la production manufacturière, le commerce de détail, ou encore le secteur des services. L'article se penche également sur les métiers qui pourraient être transformés ou enrichis par l'utilisation de l'IA.",
  };

  const array = [computerMonitoring, legalMonitoring];

  console.log("previewIndex", previewIndex, "previewActive", previewActive);

  return (
    <section className="landing">
      <h1 className="landing__title">Veilles</h1>
      <div className="monitoring">
        <div className="monitoring__content">
          {array.map((array, index) => {
            return article({
              array,
              openPreview: () => openPreview(index),
            });
          })}
        </div>
        {array.map((array, index) => {
          return (
            <div
              key={index}
              className={`monitoring__preview ${
                previewActive && previewIndex === index
                  ? "monitoring__preview--active"
                  : ""
              }`}
            >
              <h1>{array.title}</h1>
              <h2
                onClick={() => {
                  closePreview();
                }}
              >
                CLOSE
              </h2>
            </div>
          );
        })}
        <div className="overlay">
          {array.map((item, index) => {
            return (
              <div
                key={item.id}
                className="overlay__inner"
                ref={(el) => (overlayInner.current[index] = el)}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Monitoring;
