import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import  path from "path";
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(morgan("dev")); // logs all the incoming req information
// app.use(helmet()) // setting default security headers to protect some attacks
app.use(cors()); // allow cross origin resources
app.use(express.json()); // convert income data in the req.body

const _dirname = path.resolve();
console.log(_dirname);
// MongoDB connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

// routers
import userRouter from "./src/routers/userRotuer.js";
import transRouter from "./src/routers/transRouter.js";
import { isAuth } from "./src/middleware/authMiddleware.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", isAuth, transRouter);

// catch when router is not found
app.use("*", (req, res, next) => {
  const error = {
    message: "404 page not found!",
    code: 404,
  };
  next(error);
});

// global error handler
app.use((error, req, res, next) => {
  console.log(error);
  const code = error.code || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`you server is ready at http://localhost:${PORT}`);
});
