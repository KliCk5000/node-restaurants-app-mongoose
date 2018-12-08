"use strict";
exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/thinkful-test-db";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/thinkful-test-db";
exports.PORT = process.env.PORT || 8080;
