import * as React from "react"
import type { ProductFile } from "@/types"
import type { UploadFilesOptions } from "uploadthing/types"

import { uploadFiles } from "@/lib/uploadthing"
import { type OurFileRouter } from "@/app/api/uploadthing/core"
import { toast } from "sonner"
import axios from "axios"

interface UseUploadFileProps
  extends Pick<
    UploadFilesOptions<OurFileRouter, keyof OurFileRouter>,
    "headers" | "onUploadBegin" | "onUploadProgress" | "skipPolling"
  > {
  defaultUploadedFiles?: ProductFile[]
}

export function useUploadFile(
  endpoint: keyof OurFileRouter,
  { defaultUploadedFiles = [], ...props }: UseUploadFileProps = {}
) {
  const [uploadedFiles, setUploadedFiles] = React.useState<ProductFile[]>(defaultUploadedFiles)
  const [progresses, setProgresses] = React.useState<Record<string, number>>({})
  const [isUploading, setIsUploading] = React.useState(false)
  const [imageIsDeletin, setImageIsDeleting] = React.useState(false);
  
  async function uploadThings(files: File[]) {
    setIsUploading(true);
    try {
      const res = await uploadFiles(endpoint, {
        ...props,
        files,
        onUploadProgress: ({ file, progress }) => {
          setProgresses((prev) => ({
            ...prev,
            [file]: progress,
          }));
        },
      });
  
  
      const formattedRes: ProductFile[] = res.map((file) => ({
        id: file.key,
        name: file.name,
        url: file.url,
      }));
  
      setUploadedFiles((prev) => (prev ? [...prev, ...formattedRes] : formattedRes));
  
      
  
      return formattedRes; // Asegúrate de que estás retornando los archivos formateados
    } catch (err) {
      toast.error("Error uploading files:");
      return []; // Maneja el error devolviendo un array vacío u otra respuesta manejable
    } finally {
      setProgresses({});
      setIsUploading(false);
    }
  }

  const deleteFile = async (image: string) => {
    setImageIsDeleting(true);
    const imageKey = image.substring(image.lastIndexOf('/') + 1);

    try {
      const response = await axios.post('/api/uploadthing/delete', { imageKey });
      
      if (response.data.success) {
        setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== image));
      } else {
        toast.error("Error deleting file.");
      }
    } catch (err) {
      toast.error("Error deleting file.");
    } finally {
      setImageIsDeleting(false);
    }
  };

  return {
    uploadedFiles,
    progresses,
    uploadFiles: uploadThings,
    isUploading,
    deleteFile,
    imageIsDeletin
  }
}
