require('dotenv').config();
const configVariables = {
    PORT: process.env.PORT,
    isLibraryAllowed: process.env.IS_LIBRARY_ALLOWED
}

module.exports = configVariables;