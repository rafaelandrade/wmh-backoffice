import { HealthError } from "../../../src/app/errors";

describe("[HealError] tests case", () => {
  it("HealthError should be instance of error", () => {
    expect(HealthError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "HealthError",
    };
    const error = new HealthError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(500);
  });
});
