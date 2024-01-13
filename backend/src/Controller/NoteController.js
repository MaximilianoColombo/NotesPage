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
exports.NoteController = void 0;
class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('NoteService in create method:', this.noteService);
            try {
                const { title, description } = req.body;
                console.log('Received request with body:', req.body);
                console.log(this.noteService);
                const note = yield this.noteService.create(title, description);
                console.log('Created note:', note);
                res.status(201).json(note);
                return note;
            }
            catch (error) {
                console.log(`noteController error: ${error}`);
                res.status(500).json({ error: 'Internal Server Error' });
                throw error;
            }
        });
    }
}
exports.NoteController = NoteController;
/*This code is commented because it's not working, there is a problem in the line 20, the "this" is referencing a wrong class*/ 
