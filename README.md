# Honeycomb Angular Evaluation

## Objective

### Overview

Create an Angular app which interfaces with a database of people and their associate credit cards.

### Requirements

- User should be able to view a list of people from the database.
- User should be able to view a person's details, including a list of all credit cards associate with that person.
- User should be able to add a new credit card associate with a person from the persons details page.
- You should use routing and have two separate pages for person list and person details.

### Priorities

- Build things the angular way (Directives, Services, RxJS, etc.)
- Design
- Organization

## API

You will utilize a simple web server with an in-memory database in your application.

### Setup

    npm run start-server

All routes are served at http://localhost:3000/

### Endpoints

POST `/person/list`

### request

    {}

### response

    [
        {
            "id": 1,
            "first_name": "Ivy",
            "last_name": "Kitchin",
            "email": "ikitchin0@army.mil"
        },
        {
            "id": 2,
            "first_name": "Wrennie",
            "last_name": "Copping",
            "email": "wcopping1@sun.com"
        },
        ...
    ]

POST `/card/query`

### request

    {
        "person": 23
    }

### response

    [
        {
            "id": 245,
            "card_number": "6334551795219697724",
            "person_id": 23,
            "balance": 46691.55
        },
        {
            "id": 310,
            "card_number": "346901947592566",
            "person_id": 23,
            "balance": 19742.89
        },
        ...
    ]

POST `/card/add`

### request

    {
        "person_id": 23,
        "card_number": "1234123412341234"
    }

### response

    {
        "person_id": 23,
        "card_number": "1234123412341234",
        "balance": 0,
        "id": 66387
    }
