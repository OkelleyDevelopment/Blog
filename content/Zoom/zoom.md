---
path: "/zoom"
title: Zoom on Linux
date: "2021-03-22"
excerpt: "Zoom on Ubuntu"
author: "Nicholas"
tags: ["Video"]
---

## Why Zoom?

Most universities are requiring this software for online classes so
it's best to install it correctly.

## Installing

```sh
wget https://zoom.us/client/latest/zoom_amd64.deb

sudo apt install ./zoom_amd64.deb
```

## Adjusting Menu Size

You will need to edit the `zoomus.conf` file in the `~/.config/`.

Change line 34 as shown below

```
scaleFactor=1

scaleFactor=0.75
```