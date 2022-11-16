## Building, Continous Integration, Deploying, and Publishing

### Build

To build, run `yarn prepack` to transpile Typescript code to both `commonjs` and `esm` and store the output in the `/lib` directory.

### Test 

Prior to publishing the package to NPM registry, test the package locally using `npm pack` to package up and zip your npm package into a single file (button-inc-relay-testing-library-<version>.tgz). 

You can then go to the project you want to use the package in and install it via this file. The steps to do this are as follows:
1. From the `relay-testing-library` directory, run `npm pack`
1. Change directories to `cd ../../example-app/` 
1. run `yarn add ../../packages/relay-testing-library/button-inc-relay-testing-library-<version>.tgz`
1. run `yarn test` to run the jest test suite in `ComponentTestingHelper.test.tsx` and ensure tests are passing. 

This will give the closest to production experience for using the published npm package.

#### Publish Packages to NPM Registry

1. Create a new branch off `main` called [issue#]-release
1. Log into the NPM registry. (See Toolkit credentials in 1Password.)
   ```sh
       npm login
   ```
1. Update the version in the `package.json` of the target package.
1. Publish the target package to NPM registry using Make command.
   - In the target directory,
   ```
        npm publish --access public
   ```
   - it copies `package.json`, `LICENSE`, and `README.md` files into `lib` directory to publish the packages based off `lib` directory.
1. Merge the release branch into `develop`.
