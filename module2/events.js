const Eventemiter = require("node:events");

class SchoolBell extends Eventemiter {}

const schoolBell = new SchoolBell();
schoolBell.on("event", () => {
  console.log("yahoo! something doing now");
});

schoolBell.emit("event");
