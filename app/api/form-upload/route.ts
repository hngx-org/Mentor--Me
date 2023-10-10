/* eslint-disable import/prefer-default-export */
const baseUrl = "https://backend.getlinked.ai";

export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch(`${baseUrl}/hackathon/contact-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body.email,
      message: body.message,
      first_name: body.name,
      phone_number: body.phone,
    }),
  });
  const data = await res.json();

  return Response.json(data);
}
