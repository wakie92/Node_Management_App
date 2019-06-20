"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const express_session_1 = __importDefault(require("express-session"));
const Server_1 = __importDefault(require("Server"));
const models_1 = require("models");
const user_1 = __importDefault(require("router/user"));
const board_1 = __importDefault(require("router/board"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWIsc0RBQWdGO0FBQ2hGLDhEQUFzQztBQUN0QyxzRUFBc0M7QUFFdEMsb0RBQTRCO0FBQzVCLG1DQUFtQztBQUVuQyx1REFBcUM7QUFDckMseURBQXVDO0FBRXZDLE1BQU0sR0FBRyxHQUFnQixJQUFJLGdCQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFFMUMsa0JBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7QUFFaEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFakQsR0FBRyxDQUFDLEdBQUcsQ0FDTCx5QkFBTyxDQUFDO0lBQ04sTUFBTSxFQUFFLHFCQUFxQjtJQUM3QixNQUFNLEVBQUUsS0FBSztJQUNiLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtLQUN2QjtDQUNGLENBQUMsQ0FDSCxDQUFDO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBVSxDQUFDLENBQUM7QUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZUFBVyxDQUFDLENBQUM7QUFFaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQzFELElBQUksQ0FBQyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkIsT0FBTztBQUNULENBQUMsQ0FBQyxDQUFDO0FBTUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxPQUFPO0FBQ1QsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyJ9