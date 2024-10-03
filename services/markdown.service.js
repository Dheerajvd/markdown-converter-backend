const showdown = require('showdown');
const Prism = require('prismjs');

async function markDownConverter(markdown) {
    try {
        const styles = ` <style> table { border-collapse: collapse; width: 100%; margin: 1em 0; } th, td { border: 1px solid #ccc; padding: 8px; text-align: left; } th { background-color: #f4f4f4; } code[class*="language-"] { background-color: #f0f0f0; padding: 10px; border-radius: 5px; overflow: auto; } </style> `;
        const prismCss = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css">`;
        const converter = new showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            taskLists: true
        });

        let html = converter.makeHtml(markdown);
        html = html.replace(/<\/h[1-3]>/g, (match) => `${match}<hr>`);

        html = html.replace(/<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g, (match, lang, code) => {
            return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang], lang)}</code></pre>`;
        });
        return { status: "success", result: prismCss + styles + html };
    } catch (error) {
        return { status: "failed", message: "Internal Server Error", errorDescription: error }
    }
}

module.exports = { markDownConverter }