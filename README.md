# Engineering Full Stack Dev Test

This repository contains the code for the completed task. It is divided into two separate sections. More explanation below.

Take a look at the screenshot below

![ezgif com-video-to-gif 23](https://user-images.githubusercontent.com/19610753/50707672-f03e5600-1061-11e9-8dbd-ede0e28524bb.gif)

Live demo:

[Jumpcut-Engineering-FullStack-Test-Live](https://jumpcut-frontend-app.herokuapp.com/)


## Getting Started
This project is divided into two separate sections. Namely the Backend ( Built with Node.js / Express) and the frontend ( Built with React ).

### Clone the repository
To easily set up the application, clone this repository which contains directory for both sections of the project ( i.e `jumpcut-backend` and `jumpcut-frontend`)

```bash
git clone https://github.com/yemiwebby/jumpcut-project.git
```

## Change directory into the newly cloned project
```bash
cd jumpcut-project
```

## Backend
### Change directory into the backend
```bash
cd jumpcut-backend
```

### Install backend dependencies

```bash
npm install
```
Once the installation process is complete, open the `jumpcut-backend` with any favorite editor of yours.

### Run the application
Open another terminal and still within the `jumpcut-backend` project directory run the application with:

```bash
npm run start
```

This will start the backend application on port `5500`. This was modified to avoid confliction with the frontend application which by default will run on port `3000`

### Test 
The test cases covered in this project is mostly to ensure that each generator functions returned the appropriate response depending on the sequencer function passed to it as a parameter.
To run the test, open the terminal from within the `jumpcut-backend` directory and run the following command:

```bash
npm run test
```

You will see a similar output as shown below:

![jump-terminal](https://user-images.githubusercontent.com/19610753/50708531-e9fda900-1064-11e9-9f6d-8900fd29a24a.png)

Ensure that you leave the `jumpcut-backend` server running.


## Frontend
Open another terminal from the `jumpcut-project` and navigate to the `jumpcut-frontend` folder to setup the frontend

### Frontend dependencies

```bash
cd jumpcut-frontend

yarn install
```

### Run the frontend app

```bash
npm start
```


### Test the application
Finally open your browser and view the application on http://localhost:3000


## Prerequisites
 [Node.js](https://nodejs.org/en/), [Yarn package manager](https://yarnpkg.com/lang/en/docs/install/#mac-stable)


## Built With
[Node.js]()
[React.js]()