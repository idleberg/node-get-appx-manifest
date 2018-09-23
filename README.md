# get-appx-manifest

[![npm](https://flat.badgen.net/npm/license/get-appx-manifest)](https://www.npmjs.org/package/get-appx-manifest)
[![npm](https://flat.badgen.net/npm/v/get-appx-manifest)](https://www.npmjs.org/package/get-appx-manifest)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-get-appx-manifest)](https://circleci.com/gh/idleberg/node-get-appx-manifest)
[![David](https://flat.badgen.net/david/dev/idleberg/node-get-appx-manifest)](https://david-dm.org/idleberg/node-get-appx-manifest?type=dev)

Returns the manifest of a Windows Store app (Appx) as JavaScript object

## Prerequisites

This library requires PowerShell 5.0 (or higher) and a Windows version with support for Windows Store apps

## Installation

`yarn add get-appx-manifest || npm install get-appx-manifest`

## Usage

`getAppxManifest(appID: string)`

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

## Related

- [exec-appx](https://github.com/idleberg/node-exec-appx)
- [get-appx-path](https://github.com/idleberg/node-get-appx-path)

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-get-appx-manifest) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
