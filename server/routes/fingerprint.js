import { Router } from "express";

const router = Router();

/* POST fingerprint */
router.post("/", function(req, res, next) {
  const exists = false;
  res.send({ exists });
});

export default router;
