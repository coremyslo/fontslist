"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.getMapping = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const caniuse = require("caniuse-api");
const browserslist_1 = __importDefault(require("browserslist"));
const fs_1 = __importDefault(require("fs"));
const getMapping = () => {
    const browsersList = (0, browserslist_1.default)("> 0%").reverse();
    return browsersList.reduce((acc, val) => {
        if (caniuse.isSupported("svg-fonts", val)) {
            acc.svg[val] = true;
        }
        if (caniuse.isSupported("ttf", val)) {
            acc.ttf[val] = true;
        }
        if (caniuse.isSupported("eot", val)) {
            acc.eot[val] = true;
        }
        if (caniuse.isSupported("woff", val)) {
            acc.woff[val] = true;
        }
        if (caniuse.isSupported("woff2", val)) {
            acc.woff2[val] = true;
        }
        return acc;
    }, {
        svg: {},
        ttf: {},
        eot: {},
        woff: {},
        woff2: {},
    });
};
exports.getMapping = getMapping;
const generate = () => {
    fs_1.default.writeFileSync("src/data.ts", `// generated by generate.ts
import { FontFormat } from "./types";
const data: Record<FontFormat, Record<string, boolean>> = ${JSON.stringify((0, exports.getMapping)(), null, 2)};
export default data;
`);
};
exports.generate = generate;
