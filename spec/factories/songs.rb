FactoryBot.define do
  factory :song do
    name          { Faker::HarryPotter.location }
    year          1990
    album         { Faker::HarryPotter.quote}
    artist        { build(:artist) }
  end
end
