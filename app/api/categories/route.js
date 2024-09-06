import { categories } from "../../assets/mock/mockData";
export async function GET(req) {
  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
