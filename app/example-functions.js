async function myExampleFunction({
  exampleEnvParam,
  exampleTokenFromHeader,
  exampleQueryStringParam,
}) {
  return [
    `exampleEnvParam="${exampleEnvParam}"`,
    `exampleTokenFromHeader="${exampleTokenFromHeader}"`,
    `exampleQueryStringParam="${exampleQueryStringParam}"`,
  ].join("; ");
}

module.exports = {
  myExampleFunction,
};
