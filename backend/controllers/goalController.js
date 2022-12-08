const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");

// @desc        Get goals
//@route        GET /api/goals
//@access       Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});
// @desc        Set goals
//@route        POST /api/goals
//@access       Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc        Update goal
//@route        PUT /api/goals/:id
//@access       Private
const UpdateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const UpdatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(UpdatedGoal);
});

// @desc        Delete goal
//@route        DELETE /api/goals/:id
//@access       Private
const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error("Goalnot found");
  }

  await goal.remove();

  res.status(200).json({ id });
});

module.exports = {
  getGoals,
  setGoal,
  UpdateGoal,
  deleteGoal,
};
