import "process";
import dotenv from "dotenv";

import { Agent, CredentialSession } from "@atproto/api";
import { ALL_QUOTES, Quote, JSON_QUOTES } from "./quotes";
import { writeFileSync } from "fs";

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

  const quote = format(selectQuote());

  const agent = new Agent(session);
  await agent.post({
    text: quote,
  });

  writeToPath(quote);
  writeJsonToPath();
}

function writeToPath(quote: string) {
  if (process.env.WRITE_TO_PATH) {
    writeFileSync(process.env.WRITE_TO_PATH, quote, {
      flag: "w",
    });
  }
}

function writeJsonToPath() {
  if (process.env.WRITE_JSON_TO_PATH) {
    writeFileSync(process.env.WRITE_JSON_TO_PATH, JSON_QUOTES, {
      flag: "w",
    });
  }
}

function selectQuote(): Quote {
  return ALL_QUOTES[Math.floor(Math.random() * ALL_QUOTES.length)];
}

function format(q: Quote): string {
  return `"${q.quote}"

${q.author}`;
}

if (process.env.POSTING_ENABLED) {
  main();
} else {
  const quote = format(selectQuote());
  console.log(quote);
  writeToPath(quote);
  writeJsonToPath();
}
