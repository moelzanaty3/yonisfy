---
title: "Build a Storefront Backend"
showMetadata: true
editable: true
showToc: true
order: 3
tocDepth: 4
---

## Project Summary

Imagine that you are a web developer at a small company. The company stakeholders have decided they want to set up an online store to make their great product ideas available for purchase -- and they want you and your co-worker to build it.

The stakeholders have put together a list of requirements for this online store. Your co-worker will be building the frontend and you will be supplying the JavaScript API. The requirements have been collected into requirements document.

Your job is to architect the database, its tables and columns to fulfill the data requirements and craft a RESTful API that exposes that information to the frontend developer.

Your application needs to be ready for beta tests, so it needs to have tests, keep user information secure, and provide user authentication tokens that are ready to integrate with the frontend.

## Instructions

Feel free to attempt to create this project based on the overview and [rubric specifications](https://review.udacity.com/#!/rubrics/3061/view). If you get stuck or prefer structured guidance -- here is a walk-through to get you up and running!


here's small digram for what's needed to be done

![Diagram](/images/store-frontend.png)

### Requirements

- Draft a database schema that covers all the data requirements.
  
> u can use something like [erdplus](https://erdplus.com/)
  
- Draft a map of endpoints to expose for the frontend.

### Database Setup

- Create a connection to a Postgres database from the provided Node application.
- Add tables and columns according to the database schema doc from step 1.

### Create Models

- Create models that facilitate CRUD operations on the database tables.
- Create a test suite for each model in Jasmine.

### Create API Endpoints

- Create handler files for each model.
- In each handler file, create RESTful endpoints for each model method.
- Create a test suite that covers each endpoint with Jasmine.

### Initialize your project

this can be done manually or it can be by [starter code](https://github.com/udacity/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter) provided by Udacity or by using my lovely tool [m-zanaty-web-utils](https://www.npmjs.com/package/m-zanaty-web-utils) to install all you need in 1-2 seconds based or internet speed but for here I will go with the manual solution but if you don't have time to waste here's a [video](https://www.youtube.com/watch?v=0KnqGbkBdxw) to explain how to use my magic tool

### Submission Checklist

Before you submit, check if the following have been completed:

1. Filled out `README.md`
2. Updated `REQUIREMENTS.md` - I build sample for how to [document API](https://github.com/mohammedelzanaty/guide-lines/blob/main/API-documentation-sample.md)
3. `package.json`
4. `database.json`
5. Model Folder
6. Handler Folder
7. Migrations Folder
8. Model and Endpoint Tests
9. Relevant Supporting Files

## Build, Document, and Submit

If everything else has gone well, you should be able to compile your typescript and start up your production server to test that everything still works as expected. Make sure you've provided all necessary information in your readme file, so your reviewer knows how to test your API. If everything works and your documentation is complete, you're ready to submit!
  
  > **_Congratulations!_**

## Version Control

Although not a requirement, we recommend using Git from the very beginning if you choose to build on your local environment or use the provided workspace. Make sure to commit often and to use well-formatted commit messages.

## Udacity Style Guides

Although Eslint and Prettier will handle most of your formatting needs, you should write your code and markup to meet the specifications provided in these style guides:

🌳 [CSS Style Guide](/udacity/style-guide/CSS)

🌳 [HTML Style Guide](/udacity/style-guide/html)

🌳 [JavaScript Style Guide](/udacity/style-guide/javascrpt)

🌳 [Git Guide](/udacity/style-guide/git)


> A note on plagiarism: Viewing someone else’s code to get a general idea of implementation, then putting it away and starting to write your own code from scratch is okay. Please do not copy someone's code, in whole or in part. For further details, check out this guide [regarding plagiarism](/udacity/plagiarism).

Most of the text here provided by 🎭 © [Udacity](https://www.udacity.com/) and I am only adding a little bit chooclate to  make it more tasty and powerfull
