import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header style={{backgroundColor: '#461f52'}}>
        <div className="container">
          <img src='img/banner.png' alt='Les ICAres'></img>
        </div>
      </header>
      <div className={clsx('container', styles.heroBanner)}>
        <h1 className="hero__title">Les inscriptions sont ouvertes !</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/infos-pratiques">
            Je veux m'inscrire 🤩
          </Link>
        </div>
        <hr style={{marginTop: '3em'}}/>
      </div>
    </>
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Docusaurus Tutorial - 5min ⏱️
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Les ICAres - Inter-Centrale des Arts"
      description="Les ICAres est une compétition artistique faisant concourir toutes les Écoles Centrale.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
