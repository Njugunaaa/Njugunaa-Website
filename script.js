const form = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    if (!name || !email || !comment) {
        alert('Please fill out all fields.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${name}</strong> (${email}): ${comment}`;

    commentList.appendChild(listItem);

    form.reset();
});
