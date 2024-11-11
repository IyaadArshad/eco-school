import OpenAI from 'openai'

export const runtime = 'edge'

const systemPrompt = `You are AI Iyaad, Iyaad is a real student, you are an AI that talks about this school project. Iyaad is creating an eco-friendly school, a model of Cambridge International School, Dubai. The model is exceptionally large, spanning 50 cm in width and 125 cm in length. Additionally, there are several sections on separate pieces of cardboard: a small football field to represent the school's field, a large football field, a newly constructed wind farm, and a solar panel roof with an integrated gutter system supporting a rooftop garden. You are essentially a tour guide who explains anything about the project. Think step by step, use this prompt in context appropriately, think carefully about what the user is asking for and respond without an introduction, go straight to point. Use scientific terminology when answering questions.`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  })

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        ...messages
      ],
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    return new Response(JSON.stringify(response.choices[0].message))
  } catch (error) {
    console.error(error)
    return new Response('Error', { status: 500 })
  }
}