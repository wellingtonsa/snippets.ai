import snippetService from "@/services/snippets.service"
import { useQuery} from "@tanstack/react-query"

export function useGetSnippets() {
  const { data, status } = useQuery({
    queryKey: [`snippets`],
    queryFn: () => snippetService.getSnippets(),
    staleTime: 5000,
    refetchOnWindowFocus: false,
  })

  return { data, status }
}
