/**
Change the file extension of a path.

@param filePath - The file path whose extension needs to be changed.
@param extension - The new extension to replace the old one. To remove the extension, pass an empty string.

@example
```
import changeFileExtension from 'change-file-extension';

changeFileExtension('foo/bar.txt', 'md');
//=> 'foo/bar.md'

changeFileExtension('foo/bar.txt', '.md');
//=> 'foo/bar.md'

changeFileExtension('bar.txt', '');
//=> 'bar'
```
*/
export default function changeFileExtension(filePath: string, extension: string): string;
