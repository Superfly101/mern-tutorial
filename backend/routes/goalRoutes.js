const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  UpdateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);

router.route("/:id").put(UpdateGoal).delete(deleteGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", UpdateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
