class Notes {
    static Priority() {
        return { HIGH: 'high', LOW: 'low' };
    }

    constructor(initialNotes = []) {
        this.items = initialNotes;
    }

    addNote(note) {
        this.items.push(note);
        return note;
    }

    removeNote(text) {
        const index = this.items.findIndex((elem) => elem.text === text);

        if (index === -1) {
            return null;
        }

        return this.items.splice(index, 1)[0];
    }

    updatePriority(text, newPriority) {
        const index = this.items.findIndex((elem) => elem.text === text);

        if (index === -1) {
            return null;
        }

        this.items[index].priority = newPriority;
        return this.items[index];
    }
}

const notes = new Notes();
console.log(notes);

console.log(notes.addNote({ text: 'text-1', priority: Notes.Priority().LOW }));
console.log(notes.addNote({ text: 'text-2', priority: Notes.Priority().HIGH }));
console.log(notes.addNote({ text: 'text-3', priority: Notes.Priority().LOW }));
console.log(notes);

console.log(notes.removeNote('text-2'));
console.log(notes);

console.log(notes.updatePriority('text-3', Notes.Priority().HIGH));
console.log(notes);
