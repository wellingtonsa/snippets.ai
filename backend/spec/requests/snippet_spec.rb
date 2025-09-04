require 'rails_helper'

RSpec.describe SnippetController, type: :request do
  describe "GET /snippets" do
    it "should find and return all snippets", focus: true do
      get '/snippets'

      body = JSON.parse(response.body)
      expect(body).to be_an_instance_of(Array)
    end
  end

  describe "GET /snippets/:id" do
    it "should find the snippet by ID", focus: true do
      snippet = Snippet.create(text: "Text", summary: "Summary")

      get "/snippets/#{snippet.id}"
      expect(response.body).to be_truthy

      body = JSON.parse(response.body)

      expect(body.dig("id")).to eq(snippet.id)
    end

     it "should return 'Nenhum snippet encontrado com esse ID.' if there is no snippet with the ID ", focus: true do
      snippet = Snippet.create(text: "Text", summary: "Summary")

      get "/snippets/0"

      expect(response.body).to be_truthy

      body = JSON.parse(response.body)

      expect(body.dig("error")).to eq('Nenhum snippet encontrado com esse ID.')
     end
  end

   describe "POST /snippets", focus: true do
    it "should generate a summary based on the text provided and return id, summary, and text information" do
      post "/snippets", params: { text: "Text to summarize" }

      expect(response.body).to be_truthy

      body = JSON.parse(response.body)

      expect(body.dig("id")).to be_truthy
      expect(body.dig("text")).to be_truthy
      expect(body.dig("summary")).to be_truthy
    end

    it "should return 'Texto não providenciado ou mal formatado. Por favor, adicione um texto em formato string para ser resumido.' if there is no snippet with the ID ", focus: true do
      snippet = Snippet.create(text: "Text", summary: "Summary")

      post "/snippets", params: {}

      expect(response.body).to be_truthy

      body = JSON.parse(response.body)

      expect(body.dig("error")).to eq('Texto não providenciado ou mal formatado. Por favor, adicione um texto em formato string para ser resumido.')
     end
   end
end
