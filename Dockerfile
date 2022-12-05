FROM public.ecr.aws/lambda/nodejs:12
# Alternatively, you can pull the base image from Docker Hub: amazon/aws-lambda-nodejs:12

ARG GIT_HASH

COPY package.json ${LAMBDA_TASK_ROOT}

RUN npm install

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app/lambda.handler" ]

COPY .  ${LAMBDA_TASK_ROOT}

ENV GIT_HASH=${GIT_HASH:-'development-build'}
