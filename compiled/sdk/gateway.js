"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.request = void 0;
var zeromq_1 = require("zeromq");
var reply_1 = require("./message/reply");
var init = function () { return __awaiter(void 0, void 0, zeromq_1.Request, function () {
    var socket, host;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                socket = new zeromq_1.Request();
                host = process.env.SDS_GATEWAY_HOST;
                return [4 /*yield*/, socket.connect("tcp://" + host)];
            case 1:
                _a.sent();
                return [2 /*return*/, socket];
        }
    });
}); };
var request = function (msg) {
    return __awaiter(this, void 0, void 0, function () {
        var socket, err_1, err_2, resultBuffer, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, init()];
                case 1:
                    socket = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, reply_1.Reply.fail("Failed to init connection with SDS Gateway: " + err_1.toString(), {})];
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, socket.send(msg.toString())];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _a.sent();
                    return [2 /*return*/, reply_1.Reply.fail("Failed to send message to SDS Gateway: " + err_2.toString(), {})];
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, socket.receive()];
                case 7:
                    resultBuffer = (_a.sent())[0];
                    return [2 /*return*/, reply_1.Reply.fromBuffer(resultBuffer)];
                case 8:
                    err_3 = _a.sent();
                    return [2 /*return*/, reply_1.Reply.fail("Failed to receive message from SDS Gateway: " + err_3.toString(), {})];
                case 9: return [2 /*return*/];
            }
        });
    });
};
exports.request = request;
//# sourceMappingURL=gateway.js.map