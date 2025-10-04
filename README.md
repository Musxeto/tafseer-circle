# Tafseer Circle

Tafseer Circle is a community project for sharing Quranic tafsir (exegesis), translations, notes, and recorded sessions through a simple web app.
## Vision

We want to build a community-driven site where members can:

- Share community information (about the group, organisers, schedules).
- Upload and browse resources organized by surah/ruku/ayah.
- Provide multiple tafaseer and translations per ayah or ruku.
- Watch embedded lecture videos (YouTube) and access recorded sessions.
- Contribute notes, comment, and collaboratively build a searchable library.

## Tech stack

- Frontend: React + TypeScript + Vite
- Backend / Auth / Storage: Firebase (Auth, Firestore, Storage) — planned for quick integration

The frontend is intentionally minimal to make it easy to extend and connect to Firebase services later.
# Tafseer Circle

Tafseer Circle is a student-led Qur'an study circle based at Lahore Garrison University. We are not an official university organization — this is a student initiative run with sincerity and reflection.

## About the circle

This circle meets regularly to study the Qur'an together. Our activities include:

- Reading translations and explanations
- Open discussions and sharing reflections

Purpose: to connect with the Qur'an, learn together, and grow as brothers in deen.

This repository contains the code for the website we want to build to support the circle: sharing resources, posting lecture recordings, and coordinating members.

## Vision

We want to build a community-driven site where members can:

- Share community information (about the group, organisers, schedules)
- Upload and browse resources organized by surah/ruku/ayah
- Provide multiple tafaseer and translations per ayah or ruku
- Watch embedded lecture videos (YouTube) and access recorded sessions
- Contribute notes, comment, and collaboratively build a searchable library

## Tech stack

- Frontend: React + TypeScript + Vite
- Backend / Auth / Storage: Firebase (Auth, Firestore, Storage) — planned for quick integration

The frontend is intentionally minimal to make it easy to extend and connect to Firebase services later.

## Current status

- Scaffolded with Vite, React, and TypeScript
- Initial UI and project structure in place
- Project maintained by a small team of student contributors

## Planned features

1. Community pages (About, Contact, Schedules)
2. Resource library
   - Organize by surah / ruku / ayah
   - Multiple tafaseer, translations, and member uploads (PDFs, text, links)
3. Video lectures (embedded YouTube, playlist support)
4. User accounts and simple moderation
   - Firebase Authentication (Google sign-in as a starting point)
5. Search and filtering (surah, ayah, tafsir, contributor)

## Getting started (local)

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Firebase setup (optional, for backend features)

- Create a Firebase project and enable Auth / Firestore / Storage as needed.
- Add your Firebase config to environment variables or a `.env` file. Consider adding a `.env.example` with the required keys.

## Contributing

- Pick a small feature or bug and open a branch for it.
- Keep PRs focused and add a brief description and testing notes.
- Documentation and UI improvements are welcome.

If you're joining the team, add your name to `CONTRIBUTING.md` (when available) or open an issue to introduce yourself.

## License & Contact

This repository does not include a license file yet — add one if you plan to open-source the code. For questions or to join the project, open an issue or contact the maintainers.

---

This README will be expanded with architecture diagrams, data models (Firestore collections), and a contributor guide as the project grows.
