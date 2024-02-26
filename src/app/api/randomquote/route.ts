import getRandomQuote from "@/lib/getRandomQuote"

export async function GET(request: Request) {
  const quote = await getRandomQuote()

  return Response.json(quote)
}
