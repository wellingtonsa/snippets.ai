class SnippetController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :snippet_not_found
    def create
    end

    def show
        id = params[:id]

        snippet = Snippet.find(id)
        render json: snippet
    end

    def index
        snippets = Snippet.all
        render json: snippets
    end

    def snippet_not_found
        render json: { error: "Nenhum snippet encontrado!" }, status: :not_found
    end
end
