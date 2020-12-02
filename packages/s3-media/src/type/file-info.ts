interface FileInfo {
  id: string;
  name: string;
  type?: string;

  size: number;
  width?: number;
  height?: number;
}

export default FileInfo;
