import test from 'ava';
import changeFileExtension from './index.js';

test('replaces extension on path', t => {
	const newPath = changeFileExtension('/long/path/to/user/file.txt', 'md');
	t.is(newPath, '/long/path/to/user/file.md');
});

test('replaces extension on filename', t => {
	const newPath = changeFileExtension('file.txt', 'md');
	t.is(newPath, 'file.md');
});

test('returns same path for empty string', t => {
	const newPath = changeFileExtension('', 'md');
	t.is(newPath, '');
});

test('removes extension on path', t => {
	const newPath = changeFileExtension('/long/path/to/user/file.txt', '');
	t.is(newPath, '/long/path/to/user/file');
});

test('removes extension on filename', t => {
	const newPath = changeFileExtension('file.txt', '');
	t.is(newPath, 'file');
});

test('handles relative paths', t => {
	const newPath = changeFileExtension('./src/file.txt', 'md');
	t.is(newPath, 'src/file.md');
});

test('handles absolute paths', t => {
	const newPath = changeFileExtension('/usr/local/src/file.txt', 'md');
	t.is(newPath, '/usr/local/src/file.md');
});

test('handles file names starting with dot', t => {
	const newPath = changeFileExtension('.gitignore', 'txt');
	t.is(newPath, '.gitignore.txt');
});

test('handles file names with multiple dots', t => {
	const newPath = changeFileExtension('index.spec.js', 'ts');
	t.is(newPath, 'index.spec.ts');
});

test('handles extension with multiple dots', t => {
	const newPath = changeFileExtension('file.txt', '.tar.gz');
	t.is(newPath, 'file.tar.gz');
});
