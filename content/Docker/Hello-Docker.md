---
path: "/Hello-Docker"
title: Hello Docker
date: "2021-03-12"
except: "Introduction to Containerization using Docker"
author: "Nicholas P. O'Kelley"
tags: ["Containerization", "Docker", "Image"]
---

## Motivation to Containerize

Software development is a very complex field and as such has a lot of external
dependancies especially when considering multiple operating systems. Though most
servers are running a version of Linux such as Red Hat Enterprise Linux (REHL) or
Ubuntu Server.

When building software, a program will need certain environment variables in order
to run properly and if desigining for various systems.

## What is an Image?

An image is typically:

- App binaries and dependancies
- Metadata about the image data and how to run/ execute the image

An image is NOT a completed OS as the host provides the kernel.

### Examples:

- As small as a single file (app binary) such as a Go static binary.
- As big as an Ubuntu distro wtih apt, Apache, PHP, and more installed.

Additionally, each layer of an image is uniquely identified and only stored on the host machine
one.

- This saves space on the host system!

## Basic Setup and Installation

Depending on the operating system that you are running will affect whether these commands
are relevant to you. I use linux as my daily driver therefore the commands will pertain to that.

However, I believe it is important to link others to resources so below I will link to install guides
for the MacOS and Windows Operating systems.

### Windows

Below is the link to the Docker offical documentation pages for the Windows installer.

- [Windows Install](https://docs.docker.com/docker-for-windows/install/)

### MacOS

Below is the link to the Docker offical documentation pages for the MacOS installer.

- [Windows Install](https://docs.docker.com/docker-for-mac/install/)

### Linux

- Run the install script below (NOTE: Will be on the nightly build)

```sh
curl -sSL https://get.docker.com/ | sh
```

Or chose a more manual install following the instructions for your distro on the offical docs (I may add links later).

## Keeping the System Clean

A big issue is when programming is file space. To keep your system clean
occasionally run these commands:

- `docker image prune` to clean up just "dangling" images

- `docker system prune` will clean up everything

  The system command is usually passed the `-a` flag which cleans the whole system
  of any extraneous images, caches, etc.
