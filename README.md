# adb1ock3r

A fast, lightweight **Manifest V3** ad and tracker blocker for Chromium-based browsers.

`adb1ock3r` uses Chrome's native **Declarative Net Request (DNR)** engine for efficient network-level blocking and includes a simple popup toggle to enable or disable protection.

## Features

- ⚡ **Fast blocking engine** powered by Manifest V3 DNR rules
- 🛡️ **Blocks common ad/tracker domains** via bundled ruleset (`rules/rules.json`)
- 🎛️ **Simple on/off toggle** in the extension popup
- 💾 **Local preference storage** using `chrome.storage.local`
- 🔒 **No backend required** — runs directly in the browser

## Project Structure

- `manifest.json` — Chrome extension manifest (MV3)
- `background.js` — service worker that manages blocker state/ruleset enablement
- `rules/rules.json` — static DNR blocking rules
- `popup/` — popup UI (`popup.html`, `popup.css`, `popup.js`)
- `PRIVACY_POLICY.md` — Chrome Web Store privacy policy
- `LICENSE` — MIT license

## Local Installation (Developer Mode)

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked**.
5. Select the project folder:
   - `/home/runner/work/adb1ock3r/adb1ock3r`
6. The extension (`adb1ock3r`) should now appear in your extensions list.
7. Pin it to the toolbar (optional) and use the popup toggle to enable/disable blocking.

## How It Works

- On install/startup, `background.js` reads `blockerEnabled` from local storage.
- It enables or disables the `default-rules` DNR ruleset accordingly.
- The popup toggle updates local storage and applies ruleset changes immediately.

## Permissions

- `declarativeNetRequest` — applies network blocking rules
- `storage` — stores on/off preference locally
- `scripting` — reserved for extension script operations
- `host_permissions: <all_urls>` — allows filtering across visited websites

## Privacy

This extension is designed to be privacy-respecting:

- No personal data collection
- No user tracking
- No analytics/telemetry
- No external data transmission by default

See [PRIVACY_POLICY.md](./PRIVACY_POLICY.md) for full details.

## Chrome Web Store Readiness

This repository includes standard publication docs:

- ✅ `README.md`
- ✅ `PRIVACY_POLICY.md`
- ✅ `LICENSE` (MIT)

## License

MIT — see [LICENSE](./LICENSE).
