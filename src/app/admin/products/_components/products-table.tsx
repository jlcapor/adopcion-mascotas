import React from 'react';

export default function ProductsTable() {
	return (
		<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-4 py-3">
								nombre
							</th>
							<th scope="col" className="px-4 py-3">
								estado
							</th>
							<th scope="col" className="px-4 py-3">
								categoria
							</th>
							<th scope="col" className="px-4 py-3">
								precio
							</th>
							<th scope="col" className="px-4 py-3">
								cantidad
							</th>
							<th scope="col" className="px-4 py-3">
								calificacion
							</th>

							<th scope="col" className="px-4 py-3">
								<span className="sr-only">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</div>
		</div>
	);
}
