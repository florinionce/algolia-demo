
5000.times do
  Post.create(
    title: Faker::StarWars.character,
    body: Faker::StarWars.quote,
    published: [true, false].sample
  )
end