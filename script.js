// Data stored in memory for the demo
const skillSwapPosts = [];
const projectPosts = [];
const generalChatMessages = [];
const techTalkChatMessages = [];

// Helper function to render a post
function renderPost(containerId, post) {
    const container = document.getElementById(containerId);
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    if (containerId === 'skill-list') {
        postElement.innerHTML = `
            <p><strong>Offer:</strong> ${post.teach} | <strong>Seeking:</strong> ${post.learn}</p>
        `;
    } else if (containerId === 'project-list') {
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Skills Needed:</strong> ${post.skills}</p>
        `;
    }

    container.prepend(postElement); // Add to the top of the list
}

// Function to post a skill swap
function postSkillSwap() {
    const teachSkill = document.getElementById('teach-skill').value;
    const learnSkill = document.getElementById('learn-skill').value;

    if (teachSkill && learnSkill) {
        const newPost = { teach: teachSkill, learn: learnSkill };
        skillSwapPosts.push(newPost);
        renderPost('skill-list', newPost);
        document.getElementById('teach-skill').value = '';
        document.getElementById('learn-skill').value = '';
    }
}

// Function to post a project
function postProject() {
    const title = document.getElementById('project-title').value;
    const skills = document.getElementById('project-skills').value;

    if (title && skills) {
        const newPost = { title, skills };
        projectPosts.push(newPost);
        renderPost('project-list', newPost);
        document.getElementById('project-title').value = '';
        document.getElementById('project-skills').value = '';
    }
}

// Chat functionality
function showChat(chatId) {
    const chatWindows = document.querySelectorAll('.chat-window');
    chatWindows.forEach(window => window.style.display = 'none');
    document.getElementById(chatId + '-chat').style.display = 'flex';

    const chatTabs = document.querySelectorAll('.chat-tab');
    chatTabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`button[onclick="showChat('${chatId}')"]`).classList.add('active');
}

function renderChatMessage(chatId, message) {
    const messagesContainer = document.querySelector(`#${chatId}-chat .chat-messages`);
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
}

// Attach event listeners for sending messages
document.querySelectorAll('.chat-input-area .send-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const input = event.target.previousElementSibling;
        const message = input.value.trim();
        if (message) {
            const currentChatId = document.querySelector('.chat-tab.active').textContent.toLowerCase().replace(' ', '-').replace('chat', '');
            if (currentChatId === 'general-') {
                generalChatMessages.push(message);
                renderChatMessage('general', message);
            } else if (currentChatId === 'tech-talk-') {
                techTalkChatMessages.push(message);
                renderChatMessage('tech-talk', message);
            }
            input.value = '';
        }
    });
});