Use docker-compose to have two containers be able to communicate with each other.

1. Create an instance of all the containers listed in ```docker-compose.yml```:
```docker-compose up```
(Instead of ```docker run <image id>```).

2. Whenver need to rebuild:
```docker-compose up --build```
(Instead of ```docker build .``` then ```docker run <image id>```).
