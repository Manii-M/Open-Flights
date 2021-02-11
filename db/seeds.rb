# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
airlines = Airline.create([
    {
        name: "Air India",
        image_url: ""
    },
    {
        name: "Air Asia",
        image_url: ""
    },
    {
        name: "Air Bhutan",
        image_url: ""
    },
    {
        name: "Air Singapore",
        image_url: ""
    },

])

reviews = Review.create([
    {
        title: "Amazing",
        description: "I had a lovely time",
        score: 5,
        airline: airlines.first
    },
    {
        title: "not a good experience",
        description: "flight attendants were not good",
        score: 2,
        airline: airlines.first
    }
])