require 'rails_helper'

RSpec.describe Snippet, type: :model do
  it 'should create a valid snippet' do
    snippet = build(:snippet)
    expect(snippet).to be_valid
  end

  it 'should not validate a snippet without text' do
    snippet = build(:snippet, text: nil)
    expect(snippet).to_not be_valid
  end

  it 'should validate a snippet without summary' do
    snippet = build(:snippet, summary: nil)
    expect(snippet).to be_valid
  end
end
