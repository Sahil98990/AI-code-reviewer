export default async function handler(req, res) {
  const { code } = req.body;

  const response = await fetch("GEMINI_API_URL", {
    method: "POST",
    body: JSON.stringify({ code })
  });

  const data = await response.json();
  res.status(200).json(data);
}