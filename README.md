# Go Barber

Barber shop scheduling software

## docker start

Run docker for the first time

```docker run --name database -e POSTGRES_PASSWORD=docker -p 54325432 -d postgres:11```

```docker run --name mongobarber -p 27017:27017 -d -t mongo```

```docker run --name redisbarber -p 6379:6379 -d -t redis:alpine```

See containers

```docker container ls --all```

start postgres container

```docker start bc67bfd551e8```

start mongo container

```docker start 493ffbb4bcd2```

start redis 

```docker start 954476c87487```

## mobile start

mobile reactotron 

```adb reverse tcp:9090 tcp:9090```

mobile 

```npx react-native run-android```

---

# Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me." - John 14:6
