class SnippetController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :snippet_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :snippet_invalid
    rescue_from ActionDispatch::Http::Parameters::ParseError, with: :snippet_invalid
    rescue_from ChatGPT::AuthenticationError, with: :gpt_authentication_error
    def create
        text = params[:text]
        p text
        if text.nil? || text.empty?
            snippet_invalid()
        else
            service = ChatGptService.new
            summary = service.summarize(text)
            snippet = Snippet.create(text: text, summary: summary)

            render json: snippet
        end
    end

    def show
        id = params[:id]

        snippet = Snippet.find(id)
        render json: snippet
    end

    def index
        snippets = Snippet.all.order(id: :desc)
        render json: snippets
    end

    def snippet_not_found
        render json: { error: "Nenhum snippet encontrado com esse ID." }, status: :not_found
    end

    def snippet_invalid
        render json: { error: "Texto não providenciado ou mal formatado. Por favor, adicione um texto em formato string para ser resumido." }, status: :not_found
    end


    def gpt_authentication_error
        render json: { error: "Credenciais da OpenAI faltando ou incorreta. Revise-as e tente novamente." }, status: :unauthorized
    end
end
