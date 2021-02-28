import { useEffect, useState } from "react";
import { toBase64 } from "../helpers/toBase64";

export const useImageUpload = <T extends FileList | undefined>(
  imageUpload: T
) => {
  const [image, setImage] = useState<string | undefined>();

  useEffect(() => {
    if (imageUpload && imageUpload[0]) {
      toBase64(imageUpload[0]).then((base64) => {
        base64 && setImage(base64.toString());
      });
    }
  }, [imageUpload]);

  return image;
};
