const quotationsRoute = require("./Fcl/quotations");
const phongLogRoute = require("./LogDeparment/phongLogs");
const airRoute = require("./Air/Air");
const CheckPriceAir = require("./Air/CheckPriceAir");
const lclRoute = require("./Air/LCL");
const domTruck = require("./DOM/DomTruck");
const domSeaCy = require("./DOM/Sea/DomSeaCy");
const domSeaDoor = require("./DOM/Sea/DomDoor");
const CheckPriceCy = require("./DOM/Sea/CheckPriceCy");
const CheckPriceDoor = require("./DOM/Sea/CheckPriceDoor");
const CheckPriceTruck = require("./DOM/CheckPriceTruck");
const dataImport = require("./ImportDeparment/Import");
const importLCL = require("./ImportDeparment/ImportLCL");
const importLCLCheckPrice = require("./ImportDeparment/ImportLCLCheckPrice");
const importCheckPrice = require("./ImportDeparment/InportCheckPrice");
const LogCheckPrice = require("./LogDeparment/LogCheckPrice");
const CheckPriceAirLCL = require("./Air/CheckPriceAirLCL");
const BookingLog = require("./LogDeparment/BookingLog");
const CheckPriceFCL = require("./Fcl/CheckPriceFCL");
const ItemAdvance = require("./LogDeparment/ItemAdvance");
const AdvanceOPS = require("./LogDeparment/AdvanceOPS");
const Test = require("./LogDeparment/Test");

function route(app) {
  app.use("/api/quotations", quotationsRoute);
  app.use("/api/phongLogs", phongLogRoute);
  app.use("/api/air", airRoute);
  app.use("/api/lcl", lclRoute);
  app.use("/api/truck", domTruck);
  app.use("/api/sea-cy", domSeaCy);
  app.use("/api/sea-door", domSeaDoor);
  app.use("/api/import", dataImport);
  app.use("/api/import-lcl", importLCL);
  app.use("/api/import-lcl-check", importLCLCheckPrice);
  app.use("/api/import-check", importCheckPrice);
  app.use("/api/log-check", LogCheckPrice);
  app.use("/api/air-check", CheckPriceAir);
  app.use("/api/air-lcl-check", CheckPriceAirLCL);
  app.use("/api/truck-check", CheckPriceTruck);
  app.use("/api/door-check", CheckPriceDoor);
  app.use("/api/cy-check", CheckPriceCy);
  app.use("/api/booking-log", BookingLog);
  app.use("/api/fcl-check", CheckPriceFCL);
  app.use("/api/itemAdvance", ItemAdvance);
  app.use("/api/advance-ops", AdvanceOPS);
  app.use("/api/test", Test);
}

module.exports = route;
