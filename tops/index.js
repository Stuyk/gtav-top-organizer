const glob = require("fast-glob");
const fs = require("fs");
const { Torsos } = require("./torsos");

/**
 * @param {string} path
 */
function convertPath(path) {
  const splitPath = path.split("/");
  splitPath.shift();
  splitPath.shift();
  const category = splitPath.shift();

  const component = splitPath[0].replace(".webp", "");
  const compSplit = component.split("_");
  const drawable = parseInt(compSplit.pop());
  compSplit.pop();
  let dlc = compSplit.join("_");

  if (dlc === "0") {
    dlc =
      path.includes("mp_f") || path.includes("Female_") ? "mp_f_0" : "mp_m_0";
  }

  return { category, dlc, drawable, torsos: Torsos[dlc][drawable] };
}

const femaleTops = glob
  .sync("./female-tops/**/*.webp")
  .map((x) => convertPath(x));

const maleTops = glob.sync("./male-tops/**/*.webp").map((x) => convertPath(x));

fs.writeFileSync("male.json", JSON.stringify(maleTops, null, "\t"));
fs.writeFileSync("female.json", JSON.stringify(femaleTops, null, "\t"));
