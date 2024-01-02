To setup the runtime environment, use the following commands:

```

cd Docker
docker network create mydb
docker compose build
docker compose up -d

docker compose exec mydb_dbc_a sh -c "mongosh < /scripts/dbc_init.js"
docker compose exec mydb_db0_a sh -c "mongosh < /scripts/db0_init.js"
docker compose exec mydb_db1_a sh -c "mongosh < /scripts/db1_init.js"
docker compose exec mydb_db2_a sh -c "mongosh < /scripts/db2_init.js"
docker compose exec mydb_dbs_a sh -c "mongosh < /scripts/dbs_init.js"

```

You can test connectivity to the local environment by running these commands:

```

echo "sh.status()" | mongo mongodb://localhost:27117
echo "sh.status()" | mongo mongodb://localhost:27117,localhost:27217,localhost:27317

```

To run the test application, update the connection string in line 15 of Data\Database.cs to be either `WORKING_CONNECTION_STRING` or `NON_WORKING_CONNECTION_STRING`