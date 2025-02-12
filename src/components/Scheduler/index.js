import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SchedulerItems = [
  {
    start: '14:30',
    end: '15:00',
    text: (
      <>
        Begrüßung, Einführung ReflectAI / iART + Organisatorisches (30 min)
      </>
    ),
  },
  {
    start: '15:00',
    end: '15:30',
    text: (
      <>
        Einführung/Keynote Knowledge Graph / Triple Extraction (30 min)
      </>
    ),
  },
  {
    start: '15:30',
    end: '16:00',
    text: (
      <>
        Pause (30 min)
      </>
    ),
  },
  {
    start: '16:00',
    end: '16:45',
    text: (
      <>
        Vorstellung TagSet Inception (Metadaten / Content / Co-Reference Layer) (60 min)
      </>
    ),
  },
  {
    start: '16:45',
    end: '17:30',
    text: (
      <>
        Manuelles Erstellen von Ontologien / manuelle Triplet-Extraktion der Teilnehmenden (45 min)
      </>
    ),
  },
];

function SchedulerItem({ start, end, text }) {
  return (
    <div className={clsx('row')}>

      <div className={clsx('col col--2')}>
        <div className="text--center padding-horiz--md">
          <p>{start} - {end}</p>
        </div>
      </div>
      <div className={clsx('col col--10')}>
        <div className="text--left padding-horiz--md">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Scheduler() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="col">
          {SchedulerItems.map((props, idx) => (
            <SchedulerItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
