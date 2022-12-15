import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Start Building',
    Svg: require('@site/static/img/thum_01_L.svg').default,
    description: (
      <>
        First time with Klaytn and want to get started right away?
      </>
    ),
  },
  {
    title: 'Klaytn Ecosystem',
    Svg: require('@site/static/img/thum_02_L.svg').default,
    description: (
      <>
        Learn about the tools and resources in the Klaytn Ecosystem.
      </>
    ),
  },
  {
    title: 'Node Operation',
    Svg: require('@site/static/img/thum_03_L.svg').default,
    description: (
      <>
        Learn how to install and operate Klaytn nodes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
