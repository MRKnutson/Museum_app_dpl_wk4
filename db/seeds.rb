# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'


e1 = Exhibit.create(area: "Egypt", circa: "1200")
e2 = Exhibit.create(area: "Africa", circa: "1000")

e1.artifacts.create(name: "Sword", discovered:Faker::Date.between(from: '1200-01-01', to: '1200-12-30'), condition: "Fair")
e1.artifacts.create(name: "Pot", discovered:Faker::Date.between(from: '1200-01-01', to: '1200-12-30'), condition: "Perfect")
e2.artifacts.create(name: "Hammer", discovered:Faker::Date.between(from: '1000-01-01', to: '1000-12-30'), condition: "Poor")
e2.artifacts.create(name: "Vase", discovered:Faker::Date.between(from: '1000-01-01', to: '1000-12-30'), condition: "Poor")

Item.create(name: "Deck of Cards", price: 12.95)
Item.create(name: "Replica Sword", price:100.00 )
