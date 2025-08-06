document.getElementById('fakelink-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const originalUrl = document.getElementById('original-url').value;
    const disguiseText = document.getElementById('disguise-text').value;
    
    // 编码 URL，确保特殊字符能正常传递
    const encodedUrl = encodeURIComponent(originalUrl);
    const encodedText = encodeURIComponent(disguiseText);

    // 构建一个指向“彩蛋页面”的静态链接
    const fakelink = `${window.location.origin}/prank.html?url=${encodedUrl}&text=${encodedText}`;

    const resultContainer = document.getElementById('result-container');
    const generatedLink = document.getElementById('generated-link');
    generatedLink.textContent = fakelink;
    resultContainer.style.display = 'block';
});

function copyLink() {
    const linkText = document.getElementById('generated-link').textContent;
    navigator.clipboard.writeText(linkText).then(() => {
        alert('链接已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败: ', err);
    });
}
