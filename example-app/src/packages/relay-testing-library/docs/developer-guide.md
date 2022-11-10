## Building, Continous Integration, Deploying, and Publishing

### Continuous Integration (CI)

#### Checks

1. Unit tests
Run `yarn test` from the root of the `example-app directory`

### Continuous Deployment (CD)

It generates build artifacts to deploy/publish a new storybook and NPM package versions.

#### Publish Packages to NPM Registry

In order to avoid potential side effects using `lerna version/publish` commands, we deploy packages individually using helper scripts in the `scripts` directory.

1. Create a new branch off `develop` called [issue#]-release-relay-testing-library
1. Log into the NPM registry. (See Toolkit credentials in 1Password.)
   ```sh
       npm login
   ```
1. Update the version in the `package.json` of the target package.
1. Publish the target package to NPM registry using Make command.
   - In the target directory,
   `yarn prepack` 
   1. removes the `lib` directory 
   1. transpiles typescript to javascript code, both esm and commmonjs, into the `lib` directory to publish the packages based off `lib` directory.

1. Merge the release branch into `develop`.
