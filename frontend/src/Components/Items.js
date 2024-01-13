"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteList = exports.NoteForm = void 0;
var react_1 = __importDefault(require("react"));
var NoteForm = function (_a) {
    var addNoteClick = _a.addNoteClick, title = _a.title, description = _a.description, setTitle = _a.setTitle, setDescription = _a.setDescription;
    return (react_1.default.createElement("form", { onSubmit: function (event) { return addNoteClick(event, title, description, setTitle, setDescription); } },
        react_1.default.createElement("label", { htmlFor: "titleInput" },
            "Title",
            react_1.default.createElement("input", { type: "text", id: "titleInput", name: "title", value: title, onChange: function (e) { return setTitle(e.target.value); }, required: true })),
        react_1.default.createElement("label", { htmlFor: "descriptionInput" },
            "Description",
            react_1.default.createElement("textarea", { id: "descriptionInput", name: "description", value: description, onChange: function (e) { return setDescription(e.target.value); }, required: true })),
        react_1.default.createElement("button", { type: "submit" }, "Add note")));
};
exports.NoteForm = NoteForm;
//Note
var NoteList = function (_a) {
    var notes = _a.notes, deleteNoteClick = _a.deleteNoteClick, setNotes = _a.setNotes;
    notes.forEach(function (note, index) { return (react_1.default.createElement("div", { className: "note", key: index },
        react_1.default.createElement("h2", null, "Title:"),
        react_1.default.createElement("p", null, note.title),
        react_1.default.createElement("h2", null, "Description:"),
        react_1.default.createElement("p", null, note.description),
        react_1.default.createElement("button", { onClick: function (event) { return deleteNoteClick(note.id, event, setNotes, notes); } }, "Delete"))); });
    return null;
};
exports.NoteList = NoteList;
