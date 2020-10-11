import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as logs from "@aws-cdk/aws-logs";
import * as events from '@aws-cdk/aws-events';
import * as eventsTargets from '@aws-cdk/aws-events-targets'


export class SpotInstantceEventDetectorStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const spotInstanceEventLambda = new lambda.Function(this, 'SpotInstanceEventLambda', {
      description: 'Handles Spot Instance events',
      runtime: lambda.Runtime.NODEJS_12_X,
      code: new lambda.AssetCode('lambdas'),
      handler: 'spot-instance-event-lambda.handler',
      logRetention: logs.RetentionDays.TWO_WEEKS,
    });

    new events.Rule(this, 'SpotInstanceEventRule', {
      description: 'Rule for tracking spot instance interruptions',
      eventPattern: {
        source: ['aws.ec2'],
        detailType: ['EC2 Spot Instance Interruption Warning'],
      },
      targets: [new eventsTargets.LambdaFunction(spotInstanceEventLambda)],
    });
  }
}
