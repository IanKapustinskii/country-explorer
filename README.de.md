# 🌍 Länder-Explorer

Eine responsive Webanwendung, mit der Benutzer Länder nach Regionen erkunden, nach Namen oder Hauptstädten suchen, detaillierte Informationen anzeigen und zwischen hellen und dunklen Designs wechseln können.

## 🚀 Funktionen

- ✅ **Länderliste** je nach ausgewählter Region
- 🔍 **Suchfunktion**:
  - Suche nach **Ländernamen** in verschiedenen Sprachen (z. B. Deutsch, Englisch, Russisch, Chinesisch usw.)
  - Suche nach **Hauptstadt** (nur auf Englisch)
  - Die Suche erfolgt **nur innerhalb der aktuell ausgewählten Region**
- 🌐 **Detailseite für jedes Land**:
  - Anzeige von Flagge, Bevölkerung, Region, Unterregion, Hauptstadt, Währung, Sprache, Landesnamen, Nachbarländern
  - Navigation zu **benachbarten Ländern**
- 🎛️ **Regionenfilter** über ein gestyltes `<Select />`-Dropdown
- 🌗 **Helles / Dunkles Design**
  - Design und Regionsauswahl werden **in `localStorage` gespeichert**
- ↩️ **Zurück-Button**, um zur Länderliste der Region zurückzukehren
- 📱 **Responsives Design** mit Hover- und Fokus-Effekten für bessere Benutzererfahrung

## 🧩 Verwendete Technologien

- **React + TypeScript**
- **Vite** als Build-Tool
- **TanStack React Query** zur Datenabfrage vom Server mit Caching
- **React Router DOM** für dynamische Routen (jedes Land hat seine eigene URL)
- **react-select** für ein anpassbares Regionenauswahl-Menü
- **Ionicons / @ionic/react** für Icons
- **REST Countries API** ([restcountries.com](https://restcountries.com/v3.1)) als Datenquelle

## 📂 Projektstruktur (Highlights)

- `src/components` – UI-Komponenten (Karten, Filter, Theme Toggle usw.)
- `src/pages` – Startseite und Länderdetails
- `src/hooks` – Eigene Hooks für Theme, Filter und Datenabfrage
- `src/utils` – Hilfsfunktionen zur Datenverarbeitung
- `public/favicon.ico` – Eigenes Favicon (🌍 Globus)

## 📦 Projekt ausführen

Klonen und lokal starten:

```bash
git clone https://github.com/
cd country-explorer
npm install
npm run dev

🌐 Available Languages: [English](README.md) | [Deutsch](README.de.md) | [Русский](README.ru.md)