import { Skeleton } from "@/components/ui/skeleton";

interface ProductsTableSkeletonProps {
  columnCount: number;
  rowCount?: number;
  cellWidths?: string[];
  withPagination?: boolean;
}

export function DataTableSkeleton({
  columnCount,
  rowCount = 10,
  cellWidths = ["auto"],
  withPagination = true,
}: ProductsTableSkeletonProps) {
  return (
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {Array.from({ length: columnCount }).map((_, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 py-3"
                  style={{ width: cellWidths[index] ?? "auto" }}
                >
                  <Skeleton className="h-6 w-full" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rowCount }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: columnCount }).map((_, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3"
                    style={{ width: cellWidths[cellIndex] ?? "auto" }}
                  >
                    <Skeleton className="h-6 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {withPagination && (
        <div className="mt-5 flex w-full justify-center">
          <div className="flex items-center gap-4">
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-7 w-[4.5rem]" />
          </div>
        </div>
      )}
    </div>
  );
}
