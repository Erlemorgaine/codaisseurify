Photo.destroy_all
Song.destroy_all
Artist.destroy_all

artist1 = Artist.create!(name: "Lianne la Havas", birth_date: DateTime.new(1989,8,23), origin: "London, England", genre: "Soul, Folk, R&B", description: "\"Lianne Charlotte Barnes, known professionally as Lianne La Havas, is a British singer, songwriter and multi-instrumentalist. (...) Her debut studio album, Is Your Love Big Enough? (2012), was released to positive reviews from critics and earned her a nomination for the BBC's Sound of 2012 poll and awards for the iTunes Album of The Year 2012.\" Source: Wikipedia", is_band: false)

artist2 = Artist.create!(name: "Kaiser Chiefs", birth_date: DateTime.new(2003,5), origin: "Leeds, England", genre: "Indie rock, Post-punk revival, New wave", description: "\"Kaiser Chiefs are an English indie rock band from Leeds. (...) Primarily inspired by new wave and punk rock music of the late 1970s and 1980s, the band have released six original studio albums. Their album Employment enjoyed critical and commercial success with over three million copies sold.\" Source: Wikipedia", is_band: true)

artist3 = Artist.create!(name: "KT Tunstall", birth_date: DateTime.new(1975,6,23), origin: "Edinburgh, Scotland", genre: "Folk rock, Pop rock, Indie rock", description: "\"Kate Victoria Tunstall, known by her stage name KT Tunstall, is a Scottish singer-songwriter and musician. (...) Her debut album was named Eye to the Telescope - the name was inspired by her childhood experiences at her adoptive father's physics laboratory at University of St Andrews. Released in 2004, this album launched her music career. (...) She has released five albums internationally.\" Source: Wikipedia", is_band: false)

song1 = Song.create!(name: "Au cinema", year: 2012, album: "Is Your Love Big Enough?", artist: artist1)
song2 = Song.create!(name: "Liar", year: 2012, album: "Is Your Love Big Enough?", artist: artist1)
song3 = Song.create!(name: "Is your love big enough?", year: 2012, album: "Is Your Love Big Enough?", artist: artist1)

song4 = Song.create!(name: "I predict a riot", year: 2004, album: "Employment", artist: artist2)
song5 = Song.create!(name: "Ruby", year: 2007, album: "Yours Truly, Angry Mob", artist: artist2)
song6 = Song.create!(name: "My life", year: 2014, album: "Education, Education, Education & War", artist: artist2)

song7 = Song.create!(name: "Change", year: 2006, album: "Acoustic Extravaganza", artist: artist3)
song8 = Song.create!(name: "Black horse and a cherry tree", year: 2004, album: "Eye to the Telescope", artist: artist3)
song9 = Song.create!(name: "Invisible empire", year: 2013, album: "Invisible Empire // Crescent Moon", artist: artist3)

photo1 = Photo.create!(remote_image_url: "http://res.cloudinary.com/dklg9by0h/image/upload/v1516450211/codaisseurify/lianne_la_havas.jpg", artist: artist1)
photo1 = Photo.create!(remote_image_url: "http://res.cloudinary.com/dklg9by0h/image/upload/v1516450212/codaisseurify/kaiser_chiefs.jpg", artist: artist2)
photo1 = Photo.create!(remote_image_url: "http://res.cloudinary.com/dklg9by0h/image/upload/v1516450211/codaisseurify/kt_tunstall.jpg", artist: artist3)
