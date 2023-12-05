document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('.language-markdown.highlighter-rouge');
    codeBlocks.forEach(function (codeBlock) {
      const container = document.createElement('div');
      container.classList.add('code-container');
      
      const copyButton = document.createElement('span');
      copyButton.classList.add('copy-button');
      copyButton.innerText = 'Copy';
      copyButton.addEventListener('click', function () {
        copyToClipboard(codeBlock.innerText, copyButton);
      });
      container.appendChild(codeBlock.cloneNode(true)); // Clone the code block
      container.appendChild(copyButton);
      codeBlock.parentNode.replaceChild(container, codeBlock);
    });
    function copyToClipboard(text, copyButton) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      copyButton.innerText = 'Copied!';
      setTimeout(function () {
        copyButton.innerText = 'Copy';
      }, 1000);
    }
  });
