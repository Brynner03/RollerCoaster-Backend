const db = require('../db')
const { Park, Ride } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const sixflags_nj = await new Park({
    name: "Six Flags Great Adventure",
    description: "Six Flags Great Adventure is an amusement park located in Jackson, New Jersey. Owned and operated by Six Flags, the park complex is situated between New York City and Philadelphia and includes a water park named Hurricane Harbor.",
    location: "Jackson Township, New Jersey",
    address: "1 Six Flags Blvd, Jackson Township, NJ 08527",
    url: "https://www.sixflags.com/greatadventure",
    img: "https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfgd-ferris-wheel.jpg",
    })
  sixflags_nj.save(); 

  const cedarpoint = await new Park({
    name: "Cedar Point",
    description: "Cedar Point is a 364-acre amusement park located on a Lake Erie peninsula in Sandusky, Ohio, United States. Opened in 1870, it is considered the second-oldest operating amusement park in the U.S. behind Lake Compounce. Cedar Point is owned and operated by Cedar Fair and is the flagship of the amusement park chain.",
    location: "Sandusky, Ohio",
    address: "1 Cedar Point Dr. Sandusky, OH 44870",
    url: "https://www.cedarpoint.com",
    img: "https://www.shoresandislands.com/SiteMedia/images/websitedata/publications/landscape/10202_3173_530ec094-aa65-bcc7-1211a885c7bc4527.jpg",
    })
    cedarpoint.save(); 

    const sixflags_cali = await new Park({
      name: "Six Flags Magic Mountain",
      description: "Six Flags Magic Mountain, formerly known simply as Magic Mountain, is a 262-acre theme park located in Valencia, California, 35 miles northwest of downtown Los Angeles. It opened on May 29, 1971, as a development of the Newhall Land and Farming Company and Sea World Inc.",
      location: "Valencia, California",
      address: "26101 Magic Mountain Pkwy Valencia, CA 91355",
      url: "https://www.sixflags.com/magicmountain",
      img: "https://www.hollywoodreporter.com/wp-content/uploads/2020/11/GettyImages-1212456099-copy-1605306041.jpg",
    })
    sixflags_cali.save(); 

    const carowinds = await new Park({
      name: "Carowinds",
      description: "Carowinds is a 407-acre amusement park located adjacent to Interstate 77 in Charlotte, North Carolina. The park straddles the North Carolina-South Carolina state line, with a portion of the park located in Fort Mill, South Carolina.",
      location: "Charlotte, North Carolina",
      address: "300 Carowinds Blvd Charlotte, NC 28273",
      url: "https://www.carowinds.com",
      img: "https://s3.amazonaws.com/images.certifikid.com/content_images/6/1220a_carowinds.jpg",
    })
    carowinds.save(); 

    const kings_dominion = await new Park({
      name: "Kings Dominion",
      description: "Kings Dominion is an amusement park located in Doswell, Virginia, 20 miles north of Richmond and 75 miles south of Washington, D.C.",
      location: "Doswell, Virginia",
      address: "16000 Theme Park Way, Doswell, VA 23047",
      url: "https://www.kingsdominion.com",
      img: "https://gray-wwbt-prod.cdn.arcpublishing.com/resizer/-NU2APKdspk6U0lu60i3G2b3kOU=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/P7WCQDE7QJHCBHRXMNVHXMIHFQ.jpg",
    })
    kings_dominion.save(); 

    const sixflags_tex = await new Park({
      name: "Six Flags Over Texas",
      description: "Six Flags Over Texas is a 212-acre theme park located in Arlington, Texas, east of Fort Worth and west of Dallas. It is the first amusement park in the Six Flags chain.",
      location: "Arlington, Texas",
      address: "2201 E Road to Six Flags St, Arlington, TX 76011",
      url: "https://www.sixflags.com/overtexas",
      img: "https://live.staticflickr.com/7085/7219254032_d9f0c76c2a_b.jpg",
    })
    sixflags_tex.save(); 
    
    const kings_island = await new Park({
      name: "Kings Island",
      description: "Kings Island is a 364-acre amusement park located 24 miles northeast of Cincinnati in Mason, Ohio, United States. Owned and operated by Cedar Fair, the park first opened in 1972 by the Taft Broadcasting Company.",
      location: "Mason, Ohio",
      address: "6300 Kings Island Dr, Mason, OH 45040",
      url: "https://www.visitkingsisland.com",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/83/5d/38/kings-island.jpg",
    })
    kings_island.save(); 




// RIDES CREATIONS:    
  const rides = [
    { name: "Kingda Ka",
      park: sixflags_nj._id,
      description: `A top hat tower of 456 ft looms up menacingly as you board its trains, on the dual loading platform. And the first impulse experienced, being locked inside a loaded train, is undoubtedly one of anxious anticipation. Be on your guard, for the train takes off every few minutes as it plunges 418 ft to form a 270-degree spiral while going down a U-shaped track. If your adventurous heartsix craves for more, go for the 12 other coasters housed inside the park and finally to let off some steam, unwind at the wildlife park, “Safari Off Road Adventure”.`,
      height: "456 ft",
      length: "3,118 ft",
      speed: "128 mph",
      type: "Steel",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kingda_Ka.jpg/1200px-Kingda_Ka.jpg"
    },
    { name: "El Toro",
      park: sixflags_nj._id,
      description: `El Toro is known to be a very rough, bumpy and exhilarating ride, and critics in a 2006 wooden roller coaster poll ranked it 3rd out of 178.`,
      height: "181 ft",
      length: "4,400 ft",
      speed: "70 mph",
      type: "Wood",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/KingdaEltoro.JPG"
    },
    { name: "Top Thrill Dragster",
      park: cedarpoint._id,
      description: `Within just 3.8 seconds, this roller coaster, having steel accelerators reaches a speed of 120 mph before going up an unnerving 90-degree vertical slope. Soon, it would leave you gasping for air for dashing downward in a 270-degree twist. However, despite triumphing as the second loftiest roller coaster in the US, it is not counted among the best by reviewers.`,
      height: "420  ft",
      length: "2,800 ft",
      speed: "120  mph",
      type: "Steel",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Top_Thrill_Dragster_at_Cedar_Point.jpg"
    },
    { name: "Millennium Force",
      park: cedarpoint._id,
      description: `TEMPORARILY CLOSED: The alluring fascinations of this Giga coaster are many: it offers a thrilling ride, lasts for about 2 minutes and attains a speed of 93mph while going through a host of unnerving drops. Naturally, after its first unveiling in 2000, it has achieved either the 1st or 2nd rank at the Golden Ticket Awards. Another plus point is that it endows a ravishing view of Lake Erie.`,
      height: "310 ft",
      length: "6,595 ft",
      speed: "93 mph",
      type: "Steel",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Millennium_Force_%28Cedar_Point%29_06.JPG"
    },
    { name: "Mean Streak",
      park: cedarpoint._id,
      description: `CLOSED: This classic wooden coaster was closed in 2016.`,
      height: "205 ft",
      length: "	5,740 ft",
      speed: "74  mph",
      type: "Wood",
      img: "https://www.gannett-cdn.com/-mm-/2fa4e02b1bad06055b4659055e1f3f02dbf8e47a/c=97-0-842-421/local/-/media/2016/08/01/DetroitFreePress/DetroitFreePress/636056562864525371-mean-streak.jpg"
    },
    { name: "Superman: Escape from Krypton",
    park: sixflags_cali._id,
    description: `Clinging to seats facing backward, you are going to soar up in this coaster vertically at 90 degrees and then dive into a misty underground tunnel at a speed of 77 mph. Be prepared next for going round-and-round through a double helix, a second dive into a tube, and many other breathtaking elements`,
    height: "415 ft",
    length: "	1,235 ft",
    speed: "100 mph",
    type: "Steel",
    img: "https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_superman_escape_from_krypton_1440x1533.jpg"
    },
    { name: "Goliath",
    park: sixflags_cali._id,
    description: `Driving headlong to a striking 255 ft drop at a fantastic pace of 85 mph crowns it as having the world’s fastest drop. But that’s not all. There’s another quick descent, boasting to be of 185 ft. Freak out on moments of pure weightlessness as you surrender yourself to these drops and rises that are out there to test your sense of gravity.`,
    height: "255 ft",
    length: "	4,500 ft",
    speed: "85  mph",
    type: "Steel",
    img: "https://sf-static.sixflags.com/wp-content/uploads/2020/04/goliath_3_2-scaled.jpg"
    },
    { name: "Fury 325",
    park: carowinds._id,
    description: `Also called “Oscars of Roller Coasters” Fury 325, claims to be the longest one in America, going for more than 1.25 miles at a top speed of 95 mph. Climbing up a traditional lift hill, this steel roller coaster receives special recognition for crossing the state lines of both North and South Carolina as well as the communities of Fort Mill and Charlotte. The 398-acre Carowinds Park that houses it also features 64 rides with 12 other magnificent roller coasters.`,
    height: "325 ft",
    length: "	6,600 ft",
    speed: "85 mph",
    type: "Steel",
    img: "https://coasterpedia.net/w/images/thumb/8/8f/Fury_325_%28Carowinds%29_2015_01.jpg/1000px-Fury_325_%28Carowinds%29_2015_01.jpg"
    },
    { name: "Intimidator",
    park: carowinds._id,
    description: `This hyper steel coaster takes you on a whirlwind ride of 7 extreme drops at a top speed of 75 mph. Lasting for over 3 minutes, it’s entirely mind-blowing and is cherished by thrill seekers everywhere. The entrance of the Intimidator showcases a wall of fame, dedicated to the man behind its inspiration, NASCAR legend Dale Earnhardt.`,
    height: "232 ft",
    length: "	5,316 ft",
    speed: "75 mph",
    type: "Steel",
    img: "https://coasterpedia.net/w/images/thumb/0/00/Intimidator_%28Carowinds%29_2010_01.jpg/1000px-Intimidator_%28Carowinds%29_2010_01.jpg"
    },
    { name: "Titan",
    park: sixflags_tex._id,
    description: `Along with a stunning 255 ft drop, this hyper coaster subjects you to 2 incredible 540 degrees spirals and that too back to back at a speed of 85 miles per hour. Then, there's a camel hump that may lift out straight out of the saddle.`,
    height: "255 ft",
    length: "	5,312 ft",
    speed: "85 mph",
    type: "Steel",
    img: "https://images.squarespace-cdn.com/content/v1/5ae0d4a01137a64a2905edf2/1545172980610-0RX4A5G2U0UPX5HGJHQD/7219254032_d9f0c76c2a_b.jpg"
    },
    { name: "Diamondback",
    park: kings_island._id,
    description: `TEMPORARILY CLOSED: Its terrain of 10 acres involves innumerable twists and turns, through 5,282 steep drops at a speed of 80mph. At the closure, there’s a cool splashdown or a spraying of water as the coaster proceeds through a lagoon.`,
    height: "230 ft",
    length: "	5,282 ft",
    speed: "80 mph",
    type: "Steel",
    img: "https://coasterpedia.net/w/images/thumb/3/39/Diamondback_%28Kings_Island%29_2014_01.jpg/1000px-Diamondback_%28Kings_Island%29_2014_01.jpg"
    },
    { name: "Beast",
    park: kings_island._id,
    description: `The Beast is a wooden roller coaster that opened in 1979 as the tallest, fastest, and longest wooden roller coaster in the world. Decades later, it is still the longest, spanning 7,359 feet (2,243 m) across 35 acres (14 ha) of hilly terrain. Two lift hills contribute to the ride's duration of more than four minutes, which also ranks as one of the longest among roller coasters.`,
    height: "141 ft",
    length: "	7,359 ft",
    speed: "65 mph",
    type: "Wood",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kings-island/blogs/v2/banner-beast-2.jpg"
    },
  ]
      
    await Ride.insertMany(rides)
    console.log('Rides created')
}

const run = async () => {
    await main()
    db.close()
}

run()