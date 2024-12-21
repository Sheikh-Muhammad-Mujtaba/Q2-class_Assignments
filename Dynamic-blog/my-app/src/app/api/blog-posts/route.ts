import { BLOG_DATA } from "./data";

export async function GET(request: Request) {
  try {
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
        return new Response(JSON.stringify({ error: "Blog not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    return new Response(JSON.stringify(BLOG_DATA), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
