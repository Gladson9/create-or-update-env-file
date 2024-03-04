import path from 'path';
export default ({ baseDirectoryPath, targetDirectoryPath, fileName, }) => {
    if (targetDirectoryPath.startsWith('./')) {
        return path.join(baseDirectoryPath, targetDirectoryPath.slice(2), fileName);
    }
    return path.join(baseDirectoryPath, targetDirectoryPath, fileName);
};
//# sourceMappingURL=generateFilePath.js.map