# Thinkific Multi-User Journal Assignment

This App is created using REMIX.js, React, Prisma and PostgresSQL.
It's connected to ChatGPT API to auto generate the post sugestion.

## Live Demo

Check out the live demo: [https://fs-remix.vercel.app/](https://fs-remix.vercel.app/)

This Live Demo is deployed using Vercel.

## Getting Started

### 1. Install npm dependencies

```
yarn
```

### 2. Add Environment file

create .env file

Add environment variables (typically not exposed in README but added here for simplicyty as exception):

DATABASE_URL=postgres://u66tf3ial6bcne:pbac4600823dbade681a10c540a288f271aa18032f215b168e4bf1c1bcce6a32a@ce0lkuo944ch99.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d3nibbbfqriuhh

SHADOW_DATABASE_URL=postgres://u66tf3ial6bcne:pbac4600823dbade681a10c540a288f271aa18032f215b168e4bf1c1bcce6a32a@ce0lkuo944ch99.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d3nibbbfqriuhh

OPENAI_API_KEY=sk-proj-PaQrJFyVTFBSlCfEsIOWT3BlbkFJ175zy8gcO7q81IsHcLGh

### 3. Start the app

```
yarn dev
```

The app is now running, navigate to [`http://localhost:5173/`](http://localhost:5173/) in your browser to explore its UI.

## Submission

Update this README file by answering the questions below.

### Date Or Reflection

May 27th, 2024

### Location of deployed application (not necessary for Junior Engineers)

live demo: [https://fs-remix.vercel.app/](https://fs-remix.vercel.app/)

### Instructions to run assignment locally

#### 1. Install npm dependencies

```
yarn
```

#### 2. Add Environment file

create .env file

Add environment variables (typically not exposed in README but added here for simplicyty as exception):

DATABASE_URL=postgres://u66tf3ial6bcne:pbac4600823dbade681a10c540a288f271aa18032f215b168e4bf1c1bcce6a32a@ce0lkuo944ch99.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d3nibbbfqriuhh

SHADOW_DATABASE_URL=postgres://u66tf3ial6bcne:pbac4600823dbade681a10c540a288f271aa18032f215b168e4bf1c1bcce6a32a@ce0lkuo944ch99.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d3nibbbfqriuhh

OPENAI_API_KEY=sk-proj-PaQrJFyVTFBSlCfEsIOWT3BlbkFJ175zy8gcO7q81IsHcLGh

#### 3. Start the app

```
yarn dev
```

The app is now running, navigate to [`http://localhost:5173/`](http://localhost:5173/) in your browser to explore its UI.

#### Time spent

4-5 hours

### Assumptions made

The App is using Remix, Prisma, React, PostgresSQL.
All the Database Prisma Queryes are located here (prisma/helpers/post.ts)

I used Tailwind for styling the app.

The app uses openAI API to autogenerate suggestions for post.

When user creates a post he enters his name and email. I did not have enough time to implemenent Authentcation, I would use Auth0 or remix-auth for this. It would simplify Name and login capturing information when creating a post.

Any anonimus user is able to:
-Read ALL posts
-Read posts for specific user
-Create Post
-Edit Post
-Delete post (popups conformation)

### Shortcuts/Compromises made

When user creates a post he enters his name and email. I did not have enough time to implemenent Authentcation, I would use Auth0 or remix-auth for this. It would simplify Name and login capturing information when creating a post.

Tests not implemented duet to time constrains. I would use Jest for unit testing and Cypress for e2e testing.

### Assume your application will go into production...

#### 1) What would be your approach to ensuring the application is ready for production (testing)?

Implement auth, login/logout functionality
Code Quality and Review
Tests (unit and e2e)
Continuous Integration and Continuous Deployment (CI/CD). Pipeline configuration to reflect app quolity and business needs.
Monitoring and login of the app. Test perfomance of the app using tools such as Newrelic.
Add documentation
Final Review and Sign-off
Use cloud computing for storing the assets (CDN in case we implement media file uploads) and servecies.

#### 2) How would you ensure a smooth user experience as 1000’s of users start using your app simultaneously?

- Use cloud computing for scallability and high traffic (Use a Microservices Architecture)
- Implement Load Balancing. For example using services like AWS Elastic Load Balancing or Azure Load Balancer.
- Use a Content Delivery Network (CDN) Offload static assets (images, CSS, JavaScript) to a CDN like Cloudflare, Akamai, or Amazon CloudFront to reduce server load and improve response times.

- Performance Optimization:

  - Implement pagination and infinite scroll for user sidebar
  - Implement pagination for posts
  - Make sure that all requests has a limited response (for example not more than 50 posts at the time)
  - Optimize Database Access
    - Use Indexing: Ensure your database queries are optimized with proper indexing.
    - Database Caching: Use in-memory caching systems like Redis or Memcached to cache frequent database queries.
    - Read Replicas: Implement read replicas to distribute read operations across multiple database instances.
  - Minification: Minify CSS, JavaScript, and HTML files to reduce their size.

- Container Orchestration: Use Kubernetes or Docker Swarm to manage containerized applications and automatically scale based on resource utilization.
- Testing for Scalability (Load Testing, Stress Testing )
- Secure Authentication and Authorization
- Rate Limiting and Throttling
  - Protect Against Abuse: Implement rate limiting to protect against DDoS attacks and abuse.
  - API Rate Limits: Set rate limits for API usage to prevent overloading your servers.

#### 3) What key steps would you take to ensure application security?

- Authentication and Authorization

  - Use Strong Authentication: Implement multi-factor authentication (MFA) to add an extra layer of security.
  - Use Secure Protocols: Utilize secure authentication protocols such as OAuth2, OpenID Connect, or SAML.

- Data Protection

  - Data in Transit: Use HTTPS/TLS to encrypt data transmitted between the client and server.
  - Data at Rest: Encrypt sensitive data stored in databases and file systems using AES or other strong encryption algorithms.

- Input Validation and Output Encoding
- Security Testing
- Secure Configuration
  - Use Environment Variables: Store sensitive configuration details like database credentials in environment variables.
  - Configuration Files: Securely manage and encrypt configuration files.
- Logging and Monitoring, Incident Response using tools such as Newrelic

### What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.

- Tests (unit and e2e) I would use Cypress and Jest
- Pagination, Infinite scrolling
- Auth, login/logout functionality - I would use Auth0 or remix-auth
- Input Validation

### Other information about your submission that you feel it's important that we know if applicable.

### Your feedback on this technical challenge

This is overall a good assesment that tests Full Stack skills, Remix, React, Node.js and styling knowlage. It was fun working on it, thank you for opportunity to work on it.
