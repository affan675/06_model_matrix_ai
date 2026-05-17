/* ==============================================
   ModelMatrix – Full Model Dataset
   ============================================== */

const models = [
  // Anthropic
  {
    name: "Claude Opus 4.7",
    provider: "Anthropic",
    intelligence: 96, speed: 72, cost: 88,
    context: "200K tokens",
    release: "Apr 2026",
    priceInput: "$15.00 / 1M tokens",
    url: "https://claude.ai/new"
  },
  {
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    intelligence: 94, speed: 70, cost: 85,
    context: "200K tokens",
    release: "Mar 2026",
    priceInput: "$14.00 / 1M tokens",
    url: "https://claude.ai/new"
  },
  {
    name: "Claude Sonnet 4.6",
    provider: "Anthropic",
    intelligence: 88, speed: 82, cost: 72,
    context: "200K tokens",
    release: "Mar 2026",
    priceInput: "$3.00 / 1M tokens",
    url: "https://claude.ai/new"
  },
  {
    name: "Claude Haiku 4.5",
    provider: "Anthropic",
    intelligence: 78, speed: 94, cost: 45,
    context: "200K tokens",
    release: "Feb 2026",
    priceInput: "$0.25 / 1M tokens",
    url: "https://claude.ai/new"
  },
  // OpenAI
  {
    name: "GPT-5.4",
    provider: "OpenAI",
    intelligence: 94, speed: 78, cost: 82,
    context: "256K tokens",
    release: "May 2026",
    priceInput: "$10.00 / 1M tokens",
    url: "https://chat.openai.com"
  },
  {
    name: "GPT-5.3",
    provider: "OpenAI",
    intelligence: 92, speed: 75, cost: 78,
    context: "256K tokens",
    release: "Apr 2026",
    priceInput: "$8.00 / 1M tokens",
    url: "https://chat.openai.com"
  },
  {
    name: "GPT-5.2",
    provider: "OpenAI",
    intelligence: 91, speed: 73, cost: 75,
    context: "128K tokens",
    release: "Mar 2026",
    priceInput: "$6.00 / 1M tokens",
    url: "https://chat.openai.com"
  },
  {
    name: "GPT-5.4 mini",
    provider: "OpenAI",
    intelligence: 82, speed: 90, cost: 35,
    context: "128K tokens",
    release: "May 2026",
    priceInput: "$0.50 / 1M tokens",
    url: "https://chat.openai.com"
  },
  {
    name: "o3",
    provider: "OpenAI",
    intelligence: 89, speed: 55, cost: 70,
    context: "200K tokens",
    release: "Jan 2026",
    priceInput: "$12.00 / 1M tokens",
    url: "https://chat.openai.com"
  },
  {
    name: "GPT Image 2",
    provider: "OpenAI",
    intelligence: 85, speed: 60, cost: 65,
    context: "N/A (image gen)",
    release: "Apr 2026",
    priceInput: "$0.04 / image",
    url: "https://chat.openai.com"
  },
  // Google
  {
    name: "Gemini 3.1 Pro",
    provider: "Google",
    intelligence: 95, speed: 76, cost: 80,
    context: "1M tokens",
    release: "May 2026",
    priceInput: "$7.00 / 1M tokens",
    url: "https://gemini.google.com"
  },
  {
    name: "Gemini 2.5 Pro",
    provider: "Google",
    intelligence: 92, speed: 72, cost: 75,
    context: "1M tokens",
    release: "Mar 2026",
    priceInput: "$5.00 / 1M tokens",
    url: "https://gemini.google.com"
  },
  {
    name: "Gemini 2.5 Flash",
    provider: "Google",
    intelligence: 80, speed: 91, cost: 30,
    context: "1M tokens",
    release: "Feb 2026",
    priceInput: "$0.30 / 1M tokens",
    url: "https://gemini.google.com"
  },
  {
    name: "Veo 3.1 Preview",
    provider: "Google",
    intelligence: 82, speed: 45, cost: 60,
    context: "video generation",
    release: "Apr 2026",
    priceInput: "$0.10 / sec",
    url: "https://gemini.google.com"
  },
  // DeepSeek
  {
    name: "DeepSeek-V4 Pro",
    provider: "DeepSeek",
    intelligence: 93, speed: 80, cost: 70,
    context: "128K tokens",
    release: "May 2026",
    priceInput: "$2.50 / 1M tokens",
    url: "https://chat.deepseek.com"
  },
  {
    name: "DeepSeek-V4 Flash",
    provider: "DeepSeek",
    intelligence: 85, speed: 92, cost: 25,
    context: "256K tokens",
    release: "May 2026",
    priceInput: "$0.15 / 1M tokens",
    url: "https://chat.deepseek.com"
  },
  {
    name: "DeepSeek-V3.2",
    provider: "DeepSeek",
    intelligence: 90, speed: 77, cost: 58,
    context: "128K tokens",
    release: "Apr 2026",
    priceInput: "$1.00 / 1M tokens",
    url: "https://chat.deepseek.com"
  },
  {
    name: "DeepSeek-R1-0528",
    provider: "DeepSeek",
    intelligence: 91, speed: 65, cost: 68,
    context: "128K tokens",
    release: "May 2026",
    priceInput: "$2.00 / 1M tokens",
    url: "https://chat.deepseek.com"
  },
  // Meta (Llama)
  {
    name: "Llama 4 Behemoth",
    provider: "Meta",
    intelligence: 97, speed: 68, cost: 90,
    context: "128K tokens",
    release: "Apr 2026",
    priceInput: "$8.00 / 1M tokens",
    url: "https://meta.ai"
  },
  {
    name: "Llama 4 Maverick",
    provider: "Meta",
    intelligence: 89, speed: 85, cost: 45,
    context: "128K tokens",
    release: "Mar 2026",
    priceInput: "$1.50 / 1M tokens",
    url: "https://meta.ai"
  },
  {
    name: "Llama 4 Scout",
    provider: "Meta",
    intelligence: 86, speed: 82, cost: 30,
    context: "128K tokens",
    release: "Mar 2026",
    priceInput: "$0.30 / 1M tokens",
    url: "https://meta.ai"
  },
  {
    name: "Llama 3.3 70B",
    provider: "Meta",
    intelligence: 84, speed: 70, cost: 40,
    context: "128K tokens",
    release: "Jan 2026",
    priceInput: "$0.70 / 1M tokens",
    url: "https://meta.ai"
  },
  // Mistral
  {
    name: "Mistral Large 3",
    provider: "Mistral",
    intelligence: 91, speed: 74, cost: 65,
    context: "256K tokens",
    release: "Apr 2026",
    priceInput: "$6.00 / 1M tokens",
    url: "https://chat.mistral.ai"
  },
  {
    name: "Mistral Small 4",
    provider: "Mistral",
    intelligence: 83, speed: 86, cost: 38,
    context: "128K tokens",
    release: "Mar 2026",
    priceInput: "$0.40 / 1M tokens",
    url: "https://chat.mistral.ai"
  },
  {
    name: "Codestral",
    provider: "Mistral",
    intelligence: 88, speed: 78, cost: 50,
    context: "256K tokens",
    release: "Feb 2026",
    priceInput: "$1.00 / 1M tokens",
    url: "https://chat.mistral.ai"
  },
  // Perplexity
  {
    name: "Sonar Pro Search",
    provider: "Perplexity",
    intelligence: 82, speed: 88, cost: 25,
    context: "128K tokens",
    release: "Apr 2026",
    priceInput: "$5.00 / month (Pro)",
    url: "https://perplexity.ai"
  },
  {
    name: "Sonar Reasoning",
    provider: "Perplexity",
    intelligence: 88, speed: 62, cost: 55,
    context: "128K tokens",
    release: "Mar 2026",
    priceInput: "$20.00 / month",
    url: "https://perplexity.ai"
  },
  // xAI
  {
    name: "Grok 4",
    provider: "xAI",
    intelligence: 89, speed: 76, cost: 60,
    context: "128K tokens",
    release: "May 2026",
    priceInput: "$16.00 / month (X Premium+)",
    url: "https://grok.ai"
  },
  // Z.AI (GLM)
  {
    name: "GLM-5.1",
    provider: "Z.AI",
    intelligence: 86, speed: 71, cost: 52,
    context: "128K tokens",
    release: "Apr 2026",
    priceInput: "$2.00 / 1M tokens",
    url: "https://z.ai"
  },
  // NVIDIA
  {
    name: "Nemotron 3 Super 120B",
    provider: "NVIDIA",
    intelligence: 87, speed: 73, cost: 58,
    context: "128K tokens",
    release: "Apr 2026",
    priceInput: "$4.00 / 1M tokens",
    url: "https://build.nvidia.com/nvidia/nemotron-3-super-120b"
  },
  // Cohere
  {
    name: "Command A",
    provider: "Cohere",
    intelligence: 84, speed: 79, cost: 48,
    context: "128K tokens",
    release: "Mar 2026",
    priceInput: "$0.50 / 1M tokens",
    url: "https://cohere.com/chat"
  }
];