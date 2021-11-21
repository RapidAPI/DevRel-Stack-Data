const sgf = require('staged-git-files');
const micromatch = require('micromatch');
const path = require('path');
const fs = require('fs');

const cwd = process.cwd();

const addNewPosts = (allStagedFiles, type) => {
	const allMdFiles = micromatch(allStagedFiles, [`**/${type}/**/*.md`]);
	const relativePaths = allMdFiles.map(file => path.relative(cwd, file));

	relativePaths.map(relPath => {
		const newDirName = relPath.split('/')[2];
		const existingData = require(`../${type}/data.json`);
		const newData = [{source: newDirName}].concat(existingData);
		const data = JSON.stringify(newData);

		[{path: `${cwd}/${type}/data.json`, data}].map(file => {
			fs.writeFileSync(file.path, file.data);
		});
	});
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
