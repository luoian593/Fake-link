// 在这里填入你的GitHub用户名和仓库名
const GITHUB_USERNAME = 'luoian593';
const REPO_NAME = 'Fake-link';

document。getElementById('fakelink-form').addEventListener('submit', function(e) {
    // 阻止表单提交的默认行为，防止页面刷新
    e.preventDefault();

    const originalUrl = document.getElementById('original-url').value;
    const disguiseText = document.getElementById('disguise-text').value;
    
    // 编码 URL 和文本，确保特殊字符能正常传递
    const encodedUrl = encodeURIComponent(originalUrl);
    const encodedText = encodeURIComponent(disguiseText);

    // 构建完整的 GitHub Pages 链接
    const fakelink = `https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/prank.html?url=${encodedUrl}&text=${encodedText}`;
    
    // 显示结果
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
        alert('复制失败，请手动复制。');
    });
}
