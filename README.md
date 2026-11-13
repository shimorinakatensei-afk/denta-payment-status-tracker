# Denta Payment Status Tracker

A small MVP that gives employees a clear view of dental payments and reimbursements.

## What the MVP covers

- Show each payment as **successful**, **pending**, or **failed**.
- Display an estimated reimbursement completion time.
- Push payment status changes to the UI in real time over WebSockets.
- Explain a failed transaction with a human-readable reason.
- Let an employee report a payment issue.
- Send status-change notifications through Firebase Cloud Messaging (FCM).

This repository is an initial scaffold. The screens, API, database model, WebSocket events, and Firebase delivery still need to be implemented.

## Technology

- **Backend:** Java 21, Spring Boot, Maven
- **Frontend:** React with Vite
- **Database:** PostgreSQL
- **Real-time updates:** Spring WebSocket (STOMP can be added if useful)
- **Notifications:** Firebase Cloud Messaging via the Firebase Admin SDK

## Repository layout

```text
backend/                 Spring Boot API and real-time event service
  src/main/java/         Application code
  src/main/resources/    Local application configuration
frontend/                React employee interface
  src/                   UI components and entry point
docker-compose.yml       Local PostgreSQL service
.env.example             Names of local configuration values (no secrets)
```

## Local setup

Prerequisites: Java 21, Maven 3.6.3+, Node.js 20.19+ (or 22.12+), npm, and Docker Compose.

1. Copy `.env.example` to `.env`. Set `POSTGRES_USER` and `POSTGRES_PASSWORD`; keep this file private because it is ignored by Git.
2. Keep `POSTGRES_DB` and the database name in `DB_URL` aligned. Set `DB_USERNAME` and `DB_PASSWORD` to the same local database user and password.
3. Start PostgreSQL: `docker compose --env-file .env up -d db`.
4. In `backend/`, run `mvn spring-boot:run`. Spring Boot reads `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` from your local shell or IDE run configuration.
5. In `frontend/`, run `npm install` and `npm run dev`.

Docker Compose reads `.env` for the database container; Spring Boot does not load that file automatically, so configure its three `DB_*` values in your shell or IDE. The database listens on port 5432, the API uses port 8080, and Vite uses port 5173. The frontend API/WebSocket base URL can be configured with `VITE_API_BASE_URL` when the integration is added.

## Firebase setup

Create a Firebase project and enable Firebase Cloud Messaging. For local development, provide Firebase Admin credentials through your environment or a local, untracked service-account file. Never commit service-account JSON, private keys, tokens, or production credentials. Firebase delivery is not wired up in this scaffold.

## MVP implementation order

1. Add payment and issue-report entities, migrations, and REST endpoints.
2. Build the employee payment list and payment detail view.
3. Publish status-change events over WebSockets and update the React UI.
4. Add failed-payment explanations and issue reporting.
5. Add FCM notifications and estimate handling.
6. Add focused backend and frontend tests.

## Configuration

See `.env.example` for the local database variable names. Keep all real credentials in untracked local configuration or a secrets manager. Do not use real employee or payment data in development.

## Author

[Roman Kim](https://www.linkedin.com/in/roman-kim-3054613a9/)

## License

This project is licensed under the [MIT License](LICENSE).
