const packages = require('../../../assets/packages/packages.json');
module.exports = class GlobalMecanics {
	static sendPackage(packageName, timeInMs) {

		setTimeout(() => {
			window.dispatchEvent(new CustomEvent('addNewPackage', {
				detail: packageName,
			}));
		}, timeInMs);
	}
	static getPackage(packageName) {
		return packages[packageName]
	}
}