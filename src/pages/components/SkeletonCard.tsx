import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
	return (
		<Skeleton className=" w-100 rounded-xl" />
		// 	<div className="space-y-2">
		// 		<Skeleton className="h-4 w-[250px]" />
		// 		<Skeleton className="h-4 w-[200px]" />
		// 	</div>
		// </div>
	)
}
export default SkeletonCard
