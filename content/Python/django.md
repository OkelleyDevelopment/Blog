---
path: "/django"
title: Django Crash Course Notes
date: "2021-06-16"
excerpt: "Notes on Django"
author: "Nicholas O'Kelley"
tags: ["Python", "MVT", "Web"]
---

## Architectural Pattern: MVT

- Model-view-template

Typicall we see the following:

## Model:

Models descibe actual objects of the app and any dependencies (code assoc).

Example: A blog post and a users blog could be considered Models.

- data, interacts with DB
- communicates with Controller
- can sometimes update a view

## View:

- Client UI usually consisting of HTML/CSS
- Comms with controller
- Allows for dynamic values to be passed from Controller

## Controller

Acts as the mediator between the model(s) and the view which handles user interaction on the model,
and will respond to the view with the updated model.

- Recives input (from a view or url)
- Processes requests (GET, POST, PUT, DELETE)
- Gets data from the model
- Passes data to the view

Django handles Templates as their Views and controllers are Views. Since this is a little odd
to visualize, I have included a chart below.

Traditional MVC
- Model
- View 
- Controller 

Django MVT
- Model 
- Template
- Views

## Typical Project Structure

```

Project-folder/
- manage.py
- project/
    - __init__.py
    - settings.py
    - urls.py
    - asgi.py
    - wsgi.py
```

- The outer Project-folder/ root directory is a container for your project. Its name
  doesn’t matter to Django; you can rename it to anything you like.

- manage.py A cmd line utility that lets you interact with this django project in various ways. You
  can read all the details about manage.py in `django-admin and manage.py`

- mysite/**init**.py: An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read more about packages in the official Python docs.

- mysite/settings.py: Settings/configuration for this Django project. Django settings will tell you
  all about how settings work.

- mysite/urls.py: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in URL dispatcher.

- mysite/asgi.py: An entry-point for ASGI-compatible web servers to serve your project. See How to deploy with ASGI for more details.

- mysite/wsgi.py: An entry-point for WSGI-compatible web servers to serve your project. See How to deploy with WSGI for more details.

## DB Models

- Can interact with various DBs
- Does support GraphQL given a correct API

## Changing the Port of the Django Server

Runnging the server can be done in a couple ways: the first reveals the server to the world/network and the second just to your local development machine.

`embed:snippets/django_runserver.sh`

## Migrations

- Creates the models (the database schema)

## Security In POST forms

Django comes with some built in security such as

```
csrf_token
```

for all urls that target internal URLs and help prevent Site Request Forgeries.

## Testing

- Test Driven Development (TDD): Write the tests prior to writing the code

Testing can occur before, during, or after the code is written. The goal is to make sure
the output is valid so the WHEN is not important, just get it done. Make sure the tests are sensible

- Separate TestClass for each model or view
- Separate test case for each set of conditions you want to test
- Test method names that describe
