const configVariables = require('./config/config')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const markdownRoutes = require('./routes/markdown.route')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', markdownRoutes);
const PORT = configVariables.PORT || 8080
app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});