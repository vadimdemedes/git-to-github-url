import tempdir from 'tempdir';
import execa from 'execa';
import test from 'ava';
import gitToGithubUrl from '.';

const createRepo = async () => {
	const cwd = await tempdir();
	await execa('git', ['init'], {cwd});
	await execa('git', ['remote', 'add', 'origin', 'git@github.com:vadimdemedes/ink.git'], {cwd});

	return cwd;
};

test('master branch', async t => {
	const cwd = await createRepo();
	const url = await gitToGithubUrl(cwd);

	t.is(url, 'https://github.com/vadimdemedes/ink');
});

test('other branch', async t => {
	const cwd = await createRepo();
	await execa('git', ['checkout', '-b', 'dev'], {cwd});

	const url = await gitToGithubUrl(cwd);

	t.is(url, 'https://github.com/vadimdemedes/ink/tree/dev');
});
