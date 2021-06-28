---
path: "/Building-An-Image"
title: How to Build an Image
date: "2021-03-13"
except: "Containerize your Apps"
author: "Nicholas"
tags: ["Containerize", "Docker", "Python"]
---

## Container Lifetimes and Persistant Data

- Containers are _usually_ immutable and ephemeral
- An "immutable infrastructure": only re-deploy the container; never change

## Building a Docker image

### The Dockerfile

This is the "blue-print" for the application that will be built. The format
follows as shown:

```Dockerfile
# Comments
COMMAND argument [argument]*
```

## Running a container with Docker

## Closing down a container
