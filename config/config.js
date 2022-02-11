if(process.env.NODE_ENV !== 'prod') {
  require('dotenv').config()
}
module.exports ={
  "development": {
    "username": process.env.CONFIG_USERNAME,
    "password": process.env.CONFIG_PASSWORD,
    "database": process.env.CONFIG_DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
