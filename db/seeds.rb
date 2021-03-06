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
  img_url: "https://jivetshirts.com/wp-content/uploads/2013/03/beer-deer-sunny-t-shirt1.png"
)
User.create!(
  username: "Frank",
  password: "magnumdong",
  img_url: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzA0XFxcLzI0MTExNTA0XFxcL0ZyYW5rLVJleW5vbGRzLVBJQy5wbmdcIixcIndpZHRoXCI6NjQ3LFwiaGVpZ2h0XCI6MzQwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz92PTRcIn0iLCJoYXNoIjoiYTYwNTcyNDk1YTA0OGE0OTAzNjgxOTNjNjEwNzg4YjExYzM1ODA4NiJ9/frank-reynolds-pic.png"
)
User.create!(
  username: "Dennis",
  password: "perfection",
  img_url: "https://consequenceofsound.files.wordpress.com/2017/01/screen-shot-2017-01-03-at-10-15-20-pm.png?w=807"
)
User.create!(
  username: "Dee",
  password: "diecricket",
  img_url: "https://uproxx.files.wordpress.com/2015/09/dee-always-sunny.jpg?quality=100&w=650"
)
User.create!(
  username: "Cricket",
  password: "deeisgood",
  img_url: "https://i.imgur.com/rnSYvPv.png"
)

# ---

Shop.destroy_all
Shop.create!(
  shopname: "Greenman Productions",
  img_profile: "https://vignette1.wikia.nocookie.net/itsalwayssunny/images/8/81/Greeman.jpg/revision/latest?cb=20100221015952",
  img_banner: "https://i.imgur.com/gWq7eNS.png",
  image: 'https://s3.us-east-2.amazonaws.com/shmetsy-seeds/Greeman.jpg',
  banner: 'https://s3.us-east-2.amazonaws.com/shmetsy-seeds/greenman_banner.png',
  description: "Green Man is saving your life right now, bro. Just go with the flow.",
  sales: 0,
  location: "Philadelphia, PA",
  owner_id: User.find_by(username: "Charlie").id
)
Shop.create!(
  shopname: "Paddy's Pub",
  img_profile: "https://grizzlybomb.files.wordpress.com/2011/09/ham.jpg",
  img_banner: "https://www.itsalways.com/wp-content/uploads/2017/09/BQrBeCN.jpg",
  image: 'https://s3.us-east-2.amazonaws.com/shmetsy-seeds/paddy_profile.jpg',
  banner: 'https://s3.us-east-2.amazonaws.com/shmetsy-seeds/paddy_banner.jpg',
  description: "Paddy's pub: the worst bar in Philadelphia",
  sales: 4,
  location: "Philadelphia, PA",
  owner_id: User.find_by(username: "Frank").id
)
Shop.create!(
  shopname: "Badass",
  img_profile: "https://i.ytimg.com/vi/dATJN3QObrE/hqdefault.jpg",
  img_banner: "https://media-assets-04.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-77017-always_sunny--2x1--940.png",
  image: 'https://s3.us-east-2.amazonaws.com/shmetsy-seeds/badass_profile.jpg',
  banner: 'https://s3.us-east-2.amazonaws.com/shmetsy-seeds/badass_banner.png',
  description: "I will now light the pyrotechnics which are attached at the arms and back, and all over my pants. Totally and completely badass.",
  sales: 2,
  location: "Philadelphia, PA",
  owner_id: User.find_by(username: "Mac").id
)

# ---

Listing.destroy_all
Listing.create!(
  title: "Kitten Mittens",
  description: "Great for cats that are one legged, fat, skinny, or an in-between",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/Kitten-mittons2.jpg",
  price: 20.10,
  stock: 7,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Fight Milk",
  description: "High in crowteen!",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/fight_milk.jpg",
  price: 3.50,
  stock: 40,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Rum Ham",
  description: "Soaked in rum as well as having pineapple rings for eyes",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/rumham-1050x519.png",
  price: 7.51,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Paddy's Pub").id,
  owner_id: User.find_by(username: "Frank").id
)
Listing.create!(
  title: "Paddy's Egg",
  description: "A hard boiled that has been dyed green.",
  image:  "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/paddy_egg.jpg",
  price: 1.99,
  stock: 230,
  shop_id: Shop.find_by(shopname: "Paddy's Pub").id,
  owner_id: User.find_by(username: "Frank").id
)
Listing.create!(
  title: "Milksteak",
  description: "Boiled over hard and garnished with raw jelly beans",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/MIlk_steak_with_jelly_beans_373.jpg",
  price: 15.50,
  stock: 6,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Grilled Charlie Sandwich",
  description: "This is a great snack/ meal if you don't have enough money in your budget this week for milksteak with a side of the finest jellybeans.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/grilled_charlie.jpg",
  price: 2.50,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Mac's Duster",
  description: "It's not a jacket. It's a duster. It's like a jacket only it's longer, thicker, and far more bad-ass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/duster.jpg",
  price: 65.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 1",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 2",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 3",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 4",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 0,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 5",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 6",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 7",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 8",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 9",
  description: "Totally and completely badass.",
  image: "https://s3.us-east-2.amazonaws.com/shmetsy-seeds/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)

# ---

Review.destroy_all
Review.create!(
  user_id: User.find_by(username: "Mac").id,
  listing_id: Listing.find_by(title: "Rum Ham").id,
  body: "Where's the rum ham?",
  rating: 1
)
Review.create!(
  user_id: User.find_by(username: "Charlie").id,
  listing_id: Listing.find_by(title: "Paddy's Egg").id,
  body: "It would be better if it was blue.",
  rating: 2
)
Review.create!(
  user_id: User.find_by(username: "Mac").id,
  listing_id: Listing.find_by(title: "Paddy's Egg").id,
  body: "No Charlie, the egg must be green.",
  rating: 4
)
Review.create!(
  user_id: User.find_by(username: "Dennis").id,
  listing_id: Listing.find_by(title: "Paddy's Egg").id,
  body: "This is just a terrible idea.",
  rating: 1
)
Review.create!(
  user_id: User.find_by(username: "Dee").id,
  listing_id: Listing.find_by(title: "Kitten Mittens").id,
  body: "Charlie my cat's stuck in the wall can you help me?",
  rating: 3
)
Review.create!(
  user_id: User.find_by(username: "Cricket").id,
  listing_id: Listing.find_by(title: "Kitten Mittens").id,
  body: "DEE I LOVE YOU",
  rating: 5
)
Review.create!(
  user_id: User.find_by(username: "Frank").id,
  listing_id: Listing.find_by(title: "Mac's Duster").id,
  body: "BURN THE DUSTER!",
  rating: 1
)
Review.create!(
  user_id: User.find_by(username: "Charlie").id,
  listing_id: Listing.find_by(title: "Project Badass Season 1").id,
  body: "Mac's trying really hard to impress us. I think he might be in love with us?",
  rating: 2
)
Review.create!(
  user_id: User.find_by(username: "Dennis").id,
  listing_id: Listing.find_by(title: "Project Badass Season 1").id,
  body: "He's Totally in love with us.",
  rating: 2
)
Review.create!(
  user_id: User.find_by(username: "Dennis").id,
  listing_id: Listing.find_by(title: "Milksteak").id,
  body: "Milksteak is not a real thing Charlie",
  rating: 1
)
