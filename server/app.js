import express from "express";
import { join } from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import { json, urlencoded } from "body-parser";

import fingerprint from "./routes/fingerprint";

// DB Init
// mongoose.connect(
//   "mongodb+srv://admin:" +
//     process.env.MONGO_ATLAS_PW +
//     "@dropletdemo-r8dtp.mongodb.net/test?retryWrites=true",
//   { useNewUrlParser: true }
// );

var app = express();

// uncomment after placing your favicon in /public
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/fingerprint", fingerprint);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

export default app;
