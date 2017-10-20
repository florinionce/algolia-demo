class Post < ApplicationRecord
  include AlgoliaSearch

  algoliasearch do
    attribute :title, :body
  end
end
