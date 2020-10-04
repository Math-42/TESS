module.exports = class GlobalMecanics {
	static sendPackage(packagePath, timeInMs) {

		setTimeout(() => {
			window.dispatchEvent(new CustomEvent('addNewPackage', {
				detail: packagePath,
			}));
		}, timeInMs);
	}
}