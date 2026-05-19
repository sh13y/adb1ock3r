const BLOCKER_ENABLED_KEY = 'blockerEnabled';
const RULESET_ID = 'default-rules';

const toggle = document.getElementById('toggle');
const statusText = document.getElementById('status');

function render(enabled) {
  toggle.checked = enabled;
  statusText.textContent = enabled ? 'Active' : 'Inactive';
}

async function setBlockerEnabled(enabled) {
  await chrome.storage.local.set({ [BLOCKER_ENABLED_KEY]: enabled });
  await chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: enabled ? [RULESET_ID] : [],
    disableRulesetIds: enabled ? [] : [RULESET_ID],
  });
  render(enabled);
}

async function initialize() {
  const { [BLOCKER_ENABLED_KEY]: blockerEnabled } = await chrome.storage.local.get(BLOCKER_ENABLED_KEY);
  render(blockerEnabled ?? true);
}

toggle.addEventListener('change', async () => {
  await setBlockerEnabled(toggle.checked);
});

initialize();
