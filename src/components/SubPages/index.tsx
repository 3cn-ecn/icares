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
    title: "Résultats 🏆",
    link: "/resultats"
  },
  {
    title: "Les Œuvres 🖼",
    link: "/oeuvres"
  },
  {
    title: "Souvenirs ❤️",
    link: "/souvenirs"
  },
  {
    title: "L'équipe d'orga 😎",
    link: "/equipe"
  },
  // {
  //   title: "Les Épreuves 🎨",
  //   link: "/epreuves",
  // },
  // {
  //   title: "Planning 📅",
  //   link: "/planning",
  // },
  // {
  //   title: "Infos Pratiques 🥙",
  //   link: "/infos-pratiques",
  // },
  // {
  //   title: "La Soirée Infernale 😈",
  //   link: "/soiree",
  // }
];

function Feature({ title, link }: FeatureItem) {
  return (
    <article className="col col--3 margin-bottom--lg">
      <Link
        className={clsx("card text-center padding--lg", styles.cardContainer)}
        to={link}
      >
        <h2
          className={clsx("text--truncate ", styles.cardTitle)}
        >
          {title}
        </h2>
      </Link>
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
        {/* <div className="row">
          <article className="col col--12 margin-bottom--lg">
            <a
              className={clsx("text-center")}
              href="https://drive.google.com/drive/folders/19TKnwWFqmLf3s9V0aDmTF8rg1IOkYzqA?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {">> Lire les œuvres envoyées (BDs, Nouvelles, Poèmes) <<"}
              </h2>
            </a>
          </article>
        </div> */}
      </div>
    </section>
  );
}
