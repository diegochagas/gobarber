# Go Barber

Barber shop scheduling software

## docker start

Run docker for the first time

```docker run --name database -e POSTGRES_PASSWORD=docker -p 54325432 -d postgres:11```

```docker run --name mongobarber -p 27017:27017 -d -t mongo```

See containers

```docker container ls --all```

start postgres container

```docker start bc67bfd551e8```

start mongo container

```docker start 493ffbb4bcd2```

