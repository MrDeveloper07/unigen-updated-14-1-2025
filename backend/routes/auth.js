const express = require("express");
const { signup, login } = require("../controller/authController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
const User = require("../models/User"); // Adjust the path as needed

// Route for user signup
router.post("/signup", signup);

// Route for user login
router.post("/login", login);

// Route to get user details
router.get("/me", verifyToken, async (req, res) => {
  try {
    console.log("Decoded user:", req.user); // Debugging
    const user = await User.findById(req.user.userId).select("name email profession");
    console.log(user); // Use req.user.userId
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error in /me route:", error); // Debugging
    res.status(500).json({ message: "Server error" });
  }
});

// Route to update name and/or profession
router.put("/update", verifyToken, async (req, res) => {
  try {
    const { name, profession } = req.body;

    // Validation: Check if both fields are not empty (either name or profession can be updated)
    if (!name && !profession) {
      return res.status(400).json({ message: "At least one of 'name' or 'profession' is required" });
    }

    // Update user data (name and/or profession)
    const updateData = {};
    if (name) updateData.name = name;
    if (profession) updateData.profession = profession;

    const user = await User.findByIdAndUpdate(
      req.user.userId, // Use the user ID from the verified token
      updateData,
      { new: true } // Return the updated user object
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      name: user.name,
      profession: user.profession,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
