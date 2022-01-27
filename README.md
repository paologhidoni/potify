# Potify

An app to show off our plants.

# How to install

- Git clone https://github.com/fac-23/week3-oli-adam-paolo
- Run command `npm install` in terminal

## Local Database Setup

- In your terminal 
  - run ` ./scripts/create_db <name of your local database> `
  - run ` ./scripts/populate_db `
  - run ` psql `
  - run ` \connect <name of your local database> `
  - run ` \dt ` to check the tables are there. There should be only one table named "reviews"
  
- To start sever run command `npm run dev`
- For cypress testing run command `npm run test`
- Access locally on localhost:3000

# Core User stories

- [ ] As a user, I want to: submit information to your site for anyone to see
- [ ] As a user, I want to: come back to your site later and see what I posted is still there
- [ ] As a user, I want to: be the only person allowed to delete my stuff


# Acceptance Criteria

- [ ] Forms for users to sign up and log in
- [ ] A form for users to submit data only accessible to logged in users
- [ ] A page showing all the data
- [ ] A way for logged in users to delete their own data
- [ ] Semantic form elements with correctly associated labels
- [ ] A Postgres database hosted on Heroku
- [ ] Hidden environment variables (i.e. not on GitHub) 


# Stretch Criteria

- [ ] Tests for all routes
- [ ] A user page that shows everything posted by a single user
- [ ] GitHub Actions CI setup to run your tests when you push


## Roles:

- Scrum Facilitator and UX Design - Oli
- DevOps - Paolo
- Quality Assurance - Adam

## Co-authoring


Co-authored-by: Paolo <15671939+paologhidoni@users.noreply.github.com>
Co-authored-by: Oli <78092825+duckRabbitPy@users.noreply.github.com>
Co-authored-by: Adam <31065348+adam8-9@users.noreply.github.com> 

