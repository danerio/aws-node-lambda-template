process.env.AN_ENVIRONMENT_PARAM =
	process.env.AN_ENVIRONMENT_PARAM || "This is the default value!";

const { myExampleFunction } = require(`${__dirname}/example-functions`);

exports.handler = function test(event, _context) {
	switch (event.path) {
		case "/test":
			const exampleEnvParam = process.env.AN_ENVIRONMENT_PARAM;
			const exampleTokenFromHeader = event.headers["auth-token"];
			const {
				exampleQueryParam: exampleQueryStringParam,
			} = event.queryStringParameters;

			return myExampleFunction({
				exampleEnvParam,
				exampleTokenFromHeader,
				exampleQueryStringParam,
			}).then((response) => {
				return {
					headers: {
						"Content-Type": "application/json",
					},
					statusCode: 200,
					body: {
						message: response,
					},
				};
			});
			break;
		default:
			return Promise.resolve({
				statusCode: 404,
				body: {
					message: event.path
						? `resource '${event.path}' not found`
						: `path undefined`,
				},
			});
	}
};
