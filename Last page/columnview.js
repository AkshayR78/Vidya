const videoFileInput = document.getElementById('video-file');
const uploadButton = document.getElementById('upload-button');
const status = document.getElementById('status');
const progress = document.getElementById('progress');
const completedTopics = document.getElementById('completed-topics');
const requestedTopics = document.getElementById('requested-topics');

uploadButton.addEventListener('click', () => {
  const file = videoFileInput.files[0];
  const formData = new FormData();
  formData.append('video-file', file);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/upload-video');
  xhr.upload.addEventListener('progress', event => {
    if (event.lengthComputable) {
      const percent = (event.loaded / event.total) * 100;
      progress.style.width = `${percent}%`;
    }
  });
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      status.textContent = 'Video uploaded successfully.';
    } else {
      status.textContent = 'Error uploading video.';
    }
  });
  xhr.send(formData);
});

const topics = [
  { name: 'Topic 1', completed: true },
  { name: 'Topic 2', completed: true },
  { name: 'Topic 3', completed: false },
  { name: 'Topic 4', completed: false },
  { name: 'Topic 5', completed: true },
];
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  
  

topics.forEach(topic => {
  const li = document.createElement('li');
  li.textContent = topic.name;
  if (topic.completed) {
    li.classList.add('completed');
    completedTopics.appendChild(li);
  } else {
    li.classList.add('requested');
    requestedTopics.appendChild(li);
  }
});
