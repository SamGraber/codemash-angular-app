var map = {
	'@angular': 'node_modules/@angular',
	'rxjs': 'node_modules/rxjs',
	'app': 'source',
	'lodash': 'node_modules/lodash/index.js',
};

var angularPackageNames = [
	'core',
	'compiler',
	'common',
	'platform-browser',
	'platform-browser-dynamic',
	'http',
	'router',
];

var packages = {
	'source': {
		defaultExtension: 'js',
		main: 'main.js',
	},
	'node_modules': {
		defaultExtension: 'js',
	},
	'rxjs': {
		main: 'Rx.js',
	},
};

function setAngularPackage(packageName) {
	map[`@angular/${packageName}`] = `node_modules/@angular/${packageName}/bundles/${packageName}.umd.js`;
}

function setAngularTestingPackage(packageName) {
	map[`@angular/${packageName}/testing`] = `node_modules/@angular/${packageName}/bundles/${packageName}-testing.umd.js`;
}

angularPackageNames.forEach(setAngularPackage);
angularPackageNames.forEach(setAngularTestingPackage);

System.config({
	map: map,
	packages: packages,
});
