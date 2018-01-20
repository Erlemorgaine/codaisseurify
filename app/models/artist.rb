class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy

  validates :name, presence: true
  validates :birth_date, presence: true
  validates :origin, presence: true
  validates :genre, presence: true, length: { maximum: 100 }
  validates :description, length: { maximum: 500 }
  #validates :is_band, presence: true

end
