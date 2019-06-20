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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRWIsK0RBUzhCO0FBQzlCLHdEQUE4QjtBQUU5QiwrQ0FBc0M7QUFDdEMseURBQWdEO0FBU2hELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUssU0FBUSw0QkFBVztJQWVuQyxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLGtCQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLGtCQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBMkVGLENBQUE7QUExRkM7SUFIQyw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDOztrQ0FDWTtBQU1kO0lBSkMsNkJBQU07SUFDTiw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDOzttQ0FDYTtBQUtmO0lBSEMsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE1BQU07S0FDdEIsQ0FBQzs7O29DQUtEO0FBTUQ7SUFKQyw4QkFBTyxDQUFDLEdBQUcsQ0FBQztJQUNaLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7O3VDQUNpQjtBQUtuQjtJQUhDLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7O3FDQUNlO0FBS2pCO0lBSEMsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87S0FDdkIsQ0FBQzs7b0NBQ2M7QUFLaEI7SUFIQyw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDOzsyQ0FDcUI7QUFLdkI7SUFIQyw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDOzttQ0FDYTtBQU1mO0lBSkMsOEJBQU8sQ0FBQywrQkFBUSxDQUFDLEdBQUcsQ0FBQztJQUNyQiw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSTtLQUNwQixDQUFDOzhCQUNVLElBQUk7dUNBQUM7QUFNakI7SUFKQyxnQ0FBUyxDQUFDLElBQUksQ0FBQztJQUNmLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxJQUFJO0tBQ3BCLENBQUM7OEJBQ1csSUFBSTt3Q0FBQztBQU1sQjtJQUpDLDhCQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1YsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87S0FDdkIsQ0FBQzs7MENBQ29CO0FBTXRCO0lBSkMsOEJBQU8sQ0FBQyxJQUFJLENBQUM7SUFDYiw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDOzttQ0FDYTtBQU1mO0lBSkMsOEJBQU8sQ0FBQyxDQUFDLENBQUM7SUFDViw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsT0FBTztLQUN2QixDQUFDOzsyQ0FDcUI7QUFNdkI7SUFKQyw4QkFBTyxDQUFDLENBQUMsQ0FBQztJQUNWLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxPQUFPO0tBQ3ZCLENBQUM7OzJDQUNxQjtBQU12QjtJQUpDLDhCQUFPLENBQUMsRUFBRSxDQUFDO0lBQ1gsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87S0FDdkIsQ0FBQzs7aURBQzJCO0FBRzdCO0lBREMsOEJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBSyxDQUFDOztvQ0FDSjtBQUdqQjtJQURDLDhCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsNkJBQVUsQ0FBQzs7eUNBQ0M7QUE3RmhCLElBQUk7SUFQaEIsNEJBQUssQ0FBQztRQUNMLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsT0FBTyxFQUFFLGlCQUFpQjtLQUMzQixDQUFDO0dBQ1csSUFBSSxDQThGaEI7QUE5Rlksb0JBQUkifQ==