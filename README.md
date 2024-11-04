# Server-to-server microservice communication
#### This is a Backend nodejs project.
In this project, two nodejs servers, namely: Alarm-api and Sleepy-human-api communicate using Apache kafka. 
* “A” starts by asking “S.H” to `wake-up`
* Once **“S.H”** receives the message, it should immediately
reply with either `no` or `snooze`
* If “A” receives a `snooze`, it should wait 5 seconds before
asking again
* If “A” receives a `no` it should immediately send `wake-up`
again.
* Docker is used for containerisation of the services and kafka

#### Image showing the docker container instances

<img width="1178" alt="Screenshot 2024-11-04 at 11 30 09" src="https://github.com/user-attachments/assets/c5730ce8-2f6a-406d-a4b1-d4d2b83b83c8">

#### Image showing the two services running side-by-side

<img width="1603" alt="Screenshot 2024-11-04 at 11 29 44" src="https://github.com/user-attachments/assets/f822d585-c1e1-40a1-9c63-3400ef3fba18">


#### To run the App locally.
Install docker desktop (https://www.docker.com/products/docker-desktop/)
Make sure you are running on node 20

in seperate terminals run 
docker-compose up -d --build
docker compose up sleepy-human-service --timestamps
docker compose up alarm-service --timestamps
