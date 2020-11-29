1. Build the image.
- ```-t``` tags the image, so can use that ID to run.
```docker build -t lexacali/simpleweb .```

2. Run the container.
- ```-p <localhost>:<container>``` routes incoming requests to the port on localhost to the port inside the container.

```
docker run -p 8080:8080 lexacali/simpleweb
```

