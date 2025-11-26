// build-packagejson.cjs
const fs = require("fs");
const path = require("path");
const buildDir = path.resolve(__dirname, "dist");
const packageName = "@imdonggun/react-ui-kit";

const getPackageJsonData = () => {
  return {
    version: "0.0.15",
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
