#!/usr/bin/env node

import { confirm } from "@inquirer/prompts";
import { addShadcnTour, addTour, initTouria } from "./utils/initTouria";

async function runCLI() {
  const answer = await confirm({
    message: "Are you using shadcn-ui?",
  });

  if (answer) {
    initTouria();
    addShadcnTour();
  } else {
    initTouria();
    addTour();
  }
}

runCLI();
