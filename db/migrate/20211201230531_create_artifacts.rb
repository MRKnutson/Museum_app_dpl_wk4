class CreateArtifacts < ActiveRecord::Migration[6.1]
  def change
    create_table :artifacts do |t|
      t.string :name
      t.date :discovered
      t.string :condition
      t.belongs_to :exhibit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
