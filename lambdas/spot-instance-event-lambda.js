exports.handler = (event) => {
  const { time, region, detail: { 'instance-id': instanceId, 'instance-action': instanceAction } } = event;

  // Send to CloudWatch
  console.info(JSON.stringify({ time, region, instanceId, instanceAction }));

  // Trigger more actions such as post Slack notification, save data DynamoDB, etc
};
