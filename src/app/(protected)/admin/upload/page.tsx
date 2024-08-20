import UploadShelterDropzone from './_components/UploadShelterDropzone'
interface ImageShelterPageProps {
	params: {
		shelterId: string,
	},
}
export default function ImageShelterPage( { params }: ImageShelterPageProps) {
  return (
    <UploadShelterDropzone/>
  )
}
