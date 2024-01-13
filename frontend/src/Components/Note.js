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
// Page component
var NotePage = function () {
    // Initialize values
    var _a = (0, react_1.useState)(''), title = _a[0], setTitle = _a[1];
    var _b = (0, react_1.useState)(''), description = _b[0], setDescription = _b[1];
    var _c = (0, react_1.useState)([]), notes = _c[0], setNotes = _c[1];
    // Insert the HTML
    return (react_1.default.createElement("div", { className: 'container' },
        react_1.default.createElement("form", { onSubmit: function (event) { return (0, Events_1.addNoteClick)(event, title, description, setTitle, setDescription, setNotes); } },
            react_1.default.createElement("label", { htmlFor: "titleInput" },
                "Title",
                react_1.default.createElement("input", { type: "text", id: "titleInput", name: "title", value: title, onChange: function (e) { return setTitle(e.target.value); }, required: true })),
            react_1.default.createElement("label", { htmlFor: "descriptionInput" },
                "Description",
                react_1.default.createElement("textarea", { id: "descriptionInput", name: "description", value: description, onChange: function (e) { return setDescription(e.target.value); }, required: true })),
            react_1.default.createElement("button", { type: "submit" }, "Add note")),
        react_1.default.createElement("div", null, notes.map(function (note, index) { return (react_1.default.createElement("div", { className: 'note', key: index },
            react_1.default.createElement("h2", null, "Title:"),
            react_1.default.createElement("p", null, note.title),
            react_1.default.createElement("h2", null, "Description:"),
            react_1.default.createElement("p", null, note.description),
            react_1.default.createElement("button", { onClick: function (event) { return (0, Events_1.deleteNoteClick)(note.id, event, setNotes, notes); } }, "Delete"))); }))));
};
exports.default = NotePage;
