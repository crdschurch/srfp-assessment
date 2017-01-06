# crds-styleguide

This repository contains the application code that powers the Crossroads' Digital Design Kit (aka living styleguide). It is intended to provide developers with quick reference to all common patterns and/or components, including any implementation details and other fun facts.

## Dependencies

This project requires [crds-styles](https://github.com/crdschurch/crds-styles) in order to function properly. Until that project has been published to NPM, you'll have to clone `crds-styles` locally, symlink it into this project prior to installing the dependencies defined within `package.json`.

Assuming the `crds-styles` and `crds-styleguide` repos reside in the same local directory, you can do the following to setup the symlink...

    $ cd crds-styleguide
    $ npm link ../crds-styles
    $ npm install

Once we officially publish this package, we'll leverage semantic-versioning to ensure new features are rolled out in a sensible manner. For more information on this approach, please review that project's [README](https://github.com/crdschurch/crds-styles/README.md).

## Build &amp; Deploy

Run `npm run start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

Run `npm build-dev` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## License

This project rocks and uses MIT-LICENSE.
