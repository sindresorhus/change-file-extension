# change-file-extension

> Change the file extension of a path

## Install

```sh
npm install change-file-extension
```

## Usage

```js
import changeFileExtension from 'change-file-extension';

changeFileExtension('foo/bar.txt', 'md');
//=> 'foo/bar.md'

changeFileExtension('foo/bar.txt', '.md');
//=> 'foo/bar.md'

changeFileExtension('bar.txt', '');
//=> 'bar'
```

## API

### changeFileExtension(filePath, extension)

#### filePath

Type: `string`

The file path whose extension needs to be changed.

#### extension

Type: `string`

The new extension to replace the old one.

To remove the extension, pass an empty string.
