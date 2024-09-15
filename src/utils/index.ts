import fs from "fs";
import * as https from "https";

export function createFolderAndFile(
  url: string,
  folderPath: string,
  fileName: string,
  isRoot: boolean = false
) {
  let filePath = isRoot
    ? `${folderPath}/${fileName}`
    : `./src/${folderPath}/${fileName}`;

  if (!fs.existsSync("./src")) {
    filePath = `./${folderPath}/${fileName}`;
  }

  fs.mkdirSync(isRoot ? folderPath : `./src/${folderPath}`, {
    recursive: true,
  });

  if (fs.existsSync(filePath)) {
    console.log(`File ${fileName} already exists, checking content...`);

    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          const existingContent = fs.readFileSync(filePath, "utf8");

          if (existingContent === data) {
            console.log(
              `File ${fileName} is already up to date. No changes made.`
            );
          } else {
            console.log(`Updating file ${fileName}...`);
            fs.writeFileSync(filePath, data);
          }
        });
      })
      .on("error", (err) => {
        console.error("Failed to fetch file from URL", err);
      });
  } else {
    console.log(`Creating new file ${fileName}...`);
    writeFile(fileName, url, filePath);
  }
}

export function writeFile(action: string, url: string, filePath: string) {
  https
    .get(url, (response) => {
      const { statusCode } = response;

      if (statusCode !== 200) {
        console.error(
          `Failed to download ${action}. Status code: ${statusCode}`
        );
        response.resume();
        return;
      }

      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        if (fs.existsSync(filePath)) {
          fs.readFile(filePath, "utf-8", (err, existingData) => {
            if (err) {
              console.error(
                `Failed to read existing ${action} from ${filePath}`,
                err
              );
              return;
            }

            if (!existingData.includes(data)) {
              fs.appendFile(filePath, `\n${data}`, (err) => {
                if (err) {
                  console.error(
                    `Failed to append to ${action} in file: ${filePath}`,
                    err
                  );
                } else {
                  console.log(`${action} successfully appended to ${filePath}`);
                }
              });
            } else {
              console.log(`${action} is already present in ${filePath}`);
            }
          });
        } else {
          fs.writeFile(filePath, data, (err) => {
            if (err) {
              console.error(
                `Failed to write ${action} to file: ${filePath}`,
                err
              );
            } else {
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
