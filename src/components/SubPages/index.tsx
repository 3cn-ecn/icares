import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Les Épreuves 🏆",
    link: "/epreuves",
  },
  {
    title: "Le Planning 📅",
    link: "/planning",
  },
  {
    title: "Infos Pratiques 🥙",
    link: "/infos-pratiques",
  },
  {
    title: "La Soirée Infernale 😈",
    link: "/soiree",
  },
];

function Feature({ title, link }: FeatureItem) {
  return (
    <article className="col col--3 margin-bottom--lg">
      <a
        className="card text-center padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
        href={link}
      >
        <h2
          className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
          title="💭 Bande Dessinée"
        >
          {title}
        </h2>
      </a>
    </article>
  );
}

export default function SubPages(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
