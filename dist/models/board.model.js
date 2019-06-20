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
let Board = class Board extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Board.prototype, "contents", void 0);
__decorate([
    sequelize_typescript_1.Default(0),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Board.prototype, "view", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Board.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Board.prototype, "user", void 0);
Board = __decorate([
    sequelize_typescript_1.Table({
        tableName: "board",
        underscored: true,
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci"
    })
], Board);
exports.Board = Board;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2JvYXJkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7QUFFYiwrREFROEI7QUFFOUIsNkNBQW9DO0FBU3BDLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQU0sU0FBUSw0QkFBWTtDQXlCdEMsQ0FBQTtBQXJCQztJQUhDLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7O29DQUNhO0FBS2Y7SUFIQyw2QkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDOzt1Q0FDZ0I7QUFNbEI7SUFKQyw4QkFBTyxDQUFDLENBQUMsQ0FBQztJQUNWLDZCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxPQUFPO0tBQ3ZCLENBQUM7O21DQUNZO0FBTWQ7SUFKQyxpQ0FBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFJLENBQUM7SUFDdEIsNkJBQU0sQ0FBQztRQUNOLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87S0FDdkIsQ0FBQzs7cUNBQ2M7QUFHaEI7SUFEQyxnQ0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFJLENBQUM7OEJBQ2YsaUJBQUk7bUNBQUM7QUF4QkQsS0FBSztJQVBqQiw0QkFBSyxDQUFDO1FBQ0wsU0FBUyxFQUFFLE9BQU87UUFDbEIsV0FBVyxFQUFFLElBQUk7UUFDakIsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsaUJBQWlCO0tBQzNCLENBQUM7R0FDVyxLQUFLLENBeUJqQjtBQXpCWSxzQkFBSyJ9