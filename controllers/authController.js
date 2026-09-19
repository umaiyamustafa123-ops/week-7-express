const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = [];

const JWT_SECRET = process.env.JWT_SECRET || "week7-secret-key";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword
    };

    users.push(user);

    res.status(201).json({
      message: "User registered successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = users.find(user => user.email === email);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = {
  register,
  login
};