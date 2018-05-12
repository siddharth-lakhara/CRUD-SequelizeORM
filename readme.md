# CRUD operation using sequelize ORM

## Tech Stack
Database: PostgreSQL
Backend: HapiJS

## Usage
`git clone https://github.com/siddharth-lakhara/CRUD-SequelizeORM.git
npm install`

### Scripts:
npm start: Starts server in development mode
npm run test-start: Starts server in test mode
npm run test: Perform testing using jest, generates a code coverage report

## Coverage
------------|----------|----------|----------|----------|----------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------|----------|----------|----------|----------|----------------|
All files   |    77.46 |    47.37 |       60 |    77.46 |                |
 models     |     91.3 |    66.67 |      100 |     91.3 |                |
  index.js  |       90 |    66.67 |      100 |       90 |          13,28 |
  users.js  |      100 |      100 |      100 |      100 |                |
 src        |    63.64 |       25 |        0 |    63.64 |                |
  server.js |    63.64 |       25 |        0 |    63.64 |    14,15,16,18 |
 src/routes |    72.97 |    33.33 |       50 |    72.97 |                |
  create.js |    66.67 |        0 |    66.67 |    66.67 |       19,20,21 |
  delete.js |      100 |      100 |      100 |      100 |                |
  index.js  |      100 |      100 |      100 |      100 |                |
  ping.js   |      100 |      100 |      100 |      100 |                |
  read.js   |       50 |      100 |        0 |       50 |           7,11 |
  update.js |     37.5 |        0 |        0 |     37.5 | 16,17,21,22,24 |
------------|----------|----------|----------|----------|----------------|