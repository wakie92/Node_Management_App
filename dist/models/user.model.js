"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import { Board } from "models/board.model";
// import { Attendance } from "models/attendance.model";
const board_model_1 = require("./board.model");
const attendance_model_1 = require("./attendance.model");
let User = class User extends sequelize_typescript_1.Model {
    set password(value) {
        const salt = bcryptjs_1.default.genSaltSync(12);
        const hash = bcryptjs_1.default.hashSync(value, salt);
        this.setDataValue("password", hash);
    }
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "password", null);
__decorate([
    sequelize_typescript_1.Default("U"),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "user_type", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], User.prototype, "salary", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "profile_image", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "birth", void 0);
__decorate([
    sequelize_typescript_1.Default(sequelize_typescript_1.DataType.NOW),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], User.prototype, "join_date", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], User.prototype, "leave_date", void 0);
__decorate([
    sequelize_typescript_1.Default(0),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], User.prototype, "working_year", void 0);
__decorate([
    sequelize_typescript_1.Default("사원"),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "grade", void 0);
__decorate([
    sequelize_typescript_1.Default(0),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], User.prototype, "half_vacation", void 0);
__decorate([
    sequelize_typescript_1.Default(0),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], User.prototype, "year_vacation", void 0);
__decorate([
    sequelize_typescript_1.Default(15),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], User.prototype, "total_year_vacation", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => board_model_1.Board),
    __metadata("design:type", Array)
], User.prototype, "boards", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => attendance_model_1.Attendance),
    __metadata("design:type", Array)
], User.prototype, "attendances", void 0);
User = __decorate([
    sequelize_typescript_1.Table({
        tableName: "user",
        underscored: true,
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci"
    })
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRWIsK0RBUzhCO0FBQzlCLHdEQUE4QjtBQUU5Qiw4Q0FBOEM7QUFDOUMsd0RBQXdEO0FBQ3hELCtDQUFzQztBQUN0Qyx5REFBZ0Q7QUFTaEQsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLDRCQUFXO0lBZW5DLElBQUksUUFBUSxDQUFDLEtBQWE7UUFDeEIsTUFBTSxJQUFJLEdBQUcsa0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsTUFBTSxJQUFJLEdBQUcsa0JBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0EyRUYsQ0FBQTtBQTFGQztJQUhDLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7O2tDQUNZO0FBTWQ7SUFKQyw2QkFBTTtJQUNOLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7O21DQUNhO0FBS2Y7SUFIQyw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDOzs7b0NBS0Q7QUFNRDtJQUpDLDhCQUFPLENBQUMsR0FBRyxDQUFDO0lBQ1osNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE1BQU07S0FDdEIsQ0FBQzs7dUNBQ2lCO0FBS25CO0lBSEMsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE1BQU07S0FDdEIsQ0FBQzs7cUNBQ2U7QUFLakI7SUFIQyw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsT0FBTztLQUN2QixDQUFDOztvQ0FDYztBQUtoQjtJQUhDLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7OzJDQUNxQjtBQUt2QjtJQUhDLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7O21DQUNhO0FBTWY7SUFKQyw4QkFBTyxDQUFDLCtCQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3JCLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxJQUFJO0tBQ3BCLENBQUM7OEJBQ1UsSUFBSTt1Q0FBQztBQU1qQjtJQUpDLGdDQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2YsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLElBQUk7S0FDcEIsQ0FBQzs4QkFDVyxJQUFJO3dDQUFDO0FBTWxCO0lBSkMsOEJBQU8sQ0FBQyxDQUFDLENBQUM7SUFDViw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsT0FBTztLQUN2QixDQUFDOzswQ0FDb0I7QUFNdEI7SUFKQyw4QkFBTyxDQUFDLElBQUksQ0FBQztJQUNiLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7O21DQUNhO0FBTWY7SUFKQyw4QkFBTyxDQUFDLENBQUMsQ0FBQztJQUNWLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxPQUFPO0tBQ3ZCLENBQUM7OzJDQUNxQjtBQU12QjtJQUpDLDhCQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1YsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87S0FDdkIsQ0FBQzs7MkNBQ3FCO0FBTXZCO0lBSkMsOEJBQU8sQ0FBQyxFQUFFLENBQUM7SUFDWCw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsT0FBTztLQUN2QixDQUFDOztpREFDMkI7QUFHN0I7SUFEQyw4QkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFLLENBQUM7O29DQUNKO0FBR2pCO0lBREMsOEJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyw2QkFBVSxDQUFDOzt5Q0FDQztBQTdGaEIsSUFBSTtJQVBoQiw0QkFBSyxDQUFDO1FBQ0wsU0FBUyxFQUFFLE1BQU07UUFDakIsV0FBVyxFQUFFLElBQUk7UUFDakIsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsaUJBQWlCO0tBQzNCLENBQUM7R0FDVyxJQUFJLENBOEZoQjtBQTlGWSxvQkFBSSJ9