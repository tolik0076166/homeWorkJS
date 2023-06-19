function getPostById(id) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Пост не знайдено');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  function getCommentsByPostId(id) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Коментарі не знайдено');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
 function displayError(message) {
  const errorElement = document.createElement('div');
  errorElement.textContent = message;
  document.body.appendChild(errorElement);
}

function displayPost(post) {
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <button class='commentsButton'>Отримати коментарі</button>
    <div class='commentsContainer'></div>
  `;
  document.body.appendChild(postElement);

  const commentsButtons = document.querySelectorAll('.commentsButton');
  const commentsContainers = document.querySelectorAll('.commentsContainer');

  commentsButtons.forEach((commentsButton, index) => {
    commentsButton.addEventListener('click', () => {
      const commentsContainer = commentsContainers[index];
      const postId = post.id;

      getCommentsByPostId(postId)
        .then(comments => {
          commentsContainer.innerHTML = '';
          comments.forEach(comment => {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment.body;
            commentsContainer.appendChild(commentElement);
          });
        })
        .catch(error => {
          displayError('Помилка отримання коментарів: ' + error);
        });
    });
  });
}

function main() {
  const postIdInput = document.getElementById('postId');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const postId = parseInt(postIdInput.value);

    if (postId >= 1 && postId <= 100) {
      getPostById(postId)
        .then(post => {
          displayPost(post);
        })
        .catch(error => {
          displayError('Помилка отримання посту: ' + error);
        });
    } else {
      displayError('Некоректний ід посту');
    }
  });
}

main();

  