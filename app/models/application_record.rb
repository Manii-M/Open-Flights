class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  has_many :reviews
end
