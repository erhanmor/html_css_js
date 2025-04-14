document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-container');
    const title = document.querySelector('.title');

    // Add hover effect to video container
    videoContainer.addEventListener('mouseenter', () => {
        videoContainer.style.transform = 'scale(1.02)';
        videoContainer.style.transition = 'transform 0.3s ease';
    });

    videoContainer.addEventListener('mouseleave', () => {
        videoContainer.style.transform = 'scale(1)';
    });

    // Add pulse animation to title
    title.addEventListener('mouseenter', () => {
        title.style.animation = 'pulse 0.5s ease infinite';
    });

    title.addEventListener('mouseleave', () => {
        title.style.animation = 'none';
    });

    // Add pulse animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});