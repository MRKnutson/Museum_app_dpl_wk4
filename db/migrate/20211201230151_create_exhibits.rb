class CreateExhibits < ActiveRecord::Migration[6.1]
  def change
    create_table :exhibits do |t|
      t.string :area
      t.string :circa

      t.timestamps
    end
  end
end
