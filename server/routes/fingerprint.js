import { doesFingerprintExist } from "../service/fingerprintService";
import { Router } from "express";

const router = Router();

/* POST fingerprint */
router.post("/", function(req, res, next) {
  const exists = doesFingerprintExist();
  res.send({ exists });
});

export default router;
