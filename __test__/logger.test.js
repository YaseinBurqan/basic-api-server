"use strict";
const logger = require("../src/middleware/logger");

describe("Logger Test", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });
  test("should log the request", () => {
    req.method = "GET";
    req.path = "/food";
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  test("should log the request", () => {
    req.method = "GET";
    req.path = "/clothes";
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
});
