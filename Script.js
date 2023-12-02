const bookContainer = document.getElementById('book-container');
const statusContainer = document.getElementById('status-container');

function displayBook(book) {
  const bookElement = document.createElement('div');
  bookElement.className = 'book';

  const titleElement = document.createElement('h2');
  titleElement.textContent = book.title;
  bookElement.appendChild(titleElement);

  const contentElement = document.createElement('div');
  contentElement.innerHTML = book.content;
  bookElement.appendChild(contentElement);

  const imageElement = document.createElement('img');
  // Replace placeholder image URL with actual image URL
  imageElement.src = 'https://via.placeholder.com/150';
  bookElement.appendChild(imageElement);

  bookContainer.appendChild(bookElement);
}

function updateStatus(message) {
  const statusElement = document.createElement('p');
  statusElement.textContent = message;
  statusContainer.appendChild(statusElement);
}

function generateAndPublishBook() {
  updateStatus('Sending prompt to Bard...');

  const prompt = 'Hello Bard, generate me a best-selling children\'s book, complete with images, and refine it for me.';

  fetch('/generate-book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: prompt })
  })
  .then(response => response.json())
  .then(book => {
    // Process and refine the book content
    const refinedContent = processAndRefineBookContent(book.content);

    // Generate the refined and completed copy of the book
    const refinedBook = {
      title: book.title,
      content: refinedContent
    };

    displayBook(refinedBook);
    submitBookForPublishing(refinedBook.title, refinedBook.content);
  });
}

generateAndPublishBook();
