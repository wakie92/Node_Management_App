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
// import { User } from "models/user.model";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW5kYW5jZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvYXR0ZW5kYW5jZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0FBRWIsK0RBUzhCO0FBRTlCLDRDQUE0QztBQUM1Qyw2Q0FBb0M7QUFTcEMsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVyxTQUFRLDRCQUFpQjtDQTJCaEQsQ0FBQTtBQXRCQztJQUpDLDhCQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2QsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87S0FDdkIsQ0FBQzs7d0NBQ2E7QUFNZjtJQUpDLDhCQUFPLENBQUMsK0JBQVEsQ0FBQyxHQUFHLENBQUM7SUFDckIsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLElBQUk7S0FDcEIsQ0FBQzs4QkFDVyxJQUFJOzhDQUFDO0FBTWxCO0lBSkMsZ0NBQVMsQ0FBQyxJQUFJLENBQUM7SUFDZiw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSTtLQUNwQixDQUFDOzhCQUNZLElBQUk7K0NBQUM7QUFNbkI7SUFKQyxpQ0FBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFJLENBQUM7SUFDdEIsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87S0FDdkIsQ0FBQzs7MENBQ2M7QUFHaEI7SUFEQyxnQ0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFJLENBQUM7OEJBQ2YsaUJBQUk7d0NBQUM7QUExQkQsVUFBVTtJQVB0Qiw0QkFBSyxDQUFDO1FBQ0wsU0FBUyxFQUFFLFlBQVk7UUFDdkIsV0FBVyxFQUFFLElBQUk7UUFDakIsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsaUJBQWlCO0tBQzNCLENBQUM7R0FDVyxVQUFVLENBMkJ0QjtBQTNCWSxnQ0FBVSJ9