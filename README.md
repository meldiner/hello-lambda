# hello-lambda
AWS Lambda, Serverless Framework, TypecScript & Jest Hello World Project

## Available Scripts

In the project directory, you can run:

### `npm clean`

Deletes the `build` folder.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run test:unit`

Runs all unit tests located in the `src` folder.

### `npm run test:e2e`

Runs all end to end tests located in the `test` folder.<br>
Note that setting an environment variable named `SERVICE_URL` with the service url to test against is required in order to run the end to end tests.

### `npm run deploy`

Deploys the service to AWS.<br>
To deploy to a different stage than the default `dev` stage run: `npm run deploy -- --stage <your stage name>`

### `npm start`

Starts a the service on `http://localhost:3000` using the [serverless offline plugin](https://github.com/dherault/serverless-offline)
