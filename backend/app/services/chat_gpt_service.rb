class ChatGptService
  def initialize
    @client = ChatGPT::Client.new
  end

  def summarize(text)
    response = @client.chat([
      { role: "user", content: "Olá GhatGPT. Por favor, crie uma versão resumida do texto a seguir, mantendo os pontos principais do texto, e em no máximo 2 parágrafos: #{text}" }
    ])

    response.dig("choices", 0, "message", "content")
  end
end
