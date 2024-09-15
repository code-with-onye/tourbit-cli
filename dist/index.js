#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
const initTouria_1 = require("./utils/initTouria");
function runCLI() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield (0, prompts_1.confirm)({
            message: "Are you using shadcn-ui?",
        });
        if (answer) {
            (0, initTouria_1.initTouria)();
            (0, initTouria_1.addShadcnTour)();
        }
        else {
            (0, initTouria_1.initTouria)();
            (0, initTouria_1.addTour)();
        }
    });
}
runCLI();
