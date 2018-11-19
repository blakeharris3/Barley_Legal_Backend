# ![GA Cog](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project 3: React-Express-API


| Title                      | Week     | Reviewer | Student(s) |Campus |
|----------------------------|----------|----------|---------|--------|
| Unit Three Project Three | Week Eight | Daniel Scott| Avery Hinds / Blake Harris / Colin Daniel | Dallas |

### Overview

While your last project taught you how to get started with writing a full stack application in JavaScript using Express, Mongoose, and Node, this project will have you building another full stack application, but this time with a React front-end.

You will build an app with three major components:

1. An API of your own design, built using Node, Express, and Mongoose, that serves JSON.
2. Front-end React code that updates the UI and makes requests to your API back end.
3. Consume a third party API (google maps, weather, spotify, government data, instagram, news, stocks, etc... possibilities are basically endless). [Here's a bunch of cool APIs.](https://github.com/TonnyL/Awesome_APIs)

---

### Requirements

> ### *In case you were thinking about it, do not use REDUX for this project*

#### Planning Requirements/ Proposals
  - Clearly defined user stories for your MVP
  - Wireframes
  - Readme in your front-end repo including links to the above and a description of what your project is, why you chose to make it/what problem it solves, technologies used, installation requirements, the contributors, etc.
  - Readme in your back-end repo describing your API endpoints and how to use them (look at other API references for guidance). 

#### Back-End (API) Requirements
  - Node, Express, and some type of database (MongoDB) with at least 1 model. No associations are required. 
  - Must have Create, Read, Update, and Destroy functionality.

#### Front-End Requirements
  - React front end that consumes your backend API.
  - It must communicate with the back end API RESTfully to Create, Read, Update, and Destroy resources, using fetch.

#### Overall Requirements
  - Your app (either the front end or the back end) must consume at least one third Party API.

#### Deployment
  - Your API must be deployed to Heroku and your front-end must be deployed to Heroku or Surge.
  - We recommend Surge as using it to deploy is [very easy](https://daveceddia.com/deploy-create-react-app-surge/)

    > You MUST deploy your back-end and front-end separately. This assignment is to make a front end and separate back end using totally decoupled architecture. This will make it far easier to debug your deployed applications and manage your deployments. One way to get yourself in trouble in this project would be to attempt to follow a tutorial for MERN stack that is NOT decoupled. Do not do this.
    
---

##### Auth and React Router 

- You're not required to do authentication or React Router

### App Organization

You should build your application in completely separate repositories, one for your React front-end and another for your Node-Express-Mongoose API.

---

### Process

* **Keep user stories small** and well-defined. Remember: user stories focus on what a user *needs*, not what development tasks need accomplishing.
* **Write pseudocode** before you write actual code. Thinking through the logic first helps.
* **Don't hesitate** to write throwaway code to solve short-term problems.
* **Read the docs** for whatever technologies / frameworks / APIs you plan to use. (See ["RTFM"](https://en.wikipedia.org/wiki/RTFM))
* **Use Git Branches** 


---

### Code

* **Keep your code DRY** and build your API RESTful.
* **Be consistent** with your code style. (Pick single or double quotes, either put a space between `) {` or don't).
* **Commit early; commit often.** Don't be afraid to break something because you can always go back in time to a previous version (so long as you're committing often).
* **Name things appropriately.  Comment as necessary.** Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is? (See ["self-documenting"](https://en.wikipedia.org/wiki/Self-documenting)).  Even if it's obvious, comments can help to explain the intent -- the what and why.  This allows the next developer (which could even be you in a few months) to understand the purpose and decide what can be adjusted to achieve the same goal.
* **Ensure it is well-formatted.** Are you indenting consistently? Can we find the start and end of every div, curly brace, etc?  Organizing the hierarchy is key to understanding.

---

### Necessary Deliverables

* A **working full-stack application, built by you, that contains all of the RESTful routes, full CRUD**
* *Bonus*: hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project,  and frequent commits dating back to the **very beginning** of the project. Commit early, commit often.
* **A `README.md` file** with explanations of the technologies used, what problem your app solves/why you made it, the approach taken, installation instructions/requirements, contributor information, unsolved problems, forthcoming features, etc. The README.md should  also include
 * (links to) **Wireframes of your app**, hosted somewhere & linked in your readme
 * (a link to) **User stories you created**

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

The above key will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!




## Project Workflow - 2

Good job coming up with a very creative project design for project three. One thing that was necessary for this part of the grade was to include your wireframes in the README. Also, for your API endpoints we also needed to see each of the urls that will be used to make requests to your API.

## Technical Requirements - 3

Excellent work! You’ve met all of the technical requirements for this project!! You built a React frontend that consumes a third party API and a private backend API built using express/node/mongoDB. You had one user model and a stretch goal of implementing a relationship between users and beers. You also implemented full crud functionality as well. Your project was reasonably complex compared to what we’ve learned over the past few weeks.

## Creativity - 3

Great job in this area! Your idea for an application that allows users to create a collection of their favorite beer is an awesome project to take on!  The overall design for the project was also very nicely done. One stretch goal to consider here would be to make your application mobile responsive. 

## Code Quality - 2.5

Overall, you code looked good, however there were a few instances in your code quality could have improved. I’ve added comments in your files to point out some specific areas I thought you could work on. Please see individual files in both front-end and backend code for specifics.

## Deployment - 3

Your project was successfully deployed! You also deployed your application as a decoupled app, so excellent work here everyone!

## Total 13.5 / 15










