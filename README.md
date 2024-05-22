# Forml Assessment

### Instructions

> I was using Node.js 18 LTS and Python 3.10 for my project

For the backend,

1. Install backend requirements using `requirements.txt`
```sh
pip install -r requirements.txt
```
2. Run the server
```sh
python app.py
```
Server will run on port 5001

For the frontend,

1. Install the dependencies
```sh
npm install
```
2. Run project
```sh
ng serve
```

### Thoughts and Approach

- I thought of first creating a barebones application for the sake of completeness.

- I also thought it would be great to have it dockerized so I tried doing that, I only need a Docker Compose and some minor modifications to get that setup complete.

- I implemented the default Flask caching but wanted to do something like Redis and the Docker setup would have really proved useful. But that was my plan.

- I did setup the socket on the backend but did not have enough time to setup the frontend connections.

- Ideally I would want to put all of this behind a reverse proxy too, but the time of the assessment isn't enough for these tasks.