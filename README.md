# system-server-quickstart

This is a minimal project to start a server app system.

This app requires a **system-admin-server** system to enable debugging with [System Designer](https://system-designer.github.io).

## Installation

```sh
# Clone this repository
$ git clone https://github.com/system-sdk/system-server-quickstart.git
# Go to the repository
$ cd system-server-quickstart
# Install System Runtime
$ npm install
# Run the app
$ node app.js
```

## Developement

* Launch [System Designer](https://system-designer.github.io),
* open the *Configuration* panel,
* select *Server-side* as value for *Type of debugging*,
* set `http://localhost` as value for *Url of the server to debug*,
* click on the debug button,
* a panel *A system has been found* is shown
* click on *OK*.

The system running in node will be then imported in [System Designer](https://system-designer.github.io).

All your modifications to the current system in [System Designer](https://system-designer.github.io) will be injected into the server. 

## Licence

CC0 1.0 Universal