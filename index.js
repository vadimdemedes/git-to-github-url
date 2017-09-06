'use strict';

const gitRemoteOriginUrl = require('git-remote-origin-url');
const githubUrlFromGit = require('github-url-from-git');
const pify = require('pify');
const gitBranch = pify(require('git-branch'));

module.exports = cwd => {
	if (!cwd) {
		cwd = process.cwd();
	}

	return Promise.all([
		gitRemoteOriginUrl(cwd),
		gitBranch(cwd)
	]).then(results => {
		const origin = results[0];
		const branch = results[1];
		const url = githubUrlFromGit(origin);

		if (branch === 'master') {
			return url;
		}

		return `${url}/tree/${branch}`;
	});
};
