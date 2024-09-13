interface PetTypeLayoutProps {
	children: React.ReactNode,
}

export default function PetTypeLayout({ children }: PetTypeLayoutProps) {
	return (
		<div className="border-b">
			<div className="flex flex-col lg:flex-row">
				<aside className="border-r p-6 w-full lg:w-72 md:min-w-[16rem]">
					<h2 className="text-xl font-bold mb-4">Filtros</h2>
					<div className="block lg:hidden">
						<div className="grid gap-6">
							<div className="flex items-center space-x-2">9999999</div>
						</div>
					</div>

					<div className="hidden lg:block p-2">
						<div className="grid grid-cols-2 md:grid-cols-1 gap-6">
							{/* sidebar */}
							<div>
								<div className="mb-2">
									<p className="font-bold text-base">Tipo mascota</p>
								</div>
								<ul className="space-y-2">
									<li>
										<label className="flex items-center">
											<input
												type="checkbox"
												className="form-checkbox text-clear h-5 w-5 border-2 border-gray-400 rounded"
											/>
											<span className="font-poppins text-base text-gray-600 ml-2">
												Pinchanga libre
											</span>
										</label>
									</li>
									<li>
										<label className="flex items-center">
											<input
												type="checkbox"
												className="form-checkbox text-clear h-5 w-5 border-2 border-gray-400 rounded"
											/>
											<span className="font-poppins text-base text-gray-600 ml-2">
												Versus de equipos
											</span>
										</label>
									</li>
								</ul>
							</div>
							<div>
								<div className="mb-2">
									<p className="font-bold text-base">Tipo mascota</p>
								</div>
								<ul className="space-y-2">
									<li>
										<label className="flex items-center">
											<input
												type="checkbox"
												className="form-checkbox text-clear h-5 w-5 border-2 border-gray-400 rounded"
											/>
											<span className="font-poppins text-base text-gray-600 ml-2">
												Pinchanga libre
											</span>
										</label>
									</li>
									<li>
										<label className="flex items-center">
											<input
												type="checkbox"
												className="form-checkbox text-clear h-5 w-5 border-2 border-gray-400 rounded"
											/>
											<span className="font-poppins text-base text-gray-600 ml-2">
												Versus de equipos
											</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</aside>

				<div className="flex-1 p-6">{children}</div>
			</div>
		</div>
	);
}
