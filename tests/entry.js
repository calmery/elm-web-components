const { flags } = require("../src/entry");

test("Flags", async () => {
  let isSuccess = true;

  try {
    JSON.stringify(flags);
  } catch (_) {
    isSuccess = false;
  } finally {
    expect(isSuccess).toBeTruthy();
  }
});
