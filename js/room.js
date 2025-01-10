let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;
let activeChatContainer = false;

const toggleDisplay = (element, isActive) => {
  element.style.display = isActive ? 'none' : 'block';
};

memberButton.addEventListener('click', () => {
  toggleDisplay(memberContainer, activeMemberContainer);
  activeMemberContainer = !activeMemberContainer;
});

chatButton.addEventListener('click', () => {
  toggleDisplay(chatContainer, activeChatContainer);
  activeChatContainer = !activeChatContainer;
});

let displayFrame = document.getElementById('stream__box');
let videoFrames = document.getElementsByClassName('video__container');
let userIdInDisplayFrame = null;

let expandVideoFrame = (e) => {
  let child = displayFrame.children[0];
  if (child) {
    document.getElementById('streams__container').appendChild(child);
  }

  displayFrame.style.display = 'block';
  displayFrame.appendChild(e.currentTarget);
  userIdInDisplayFrame = e.currentTarget.id;
};

// Add event listeners to video frames to call expandVideoFrame
for (let i = 0; i < videoFrames.length; i++) {
  videoFrames[i].addEventListener('click', expandVideoFrame);
}
