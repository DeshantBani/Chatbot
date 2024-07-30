#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RagCdkInfraStack } from '../lib/rag-cdk-infra-stack';
import os
from dotenv import load_dotenv

load_dotenv()
os.environ["Account"] = os.getenv("Account_id")

const app = new cdk.App();
new RagCdkInfraStack(app, 'RagCdkInfraStack', {
  env: { account: Account, region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
