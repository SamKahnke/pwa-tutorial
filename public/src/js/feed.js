var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';

  if (deferredPrompt) {
  	deferredPrompt.prompt();
  	deferredPrompt.userChoice.then(function (choiceResult) {
  		if (choiceResult.outcome === 'dismissed') {
  			console.log('Dismissed');
  		} else {
  			console.log('Installed');
  		}
  	});
  	deferredPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
