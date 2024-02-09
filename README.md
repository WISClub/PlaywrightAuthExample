# PlaywrightAuthExample

### Testing Auth0 Authentication with Playwright   

This project will demonstrate how to test Auth0 authentication with Playwright.  
**Note, Auth0 will need to have github setup as a connection.**  


### Pre-Setup
- [ ] Made an Auth0 account
- [ ] Created an Auth0 application
- [ ] Setup a github connection in Auth0
- [ ] Made a github account
- [ ] Installed VSCode
- [ ] Installed Node.js

### Setup
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create copy of `.env.public` and rename it to `.env`
4. Fill in the `.env` file with your Auth0 credentials and github username and password (BASE 64 Encoded)
5. Create `playwright/.auth/user.json` in the root directory of the project, leave the file empty
* [optional] Install the paywright extension in VSCode

### Running the tests
- Run `npm run test` to run the tests
- Run `npm run test:ui` to run the tests in headed mode (with the window open that lets you see the tests run)
  

  **Relevent Documentation**

  [Playwright Auth](https://playwright.dev/docs/auth)
  [NextJS Auth0 Docs](https://auth0.com/docs/quickstart/webapp/nextjs/interactive)
  [Playwright Config](https://playwright.dev/docs/test-configuration)
  [Nextjs Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#convention)
  