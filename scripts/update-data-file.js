const sgf = require('staged-git-files');
const micromatch = require('micromatch');
const path = require('path');
const fs = require('fs');

async function updateDataFile() {
	const stagedFiles = await sgf();
	const allStagedFiles = stagedFiles
		.map(file => {
			if (file.status === 'Added') {
				return file.filename;
			}
		})
		.filter(file => !!file);

	const allGuidesMdFiles = micromatch(allStagedFiles, ['**/guides/**/*.md']);
	const cwd = process.cwd();
	const relativePaths = allGuidesMdFiles.map(file =>
		path.relative(cwd, file)
	);

	relativePaths.map(relPath => {
		const newDirName = relPath.split('/')[2];
		const existingData = require('../guides/data.json');
		const newData = [{source: newDirName}].concat(existingData);
		const data = JSON.stringify(newData);

		[{path: `${cwd}/guides/data.json`, data}].map(file => {
			fs.writeFileSync(file.path, file.data);
		});
	});
}

updateDataFile();
