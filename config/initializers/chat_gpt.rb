require "chatgpt"

ChatGPT.configure do |config|
  config.api_key = ENV["OPENAI_API_KEY"]
  config.api_version = "v1"
  config.default_engine = "gpt-3.5-turbo"
  config.request_timeout = 30
  config.max_retries = 3
  config.default_parameters = {
    max_tokens: 1200
  }
end
