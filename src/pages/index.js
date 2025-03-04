import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import SchedulerFeatures from '../components/Scheduler';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Wissensgraphen und große Sprachmodelle in den Digital Humanities`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

        <Heading as="h1">Programm</Heading>
        <SchedulerFeatures />
        <Heading as="h1">ReflectAI</Heading>
        <p>
          Förderungszeitraum: <b>2023-2025</b>
        </p>
        <p>
          Gefördert durch: <b>Deutsche Forschungsgemeinschaft (DFG) <a href="https://www.digitalesbild.gwi.uni-muenchen.de/en/elementor-22433/">SPP Das Digitale Bild</a></b>
        </p>
        <p>
          Projektziel: <b>Verbesserung der Erklärbarkeit von KI-Ergebnissen in der Kunstgeschichte durch Wissensgraphen</b>
        </p>
        <Heading as="h1">Organizers</Heading>
        <ul>
          <li>Prof. Ralph Ewerth </li>
          <li>Prof. Ralf Krestel  </li>
          <li>Julian Stalter </li>
          <li>Maximilian Kristen</li>
          <li>Eric Müller-Budack</li>
          <li>Matthias Springstein</li>
        </ul>
      </main>
    </Layout>
  );
}
