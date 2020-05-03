# Introduction

This is a simple one page application listing some choosen containers with their state. This application use the Docker `1.24` API.

Feel free to see the working [demo](https://stack1.eu).

# Installation

1. Clone the repository.
2. Install dependencies :
   - `yarn install` (recommended and supported way)
   - or `npm install` (be careful with non locked versions).
3. Run the server (again, adapat commands if npm is used instead of Yarn) :
   - `yarn run dev` for dev mode with changes watch.
   - `yarn run start` for production with pm2 supervisor. Note that you can configure the `ecosystem.config.js` to manage the execution mode (here `cluster` with `2` instances).

# Docker

If you like Docker, use Docker.

## Docker Compose

A Docker Compose configuration is provided to easily setup the project.

`docker-compose up -d`

## Build 

A `Dockerfile` configuration is also provided and used by the Docker Compose one. Feel free to use it to build and deploy the application.

# Usage

## Expose a service on the page

> Comming soon

## Add a link to your service

You can access to each container's service if a Traefik `Host` rule is provided (`traefik.frontend.rule`).