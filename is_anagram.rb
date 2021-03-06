def is_anagram
  
  def prompt(*args)
      print(*args)
      gets.chomp
  end
  
  answer1 = prompt "Please enter the first string: "

  sorted_str1 = answer1.downcase.split('').sort().join('')

  answer2 = prompt "Please enter the second string: "

  sorted_str2 = answer2.downcase.split('').sort.join('')

  result = sorted_str1 === sorted_str2 # will return true or false.


  begin

  puts "are #{answer1} and #{answer2} anagrams? #{result ? 'Yes' : 'No'}" # if true it will print yes, else it will print no

  rescue RuntimeError # catch error

  puts "Runtime error encountered and rescued."
  end

end

is_anagram
