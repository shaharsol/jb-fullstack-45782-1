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
Object.defineProperty(exports, "__esModule", { value: true });
(() => __awaiter(void 0, void 0, void 0, function* () {
    // example 1
    let x = 200;
    let y = 2;
    // x = '1'
    console.log(x + y);
    // example 2
    function sum(a, b) {
        return a + b;
    }
    // sum = '1'
    console.log(sum(1, 2));
    // example 3
    function multiply(a, b) {
        const result = a * b;
        return result;
    }
    console.log(multiply(2, 3));
    const users = yield fetch('some url');
}))();
