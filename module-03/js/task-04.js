class Notes {
    static Priority() {
        return {HIGH: 'high', LOW: 'low'};
    }
    constructor() {
        this.items = [];
    }
    addNote(note) {
        return this.items.push(note);
    }
    removeNote(text) {
        const index = this.items.findIndex((elem) => elem.text === text)
        if (index > -1) {
            return this.items.splice(index, 1);
        }
    }
    updatePriority(text, newPriority) {
        console.log(text, newPriority);
        const index = this.items.findIndex((elem) => elem.text === text)
        console.log(index);
        if (index > -1) {
            this.items.splice(index, 1, newPriority);
        }
    }
}

const notes = new Notes({text: 'text-0', priority: Notes.Priority().HIGH });
console.log(notes);

console.log(notes.addNote({text: 'text-1', priority: Notes.Priority().LOW }));
console.log(notes.addNote({text: 'text-2', priority: Notes.Priority().HIGH }));
console.log(notes.addNote({text: 'text-3', priority: Notes.Priority().LOW }));
console.log(notes);

console.log(notes.removeNote('text-2'));
console.log(notes);

console.log(notes.updatePriority({text: 'text-3', priority: Notes.Priority().HIGH }));
console.log(notes);
