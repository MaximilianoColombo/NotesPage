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
exports.NoteRepository = void 0;
class NoteRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    save(title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdNote = yield this.prisma.note.create({
                    data: { title: title, description: description }
                });
                console.log(`noteRepository creado: ${createdNote}`);
                return createdNote;
            }
            catch (error) {
                console.log(`noteRepository error: ${error}`);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.note.delete({
                    where: { id: id }
                });
                console.log(`Note with ID ${id} was deleted`);
            }
            catch (error) {
                console.error("Error deleting the note", error);
            }
        });
    }
}
exports.NoteRepository = NoteRepository;
