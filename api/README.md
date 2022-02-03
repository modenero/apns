# APNS API

https://api.apns.io

## How-to Build Docker Image

`docker build -t apns/api .`

## Starting a Docker instance

```
docker run -d \
    --restart always \
    --network='host' \
    -e NODE_ENV='development' \
    -e TWILIO_API_KEY='<place-key-here>' \
    --name api apns/api
```
