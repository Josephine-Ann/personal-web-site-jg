class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name
      t.string :firstspanish
      t.string :firstenglish
      t.string :secondspanish
      t.string :secondenglish
      t.string :thirdspanish
      t.string :thirdenglish
      t.string :fourthspanish
      t.string :fourthenglish
      t.string :fifthspanish
      t.string :fifthenglish
      t.string :sixthspanish
      t.string :sixthenglish
      t.string :seventhspanish
      t.string :seventhenglish
      t.string :eighthspanish
      t.string :eighthenglish
      t.string :ninthspanish
      t.string :ninthenglish

      t.timestamps
    end
  end
end
