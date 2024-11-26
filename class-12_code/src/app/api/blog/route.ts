import { BLOG_DATA } from "./data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); 

  if (id) {
    const blog = BLOG_DATA.find((b) => b.id === parseInt(id, 10)); 
    if (blog) {
      return new Response(JSON.stringify(blog), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ message: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return new Response(JSON.stringify(BLOG_DATA), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
