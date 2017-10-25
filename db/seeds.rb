# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(
  username: "Charlie",
  password: "waytres124",
  img_url: "https://uproxx.files.wordpress.com/2015/11/charlie-sandwich1.jpg?quality=100&w=650"
)
User.create!(
  username: "Mac",
  password: "2badass4u",
  img_url: "http://jivetshirts.com/wp-content/uploads/2013/03/beer-deer-sunny-t-shirt1.png"
)
User.create!(
  username: "Frank",
  password: "magnumdong",
  img_url: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzA0XFxcLzI0MTExNTA0XFxcL0ZyYW5rLVJleW5vbGRzLVBJQy5wbmdcIixcIndpZHRoXCI6NjQ3LFwiaGVpZ2h0XCI6MzQwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz92PTRcIn0iLCJoYXNoIjoiYTYwNTcyNDk1YTA0OGE0OTAzNjgxOTNjNjEwNzg4YjExYzM1ODA4NiJ9/frank-reynolds-pic.png"
)

Shop.destroy_all
Shop.create!(
  shopname: "Greenman Productions",
  img_profile: "http://vignette1.wikia.nocookie.net/itsalwayssunny/images/8/81/Greeman.jpg/revision/latest?cb=20100221015952",
  img_banner: "http://i.imgur.com/gWq7eNS.png",
  description: "Green Man is saving your life right now, bro. Just go with the flow.",
  sales: 0,
  location: "Philadelphia, PA",
  owner_id: User.find_by(username: "Charlie").id
)

# Listing.destroy_all
# Listing.create!(
#   title: "Kitten Mittens",
#   description: "Great for cats that are one legged, fat, skinny, or an in-between"
#   shop_id: Shop.find_by(shopname: "Greenman Productions"),
#   owner_id: User.find_by(username: "Charlie"
# )
