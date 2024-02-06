<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

Blogging App Backend with NestJS

This is the backend component of a blogging application built using NestJS. It provides functionalities such as authentication, user management, commenting, and managing blog posts.

Features
- Authentication: Users can sign up, log in, and authenticate using JWT tokens.
- User Management: CRUD operations for managing users.
- Blog Posts: Create, read, update, and delete blog posts.
- Comments: Users can comment on blog posts.

Prerequisites
Before running the application, ensure you have the following installed:
- Node.js (>=12.x)
- npm or Yarn

Installation
1. Clone this repository:
git clone https://github.com/your-username/blogging-app-backend.git

2. Navigate into the project directory:
cd blogging-app-backend

3. Install dependencies:
npm install
# or
yarn install

Configuration
1. Create a .env file in the root directory of the project.

2. Define environment variables:
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret

- mongoDBURI: URL of your database.
- secret-key: Secret key for JWT token generation.

Usage
1. Start the server:
```bash
npm start
# or
yarn start

2. The server will start running at http://localhost:3000 (or your specified port).

API Endpoints
- Authentication:
  - POST /auth/signup: Create a new user.
  - POST /auth/login: Log in and receive JWT token.
- Users:
  - GET /users: Get all users.
  - GET /users/:id: Get user by ID.
  - PUT /users/:id: Update user details.
  - DELETE /users/:id: Delete user.
- Blog Posts:
  - GET /posts: Get all blog posts.
  - GET /posts/:id: Get blog post by ID.
  - POST /posts: Create a new blog post.
  - PUT /posts/:id: Update blog post.
  - DELETE /posts/:id: Delete blog post.
- Comments:
  - GET /posts/:postId/comments: Get all comments for a specific post.
  - POST /posts/:postId/comments: Add a comment to a post.

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
