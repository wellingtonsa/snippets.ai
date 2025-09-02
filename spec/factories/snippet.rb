FactoryBot.define do
    factory :snippet do
        text { Faker::Lorem.paragraph(sentence_count: 10) }
        summary { Faker::Lorem.paragraph(sentence_count: 1) }
    end
end
