import snippetService from "@/services/snippets.service"
import { useQuery, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
    },
  },
})

export function useGetSnippets() {
  const { data, status } = useQuery({
    queryKey: [`snippets`],
    queryFn: () => snippetService.getSnippets(),
    staleTime: 5000,
    refetchOnWindowFocus: false,
  })

  return { data, status }
}

export async function useGenerateSnippet(text: string) {
  return await queryClient.fetchQuery({
    queryKey: [`generate-snippet`],
    queryFn: () => snippetService.generateSnippet({ text }),
  })
}
