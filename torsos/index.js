const glob = require("fast-glob");
const fs = require("fs");

function processNames(files) {
  const newNames = [];
  for (let file of files) {
    const splitFileName = file.split("/");
    newNames.push(splitFileName[splitFileName.length - 1].replace(".png", ""));
  }

  return newNames;
}

const male = {
  0: processNames(glob.sync("./male/0/*.png")),
  1: processNames(glob.sync("./male/1/*.png")),
  2: processNames(glob.sync("./male/2/*.png")),
  4: processNames(glob.sync("./male/4/*.png")),
  5: processNames(glob.sync("./male/5/*.png")),
  6: processNames(glob.sync("./male/6/*.png")),
  8: processNames(glob.sync("./male/8/*.png")),
  11: processNames(glob.sync("./male/11/*.png")),
  12: processNames(glob.sync("./male/12/*.png")),
  14: processNames(glob.sync("./male/14/*.png")),
  15: processNames(glob.sync("./male/15/*.png")),
};

const female = {
  0: processNames(glob.sync("./female/0/*.png")),
  1: processNames(glob.sync("./female/1/*.png")),
  2: processNames(glob.sync("./female/2/*.png")),
  3: processNames(glob.sync("./female/3/*.png")),
  4: processNames(glob.sync("./female/4/*.png")),
  5: processNames(glob.sync("./female/5/*.png")),
  6: processNames(glob.sync("./female/6/*.png")),
  7: processNames(glob.sync("./female/7/*.png")),
  9: processNames(glob.sync("./female/9/*.png")),
  11: processNames(glob.sync("./female/11/*.png")),
  12: processNames(glob.sync("./female/12/*.png")),
  14: processNames(glob.sync("./female/14/*.png")),
  15: processNames(glob.sync("./female/15/*.png")),
};

fs.writeFileSync("male.json", JSON.stringify(male, null, "\t"));
fs.writeFileSync("female.json", JSON.stringify(female, null, "\t"));
