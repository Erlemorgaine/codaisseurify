class Artist < ApplicationRecord

  validates :name, presence: true
  validates :birth_date, presence: true
  validates :origin, presence: true
  validates :genre, presence: true, length: { maximum: 100 }
  validates :description, length: { maximum: 500 }

  has_many :songs, dependent: :destroy
  has_many :photos, dependent: :destroy

end
