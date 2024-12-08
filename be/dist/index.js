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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const groq = new groq_sdk_1.default();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const completion = yield groq.chat.completions.create({
            model: "llama3-8b-8192",
            max_tokens: 1024,
            temperature: 0.5,
            messages: [
                {
                    role: "user",
                    content: "What is 2+2",
                },
            ],
        });
        console.log(completion.choices[0].message.content);
    });
}
main();