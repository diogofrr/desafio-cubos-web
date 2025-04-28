import { ResponseData } from '../globals';

interface UploadImageArgs {
  id: string;
  image: File;
}

interface UploadImageResponse extends ResponseData {
  result: null;
}

export { UploadImageArgs, UploadImageResponse };
