import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '6 Écoles pour 1 Victoire',
    Svg: require('@site/static/img/pentagramme.svg').default,
    description: (
      <>
        Les ICAres regroupent les 6 écoles Centrale de Casablanca, Lille,
        Lyon, Marseille, Nantes, et Paris.
      </>
    ),
  },
  {
    title: '1 thème : L\'ENFER',
    Svg: require('@site/static/img/enfer.svg').default,
    description: (
      <>
        Le thème de cette année est l'ENFER ! La plupart des épreuves ont
        aussi leur propre sous-thème, lié au monde sous-terrain...
      </>
    ),
  },
  {
    title: '19 Épreuves',
    Svg: require('@site/static/img/pentagramme.svg').default,
    description: (
      <>
        Les ICAres, c'est avant-tout une compétition artistique avec 19 épreuves :
        chant, danse, musique, dessin... Il y en a pour tous les goûts !
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
