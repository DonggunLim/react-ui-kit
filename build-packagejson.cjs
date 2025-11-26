// build-packagejson.cjs
const fs = require("fs");
const path = require("path");
const buildDir = path.resolve(__dirname, "dist");
const packageName = "@imdonggun/react-ui-kit";

const getPackageJsonData = () => {
  return {
    version: "0.0.16",
    name: packageName,
    main: "./index.cjs",
    module: "./index.js",
    types: "./index.d.ts",
    peerDependencies: {
      react: "^18.0.0 || ^19.0.0",
      "react-dom": "^18.0.0 || ^19.0.0",
    },
    repository: {
      type: "git",
      url: "git+https://github.com/DonggunLim/react-ui-kit.git",
    },
    author: {
      name: "Donggun Lim",
      email: "Ldonggun6766@gmail.com",
      url: "https://github.com/DonggunLim",
    },
  };
};

const makePackageJson = () => {
  try {
    const buildPackageJsonData = getPackageJsonData();
    fs.writeFileSync(
      path.resolve(buildDir, "package.json"),
      JSON.stringify(buildPackageJsonData, null, 2)
    );
  } catch (err) {
    console.log(err);
  }
};

const copyReadme = () => {
  try {
    const readmePath = path.resolve(__dirname, "README.md");
    const destPath = path.resolve(buildDir, "README.md");
    fs.copyFileSync(readmePath, destPath);
    console.log("README.md copied to dist/");
  } catch (err) {
    console.log("Failed to copy README.md:", err);
  }
};

makePackageJson();
copyReadme();
