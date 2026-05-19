# Privacy Policy for adb1ock3r

**Last updated:** 2026-05-19

## Overview

`adb1ock3r` is a browser extension that blocks advertising and tracking requests using Chrome Manifest V3 Declarative Net Request (DNR) rules.

Your privacy is a core design principle of this extension.

## Data Collection

`adb1ock3r` **does not collect, store, or sell personal data**.

Specifically, the extension does **not**:

- collect personally identifiable information (PII)
- collect browsing history for remote processing
- track users across websites
- use analytics or telemetry systems
- send personal or browsing data to external servers

## Data Processing

All blocking logic runs **locally in your browser**.

The extension processes network request URLs locally only to evaluate rule matches for blocking decisions, as provided by the browser's DNR engine.

## Data Storage

The extension stores only one local setting in `chrome.storage.local`:

- `blockerEnabled` (boolean): whether blocking is enabled

This setting remains on your device and is not transmitted externally by the extension.

## Permissions Usage

- `declarativeNetRequest`: required to apply ad/tracker blocking rules
- `storage`: required to save the local on/off preference
- `scripting`: available for extension script behavior
- `<all_urls>` host permission: required to apply filtering rules on pages you visit

Permissions are used solely for ad/tracker blocking functionality.

## Third-Party Services

`adb1ock3r` does not integrate with third-party analytics, advertising SDKs, or remote data processors.

## Children's Privacy

The extension is not designed to collect data from anyone, including children under 13.

## Security

Because the extension does not send user data to external servers, there is no remote storage of personal user data by this project.

## Changes to This Policy

If this policy changes, updates will be posted in this file with an updated "Last updated" date.

## Contact

For questions about this privacy policy, open an issue in this repository:

- https://github.com/sh13y/adb1ock3r/issues
