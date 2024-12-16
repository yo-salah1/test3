const addNoteBtn = document.getElementById('add-note-btn');
const noteModal = document.getElementById('note-modal');
const saveNoteBtn = document.getElementById('save-note-btn');
const cancelBtn = document.getElementById('cancel-btn');
const notesContainer = document.getElementById('notes-container');
const noteTitleInput = document.getElementById('note-title');
const noteTasksInput = document.getElementById('note-tasks');
const noteColorInput = document.getElementById('note-color');


addNoteBtn.addEventListener('click', () => {
    noteModal.style.display = 'flex';
});


cancelBtn.addEventListener('click', () => {
    noteModal.style.display = 'none';
    clearModal();
});


saveNoteBtn.addEventListener('click', () => {
    const title = noteTitleInput.value.trim();
    const tasks = noteTasksInput.value.trim().split('\n');
    const color = noteColorInput.value;

    if (title || tasks.length) {
        const note = document.createElement('div');
        note.classList.add('note');
        note.style.backgroundColor = color;

        const noteHeader = document.createElement('div');
        noteHeader.classList.add('note-header');

        const noteTitle = document.createElement('h3');
        noteTitle.classList.add('note-title');
        noteTitle.textContent = title || 'Untitled Note';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => note.remove());

        noteHeader.appendChild(noteTitle);
        noteHeader.appendChild(deleteBtn);

        const taskList = document.createElement('div');
        taskList.classList.add('note-content');

        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task');

            const taskCheckbox = document.createElement('input');
            taskCheckbox.type = 'checkbox';

            const taskLabel = document.createElement('span');
            taskLabel.textContent = task;

            taskItem.appendChild(taskCheckbox);
            taskItem.appendChild(taskLabel);
            taskList.appendChild(taskItem);
        });

        note.appendChild(noteHeader);
        note.appendChild(taskList);
        notesContainer.appendChild(note);
    }

    noteModal.style.display = 'none';
    clearModal();
});


function clearModal() {
    noteTitleInput.value = '';
    noteTasksInput.value = '';
    noteColorInput.value = '#ffffff';
}


