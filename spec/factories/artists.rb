FactoryBot.define do
  factory :artist do
    name          { Faker::Artist.name }
    birth_date    { Faker::Time.between(100.years.ago, Date.today, :all)}
    origin        { Faker::Address.city }
    genre         { Faker::Genre }
    description   { Faker::Lorem.sentence(40)}
    is_band       true
  end
end
