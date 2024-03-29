# get-appx-manifest

[![npm](https://flat.badgen.net/npm/license/get-appx-manifest)](https://www.npmjs.org/package/get-appx-manifest)
[![npm](https://flat.badgen.net/npm/v/get-appx-manifest)](https://www.npmjs.org/package/get-appx-manifest)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-get-appx-manifest)](https://circleci.com/gh/idleberg/node-get-appx-manifest)

Returns the manifest of a Windows Store application (Appx) as JavaScript object

## Prerequisites

This library requires PowerShell 5.0 (or higher) and support for the Windows Store

## Installation

`yarn add get-appx-manifest || npm install get-appx-manifest`

## Usage

`getAppxManifest(appID: string, options: Object)`

Example usage in script:

```js
const getAppxManifest = require('get-appx-manifest');

// Application ID
const appID = 'SpotifyAB.SpotifyMusic';

(async () => {
    try {
        const manifest = await getAppxManifest(appID);
    } catch (err) {
        console.error(err);
    }
})();
```

### Options

#### options.inputEncoding

Default: `utf8`

#### options.outputEncoding

Default: `utf8`

#### options.debugMsg

Default: `false`

#### options.verbose

Default: `true`

#### options.executionPolicy

Default: `Bypass`

#### options.noProfile

Default: `true`

## Related

- [exec-appx](https://www.npmjs.com/package/exec-appx)
- [get-appx-path](https://www.npmjs.com/package/get-appx-path)

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
