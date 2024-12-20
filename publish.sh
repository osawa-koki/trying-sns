#!/bin/bash

source .env

TOPIC_ARN=$(aws cloudformation describe-stacks --stack-name ${BASE_STACK_NAME} --query 'Stacks[0].Outputs[?OutputKey==`TopicArn`].OutputValue' --output text)

message_candidates=("Octopus" "Fish" "Dragon" "Cat" "Dog" "Bird")
message=${message_candidates[$RANDOM % ${#message_candidates[@]}]}

echo "Publishing message: ${message}"
aws sns publish --topic-arn ${TOPIC_ARN} --message ${message}
echo "🎉🎉🎉 Successfully published message: ${message} 🎉🎉🎉"
