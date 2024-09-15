"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFolderAndFile = createFolderAndFile;
exports.writeFile = writeFile;
const fs_1 = __importDefault(require("fs"));
const https = __importStar(require("https"));
function createFolderAndFile(url, folderPath, fileName, isRoot = false) {
    let filePath = isRoot
        ? `${folderPath}/${fileName}`
        : `./src/${folderPath}/${fileName}`;
    if (!fs_1.default.existsSync("./src")) {
        filePath = `./${folderPath}/${fileName}`;
    }
    fs_1.default.mkdirSync(isRoot ? folderPath : `./src/${folderPath}`, {
        recursive: true,
    });
    if (fs_1.default.existsSync(filePath)) {
        console.log(`File ${fileName} already exists, checking content...`);
        https
            .get(url, (response) => {
            let data = "";
            response.on("data", (chunk) => {
                data += chunk;
            });
            response.on("end", () => {
                const existingContent = fs_1.default.readFileSync(filePath, "utf8");
                if (existingContent === data) {
                    console.log(`File ${fileName} is already up to date. No changes made.`);
                }
                else {
                    console.log(`Updating file ${fileName}...`);
                    fs_1.default.writeFileSync(filePath, data);
                }
            });
        })
            .on("error", (err) => {
            console.error("Failed to fetch file from URL", err);
        });
    }
    else {
        console.log(`Creating new file ${fileName}...`);
        writeFile(fileName, url, filePath);
    }
}
function writeFile(action, url, filePath) {
    https
        .get(url, (response) => {
        const { statusCode } = response;
        if (statusCode !== 200) {
            console.error(`Failed to download ${action}. Status code: ${statusCode}`);
            response.resume();
            return;
        }
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            if (fs_1.default.existsSync(filePath)) {
                fs_1.default.readFile(filePath, "utf-8", (err, existingData) => {
                    if (err) {
                        console.error(`Failed to read existing ${action} from ${filePath}`, err);
                        return;
                    }
                    if (!existingData.includes(data)) {
                        fs_1.default.appendFile(filePath, `\n${data}`, (err) => {
                            if (err) {
                                console.error(`Failed to append to ${action} in file: ${filePath}`, err);
                            }
                            else {
                                console.log(`${action} successfully appended to ${filePath}`);
                            }
                        });
                    }
                    else {
                        console.log(`${action} is already present in ${filePath}`);
                    }
                });
            }
            else {
                fs_1.default.writeFile(filePath, data, (err) => {
                    if (err) {
                        console.error(`Failed to write ${action} to file: ${filePath}`, err);
                    }
                    else {
                        console.log(`${action} successfully written to ${filePath}`);
                    }
                });
            }
        });
    })
        .on("error", (err) => {
        console.error(`Failed to download ${action}. Error:`, err);
    });
}
