FROM mysql:latest

COPY ./weezer.sql /docker-entrypoint-initdb.d/

# docker run --name weezer-db -d -e MYSQL_ALLOW_EMPTY_PASSWORD=1 -e MYSQL_DATABASE=weezer -e MYSQL_TCP_PORT=3306 -p 3308:3306 shaharsol/weezer-db:1.0.0
