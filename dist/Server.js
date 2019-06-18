"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express_1.default();
    }
}
exports.default = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUErQztBQUUvQyxNQUFNLE1BQU07SUFHSCxNQUFNLENBQUMsU0FBUztRQUNyQixPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=