Use docker-compose to have two containers be able to communicate with each other.

- Create an instance of all the containers listed in ```docker-compose.yml```:
```docker-compose up```
(Instead of ```docker run <image id>```).

- Whenever need to rebuild:
```docker-compose up --build```
(Instead of ```docker build .``` then ```docker run <image id>```).

- To launch containers in background:
```docker-compose up -d```

- To stop all containers:
```docker-compose down```
