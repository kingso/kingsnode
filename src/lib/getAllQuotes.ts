import { quotes, authors, categories } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { db } from "@/lib/db"

export default async function getAllQuotes(): Promise<Quote[]> {
  const results: Quote[] = await db
    .select({
      quote: quotes.quote,
      author: authors.author,
      category: categories.category,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id))

  return results
}
