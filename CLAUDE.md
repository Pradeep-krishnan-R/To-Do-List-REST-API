# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — runs `nodemon server.js` (auto-reload; listens on port 8080).
- No test, lint, or build scripts exist. `node_modules/` is committed to the repo.
- Requires a MongoDB instance at `mongodb://localhost/Todo` (hardcoded in `server.js`).

## Architecture

Small Express + Mongoose (v5) REST API. `server.js` connects to MongoDB, mounts `express.json()`, and mounts `routes/todoList.js` at `/todolist`. The single model (`models/list.js`, collection `ToDoList`) has required `name` (String) and `date` (Date).

Todos are addressed by `name`, not `_id`: `GET/PATCH/DELETE /todolist/:name` use `findOne({name})`. Names are not unique-indexed, so duplicates resolve to whichever document Mongo returns first. `PATCH` only updates `date`.

Error handling is inconsistent and returns HTTP 200 on failure: most handlers `res.send(e)`, the `GET /:name` handler sends the string `"Invalid"`, and a missing name makes `PATCH`/`DELETE` throw on a null document.
