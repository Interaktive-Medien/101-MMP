# 101-MMP JavaScript Refresh

Dieses Repository enthält drei JavaScript-Projekte, die verschiedene APIs nutzen, um Daten abzurufen und auf der Webseite anzuzeigen. Nachfolgend sind die Projekte und ihre Funktionsweisen beschrieben:

## Aare Guru

Der Code verwendet die Aare Guru API, um Informationen über verschiedene Städte und die Temperatur des Aare-Flusses in einer ausgewählten Stadt abzurufen.

- `holeAlleStaedte`: Diese Funktion holt alle Städte, an denen Aare Guru misst und zeigt sie als Buttons an.
- `wechsleStadt`: Wird aufgerufen, wenn ein Button geklickt wird. Die Funktion speichert die ausgewählte Stadt im Local Storage und holt die Temperatur der Stadt.
- `holeTemperaturStadt`: Holt die Temperatur der ausgewählten Stadt und zeigt sie auf der Webseite an.
- `updateButtonStyles`: Ändert den Stil der Buttons, um die aktuell ausgewählte Stadt hervorzuheben.

## Pokemon

Der Code holt eine Liste von Pokémon von der PokeAPI und zeigt sie in einem Rasterformat auf der Webseite an.

- `generatePokemonCard`: Erstellt eine HTML-Struktur für eine Pokémon-Karte, die das Bild, den Namen, den Typ, die HP und einen Angriff des Pokémon anzeigt.
- Die Pokémons werden in Reihen von drei angezeigt, und für jedes Pokémon wird eine separate Anforderung an die PokeAPI gesendet, um die detaillierten Informationen abzurufen.

## Star Wars

Der Code nutzt die Star Wars API (SWAPI) und erstellt Buttons für jede Kategorie von Daten, die von der API bereitgestellt werden (z.B. Personen, Planeten, Filme, Spezies, Fahrzeuge und Raumschiffe).

- `initButtons`: Initialisiert Buttons für jede Kategorie von Daten.
- `getData`: Wird aufgerufen, wenn ein Button geklickt wird. Die Funktion holt die entsprechenden Daten aus der SWAPI und erstellt eine Liste der Namen der Entitäten in dieser Kategorie.
- Die Namen werden dann in einer ungeordneten Liste auf der Webseite angezeigt.

Diese Projekte demonstrieren verschiedene Möglichkeiten, wie APIs in JavaScript genutzt werden können, um Daten abzurufen und auf einer Webseite anzuzeigen.
