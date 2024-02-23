# PlaywrightAuthExample

### Testing Auth0 Authentication with Playwright   

This project will demonstrate how to test Auth0 authentication with Playwright.  
**Note, Auth0 will need to have github setup as a connection.**  
This is a basic nextjs App router site with Auth0 authentication.
when adding to github, make sure to add the environment variables to the repository secrets.

### Pre-Setup
- [ ] Made an Auth0 account
- [ ] Created an Auth0 application for normal use
  -  guide for nextjs [here](https://auth0.com/docs/quickstart/webapp/nextjs)
- [ ] Created an Auth0 application for testing
- [ ] made a test account in Auth0 and saved the credentials in the `.env` file
  -  the password should be [base 64 encoded](https://www.base64encode.org/)
- [ ] Setup a github connection in Auth0 (for the regular application)
- [ ] Made a github account
- [ ] Installed VSCode
- [ ] Installed Node.js

### Setup
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create copy of `.env.public` and rename it to `.env`
4. Fill in the `.env` file with your Auth0 credentials (found on the dashboard) and github username and password (BASE 64 Encoded)
5. Create `playwright/.auth/user.json` in the root directory of the project, leave the file empty
* [optional] Install the paywright extension in VSCode

### Running the tests
- Run `npm run test` to run the tests
- Run `npm run test:ui` to run the tests in headed mode (with the window open that lets you see the tests run)
  
### Make sure to fill in the Application URIs as shown below
 ![Playwright Auth Test](assets\urls.png) 

### also make sure to fill in the AUTH0_BASE_URL as "http://localhost:3000" in the .env file

  **Relevent Documentation**

  [Playwright Auth](https://playwright.dev/docs/auth)
  [NextJS Auth0 Docs](https://auth0.com/docs/quickstart/webapp/nextjs/interactive)
  [Playwright Config](https://playwright.dev/docs/test-configuration)
  [Nextjs Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#convention)
  