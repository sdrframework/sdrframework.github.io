function loadMarkdown(file) {
    console.log('Loading markdown:', file);

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch: ' + response.status + ' ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            console.log("Raw Markdown content:", text);
            document.getElementById('content-frame').innerHTML = window.marked.parse(text); // Use window.marked
        })
        .catch(error => console.error('Error loading markdown:', error));
}
