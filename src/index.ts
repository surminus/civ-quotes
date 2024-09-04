import { CronJob } from "cron";
import "process";
import dotenv from "dotenv";

import { Agent, CredentialSession } from "@atproto/api";
import { ALL_QUOTES, Quote } from "./quotes";

dotenv.config();

const url = new URL("https://bsky.social");

async function main() {
  const username = process.env.BLUESKY_USERNAME;
  const password = process.env.BLUESKY_PASSWORD;

  if (!username || !password) {
    throw new Error("Must set BLUESKY_USERNAME and BLUESKY_PASSWORD");
  }

  const session = new CredentialSession(url);

  await session.login({
    identifier: username,
    password,
  });

  const agent = new Agent(session);
  await agent.post({
    text: format(selectQuote()),
  });
}

function selectQuote(): Quote {
  return ALL_QUOTES[Math.floor(Math.random() * ALL_QUOTES.length)];
}

function format(q: Quote): string {
  return `"${q.quote}"

${q.author}`;
}

if (process.env.CRONTAB_EXPRESSION) {
  const job = new CronJob(process.env.CRONTAB_EXPRESSION, main);

  job.start();
} else {
  console.log(format(selectQuote()));
}
