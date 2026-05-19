const BLOCKER_ENABLED_KEY = 'blockerEnabled';
const RULESET_ID = 'default-rules';

async function setBlockerEnabled(enabled) {
  await chrome.storage.local.set({ [BLOCKER_ENABLED_KEY]: enabled });
  await chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: enabled ? [RULESET_ID] : [],
    disableRulesetIds: enabled ? [] : [RULESET_ID],
  });
}

chrome.runtime.onInstalled.addListener(async () => {
  const { [BLOCKER_ENABLED_KEY]: blockerEnabled } = await chrome.storage.local.get(BLOCKER_ENABLED_KEY);
  await setBlockerEnabled(blockerEnabled ?? true);
});

chrome.runtime.onStartup.addListener(async () => {
  const { [BLOCKER_ENABLED_KEY]: blockerEnabled } = await chrome.storage.local.get(BLOCKER_ENABLED_KEY);
  await setBlockerEnabled(blockerEnabled ?? true);
});
