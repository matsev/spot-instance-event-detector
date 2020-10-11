#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SpotInstantceEventDetectorStack } from '../lib/spot-instantce-event-detector-stack';

const app = new cdk.App();
new SpotInstantceEventDetectorStack(app, 'SpotInstantceTerminationDetectorStack');
