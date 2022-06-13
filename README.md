# aggregator

Simple warehouse and offices aggregator service

### Project Setup

- Node v17.9.0
- `NVM` Nodejs version manager
- `npm` form managing packages
- Feel free to use any nodejs version manager. But keep the node version consistent with the version specified in
  `.nvmrc` file.
- Docker Desktop `v4.3.2`
- `SQLite 3` Database (used for testing purporses)

### Development

- run `npm run copy-env` to create a `.env` file. Fill in desired db credentials
- run `nvm` use
- run `npm install`
- run `docker-compose up`

### API Endpoints

- `/api/v1/property?id=` GET endpoint. Where `id` should equal the property id.

### Running Tests

- `npm run test` to run tests.
