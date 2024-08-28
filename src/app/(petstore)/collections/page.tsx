import Image from 'next/image';
import Link from 'next/link';

export default function page() {
	return (
		<div className="mt-2 lg:mt-[50px]">
			<div className="space-y-4 lg:space-y-16 mb-8 min-h-screen sm:px-4">
				<div className="space-y-4 lg:space-y-16 max-w-[1920px] mx-auto">
					{/* <div className="flex justify-between gap-2">
						<div className="rounded-xl h-[140px] min-w-[590px] w-full flex-1 shrink-0 relative overflow-hidden border hidden lg:flex">
							dfdf
						</div>
						<div className="scrollbar-hide flex flex-1 items-center gap-2 overflow-x-scroll pb-10 px-4 lg:px-0 -mb-10">
							<Link href="/">
								<div className="w-[147.5px] h-[136px] rounded-xl relative border shrink-0 bg-white overflow-hidden">
									<Image
										src="https://utfs.io/f/e6ea1803-6571-4cd3-9299-fb0b1ad4e7ce-qbxpup.jfif"
										alt="Image 1"
										width={147}
										height={136}
										className="absolute object-cover w-full h-full"
									/>
								</div>
							</Link>
						</div>
					</div> */}
					<div className="flex items-start justify-between gap-4 w-full relative">
						{/* Sidebar */}
						<div className="hidden lg:block">
							<div className="flex flex-col w-[302px] pr-4 sticky top-5 overflow-y-auto h-screen overflow-x-hidden no-scrollbar transition-all ease-in-out duration-300">
								<p className="text-sm font-semibold leading-5 pb-3">Choose a subscription type</p>
								<div className="flex flex-col gap-20 w-full mt-4">
									Accesorios y ropa para perros
									Accesorios y ropa para perros
									Accesorios y ropa para perros
									Accesorios y ropa para perros
									Accesorios y ropa para perros
									Accesorios y ropa para perros
								</div>
							</div>
						</div>

						<div className="flex-1 w-full no-scrollbar min-h-screen relative lg:overflow-y-scroll lg:h-screen">
							<div className="lg:hidden">
								<div className="flex items-center space-x-2 px-4">
									ghghjghjghghjgh
									ghghjghjghghjgh
								</div>
							</div>
							<div className="hidden lg:block">
								<div className="flex items-center justify-between gap-4 pb-2 pr-4">
									<div className="flex flex-row mt-2 lg:mt-0">c</div>
									<div className="text-sm font-medium inline-flex items-center gap-1">
										<span className="shrink-0"> Sort by</span>
									</div>
								</div>
							</div>
							<div className="flex flex-wrap gap-4 justify-center lg:justify-start pb-4">
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
