import fs from "fs";
import { createFolderAndFile } from ".";
import { spawn } from "child_process";

export const initTourbit = () => {
  console.log("Initializing tourbit...");
  if (fs.existsSync("./src")) {
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/types.ts",
      "./src",
      "types.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useFeatureTourState.ts",
      "./src/hooks",
      "useFeatureTourState.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useHighlightElement.ts",
      "./src/hooks",
      "useHighlightElement.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useKeyboardNavigation.ts",
      "./src/hooks",
      "useKeyboardNavigation.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/usePositioning.ts",
      "./src/hooks",
      "usePositioning.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/refs/heads/main/src/hooks/useLocalstorage.ts",
      "./src/hooks",
      "useLocalstorage.ts",
      true
    );
  } else {
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useFeatureTourState.ts",
      "./hooks",
      "useFeatureTourState.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useHighlightElement.ts",
      "./src/hooks",
      "useHighlightElement..ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/useKeyboardNavigation.ts",
      "./src/hooks",
      "useKeyboardNavigation.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/hooks/usePositioning.ts",
      "./src/hooks",
      "usePositioning.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/refs/heads/main/src/hooks/useLocalstorage.ts",
      "./src/hooks",
      "useLocalstorage.ts",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/types.ts",
      "./src",
      "types.ts",
      true
    );
  }
};

export const addShadcnTour = async () => {
  console.log("Adding tourbit shadcn Tour components...");

  if (fs.existsSync("./src")) {
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/ShadcnTourPopup.tsx",
      "./src/components",
      "tour-popup.tsx",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx",
      "./src/components",
      "feature-tour.tsx",
      true
    );
  } else {
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/ShadcnTourPopup.tsx",
      "./components",
      "tour-popup.tsx",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx",
      "./src/components",
      "feature-tour.tsx",
      true
    );
  }

  const child = spawn("npx shadcn@latest add button card", {
    stdio: "inherit",
    shell: true,
  });
  child.on("close", () => {});
};

export const addTour = async () => {
  console.log("Adding tourbit Tour components...");

  if (fs.existsSync("./src")) {
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/TourPopup.tsx",
      "./src/components",
      "tour-popup.tsx",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx",
      "./src/components",
      "feature-tour.tsx",
      true
    );
  } else {
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/TourPopup.tsx",
      "./components",
      "tour-popup.tsx",
      true
    );
    createFolderAndFile(
      "https://raw.githubusercontent.com/code-with-onye/tourbit-template/main/src/components/FeatureToure2.tsx",
      "./src/components",
      "feature-tour.tsx",
      true
    );
  }
};
