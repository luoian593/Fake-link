document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const originalUrl = urlParams.get('url');
    const disguiseText = urlParams.get('text');
    
    if (originalUrl && disguiseText) {
        document.getElementById('disguise-display').textContent = `你以为的链接是：“${decodeURIComponent(disguiseText)}”，但其实是...`;
        
        let countdown = 3;
        const countdownElement = document.querySelector('.redirect-countdown');

        const timer = setInterval(() => {
            countdown--;
            countdownElement.textContent = `${countdown}秒后自动跳转`;
            if (countdown <= 0) {
                clearInterval(timer);
                window.location.href = decodeURIComponent(originalUrl);
            }
        }, 1000);

    } else {
        // 如果链接无效，可以跳转回首页或显示错误信息
        window.location.href = '/';
    }
});
