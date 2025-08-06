document。getElementById('fakelink-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const originalUrl = document.getElementById('original-url').value;
    const disguiseText = document.getElementById('disguise-text').value;
    
    const encodedUrl = encodeURIComponent(originalUrl);
    const encodedText = encodeURIComponent(disguiseText);

    // ---- 关键修改部分 ----
    // 获取当前页面的 URL 路径，通常是 /你的仓库名/
    const pathSegments = window.location.pathname.split('/');
    const repoName = pathSegments[1]; // 获取仓库名
    
    // 构建正确的 GitHub Pages 链接
    const fakelink = `${window.location.origin}/${repoName}/prank.html?url=${encodedUrl}&text=${encodedText}`;
    
    const resultContainer = document.getElementById('result-container');
    const generatedLink = document.getElementById('generated-link');
    generatedLink.textContent = fakelink;
    resultContainer.style.display = 'block';
});
