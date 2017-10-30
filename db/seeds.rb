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

# ---

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
Shop.create!(
  shopname: "Paddy's Pub",
  img_profile: "https://grizzlybomb.files.wordpress.com/2011/09/ham.jpg",
  img_banner: "http://www.itsalways.com/wp-content/uploads/2017/09/BQrBeCN.jpg",
  description: "Paddy's pub: the worst bar in Philadelphia",
  sales: 4,
  location: "Philadelphia, PA",
  owner_id: User.find_by(username: "Frank").id
)
Shop.create!(
  shopname: "Badass",
  img_profile: "https://i.ytimg.com/vi/dATJN3QObrE/hqdefault.jpg",
  img_banner: "http://media-assets-04.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-77017-always_sunny--2x1--940.png",
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
  img_main: "https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e0/Kitten-mittons2.jpg/revision/latest?cb=20100708223709",
  price: 20.10,
  stock: 7,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Fight Milk",
  description: "High in crowteen!",
  img_main: "https://ih1.redbubble.net/image.313586213.3959/flat,900x900,070,f.u1.jpg",
  price: 3.50,
  stock: 40,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Rum Ham",
  description: "Soaked in rum as well as having pineapple rings for eyes",
  img_main: "https://i.ytimg.com/vi/DWG2t5jL69k/maxresdefault.jpg",
  price: 7.51,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Paddy's Pub").id,
  owner_id: User.find_by(username: "Frank").id
)
Listing.create!(
  title: "Paddy's Egg",
  description: "A hard boiled that has been dyed green.",
  img_main: "http://vignette1.wikia.nocookie.net/itsalwayssunny/images/9/96/5x8_Paddys_Egg.png/revision/latest?cb=20110920232602",
  price: 1.99,
  stock: 230,
  shop_id: Shop.find_by(shopname: "Paddy's Pub").id,
  owner_id: User.find_by(username: "Frank").id
)
Listing.create!(
  title: "Milksteak",
  description: "Boiled over hard and garnished with raw jelly beans",
  img_main: "https://www.wikihow.com/images/1/1a/MIlk_steak_with_jelly_beans_373.jpg",
  price: 15.50,
  stock: 6,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Grilled Charlie Sandwich",
  description: "This is a great snack/ meal if you don't have enough money in your budget this week for milksteak with a side of the finest jellybeans.",
  img_main: "https://aseatenontv.files.wordpress.com/2013/04/img_1046.jpg",
  price: 2.50,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Greenman Productions").id,
  owner_id: User.find_by(username: "Charlie").id
)
Listing.create!(
  title: "Mac's Duster",
  description: "It's not a jacket. It's a duster. It's like a jacket only it's longer, thicker, and far more bad-ass.",
  img_main: "http://i.imgur.com/bZkpOzV.jpg",
  price: 65.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 1",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 2",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 3",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 4",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 0,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 5",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 6",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 7",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 8",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
Listing.create!(
  title: "Project Badass Season 9",
  description: "Totally and completely badass.",
  img_main: "http://www.jomboyblog.com/uploads/8/2/0/3/82030176/always-sunny_orig.png",
  price: 15.00,
  stock: 1,
  shop_id: Shop.find_by(shopname: "Badass").id,
  owner_id: User.find_by(username: "Mac").id
)
