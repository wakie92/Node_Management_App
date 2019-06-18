"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const express_session_1 = __importDefault(require("express-session"));
// import Server from "Server";
// import { sequelize } from "models";
// import userRouter from "router/user";
// import boardRouter from "router/board";
const Server_1 = __importDefault(require("./Server"));
const models_1 = require("./models");
const user_1 = __importDefault(require("./router/user"));
const board_1 = __importDefault(require("./router/board"));
const app = new Server_1.default().app;
models_1.sequelize.sync().then(() => console.log("connected database!"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_session_1.default({
    secret: "managing-app-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}));
app.use("/users", user_1.default);
app.use("/boards", board_1.default);
app.use((req, res, next) => {
    next(http_errors_1.default(404));
    return;
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
    return;
});
app.listen(3000, () => console.log("Server is running ~ "));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWIsc0RBQWdGO0FBQ2hGLDhEQUFzQztBQUN0QyxzRUFBc0M7QUFFdEMsK0JBQStCO0FBQy9CLHNDQUFzQztBQUV0Qyx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBRTFDLHNEQUE4QjtBQUM5QixxQ0FBcUM7QUFFckMseURBQXVDO0FBQ3ZDLDJEQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBZ0IsSUFBSSxnQkFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0FBRTFDLGtCQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBRWhFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWpELEdBQUcsQ0FBQyxHQUFHLENBQ0wseUJBQU8sQ0FBQztJQUNOLE1BQU0sRUFBRSxxQkFBcUI7SUFDN0IsTUFBTSxFQUFFLEtBQUs7SUFDYixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7S0FDdkI7Q0FDRixDQUFDLENBQ0gsQ0FBQztBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQVUsQ0FBQyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGVBQVcsQ0FBQyxDQUFDO0FBRWhDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUMxRCxJQUFJLENBQUMscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU87QUFDVCxDQUFDLENBQUMsQ0FBQztBQU1ILEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsT0FBTztBQUNULENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMifQ==