var Generator = require("yeoman-generator");
var chalk = require("chalk");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("appname", { type: String, required: false });
  }

  // Async Await
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // appname return the default folder name to project
        store: true,
      },
      {
        type: "list",
        name: "templateType",
        message: "Select the template wanted:",
        choices: ["Front-End React"],
      },
    ]);
  }

  writing() {
    if (this.answers.templateType === "Front-End React") {
      this._writingReactTemplate();
    }
  }

  _writingReactTemplate() {
    // this.fs.copy(
    //   this.templatePath("frontend"),
    //   this.destinationPath("frontend")
    // );
    this.fs.copyTpl(
      this.templatePath("frontend"),
      this.destinationPath(""),
      { title: this.answers.name } // Embedded JavaScript templating.
    );
  }

  install() {
    this.yarnInstall();
  }

  end() {
    this.log(chalk.green("------------"));
    this.log(chalk.magenta("***---***"));
    this.log(chalk.blue("Jobs is Done!"));
    this.log(chalk.green("------------"));
    this.log(chalk.magenta("***---***"));
  }
};
function writing() {
  throw new Error("Function not implemented.");
}

function _writingReactTemplate() {
  throw new Error("Function not implemented.");
}

function end() {
  throw new Error("Function not implemented.");
}
