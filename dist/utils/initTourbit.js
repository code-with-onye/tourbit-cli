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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTour = exports.addShadcnTour = exports.initTourbit = void 0;
const fs_1 = __importDefault(require("fs"));
const _1 = require(".");
const child_process_1 = require("child_process");
const initTourbit = () => {
    console.log("Initializing tourbit...");
    if (fs_1.default.existsSync("./src")) {
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/types.ts", "./src", "types.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useFeatureTourState.ts", "./src/hooks", "useFeatureTourState.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useHighlightElement.ts", "./src/hooks", "useHighlightElement.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useKeyboardNavigation.ts", "./src/hooks", "useKeyboardNavigation.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/usePositioning.ts", "./src/hooks", "usePositioning.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/refs/heads/main/src/hooks/useLocalstorage.ts", "./src/hooks", "useLocalstorage.ts", true);
    }
    else {
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useFeatureTourState.ts", "./hooks", "useFeatureTourState.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useHighlightElement.ts", "./src/hooks", "useHighlightElement..ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useKeyboardNavigation.ts", "./src/hooks", "useKeyboardNavigation.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/usePositioning.ts", "./src/hooks", "usePositioning.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/refs/heads/main/src/hooks/useLocalstorage.ts", "./src/hooks", "useLocalstorage.ts", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/types.ts", "./src", "types.ts", true);
    }
};
exports.initTourbit = initTourbit;
const addShadcnTour = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Adding tourbit shadcn Tour components...");
    if (fs_1.default.existsSync("./src")) {
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/ShadcnTourPopup.tsx", "./src/components", "tour-popup.tsx", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx", "./src/components", "feature-tour.tsx", true);
    }
    else {
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/ShadcnTourPopup.tsx", "./components", "tour-popup.tsx", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx", "./src/components", "feature-tour.tsx", true);
    }
    const child = (0, child_process_1.spawn)("npx shadcn@latest add button card", {
        stdio: "inherit",
        shell: true,
    });
    child.on("close", () => { });
});
exports.addShadcnTour = addShadcnTour;
const addTour = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Adding tourbit Tour components...");
    if (fs_1.default.existsSync("./src")) {
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/TourPopup.tsx", "./src/components", "tour-popup.tsx", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx", "./src/components", "feature-tour.tsx", true);
    }
    else {
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/TourPopup.tsx", "./components", "tour-popup.tsx", true);
        (0, _1.createFolderAndFile)("https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx", "./src/components", "feature-tour.tsx", true);
    }
});
exports.addTour = addTour;
