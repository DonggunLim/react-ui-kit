// build-packagejson.cjs
const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");
const buildDir = path.resolve(__dirname, "dist");
const packageName = "@imdonggun/react-ui-kit";

const getPackageJsonData = () => {
  const { react: reactVersion, "react-dom": reactDomVersion } =
    packageJson.dependencies;
  return {
    version: "0.0.14",
    name: packageName,
    main: "./index.cjs",
    module: "./index.js",
    types: "./index.d.ts",
    peerDependencies: {
      react: reactVersion,
      "react-dom": reactDomVersion,
    },
    repository: {
      type: "git",
      url: "https://github.com/DonggunLim/react-ui-kit",
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
      JSON.stringify(buildPackageJsonData)
    );
  } catch (err) {
    console.log(err);
  }
};

makePackageJson();
