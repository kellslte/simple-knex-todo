import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  server: {
    port: parseInt(process.env.PORT, 10) || 3030,
  },
  database: {
    client: process.env.DATABASE_TYPE,
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "../database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "../database/seeders",
    },
  },
};

export default config;