# rock-paper-scissors

Built using [generator-angular-webpack-babel](https://github.com/Aleksion/generator-angular-webpack-babel)


### Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `build` - will run both build:module and build:dist
* `build:dist` - will build and minify the app to the dist folder with dependencies,
* `build:module`- will build and minify the app to the lib folder. This is for usage as a module in other applications. Without dependencies.
* `serve` - start development server with local configuration, try it by opening `http://localhost:8080/` or the browserSync version at `http://localhost:3000/``
* `serve:dev` - development server with development configuration
* `serve:prod`- development server with production configuration
* `test` - run all tests
* `test:live` - continuously run unit tests watching for changes

See what each script does by looking at the `scripts` section in [package.json](./package.json).
