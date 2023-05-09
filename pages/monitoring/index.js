import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const article = ({ array, openPreview }) => {
  const { subtitle, title, description, link } = array;
  return (
    <>
      <article className="monitoring__article" onClick={openPreview}>
        <a href={link}>
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
        </a>
      </article>
    </>
  );
};

// const preview = ({
//   array,
//   previewContainer,
//   previewActive,
//   previewIndex,
//   index,
//   closePreview,
// }) => {
//   return (
//     <div
//       key={index}
//       href={array.link}
//       className={`monitoring__preview ${
//         previewActive && previewIndex === index
//           ? "monitoring__preview--active"
//           : ""
//       }`}
//       ref={(el) => (previewContainer.current[index] = el)}
//     >
//       <div className="monitoring__preview__head">
//         <span>{array.subtitle}</span>
//         <h2
//           onClick={() => {
//             closePreview();
//           }}
//         >
//           X
//         </h2>
//       </div>
//       <h1>{array.title}</h1>
//       <div>
//         <h2>
//           {array.article
//             ? "1. " + array.article.title
//             : "Pas d'article disponible"}
//         </h2>
//         <p>{array.article ? array.article.description : null}</p>
//       </div>
//     </div>
//   );
// };

function Monitoring() {
  const [previewIndex, setPreviewIndex] = useState(2);
  const [previewActive, setPreviewActive] = useState(false);
  const overlayInner = useRef([]);
  const previewContainer = useRef([]);

  const legalMonitoring = {
    subtitle: "Veille Juridique",
    title:
      "Intelligence artificielle : enjeux juridiques et protection des travailleurs",
    description:
      "Cet article aborde les enjeux juridiques de l'utilisation de l'IA dans le monde du travail, tels que la protection de l'emploi, la sécurité et la confidentialité des données personnelles, ainsi que les responsabilités des employeurs et des concepteurs d'IA en cas d'erreurs ou de dommages.",
    link: "https://ribbon-fight-d52.notion.site/Veilles-840fd1f47ddf4e1e8b1c10f1b133a464",
  };

  const computerMonitoring = {
    subtitle: "Veille Technologique",
    title: "Deep Learning : une technologie fondée sur les réseaux neuraux",
    description:
      "Le Deep learning  ou apprentissage profond est l’une des technologies principales du Machine learning. Avec le Deep Learning, nous parlons d’algorithmes capables de mimer les actions du cerveau humain grâce à des réseaux de neurones artificielles.  Les réseaux sont composés de dizaines voire de centaines de « couches » de neurones, chacune recevant et interprétant les informations de la couche précédente.",
    link: "https://ribbon-fight-d52.notion.site/Veilles-840fd1f47ddf4e1e8b1c10f1b133a464",
  };

  const array = [computerMonitoring, legalMonitoring];

  useEffect(() => {
    gsap.set(overlayInner.current, {
      x: "-100%",
    });
    gsap.set(previewContainer.current, {
      x: "0%",
      opacity: 0,
    });
  }, []);

  // const openPreview = (index) => {
  //   setPreviewIndex(index);
  //   setPreviewActive(true);
  //   gsap.to(overlayInner.current[index], {
  //     x: 0,
  //     duration: 0.6,
  //     onComplete: () => {
  //       gsap.to(previewContainer.current[index], {
  //         x: 0,
  //         duration: 0.6,
  //         opacity: 1,
  //       });
  //     },
  //   });
  // };

  // const closePreview = () => {
  //   setPreviewActive(false);
  //   gsap.to(previewContainer.current[previewIndex], {
  //     duration: 0.6,
  //     opacity: 0,
  //     onComplete: () => {
  //       gsap.to(overlayInner.current[previewIndex], {
  //         x: "-100%",
  //         duration: 0.6,
  //       });
  //     },
  //   });
  // };

  return (
    <section className="landing">
      <h1 className="landing__title">Veilles</h1>
      <div className="monitoring">
        <div className="monitoring__content">
          {array.map((array, index) => {
            return article({
              array,
              // openPreview: () => openPreview(index),
            });
          })}
        </div>
        {/* {array.map((array, index) => {
          return preview({
            array,
            previewContainer,
            previewActive,
            previewIndex,
            index,
            closePreview,
          });
        })} */}
        {/* <div className="overlay">
          {array.map((item, index) => {
            return (
              <div
                key={item.id}
                className="overlay__inner"
                ref={(el) => (overlayInner.current[index] = el)}
              ></div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}

export default Monitoring;
