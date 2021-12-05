const fs = require("fs");
const yaml = require("js-yaml");
const glob = require("glob");
const util = require("util");

try {
  glob(`./src/assets/pages/**/*.md`, (err, files) => {
    if (err) {
      console.log(`cannot read the pages folder`, err);
    }
    const pages = [];
    files.forEach((file) => {
      let fileContents = fs.readFileSync(file, "utf8");
      let page = yaml.load(fileContents.split("---", 2)[1]);
      const fragments = file.split("/");
      const pagesIndex = fragments.indexOf("pages");
      page.fileName = fragments.slice(pagesIndex + 1).join("/");
      pages.push(page);
    });
    fs.writeFileSync(
      "./src/app/shared/pages-metas.ts",
      "import {PageMeta} from './page-meta';\n" +
        "\nexport const pagesMetas: PageMeta[] = "
    );
    fs.appendFileSync(
      "./src/app/shared/pages-metas.ts",
      util.inspect(pages, false, 2, false)
    );
    fs.appendFileSync("./src/app/shared/pages-metas.ts", ";");
  });
} catch (e) {
  console.log(e);
}
