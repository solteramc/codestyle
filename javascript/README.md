# @soltera/eslint-config

ESLint configuration for the Soltera Minecraft server.

## Overview

The Soltera Javascript Style Guide is a set of best practices for writing Javascript code.

The Style Guide extends the well-known [Airbnb Javascript style guide](https://github.com/airbnb/javascript), making a few modifications to the rules.

## Installation

From the root directory of your package, run:

```
$ npx install-peerdeps --dev @soltera/eslint-config
```

This will install `@soltera/eslint-config` along with all of its dependencies. Alternatively, you can install the package's dependencies manually.

```sh
$ npm info @soltera/eslint-config
# or, if using yarn:
$ yarn info @soltera/eslint-config
```

You can then read off peer dependencies from the `peerDependencies` section of the returned meta.

### Rules

-   `indent`: Indentation should be tabs.
-   `quotes`: Quotes should use the `"` charcter.
