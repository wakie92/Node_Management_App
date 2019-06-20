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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
let Attendance = class Attendance extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.BOOLEAN
    }),
    __metadata("design:type", Boolean)
], Attendance.prototype, "late", void 0);
__decorate([
    sequelize_typescript_1.Default(sequelize_typescript_1.DataType.NOW),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], Attendance.prototype, "start_time", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], Attendance.prototype, "finish_time", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Attendance.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Attendance.prototype, "user", void 0);
Attendance = __decorate([
    sequelize_typescript_1.Table({
        tableName: "attendance",
        underscored: true,
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci"
    })
], Attendance);
exports.Attendance = Attendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW5kYW5jZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvYXR0ZW5kYW5jZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0FBRWIsK0RBUzhCO0FBRTlCLDZDQUFvQztBQVNwQyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFXLFNBQVEsNEJBQWlCO0NBMkJoRCxDQUFBO0FBdEJDO0lBSkMsOEJBQU8sQ0FBQyxLQUFLLENBQUM7SUFDZCw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsT0FBTztLQUN2QixDQUFDOzt3Q0FDYTtBQU1mO0lBSkMsOEJBQU8sQ0FBQywrQkFBUSxDQUFDLEdBQUcsQ0FBQztJQUNyQiw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSTtLQUNwQixDQUFDOzhCQUNXLElBQUk7OENBQUM7QUFNbEI7SUFKQyxnQ0FBUyxDQUFDLElBQUksQ0FBQztJQUNmLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxJQUFJO0tBQ3BCLENBQUM7OEJBQ1ksSUFBSTsrQ0FBQztBQU1uQjtJQUpDLGlDQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQUksQ0FBQztJQUN0Qiw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsT0FBTztLQUN2QixDQUFDOzswQ0FDYztBQUdoQjtJQURDLGdDQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQUksQ0FBQzs4QkFDZixpQkFBSTt3Q0FBQztBQTFCRCxVQUFVO0lBUHRCLDRCQUFLLENBQUM7UUFDTCxTQUFTLEVBQUUsWUFBWTtRQUN2QixXQUFXLEVBQUUsSUFBSTtRQUNqQixVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsTUFBTTtRQUNmLE9BQU8sRUFBRSxpQkFBaUI7S0FDM0IsQ0FBQztHQUNXLFVBQVUsQ0EyQnRCO0FBM0JZLGdDQUFVIn0=