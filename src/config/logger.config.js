const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const customPrintf = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${level} : ${message}`;
});

const loogger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customPrintf),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

module.exports = loogger;
