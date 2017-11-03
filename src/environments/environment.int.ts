// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  authRedirectUrl: 'https://int.crossroads.net/signin',
  production: true,
  apiVersion: 'v1.0.0',
  crdsEnv: 'int',
  cookieDomain: 'crossroads.net',
  apiEndpoint: '/proxy/gateway/',
  personServiceEndpoint: '/proxy/person/',
  crdsEndpoint: '/proxy/content/',
  crossroadsApiKey: ''
};
