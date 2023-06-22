const { readFileSync } = require('fs')


module.exports = {
	/** transforms png files to base64 string */
	process (sourceText, sourcePath, options) {
		return {
			code: `module.exports = '${readFileSync(sourcePath, { encoding: 'base64' })}'`
		}
	}
}
