$(document).ready(function() {
    // Set the current date in the header
    const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' };
    const today = new Date().toLocaleDateString('en-US', options);
    $('#date-header').text(`My To-Do List for ${today}`);

    // Initialize sortable for draggable tasks
    $("#task-list").sortable({
        handle: ".drag-handle",
        axis: "y"
    });

    // Add a new task
    $('.new-task-input').keypress(function(e) {
        if (e.which == 13) { // Enter key pressed
            const taskText = $(this).val().trim();
            if (taskText !== '') {
                const newTask = `
                    <li class="task-item">
                        <span class="drag-handle">::</span>
                        <input type="checkbox" class="task-checkbox">
                        <span class="task-name">${taskText}</span>
                    </li>
                `;
                $('#task-list').append(newTask);
                $(this).val(''); // Clear input
            }
        }
    });
});
