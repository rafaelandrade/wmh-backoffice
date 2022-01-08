import { logger } from "../../../src/helpers/logger/index";

describe("[logger] tests case", () => {
  it("should be an instance of object", () => {
    expect(logger).toBeInstanceOf(Object);
  });

  it("methods should be defined and be functions", () => {
    expect(logger.error).toBeInstanceOf(Function);
    expect(logger.warn).toBeInstanceOf(Function);
    expect(logger.error).toBeInstanceOf(Function);
    expect(logger.beautify).toBeInstanceOf(Function);
  });
});
