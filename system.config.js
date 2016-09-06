var map = {
	'@angular': 'node_modules/@angular',
	'rxjs': 'node_modules/rxjs',
	'app': 'source',
};

var defaultPackageNames = [
	'@angular/core',
	'@angular/compiler',
	'@angular/common',
	'@angular/platform-browser',
	'@angular/platform-browser-dynamic',
	'@angular/http',
	'@angular/router',
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

function setDefaultPackage(packageName) {
	packages[packageName] = {
		main: 'index.js',
	};
}

defaultPackageNames.forEach(setDefaultPackage);

System.config({
	map: map,
	packages: packages,
});
