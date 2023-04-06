import React from "react";

const article = ({ array }) => {
  return (
    <article className="monitoring__article">
      <div>
        <span>{array.subtitle}</span>
        <h2>{array.title}</h2>
      </div>
      <div className="monitoring__article__bottom">
        <p>{array.description}</p>
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
  );
};

function Monitoring() {
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

  return (
    <section className="landing">
      <h1 className="landing__title">Veilles</h1>
      <div className="monitoring">
        <div className="monitoring__content">
          {article({
            array: computerMonitoring,
          })}
          {article({
            array: legalMonitoring,
          })}
        </div>
      </div>
    </section>
  );
}

export default Monitoring;
