"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Events_1 = require("../Functions/Events");
var Items_1 = require("../Components/Items");
// Page component
var NotePage = function () {
    // Initialize values
    var _a = (0, react_1.useState)(''), title = _a[0], setTitle = _a[1];
    var _b = (0, react_1.useState)(''), description = _b[0], setDescription = _b[1];
    var _c = (0, react_1.useState)([]), notes = _c[0], setNotes = _c[1];
    // Insert the HTML
    return (react_1.default.createElement("div", { className: 'container' },
        react_1.default.createElement(Items_1.NoteForm, { addNoteClick: Events_1.addNoteClick, title: title, description: description, setTitle: setTitle, setDescription: setDescription }),
        react_1.default.createElement(Items_1.NoteList, { notes: notes, deleteNoteClick: Events_1.deleteNoteClick, setNotes: setNotes })));
};
exports.default = NotePage;
