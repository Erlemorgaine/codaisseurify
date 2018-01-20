require 'rails_helper'

RSpec.describe Artist, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:birth_date) }
    it { is_expected.to validate_presence_of(:origin) }
    it { is_expected.to validate_presence_of(:genre) }
    it { is_expected.to validate_length_of(:description).is_at_most(500) }
  end
end
