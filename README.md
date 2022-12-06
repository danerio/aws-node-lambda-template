# aws-node-lambda-template

The puprpose of this repository is to act as a template for setting an `REST Api` to be built and deployed to AWS to an API Gateway which will be used in a Lambda.

## Structure

### `app`

Inside the `app` folder, you will find the `lambda.js` file, this acts as the entry point to your API.

The handler, `exports.handler = function test(event, _context) {...`, is the entry point into your applications, the `path` property of `event` will tell you what endpoint of your RESTful interface the caller of the lambda is attempting to reach.

For more detailed documentation, you can visit: [Tutorial: Using Lambda with API Gateway](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html#services-apigateway-tutorial-api)

The gateway function (`lambda.js`) should only handle directing requests, try to keep additonal logic in other functions (consider additonal files or folders to organize your code structure).

### `config`

Contains all the configuration files required to build / deploy to an environment. Please see `example.json` for example values.

### `dev`

Contains executable files that will be useful during development.

#### `build-and-run-latest-lambda`

Running `dev/build-and-run-latest-lambda` in your console will use the `Dockerfile` in the root of this project will build and run a docker container to host your API locally. By default it has been configured to run on `localhost:9000`.

You can test your API by making a call to `curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{ "path": "some-path" }'`

The path, "some-path", does not exist, so this one should return a 404.

#### `dev/test`

This folder is where I would put files to run a test against an endpoint I have configured in `/app/lambda.js`.

##### `test/call-test-example`

In this file is a cURL request that makes a call out to my `test` endpoint. You can run it by running `dev/test/call-test-example` in your console.
