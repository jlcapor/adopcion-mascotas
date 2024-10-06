export interface SearchParams {
	search?: string,
	page?: number,
}

export function parseSearchParams(params: Record<string, string | string[] | undefined>): SearchParams {
	return {
		search: typeof params.search === 'string' ? params.search : undefined,
	};
}

export function stringifySearchParams(params: SearchParams): string {
	const urlParams = new URLSearchParams();
	Object.entries(params).forEach(([ key, value ]) => {
		if (value !== undefined) {
			urlParams.append(key, value);
		}
	});
	return urlParams.toString();
}
