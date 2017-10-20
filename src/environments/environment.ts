// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  crdsEnv: 'int',
  authRedirectUrl: 'http://localhost:4000/signin',
  cookieDomain: 'localhost',
  apiEndpoint: 'http://localhost:49380/',
  apiVersion: 'v1.0.0',
  crdsEndpoint: 'https://contentint.crossroads.net/',
  googleApiKey: 'AIzaSyArKsBK97N0Wi-69x10OL7Sx57Fwlmu6Cs',
  crossroadsApiKey: ''
};
