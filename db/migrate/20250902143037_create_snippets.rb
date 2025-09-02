class CreateSnippets < ActiveRecord::Migration[8.0]
  def change
    create_table :snippets do |t|
      t.text :text
      t.text :summary
      # Add more columns as needed
      t.timestamps # Adds 'created_at' and 'updated_at' columns
    end
  end
end
