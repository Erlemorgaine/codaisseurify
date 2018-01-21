class Artist < ApplicationRecord

  has_many :songs, dependent: :destroy
  has_many :photos, dependent: :destroy

  validates :name, presence: true
  validates :birth_date, presence: true
  validates :origin, presence: true
  validates :genre, presence: true, length: { maximum: 100 }
  validates :description, length: { maximum: 500 }

  scope :order_by_name_asc, -> { order('name ASC') }
  scope :order_by_name_desc, -> { order('name DESC') }
  scope :order_by_date_created, -> { order(:created_at) }

end
