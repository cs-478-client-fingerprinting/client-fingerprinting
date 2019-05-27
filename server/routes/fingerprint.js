import { Router } from "express";
import { Fingerprint } from "../models";

const fingerprint = Router();

/* POST fingerprint */
fingerprint.post("/", function(req, res, next) {
  const exists = false;
  res.send({ exists });
  next();
});

fingerprint.delete("/", (res, req, next) => {});

fingerprint.post("/check", async (req, res, next) => {
  const fingerprints = await Fingerprint.find().exec();
  console.log(fingerprints);
  const exists = false;
  res.send({ exists });
});

export default fingerprint;
