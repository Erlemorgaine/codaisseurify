FactoryBot.define do
  factory :artist do
    name          { Faker::Artist.name }
    birth_date    { Faker::Time.between(100.years.ago, Date.today, :all)}
    origin        { Faker::Address.city }
    genre         { Faker::Lorem.words(2) }
    description   { Faker::Lorem.sentence(40)}
    is_band       true
  end
end
