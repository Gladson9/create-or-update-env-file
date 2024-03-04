import path from 'path';

export default ({
  baseDirectoryPath,
  targetDirectoryPath,
  fileName,
}: {
  baseDirectoryPath: string;
  targetDirectoryPath: string;
  fileName: string;
}) => {
  if (targetDirectoryPath.startsWith('./')) {
    return path.join(baseDirectoryPath, targetDirectoryPath.slice(2), fileName);
  }
  return path.join(baseDirectoryPath, targetDirectoryPath, fileName);
};
