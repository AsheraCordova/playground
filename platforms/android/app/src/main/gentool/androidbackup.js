let cpx = require("cpx2");
let path = require("path");
const fs = require('fs-extra');

let projectBasePath = "../../../../../";

if (process.argv[2] == 'restore') {
	console.log("restore android res and tsc files.....");
	cpx.copy(projectBasePath + "android_backup/res/**", "res");
	cpx.copy(projectBasePath + "android_backup/tsc/**", "tsc");
	console.log("restore android res and tsc files finished");
	
} else {
	fs.removeSync(projectBasePath + "android_backup", { recursive: true, force: true });

	console.log("backing up android res and tsc files.....");
	cpx.copy("res/**", projectBasePath + "android_backup/res");
	cpx.copy("tsc" + "/**", projectBasePath + "android_backup/tsc", {ignore : ["node_modules", "*.lock", "android", "app", "R", "navigation", "app.ts", "ErrorDetailFragment.ts", "widget", "ErrorFragment.ts", "FragmentFactory", "app.ts"]});
	console.log("backing up android res and tsc files finished");
}
