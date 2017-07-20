class Article < ApplicationRecord
  belongs_to :category


  # {
  #   'money': 2,
  #   'family': 1
  # }
  def process_article
    stop_words = ['the', 'for', 'of', 'at']
    # ["make", "lots", "of", "money", "at", "home.", "money", "for", "the", "whole", "family"]
    words = self.content.split(' ')

    cleaned_words = []

    words.each do |word| # make
      if stop_words.include?(word)
        # is a stop word
      else
        # not a stop word
        cleaned_words.push(word)
      end
    end

    histogram = {}
    cleaned_words.each do |word|
      if histogram[word] == nil
        histogram[word] = 1
      else
        histogram[word] += 1
      end
    end
    histogram
  end


end
