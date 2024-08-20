"use client";
import React from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import axios from 'axios'
import { toast } from "@/components/ui/use-toast";
import { Icons } from '@/components/shared/Icons';
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";




function ImagePreview({ dataUrl }: { readonly dataUrl: string }) {
  return (
    <div className="col-span-6 sm:col-span-4 shadow">
    <Image
      src={dataUrl}
      alt="Imagen del refugio"
      width="1000"
      height="100"
       className="object-cover w-full h-[300px]"
    />
  </div>
  );
}



export default function UploadShelterDropzone() {
  const [imageData, setImageData] = React.useState("");
  const [imageIsDeletin, setImageIsDeleting] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const saveImageUrl = async  (imageUrl: string) => {
    
  }

  const handleImageDelete = (image: string) => {
    setImageIsDeleting(true);
    
    const imageKey = image.substring(image.lastIndexOf('/') + 1)
    axios.post('/api/uploadthing/delete', {imageKey}).then((res)=>{
      if(res.data.success){
        setImageData('');
        toast({
          variant:'success',
          description:"Image removed.",
        })
      }
    }).catch(()=>{
      toast({
        variant:'destructive',
        description:"Something went wrong",
      })
    }).finally(()=> {
      setImageIsDeleting(false);
    })
  }

  const imagePreview = imageData ? <ImagePreview dataUrl={imageData} /> : <p>No image selected</p>;
  
  return (
    <div className="h-fit flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:max-w-lg w-full p-5 rounded-xl">
        <div className="text-center">
          <h2 className="mt-5 text-2xl font-bold">
            Subir Imagen del Refugio
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          <div className="grid grid-cols-1 space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-bold tracking-wide">
                Imagen del refugio
              </Label>
              {imageData && (
                <Button onClick={()=> handleImageDelete(imageData)} type="button" size='icon' variant='ghost' >
                {imageIsDeletin ? <Icons.spinner className="size-4 animate-spin" aria-hidden="true" /> : <XCircle/>}
              </Button>
              )}
            </div>
            {imageData ? (
              <>
                {imagePreview}
              </>
            ) : (
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={async(res) => {
                  console.log(res)
                  const imageUrl = res[0]?.url ?? "";
                  setImageData(imageUrl);
                  await saveImageUrl(imageUrl);
                }}
                onUploadError={(error) => {
                  window.alert(`${error?.message}`);
                }}
                className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
              />
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}
