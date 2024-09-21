#!/usr/bin/env node

import { confirm } from "@inquirer/prompts";
import { addShadcnTour, addTour, initTourbit } from "./utils/initTourbit";

async function runCLI() {
  const answer = await confirm({
    message: "Are you using shadcn-ui?",
  });

  if (answer) {
    initTourbit();
    addShadcnTour();
  } else {
    initTourbit();
    addTour();
  }
}

runCLI();
