First, build the image:

```docker build .```

At the end of the build, an ID will be outputted. Use that ID to run the image:

```docker run <ID>```

When building, can also tag an image instead.

```docker build -t <tag name> .```

The convention for a tag name is:

<your docker id>/<name of project>:<version>

Then can use the tag name to run the image instead.
