document.addEventListener('DOMContentLoaded', function() {
    const text = "Quick Stickz Application";
    let index = 0;
    const speed = 150; // Typing speed in milliseconds
    const headingElement = document.getElementById('typing');

    function typeWriter() {
        if (index < text.length) {
            headingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); // Start the typing effect
});

document.querySelectorAll('.sticky-note').forEach(note => {
    let offsetX, offsetY, originalX, originalY, isDragging = false;

    note.addEventListener('mousedown', function(e) {
        isDragging = true;
        note.style.position = 'absolute';
        note.style.zIndex = '1000';

        // Calculate the initial offset
        offsetX = e.clientX - note.getBoundingClientRect().left;
        offsetY = e.clientY - note.getBoundingClientRect().top;

        // Store original position
        originalX = note.style.left;
        originalY = note.style.top;

        document.addEventListener('mousemove', onMouseMove);
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            document.removeEventListener('mousemove', onMouseMove);
            note.style.zIndex = '10';
            isDragging = false;

            // Check for collision
            if (isColliding(note)) {
                // Revert to original position
                note.style.left = originalX;
                note.style.top = originalY;
            }
        }
    });

    function onMouseMove(e) {
        note.style.left = e.clientX - offsetX + 'px';
        note.style.top = e.clientY - offsetY + 'px';
    }

    function isColliding(note) {
        const notes = document.querySelectorAll('.sticky-note');
        const noteRect = note.getBoundingClientRect();

        for (let otherNote of notes) {
            if (otherNote !== note) {
                const otherRect = otherNote.getBoundingClientRect();

                if (
                    noteRect.left < otherRect.right &&
                    noteRect.right > otherRect.left &&
                    noteRect.top < otherRect.bottom &&
                    noteRect.bottom > otherRect.top
                ) {
                    return true;
                }
            }
        }

        return false;
    }
});

