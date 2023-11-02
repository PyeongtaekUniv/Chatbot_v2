export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { input } = req.body;

  // Use the fine-tuned model's API to get a response.
  const response = await fetch(
    "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",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    }
  );

  const data = await response.json();

  res.status(200).json({ output: data.choices[0].text.trim() });
};
