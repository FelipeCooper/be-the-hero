const GenerateUniqueID = require("../../src/utils/GenerateUniqueId");

describe("Generate unique ID", () => {
  it("Generate an unique Id", () => {
    let id = GenerateUniqueID();
    expect(id).toHaveLength(8);
  });
});
