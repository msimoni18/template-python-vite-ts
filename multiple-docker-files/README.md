# template-python-vite-ts

Template for building a `Docker` application using `Vite+TypeScript` as the
frontend and `Flask` as the backend`.

## Setup

### Frontend

In `frontend/`, install packages:

`npm install`

### Backend

In `backend`, create the virtual environment:

`python3 -m venv venv`

Activate the virtual environment:

`source venv/bin/activate`

Install the requirements:

`pip install -r requirements.txt`

## Running the application

To run locally without `Docker`, run the following commands in separate
terminals from the root directory:

`cd backend; flask run --port 5001`

`cd frontend; npm run dev`

Run with `Docker` (uses production environment):

`docker compose up -d --build`
