const asyncHooksUtils = require('./asyncHooksUtils');

const hook = asyncHooksUtils.createLoggingHook();
hook.enable();

setTimeout(() => {
  console.log(
    `Inside callback. Current ID: ${asyncHooksUtils.getCurrentAsyncId()}, Trigger ID: ${asyncHooksUtils.getTriggerAsyncId()}`
  );
}, 1000);
