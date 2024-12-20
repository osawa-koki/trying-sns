import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';

export class IndexStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
      ...props,
      stackName: process.env.BASE_STACK_NAME!,
    });

    const topic = new sns.Topic(this, 'MyTopic', {
      topicName: process.env.SNS_TOPIC_NAME!,
      displayName: process.env.SNS_TOPIC_NAME!,
    });

    topic.addSubscription(new subscriptions.UrlSubscription(process.env.SNS_SUBSCRIPTION_URL!));
    topic.addSubscription(new subscriptions.EmailSubscription(process.env.SNS_SUBSCRIPTION_EMAIL!));

    new cdk.CfnOutput(this, 'TopicArn', {
      value: topic.topicArn,
    });
  }
}
