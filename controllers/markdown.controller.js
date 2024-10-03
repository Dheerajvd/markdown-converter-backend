const markDownService = require('../services/markdown.service')

const convertMarkdown = async (req, res) => {
    const { markdown } = req.body;
    if (markdown) {
        const htmlResp = await markDownService.markDownConverter(markdown);
        if (htmlResp.status === 'success') {
            res.json({ status: 200, message: 'Markdown received', markdown, html: htmlResp.result });
        } else {
            res.json({ status: 500, message: 'Internal Server Error', errorDescription: htmlResp.errorDescription });
        }
    } else {
        res.json({ message: 'Bad Request', status: 400 });
    }
};

module.exports = {
    convertMarkdown
}