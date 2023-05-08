import React from "react";

function BTS() {
  return (
    <div>
      <h1 className="landing__title">BTS SIO</h1>
      <div className="bts">
        <p className="bts__description">
          Le Brevet de Technicien Supérieur aux Services Informatiques aux
          Organisations (BTS SIO), s'adresse à ceux qui souhaitent se former en
          deux ans aux métiers d'administrateur réseau ou de développeur. Pour
          par la suite intégré directement le marché du travail ou continuer des
          études, dans le domaine de l'informatique.
        </p>
        <h3>Le BTS SIO propose deux spécialités :</h3>
        <div className="options">
          <div className="options__sisr">
            <h4>▲ Spécialité SISR</h4>
            <p>
              L’option{" "}
              <span>Solution d’Infrastructure, Systèmes et Réseaux</span> forme
              des professionnels des réseaux et équipements informatiques
              (installation, maintenance, sécurité). Les techniciens supérieurs
              en informatique option SISR, peuvent accéder aux métiers de : 
            </p>
            <ul>
              <li>Administrateur systèmes et réseaux</li>
              <li>Informaticien support et déploiement</li>
              <li>Pilote d’exploitation</li>
              <li>Support systèmes et réseaux</li>
              <li>Technicien d’infrastructure</li>
              <li>Technicien micro et réseaux</li>
              <li>Technicien de production</li>
            </ul>
          </div>
          <div className="options__slam">
            <h4>▲ Spécialité SLAM</h4>
            <p>
              L’option{" "}
              <span>Solutions Logicielles et Applications Métiers</span> forme
              des spécialistes des logiciels (rédaction d’un cahier des charges,
              formulation des besoins et spécifications, développement,
              intégration au sein de la société). Les techniciens supérieurs en
              informatique option SLAM, sont préparés aux métiers de : 
            </p>
            <ul>
              <li>Développeur d’applications informatiques</li>
              <li>Développeur informatique</li>
              <li>Analyste d’applications ou d’études</li>
              <li>Analyste programmeur</li>
              <li>Programmeur analyste</li>
              <li>Programmeur d’applications</li>
              <li>Responsable des services applicatifs</li>
              <li>Technicien d’études informatiques</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BTS;
