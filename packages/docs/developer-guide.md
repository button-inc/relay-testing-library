## Building, Continous Integration, Deploying, and Publishing

### Build

To build, run `yarn prepack` to transpile Typescript code to both `commonjs` and `esm` and store the output in the `/lib` directory.

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
        npm publish --allow public
   ```
   - it copies `package.json`, `LICENSE`, and `README.md` files into `lib` directory to publish the packages based off `lib` directory.
1. Merge the release branch into `develop`.
