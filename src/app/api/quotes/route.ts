import getAllQuotes from "@/lib/getAllQuotes"
import { quotes, authors, categories } from "@/lib/db/schema"
export async function GET() {
  const quotes = await getAllQuotes()

  return Response.json(quotes)
}
