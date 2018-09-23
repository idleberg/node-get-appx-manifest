'use strict';

const powershell = require('node-powershell');
const xml2js = require('xml2js');
const { platform } = require('os');
const { promisify } = require('util');

const parseString = promisify(xml2js.parseString);
const parseOpts = {
    mergeAttrs: true
};

module.exports = (appID, options) => {
    if (platform() !== 'win32') {
        throw 'Error: This library requires PowerShell 5.0 (or higher) and for the Windows Store';
    }

    options = Object.assign({
        debugMsg: false,
        executionPolicy: 'Bypass',
        noProfile: true
    }, options);

    let ps = new powershell(options);
    ps.addCommand(`$AppxPackage = (Get-AppxPackage -Name "${appID}")`);
    ps.addCommand('$Manifest = ($AppxPackage | Get-AppxPackageManifest)');
    ps.addCommand('Write-Host $($Manifest.InnerXml)');

    return ps.invoke()
        .then( appxManifest => parseString(appxManifest, parseOpts))
        .catch( (err) => {
            if (err.includes('Cannot bind argument to parameter \'Path\' because it is null')) {
                throw 'Error: ENOENT, no such file or directory';
            }

            throw err;
        })
        .finally( () => ps.dispose());
};
