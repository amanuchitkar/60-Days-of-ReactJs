const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1: Get all the notes using: GET "/api/auth/fetchallnotes". Login required
router.get("/fetchalluser", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
// Route 1: Get all the notes using: GET "/api/auth/fetchallnotes". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("titel", "Enter a valid titel").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.json(notes);
  }
);
module.exports = router;
