const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const authRoutes = require("./routes/authRoutes");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Week 7 User Authentication API",
      version: "1.0.0",
      description: "JWT authentication API with registration, login and protected routes"
    },
    securitySchemes: {
  bearerAuth: {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT"
  }
}
  },
  apis: ["./server.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serveFiles(swaggerSpec), swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Umaiya
 *               email:
 *                 type: string
 *                 example: umaiya@example.com
 *               password:
 *                 type: string
 *                 example: Test1234
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Required fields missing
 *       409:
 *         description: User already exists
 */
 
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user and receive JWT
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: umaiya@example.com
 *               password:
 *                 type: string
 *                 example: Test1234
 *     responses:
 *       200:
 *         description: Login successful with JWT token
 *       401:
 *         description: Invalid email or password
 */

/**
 * @swagger
 * /protected:
 *   get:
 *     summary: Access protected route
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Protected route accessed successfully
 *       401:
 *         description: Access token required
 *       403:
 *         description: Invalid or expired token
 */
app.get("/", (req, res) => {
  res.json({ message: "Week 7 Authentication API is running" });
});

app.use("/auth", authRoutes);
const authenticateToken = require("./middleware/authMiddleware");

app.get("/protected", authenticateToken, (req, res) => {
  res.json({
    message: "You have access to the protected route",
    user: req.user
  });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;