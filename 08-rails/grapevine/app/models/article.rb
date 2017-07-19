class Article < ApplicationRecord
  belongs_to :category


  # {
  #   'money': 2,
  #   'family': 1
  # }
  def process_article
    words = self.content.split(' ')

    histogram = {}
    words.each do |word|
      if histogram[word] == nil
        histogram[word] = 1
      else
        histogram[word] += 1
      end
    end
    histogram
  end


end
