import { api } from "@/lib/axios"
import { Response } from "@/types/axios.types"
import { Snippet } from "@/types/snippets.types"

class SnippetsService {
  async getSnippets(): Promise<Response<Snippet[]>> {
    try {
      const res = await api.get("/snippets")
      return {
        success: true,
        data: res.data,
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (data: any) {
      return {
        success: false,
        data
      }
    }
  }
}

export default new SnippetsService()