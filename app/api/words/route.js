import { wordPairs } from "../../assets/mock/mockData";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  if (!category || !wordPairs[category]) {
    return new Response(JSON.stringify({ error: 'Invalid or missing category' }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(wordPairs[category]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
