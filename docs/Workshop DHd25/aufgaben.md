---
id: art-historische-sparql-aufgabe
title: Aufgaben
sidebar_label: Aufgaben
---
## 1. Ontologie entwickeln

Entwickle eine Ontologie mit Entitäten und Relationen für Deinen Text:

1.	Identifiziere die zentralen Begriffe
	•	Extrahiere die wichtigsten Entitäten aus Deinem Text (z. B. Konzepte, Objekte, Akteure).
2.	Kategorisiere die Entitäten
	•	Ordne die Entitäten in übergeordnete Klassen und Unterkategorien ein. (z.B. Künstler, Emotion, Genre)
3.	Definiere Relationen zwischen den Entitäten
	•	Beschreibe, wie die Entitäten miteinander in Verbindung stehen (z. B. „ist Teil von“, „beeinflusst“).
4.	Verknüpfe die Entitäten mit Wikidata QIDs
	•	Recherchiere und verknüpfe passende Wikidata QIDs für relevante Entitäten.
5.	Strukturiere die Ontologie als Diagramm oder Modell
	•	Erstelle eine visuelle Darstellung der Ontologie (z. B. als Graph oder Tabelle).

## 2. Annotation in INCePTION 
1. Text auswählen
   • Bestimme einen geeigneten Text als Grundlage für die Ontologie.
2. Mit der Software vertraut machen
   • Arbeite Dich in INCePTION ein (z. B. Annotationstools, Ontologie-Integration, Exportmöglichkeiten).
3. Entitäten und Relationen in INCePTION extrahieren
   • Markiere zentrale Entitäten und definiere Relationen direkt in INCePTION.
4. Struktur der Ontologie optimieren
   • Kategorisiere die Entitäten und passe die Relationen an, um eine konsistente Ontologie zu entwickeln.
5. Wikidata QIDs zuweisen
   • Ergänze relevante Wikidata-QIDs für die extrahierten Entitäten und prüfe, ob sie bereits in Wikidata existieren.

## 3. Kunsthistorische SPARQL-Abfrage mit LLMs generieren

Entwickle SPARQL-Abfragen für folgende Szenarien:

1. **Basisabfrage: Künstler – Werk**  
   *Ziel:* Abrufen einer Liste von Kunstwerken eines bestimmten Künstlers (z. B. Vincent van Gogh).  

2. **Abfrage nach Epoche und Geografie**  
   *Ziel:* Auffinden von Kunstwerken aus einer bestimmten historischen Epoche und Region, etwa der italienischen Renaissance (ca. 1400–1600).  
   *Fokus:* Kombination von Zeitfiltern mit geografischen Merkmalen.

3. **Thematische und ikonographische Abfrage**  
   *Ziel:* Ermitteln von Kunstwerken, die mythologische Themen darstellen, sowie der zugehörigen mythologischen Figuren.  
   *Fokus:* Nutzung verknüpfter Daten, um Beziehungen zwischen Kunstwerken und mythologischen Inhalten zu erforschen.

4. **Mehrdimensionale Aggregation und Netzwerkanalyse**  
   *Ziel:* Herausfinden, welche Künstler, die sowohl als Maler als auch Bildhauer tätig sind, Kunstwerke in bedeutenden Museumsbeständen haben – und diese nach der Anzahl der Werke zu ordnen.  
   *Fokus:* Aggregation von Daten, Verknüpfung verschiedener Eigenschaften (z. B. Künstlerberuf, Medium, Museumsort) und Anwendung von Sortier- bzw. Ranking-Funktionen.
