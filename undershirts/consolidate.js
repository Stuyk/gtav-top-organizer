const fs = require("fs");

/** @type {{ category: string, dlc: string, drawable: number }[]} */
const femaleData = JSON.parse(fs.readFileSync("female.json", "utf-8"));

/** @type {{ category: string, dlc: string, drawable: number }[]} */
const maleData = JSON.parse(fs.readFileSync("male.json", "utf-8"));

const newMaleData = {};
const newFemaleData = {};

for (let data of maleData) {
  if (!newMaleData[data.category]) {
    newMaleData[data.category] = [];
  }

  newMaleData[data.category].push({ dlc: data.dlc, drawable: data.drawable });
}

for (let data of femaleData) {
  if (!newFemaleData[data.category]) {
    newFemaleData[data.category] = [];
  }

  newFemaleData[data.category].push({ dlc: data.dlc, drawable: data.drawable });
}

fs.writeFileSync(
  "undershirts.json",
  JSON.stringify({ male: newMaleData, female: newFemaleData }, null, "\t")
);
