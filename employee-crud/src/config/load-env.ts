const dotenv = require('dotenv');
// Set the env file
const config = dotenv.config({
    path: `src/development.env`,
});

if (config.error) {
    throw config.error;
}

export default config;