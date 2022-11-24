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
var ethers_1 = require("ethers");
function decrypt() {
    return __awaiter(this, void 0, void 0, function () {
        var phone, wallet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    phone = { "address": "c4d2f33328668ccf6c349a6522aed296a3ca1b59", "id": "439f7f28-8d48-4e02-9677-611252a224c9", "version": 3, "crypto": { "cipher": "aes-128-ctr", "cipherparams": { "iv": "e6434e91fb4b938ac1b0f43b3b6b9236" }, "ciphertext": "4c2020c0c9a420d36ab137330f10451385b5ba286d8cc2d88a60183bc5391f02", "kdf": "scrypt", "kdfparams": { "salt": "c8e28cc2dad21dd52f41a94500e7aab034b42260b59efbc6f6fc0fb3ebc91da7", "n": 131072, "dklen": 32, "p": 1, "r": 8 }, "mac": "6d425a455028c268ac47b4a830e794d1a2806a5255bb339e3dacea57d45b0e67" }, "x-ethers": { "client": "ethers.js", "gethFilename": "UTC--2022-10-21T07-58-33.0Z--c4d2f33328668ccf6c349a6522aed296a3ca1b59", "mnemonicCounter": "75ec783090d93cced1b3aadb14ed306f", "mnemonicCiphertext": "d547a2a786d64dec4ae64d528541710c", "path": "m/44'/60'/0'/0/0", "locale": "en", "version": "0.1" } };
                    // console.log("Hello decrypt");
                    alert("Hello decrypt");
                    return [4 /*yield*/, ethers_1.Wallet.fromEncryptedJson(JSON.stringify(phone), "123")];
                case 1:
                    wallet = _a.sent();
                    console.log("wallet", wallet.mnemonic.phrase);
                    alert(wallet.mnemonic.phrase);
                    return [2 /*return*/, wallet.mnemonic.phrase];
            }
        });
    });
}
function myFunction() {
    alert("index.js");
}
