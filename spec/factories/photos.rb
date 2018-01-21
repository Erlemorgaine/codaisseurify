FactoryBot.define do
  factory :photo do
    image         { File.open(File.join(Rails.root, '/spec/features/cloud.jpg')) }
    artist        { build(:artist) }
  end
end
