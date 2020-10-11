# AWS Spot Instance Interruption Detector

This is a PoC project how [Amazon EventBridge](https://aws.amazon.com/eventbridge/) can be used to detect EC2 Spot instance interruptions. The infrastructure defined in [lib/spot-instantce-event-detector-stack.ts](lib/spot-instantce-event-detector-stack.ts) consists of only two parts:
* An [EventBridge Rule](https://docs.aws.amazon.com/eventbridge/latest/userguide/create-eventbridge-rule.html)
* A Lambda function for logging the event triggered by the EventBridge Rule


## Installation

1. `npm install`
2. `npx cdk deploy`


## References

* [Spot Instance interruptions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html)
* [EventBridge Targets](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-targets.html)
* [Taking Advantage of Amazon EC2 Spot Instance Interruption Notices](https://aws.amazon.com/blogs/compute/taking-advantage-of-amazon-ec2-spot-instance-interruption-notices/)
