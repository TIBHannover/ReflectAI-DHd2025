import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SchedulerItemsMonday = [
  {
    start: '14:00',
    end: '14:30',
    text: (
      <>
        Begrüßung, Einführung ReflectAI / iART + Organisatorisches (30 min)
      </>
    ),
  },
  {
    start: '14:30',
    end: '15:00',
    text: (
      <>
        Einführung/Keynote Knowledge Graph / Triple Extraction (30 min)
      </>
    ),
  },
  {
    start: '15:00',
    end: '15:30',
    text: (
      <>
        Pause (30 min)
      </>
    ),
  },
  {
    start: '15:30',
    end: '16:00',
    text: (
      <>
        Vorstellung TagSet Inception (Metadaten / Content / Co-Reference Layer) (30 min)
      </>
    ),
  },
  {
    start: '16:00',
    end: '17:00',
    text: (
      <>
        Manuelles Erstellen von Ontologien / manuelle Triplet-Extraktion der Teilnehmenden (60 min)
      </>
    ),
  },
];


const SchedulerItemsTuesday = [
  {
    start: '09:00',
    end: '09:30',
    text: (
      <>
        Vorstellung von Methoden zur automatisierten Triplet-Extraktion mit LLMs (Gollie / DeepKE / …) (30 min)
      </>
    ),
  },
  {
    start: '09:30',
    end: '11:00',
    text: (
      <>
        Ausprobieren automatisierte Triplet-Extraktion mit LLMs auf Colab (90 min)
      </>
    ),
  },
  {
    start: '11:00',
    end: '11:15',
    text: (
      <>
        Pause (15 min)
      </>
    ),
  },
  {
    start: '11:15',
    end: '12:15',
    text: (
      <>
        Evaluation der manuellen / automatisierten Extraktion (60 min)
      </>
    ),
  },
  {
    start: '12:15',
    end: '13:15',
    text: (
      <>
        Pause (60 min)
      </>
    ),
  },
  {
    start: '13:15',
    end: '14:15',
    text: (
      <>
        Abgleichen der Entitäten mit Wikidata (60 min)
      </>
    ),
  },
  {
    start: '14:15',
    end: '15:00',
    text: (
      <>
        Hybride KI:  Zusammenspiel LLM / VLM mit Knowledge Graph
        Automatische SPARQL-Generierung und RAG
        (45 min)
      </>
    ),
  },
  {
    start: '15:00',
    end: '15:15',
    text: (
      <>
        Pause (15 min)
      </>
    ),
  },
  {
    start: '15:15',
    end: '16:15',
    text: (
      <>
        Praxisteil: SPINACH (https://spinach.genie.stanford.edu/) vs. andere LLMs / Chains of Thought (60 min)
      </>
    ),
  },
  {
    start: '16:15',
    end: '17:00',
    text: (
      <>
        Diskussion / Evaluation / Feedback (45 min)
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

          <Heading as="h3">Montag</Heading>
          {SchedulerItemsMonday.map((props, idx) => (
            <SchedulerItem key={idx} {...props} />
          ))}
          <Heading as="h3">Dienstag</Heading>
          {SchedulerItemsTuesday.map((props, idx) => (
            <SchedulerItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
