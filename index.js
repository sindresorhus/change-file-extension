import path from 'node:path';

export default function changeFileExtension(filePath, extension) {
	if (typeof filePath !== 'string') {
		throw new TypeError(`Expected \`filePath\` to be a string, got \`${typeof filePath}\`.`);
	}

	if (typeof extension !== 'string') {
		throw new TypeError(`Expected \`extension\` to be a string, got \`${typeof extension}\`.`);
	}

	if (filePath === '') {
		return '';
	}

	extension = extension ? (extension.startsWith('.') ? extension : `.${extension}`) : '';

	const basename = path.basename(filePath, path.extname(filePath));
	return path.join(path.dirname(filePath), basename + extension);
}
