const sgf = require('staged-git-files');
const micromatch = require('micromatch');
const path = require('path');
const fs = require('fs');

const cwd = process.cwd();

const addNewPosts = (allStagedFiles, type) => {
	const allMdFiles = micromatch(allStagedFiles, [`**/${type}/**/*.md`]);
	const relativePaths = allMdFiles.map(file => path.relative(cwd, file));

	if (relativePaths.length) {
		const newDirectories = relativePaths.reduce(
			(previousValue, currentValue) => {
				const newDirName = currentValue.split('/')[2];

				return previousValue.concat({source: newDirName});
			},
			[]
		);

		const existingData = require(`../${type}/data.json`);
		const newData = newDirectories.concat(existingData);
		const data = JSON.stringify(newData);

		fs.writeFileSync(`${cwd}/${type}/data.json`, data);

		console.log(
			`Data written to ${cwd}/${type}/data.json file for ${type}`
		);
	}
};

const updateDataFile = async () => {
	const stagedFiles = await sgf();
	const allStagedFiles = stagedFiles
		.map(file => {
			// TODO: For renamed directories, use the 'Modifed' string and replace the value in the data.json file. For now, only adding new files is supported.

			if (file.status === 'Added') {
				return file.filename;
			}
		})
		.filter(file => !!file);

	['guides', 'courses', 'stacks', 'learn'].map(type => {
		addNewPosts(allStagedFiles, type);
	});
};

updateDataFile();
