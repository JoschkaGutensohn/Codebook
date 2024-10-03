# BookShop App 📚

Ein kleiner E-Shop, in dem Benutzer Bücher kaufen, sich registrieren und einloggen können. Zusätzlich gibt es eine "Als Gast anmelden" Funktion. Die Backend-Daten werden mit einem JSON Server und `json-server-auth` verwaltet.

## Features ✨

- Benutzerregistrierung und -anmeldung
- "Als Gast anmelden" Funktion
- Buchkauf-Funktion
- JSON Server für die Verwaltung von Benutzern und Büchern
- Authentifizierung mit `json-server-auth`

## Voraussetzungen 📋

Um die App lokal auszuführen, stelle sicher, dass folgende Software installiert ist:

- [Node.js](https://nodejs.org/) (v12 oder höher)

## Installation 🚀

1. **Abhängigkeiten installieren:**

   ```bash
   npm install
   ```

## JSON Server mit Authentifizierung starten 🗄️

1. **Starte den JSON Server mit `json-server-auth`:**

   Die Datenbank befindet sich in der `data/db.json` Datei. Um den Server mit Authentifizierung zu starten, führe den folgenden Befehl aus:

   ```bash
   npx json-server data/db.json -m ./node_modules/json-server-auth --port 8000
   ```

## Umgebungsvariablen .env 📝

Damit die App ordnungsgemäß funktioniert, lege eine .env Datei mit folgendem Inhalt an:

- REACT_APP_HOST=http://localhost:8000
- REACT_APP_GUEST_LOGIN=user@example.com
- REACT_APP_GUEST_PASSWORD=1234567

## Ausführung der App 🏃‍♂️

1. **Backend (JSON Server) starten:**

   ```bash
   npx json-server data/db.json -m ./node_modules/json-server-auth --port 8000
   ```

2. **Frontend starten:**

   Öffne ein neues Terminal und führe den folgenden Befehl aus, um das Frontend zu starten:

   ```bash
   npm start
   ```

3. **App öffnen:**

   Öffne deinen Browser und gehe zu [http://localhost:3000](http://localhost:3000), um die App zu sehen.

## Technologien 🛠️

- **Frontend**: React, Axios, TailwindCSS
- **Backend**: JSON Server, `json-server-auth`
- **Datenbank**: JSON-Datei (`db.json`)
