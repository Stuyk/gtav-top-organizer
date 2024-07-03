const glob = require("fast-glob");
const fs = require("fs");

/**
 * @param {string} files
 * @return
 */
function processNames(files) {
  const newNames = [];
  for (let file of files) {
    const splitFileName = file.split("/");
    const fullName = splitFileName[splitFileName.length - 1].replace(
      ".png",
      ""
    );

    const fullSplit = fullName.split("_");

    const drawable = parseInt(fullSplit.pop());
    fullSplit.pop(); // remove id

    const dlc = fullSplit.join("_");

    newNames.push({ dlc, drawable });
  }

  return newNames;
}

const male = {
  0: [
    { dlc: "mp_m_0", drawable: 0 },
    ...processNames(glob.sync("./male/0/*.png")),
  ],
  1: [
    { dlc: "mp_m_0", drawable: 1 },
    ...processNames(glob.sync("./male/1/*.png")),
  ],
  2: [
    { dlc: "mp_m_0", drawable: 2 },
    ...processNames(glob.sync("./male/2/*.png")),
  ],
  4: [
    { dlc: "mp_m_0", drawable: 4 },
    ...processNames(glob.sync("./male/4/*.png")),
  ],
  5: [
    { dlc: "mp_m_0", drawable: 5 },
    ...processNames(glob.sync("./male/5/*.png")),
  ],
  6: [
    { dlc: "mp_m_0", drawable: 6 },
    ...processNames(glob.sync("./male/6/*.png")),
  ],
  7: [{ dlc: "mp_m_0", drawable: 7 }],
  8: [
    { dlc: "mp_m_0", drawable: 8 },
    ...processNames(glob.sync("./male/8/*.png")),
  ],
  9: [{ dlc: "mp_m_0", drawable: 9 }],
  10: [{ dlc: "mp_m_0", drawable: 10 }],
  11: [
    { dlc: "mp_m_0", drawable: 11 },
    ...processNames(glob.sync("./male/11/*.png")),
  ],
  12: [
    { dlc: "mp_m_0", drawable: 12 },
    ...processNames(glob.sync("./male/12/*.png")),
  ],
  14: [
    { dlc: "mp_m_0", drawable: 14 },
    ...processNames(glob.sync("./male/14/*.png")),
  ],
  15: [
    { dlc: "mp_m_0", drawable: 15 },
    ...processNames(glob.sync("./male/15/*.png")),
  ],
  16: [...processNames(glob.sync("./male/16/*.png"))],
};

const female = {
  0: [
    { dlc: "mp_f_0", drawable: 0 },
    ...processNames(glob.sync("./female/0/*.png")),
  ],
  1: [
    { dlc: "mp_f_0", drawable: 1 },
    ...processNames(glob.sync("./female/1/*.png")),
  ],
  2: [
    { dlc: "mp_f_0", drawable: 2 },
    ...processNames(glob.sync("./female/2/*.png")),
  ],
  3: [
    { dlc: "mp_f_0", drawable: 3 },
    ...processNames(glob.sync("./female/3/*.png")),
  ],
  4: [
    { dlc: "mp_f_0", drawable: 4 },
    ...processNames(glob.sync("./female/4/*.png")),
  ],
  5: [
    { dlc: "mp_f_0", drawable: 5 },
    ...processNames(glob.sync("./female/5/*.png")),
  ],
  6: [
    { dlc: "mp_f_0", drawable: 6 },
    ...processNames(glob.sync("./female/6/*.png")),
  ],
  7: [
    { dlc: "mp_f_0", drawable: 7 },
    ...processNames(glob.sync("./female/7/*.png")),
  ],
  8: [{ dlc: "mp_f_0", drawable: 8 }],
  9: [
    { dlc: "mp_f_0", drawable: 9 },
    ...processNames(glob.sync("./female/9/*.png")),
  ],
  10: [{ dlc: "mp_f_0", drawable: 10 }],
  11: [
    { dlc: "mp_f_0", drawable: 11 },
    ...processNames(glob.sync("./female/11/*.png")),
  ],
  12: [
    { dlc: "mp_f_0", drawable: 12 },
    ...processNames(glob.sync("./female/12/*.png")),
  ],
  13: [{ dlc: "mp_f_0", drawable: 13 }],
  14: [
    { dlc: "mp_f_0", drawable: 14 },
    ...processNames(glob.sync("./female/14/*.png")),
  ],
  15: [
    { dlc: "mp_f_0", drawable: 15 },
    ...processNames(glob.sync("./female/15/*.png")),
  ],
  16: [...processNames(glob.sync("./male/16/*.png"))],
};

fs.writeFileSync("male.json", JSON.stringify(male, null, "\t"));
fs.writeFileSync("female.json", JSON.stringify(female, null, "\t"));
