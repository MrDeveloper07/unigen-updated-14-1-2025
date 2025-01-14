const User = require("../models/User");
const jwt = require("jsonwebtoken");
// Import bcrypt for password encryption

// User signup
const signup = async (req, res) => {
  const { name, email, profession, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !profession || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // // Hash the password before saving
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      profession,
      password,
    });

    // Save user to database
    await user.save();

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Respond with success and token
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// User login
const login = async (req, res) => {
  const { email, password } = req.body;
console.log(email)
  // Check if all fields are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare provided password with hashed password in the database
    if (password !== user.password) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Respond with success and token
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};



module.exports = { signup, login };
