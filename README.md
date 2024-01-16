# template-python-vite-ts

Template for building a `Docker` application using `Vite+TypeScript` as the
frontend and `Flask` as the backend`.

## Setup

### Frontend

Install packages:

`npm install`

### Backend

Create the virtual environment:

`python3 -m venv venv`

Activate the virtual environment:

`source venv/bin/activate`

Install the requirements:

`pip install -r backend/requirements.txt`

## Running the application

To run locally without `Docker`, run the following commands in separate
terminals:

`npm run flask`

`npm run dev`

Run with `Docker` (production):

`docker compose up -d`
