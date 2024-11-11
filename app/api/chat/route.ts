import OpenAI from "openai";

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      stream: true,
      messages: [
        {
          role: "system",
          content: `You are AI Iyaad...` // Your existing system prompt
        },
        ...messages
      ]
    })

    // Create a new TransformStream
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
    const stream = new TransformStream()
    const writer = stream.writable.getWriter()

    // Handle the stream
    for await (const chunk of response) {
      const content = chunk.choices[0]?.delta?.content || ''
      await writer.write(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
    }
    await writer.close()

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error(error)
    return new Response('Error', { status: 500 })
  }
}