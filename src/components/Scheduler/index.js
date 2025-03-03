import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SchedulerItemsMonday = [
  {
    start: '14:00',
    end: '14:30',
    text: (
      <>
        Begrüßung der Teilnehmenden und Vorstellung von ReflectAI und iART.
      </>
    ),
  },
  {
    start: '14:30',
    end: '15:00',
    text: (
      <>
        Ralf Krestel: “Einführung in Wissensgraphen” (30 min)
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
        Vorstellung der Annotationsrichtlinien von ReflectAI und Beispiele für manuelle Triplet-Extraktion.
      </>
    ),
  },
  {
    start: '16:00',
    end: '17:00',
    text: (
      <>
        Erstellen von Ontologien und extrahieren von Triples aus Texten -  manuell oder mithilfe eines unterstützenden Tools wie Inception.
      </>
    ),
  },
  {
    start: '17:00',
    end: '17:30',
    text: (
      <>
        Einrichten der gemeinsamen Arbeitsumgebung in Google Colab.
      </>
    ),
  },
];


const SchedulerItemsTuesday = [
  {
    start: '14:00',
    end: '14:30',
    text: (
      <>
        Einführung in verschiedene Methoden zur automatisierten Triplet-Extraktion mit großen Sprachmodellen, u. a. KnowGL, Instructor und DeepKE.
      </>
    ),
  },
  {
    start: '14:30',
    end: '15:00',
    text: (
      <>
        Testen der automatisierten Extraktion mithilfe der vorgestellten Methoden mit Beispieltexten.
      </>
    ),
  },
  {
    start: '15:30',
    end: '15:45',
    text: (
      <>
        Pause (15 min)
      </>
    ),
  },
  {
    start: '15:45',
    end: '16:30',
    text: (
      <>
        Vergleichen der Ergebnisse der manuellen und automatisierten Extraktion.
      </>
    ),
  },
  {
    start: '16:30',
    end: '17:00',
    text: (
      <>
        Abgleichen der extrahierten Entitäten mit Wikidata und kurze Vorstellung der Abfragesprache SPARQL, um gezielt Informationen aus Wissensgraphen zu extrahieren.
      </>
    ),
  },
  {
    start: '17:00',
    end: '17:30',
    text: (
      <>
        Zusammenfassung der wichtigsten Ergebnisse und Gelegenheit für Feedback und offene Fragen.
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
