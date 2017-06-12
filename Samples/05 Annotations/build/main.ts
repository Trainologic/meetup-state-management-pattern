import * as cli from "build-utils/cli";
import * as process from "build-utils/process";

cli.command("dev", dev);
cli.run();

async function dev() {
    await runServer();
    await runBrowser();
}

async function runServer() {
    process.exec("node server/main.js");
}

async function runBrowser() {
    process.open("http://localhost:8080/index.html");
}
