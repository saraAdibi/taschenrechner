# Rechner-App – Next.js Clean Architecture

Eine moderne Rechner-Anwendung, entwickelt mit **Next.js**, **TypeScript** und **Tailwind CSS**, gestaltet mit einer **sauberen und skalierbaren Architektur**.

Dieses Projekt legt den Fokus auf **Separation of Concerns**, **vorhersehbares State-Management** und **wartbare UI-Patterns**, ähnlich wie in realen Produktionsanwendungen.

![Calculator Screenshot](./public/screenshot.png)

---

## Live Demo

👉 **Live auf Vercel:**  
https://VERCEL-LINK.vercel.app

---

## Funktionen

- Grundlegende Rechenoperationen
- Prozent- und Vorzeichenwechsel-Unterstützung
- Zentralisiertes State-Management mit `useReducer`
- Saubere Trennung von UI und Geschäftslogik
- Wiederverwendbare und testbare Komponenten
- Responsives modernes UI mit Tailwind CSS

---

##  Architekturübersicht

Dieses Projekt folgt dem **Container / Presentational Pattern**:


### Wichtige Prinzipien:

- Dumb & Smart Components
- Reducer-basiertes State-Management
- Feature-basierte Ordnerstruktur
- Pure Utility-Funktionen für Berechnungen

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel (Deployment)**

---


---

## State Management

Der State wird über `useReducer` und React Context verwaltet:

- Alle Rechner-Logik befindet sich im Reducer
- UI-Komponenten enthalten keine Geschäftslogik
- Utilities sind isoliert und wiederverwendbar

---

## Was ich in diesem Projekt gelernt/praktiziert habe

- Aufbau einer skalierbaren React-Architektur
- Trennung von UI und Geschäftslogik
- Vorhersehbare Verwaltung komplexer UI-States
- Wartbaren und lesbaren Code schreiben

---

## Lokale Installation

git clone https://github.com/saraAdibi/taschenrechner.git
cd taschenrechner
npm install
npm run dev

