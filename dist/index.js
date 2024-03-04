import * as core from '@actions/core';
import { appendFileSync, writeFileSync } from 'fs';
import generateFilePath from './helpers/generateFilePath.js';
const ENV_PREFIX = 'ENV_';
(() => {
    try {
        const envKeys = Object.keys(process.env).filter(key => key.startsWith(ENV_PREFIX));
        let envContent = '\n';
        envKeys.forEach(key => {
            const value = process.env[key];
            const inputKey = key.replace(ENV_PREFIX, '');
            envContent += `${inputKey}=${value}\n`;
        });
        const fileName = core.getInput('file-name');
        const directoryPath = core.getInput('directory-path');
        const append = core.getInput('append');
        const filePath = generateFilePath({
            baseDirectoryPath: process.env.GITHUB_WORKSPACE ?? '',
            targetDirectoryPath: directoryPath,
            fileName,
        });
        if (append === 'true') {
            appendFileSync(filePath, envContent);
        }
        else {
            writeFileSync(filePath, envContent);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            core.setFailed(err.message);
        }
    }
})();
//# sourceMappingURL=index.js.map