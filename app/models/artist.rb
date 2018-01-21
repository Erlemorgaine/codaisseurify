class Artist < ApplicationRecord

  has_many :songs, dependent: :destroy
  has_many :photos, dependent: :destroy

  validates :name, presence: true
  validates :birth_date, presence: true
  validates :origin, presence: true
  validates :genre, presence: true, length: { maximum: 100 }
  validates :description, length: { maximum: 500 }

  # scope :order_by_name_asc, -> { order(name: :asc) }
  # scope :order_by_name_desc, -> { order(name: :desc) }
  # scope :order_by_created_at_asc, -> { order(created_at: :asc) }
  # scope :order_by_created_at_desc, -> { order(created_at: :desc) }

end
