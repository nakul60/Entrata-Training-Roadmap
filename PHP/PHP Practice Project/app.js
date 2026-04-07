// Data
const cities = [
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1657981630164-769503f3a9a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcm1pbmFyJTJDJTIwaHlkZXJhYmFkJTJDJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Pune",
    image:
      "https://images.unsplash.com/photo-1608019425630-bec4810ccb60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVuZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ahmedabad",
    image:
      "https://plus.unsplash.com/premium_photo-1697729677108-a6273adeab39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWhtZWRhYmFkJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lucknow",
    image:
      "https://plus.unsplash.com/premium_photo-1697730430283-7e4456c78375?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHVja25vdyUyMHV0dGFyJTIwcHJhZGVzaCUyMGluZGlhfGVufDB8fDB8fHww",
  },
  {
    name: "Indore",
    image:
      'https://media.istockphoto.com/id/539001594/photo/rajwada-palace-indore.jpg?s=612x612&w=0&k=20&c=CohH9A0uiehLOHcjpjN7TSZBEuLDhHXxiCbI4NH1VTs=',
  },
  {
    name: "Goa",
    image:
      'https://images.unsplash.com/photo-1587922546307-776227941871?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29hfGVufDB8fDB8fHww',
  },
  {
    name: "Chandigarh",
    image:
      'https://images.unsplash.com/photo-1589350033409-35701c4273d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbmRpZ2FyaHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: "Bhopal",
    image:
      "https://plus.unsplash.com/premium_photo-1697729585263-29ebdcb972ee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmhvcGFsfGVufDB8fDB8fHww",
  },
  {
    name: "Guwahati",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEC165UYWHqW6gv7lF_vpOnGUTDa9ZfuO1A&s",
  },
  {
    name: "Mysore",
    image:
      "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlzb3JlfGVufDB8fDB8fHww",
  },
  {
    name: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1575994532957-773da2f83eb1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Varanasi",
    image:
      'https://images.unsplash.com/photo-1706186839147-0d708602587b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFyYW5hc2klMjBnaGF0fGVufDB8fDB8fHww',
  },
  {
    name: "Agra",
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyYXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: "Shimla",
    image:
      "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
  },
];

const touristSpots = {
  Mumbai: [
    {
      name: "Gateway of India",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      hours: "24 hours",
      fee: "Free",
      location: "Apollo Bunder, Colaba",
      rating: 4.5,
      reviews: [
        { user: "John D.", rating: 5, comment: "Iconic landmark, must visit!" },
        {
          user: "Sarah M.",
          rating: 4,
          comment: "Beautiful architecture, crowded though.",
        },
      ],
    },
    {
      name: "Marine Drive",
      image:
        "https://images.unsplash.com/photo-1584175728154-a0b4b064b753?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW5lJTIwZHJpdmV8ZW58MHx8MHx8fDA%3D",
      hours: "24 hours",
      fee: "Free",
      location: "Netaji Subhash Chandra Bose Road",
      rating: 4.8,
      reviews: [
        { user: "Mike R.", rating: 5, comment: "Perfect for evening walks!" },
        { user: "Lisa K.", rating: 4.5, comment: "Beautiful sunset views." },
      ],
    },
    {
      name: "Chhatrapati Shivaji Terminus",
      image:
        "https://images.unsplash.com/photo-1683868592336-b0330fb89bdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaGF0cmFwYXRpJTIwc2hpdmFqaSUyMG1haGFyYWolMjB0ZXJtaW51c3xlbnwwfHwwfHx8MA%3D%3D",
      hours: "Open 24 hours",
      fee: "Free",
      location: "Fort, Mumbai",
      rating: 4.7,
      reviews: [
        {
          user: "Rahul G.",
          rating: 5,
          comment: "Amazing architecture, a must-see.",
        },
        { user: "Emily W.", rating: 4.5, comment: "Crowded but stunning." },
      ],
    },
    {
      name: "Siddhivinayak Temple",
      image:
        "https://tripxl.com/blog/wp-content/uploads/2024/10/Siddhivinayak-Temple-6.jpg",
      hours: "5:30 AM - 9:50 PM",
      fee: "Free",
      location: "Prabhadevi, Mumbai",
      rating: 4.9,
      reviews: [
        {
          user: "Amit K.",
          rating: 5,
          comment: "Peaceful and divine experience.",
        },
        {
          user: "Priya S.",
          rating: 5,
          comment: "Blessed to visit this temple.",
        },
      ],
    },
    {
      name: "Elephanta Caves",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfF7Mr5Wi5rXbTmHmJX6_5YVcTfj2-SqKoZw&s",
      hours: "9:00 AM - 5:30 PM",
      fee: "₹40 for Indians, ₹600 for foreigners",
      location: "Gharapuri Island",
      rating: 4.6,
      reviews: [
        {
          user: "Kiran M.",
          rating: 5,
          comment: "Great historical site with intricate carvings.",
        },
        {
          user: "Olivia P.",
          rating: 4.5,
          comment: "Wonderful ferry ride experience.",
        },
      ],
    },
    {
      name: "Haji Ali Dargah",
      image:
        "https://static.toiimg.com/photo/64061841.cms",
      hours: "5:30 AM - 10:00 PM",
      fee: "Free",
      location: "Dargah Road, Mumbai",
      rating: 4.7,
      reviews: [
        {
          user: "Ravi S.",
          rating: 5,
          comment: "A beautiful place with a serene vibe.",
        },
        {
          user: "Jessica L.",
          rating: 4.5,
          comment: "Amazing spiritual experience.",
        },
      ],
    },
    {
      name: "Juhu Beach",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/juhu-beach-mumbai-maharashtra-2-musthead-hero?qlt=82&ts=1727355330454",
      hours: "24 hours",
      fee: "Free",
      location: "Juhu, Mumbai",
      rating: 4.3,
      reviews: [
        {
          user: "Sonia D.",
          rating: 5,
          comment: "Lovely beach with great street food.",
        },
        {
          user: "Ryan C.",
          rating: 4,
          comment: "Can get crowded, but worth a visit.",
        },
      ],
    },
    {
      name: "Bandra-Worli Sea Link",
      image:
        "https://static.toiimg.com/thumb/msid-111376914,width-1070,height-580,imgsize-27816,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      hours: "24 hours",
      fee: "Toll applicable",
      location: "Bandra to Worli, Mumbai",
      rating: 4.8,
      reviews: [
        {
          user: "Ajay P.",
          rating: 5,
          comment: "Spectacular engineering marvel.",
        },
        {
          user: "Elena T.",
          rating: 4.5,
          comment: "Beautiful to drive at night.",
        },
      ],
    },
    {
      name: "Sanjay Gandhi National Park",
      image:
        "https://sgnp.maharashtra.gov.in/Images/explore/minitrain.png",
      hours: "7:30 AM - 5:30 PM",
      fee: "₹85 per person",
      location: "Borivali East, Mumbai",
      rating: 4.5,
      reviews: [
        { user: "Manoj R.", rating: 5, comment: "Perfect getaway in nature." },
        {
          user: "Sophia V.",
          rating: 4.5,
          comment: "A great escape from city life.",
        },
      ],
    },
  ],
  Delhi: [
        {
          name: "India Gate",
          image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/06/India-Gate_1400.jpg",
          hours: "Open 24 hours",
          fee: "Free",
          location: "Rajpath, India Gate",
          rating: 4.6,
          reviews: [
            { user: "Karan M.", "rating": 5, "comment": "A patriotic and serene place." },
            { user: "Sara L.", "rating": 4, "comment": "Beautifully lit at night." }
          ]
        },
        {
          "name": "Red Fort",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Red-Fort_600.jpg",
          "hours": "9:30 AM - 4:30 PM (Closed on Mondays)",
          "fee": "₹35 for Indians, ₹500 for foreigners",
          "location": "Netaji Subhash Marg, Lal Qila, Chandni Chowk",
          "rating": 4.5,
          "reviews": [
            { "user": "Ravi S.", "rating": 5, "comment": "Magnificent historical monument with amazing architecture." },
            { "user": "Emily T.", "rating": 4, "comment": "The light and sound show in the evening is a must-see." }
          ]
        },
        {
          "name": "Qutub Minar",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Qutub-Minar_600.jpg",
          "hours": "7:00 AM - 5:00 PM",
          "fee": "₹35 for Indians, ₹550 for foreigners",
          "location": "Mehrauli, South Delhi",
          "rating": 4.7,
          "reviews": [
            { "user": "Amit J.", "rating": 5, "comment": "The tallest brick minaret in the world. Stunning craftsmanship." },
            { "user": "Lisa W.", "rating": 4, "comment": "Worth the visit, but can get crowded on weekends." }
          ]
        },
        {
          "name": "Humayun's Tomb",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Humayuns-Tomb_600.jpg",
          "hours": "6:00 AM - 6:00 PM",
          "fee": "₹35 for Indians, ₹550 for foreigners",
          "location": "Mathura Road, Nizamuddin East",
          "rating": 4.8,
          "reviews": [
            { "user": "Priya V.", "rating": 5, "comment": "Gorgeous Indo-Persian architecture, beautiful gardens." },
            { "user": "Mark B.", "rating": 5, "comment": "Less crowded than other sites and incredibly well-preserved." }
          ]
        },
        {
          "name": "Lotus Temple",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Lotus-Temple_600.jpg",
          "hours": "9:00 AM - 5:30 PM (Closed on Mondays)",
          "fee": "Free",
          "location": "Lotus Temple Road, Bahapur, Kalkaji",
          "rating": 4.6,
          "reviews": [
            { "user": "Deepak S.", "rating": 5, "comment": "Peaceful atmosphere and stunning architecture." },
            { "user": "Claire M.", "rating": 4, "comment": "A serene place for meditation, unique lotus-shaped structure." }
          ]
        },
        {
          "name": "Akshardham Temple",
          "image": "https://akshardham.com/newdelhi/wp-content/uploads/2015/06/akshardham_facts_and_figure_banner.jpg",
          "hours": "9:30 AM - 6:30 PM (Closed on Mondays)",
          "fee": "Free entry, ₹170 for exhibitions",
          "location": "Noida Mor, Pandav Nagar",
          "rating": 4.8,
          "reviews": [
            { "user": "Rahul G.", "rating": 5, "comment": "Spectacular architecture and light show. Plan for a full day visit." },
            { "user": "Jessica H.", "rating": 5, "comment": "One of the most beautiful temples in the world, incredible craftsmanship." }
          ]
        },
        {
          "name": "Jama Masjid",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCKaaSwcdWRSf201TH031o2tDf5bSEFv67w&s",
          "hours": "7:00 AM - 12:00 PM, 1:30 PM - 6:30 PM",
          "fee": "Free (₹300 for camera)",
          "location": "Chandni Chowk, Old Delhi",
          "rating": 4.5,
          "reviews": [
            { "user": "Mohammad F.", "rating": 5, "comment": "Largest mosque in India with beautiful architecture." },
            { "user": "Catherine L.", "rating": 4, "comment": "Amazing historical site, dress modestly when visiting." }
          ]
        },
        {
          "name": "Lodhi Gardens",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9CHp4dRZNK89L2t5N93sNornqE4WkSmGkw&s",
          "hours": "6:00 AM - 8:00 PM",
          "fee": "Free",
          "location": "Lodhi Road, Lodhi Estate",
          "rating": 4.7,
          "reviews": [
            { "user": "Anita R.", "rating": 5, "comment": "Beautiful park with historical monuments, perfect for morning walks." },
            { "user": "John P.", "rating": 4, "comment": "Peaceful oasis in the middle of Delhi, great for photography." }
          ]
        },
        {
          "name": "Agrasen Ki Baoli",
          "image": "https://s7ap1.scene7.com/is/image/incredibleindia/agrasen-ki-baoli-delhi-delhi-2-attr-hero?qlt=82&ts=1727352154212",
          "hours": "7:00 AM - 6:00 PM",
          "fee": "Free",
          "location": "Hailey Road, Near Connaught Place, New Delhi",
          "rating": 4.4,
          "reviews": [
            { "user": "Rohan S.", "rating": 5, "comment": "A hidden gem in Delhi, rich in history and architecture." },
            { "user": "Priya M.", "rating": 4, "comment": "Peaceful stepwell, great for photography but can get crowded." }
          ]
        }
        
  ],

  Kolkata: [
        {
          "name": "Victoria Memorial",
          "image": "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmljdG9yaWElMjBtZW1vcmlhbHxlbnwwfHwwfHx8MA%3D%3D",
          "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
          "fee": "₹20 for Indians, ₹200 for foreigners",
          "location": "Victoria Memorial Hall, 1, Queens Way, Maidan",
          "rating": 4.7,
          "reviews": [
            { "user": "Aditya B.", "rating": 5, "comment": "Magnificent marble structure with beautiful gardens." },
            { "user": "Emma S.", "rating": 4, "comment": "The museum inside has fascinating historical artifacts." }
          ]
        },
        {
          "name": "Howrah Bridge",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPBgZZ0sDR4i7MYa-kQA8Y6qZDcsuWPR9nw&s",
          "hours": "Open 24 hours",
          "fee": "Free",
          "location": "Spans the Hooghly River connecting Kolkata and Howrah",
          "rating": 4.6,
          "reviews": [
            { "user": "Sourav D.", "rating": 5, "comment": "Iconic symbol of Kolkata, especially beautiful when lit up at night." },
            { "user": "Rachel T.", "rating": 4, "comment": "Engineering marvel with incredible views of the river." }
          ]
        },
        {
          "name": "Dakshineswar Kali Temple",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8Nq4RjyUyt_UA6zDiN17FGcC_PWvZ-oZNg&s",
          "hours": "6:00 AM - 12:30 PM, 3:00 PM - 8:30 PM",
          "fee": "Free",
          "location": "Dakshineswar, Kolkata",
          "rating": 4.8,
          "reviews": [
            { "user": "Priyanka M.", "rating": 5, "comment": "Spiritual and peaceful atmosphere on the banks of Hooghly." },
            { "user": "David K.", "rating": 5, "comment": "Beautiful architecture and religious significance." }
          ]
        },
        {
          "name": "Science City Kolkata",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Science_City_Kolkata_4643.JPG/330px-Science_City_Kolkata_4643.JPG",
          "hours": "9:00 AM - 8:00 PM",
          "fee": "₹50 for general entry, additional fees for special exhibits",
          "location": "JBS Haldane Avenue, East Kolkata Township",
          "rating": 4.5,
          "reviews": [
            { "user": "Rajiv S.", "rating": 5, "comment": "Excellent educational experience for children and adults alike." },
            { "user": "Alice W.", "rating": 4, "comment": "The Space Odyssey show is particularly impressive." }
          ]
        },
        {
          "name": "Belur Math",
          "image": "https://media.gettyimages.com/id/170975358/photo/belur-math.jpg?s=594x594&w=gi&k=20&c=vcPyQpIJ2yDeSIfd93OgyLZx9iI9vFPpYD2DrCSaFrQ=",
          "hours": "6:00 AM - 11:30 AM, 4:00 PM - 7:00 PM",
          "fee": "Free",
          "location": "Belur, Howrah",
          "rating": 4.9,
          "reviews": [
            { "user": "Sanjay R.", "rating": 5, "comment": "Serene headquarters of Ramakrishna Mission with beautiful architecture." },
            { "user": "Laura P.", "rating": 5, "comment": "Peaceful place for meditation with stunning views of the river." }
          ]
        },
        {
          "name": "Indian Museum",
          "image": "https://media.gettyimages.com/id/1234725857/photo/indian-museum-as-seen-in-kolkata-india-on-17-augusts-2021-indian-museum-of-kolkata-opens-to.jpg?s=612x612&w=gi&k=20&c=untUxGcayAjuSQ64A-6A51Jjm8Oo4MukJKoxZNctXkQ=",
          "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
          "fee": "₹20 for Indians, ₹500 for foreigners",
          "location": "27, Jawaharlal Nehru Road, Park Street area",
          "rating": 4.4,
          "reviews": [
            { "user": "Vikram M.", "rating": 5, "comment": "Oldest and largest museum in India with remarkable collections." },
            { "user": "Sophie B.", "rating": 4, "comment": "The Egyptian mummy and dinosaur fossils are highlights." }
          ]
        },
        {
          "name": "Park Street",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZLZUfZUj_C7DdL4ncoDOUFRPqHuSgg5cGw&s",
          "hours": "Open 24 hours (individual establishments vary)",
          "fee": "Free (costs depend on shopping/dining)",
          "location": "Park Street, Central Kolkata",
          "rating": 4.7,
          "reviews": [
            { "user": "Amrita C.", "rating": 5, "comment": "The food and nightlife hub of Kolkata, especially lively during Christmas." },
            { "user": "Brian M.", "rating": 4, "comment": "Great restaurants and colonial architecture along this famous street." }
          ]
        },
        {
          "name": "Eco Tourism Park",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kmBZXzIEOa7nV3OKlUHwO34tzZSad9KlxQ&s",
          "hours": "12:00 PM - 8:30 PM (Tuesday to Friday), 11:00 AM - 8:30 PM (Weekends)",
          "fee": "₹30 entry, additional fees for activities",
          "location": "New Town, Rajarhat",
          "rating": 4.6,
          "reviews": [
            { "user": "Debashish G.", "rating": 5, "comment": "Beautiful recreational space with boating, cycling, and gardens." },
            { "user": "Olivia T.", "rating": 4, "comment": "Perfect for family outings, especially the musical fountain show." }
          ]
        },
        {
          "name": "Marble Palace",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWBbG87kx8cLImE1eX-WHtCs0NcGHcrekJQ&s",
          "hours": "10:00 AM - 4:00 PM (Closed on Mondays and Thursdays)",
          "fee": "Free (requires permission from West Bengal Tourism)",
          "location": "46, Muktaram Babu Street, Jorasanko",
          "rating": 4.3,
          "reviews": [
            { "user": "Arjun K.", "rating": 5, "comment": "19th-century mansion with incredible art collections and architecture." },
            { "user": "Hannah J.", "rating": 4, "comment": "Hidden gem with marble floors, Victorian furniture, and valuable paintings." }
          ]
        }
],

Chennai: [
        {
          "name": "Marina Beach",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Marina-Beach_600.jpg",
          "hours": "Open 24 hours",
          "fee": "Free",
          "location": "Kamarajar Salai, Triplicane",
          "rating": 4.6,
          "reviews": [
            { "user": "Vijay S.", "rating": 5, "comment": "World's second longest urban beach, beautiful sunrise views." },
            { "user": "Rebecca H.", "rating": 4, "comment": "Lively atmosphere in the evenings with street food and local culture." }
          ]
        },
        {
          "name": "Kapaleeshwarar Temple",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Kapaleeshwarar-Temple_600.jpg",
          "hours": "5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM",
          "fee": "Free",
          "location": "Mylapore, Chennai",
          "rating": 4.8,
          "reviews": [
            { "user": "Anuradha P.", "rating": 5, "comment": "Ancient Dravidian architecture with stunning colorful gopuram." },
            { "user": "Michael T.", "rating": 5, "comment": "Spiritual atmosphere and beautiful sculptures throughout." }
          ]
        },
        {
          "name": "Fort St. George",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Fort-St-George_600.jpg",
          "hours": "9:00 AM - 5:00 PM (Closed on Fridays)",
          "fee": "₹15 for Indians, ₹200 for foreigners",
          "location": "Rajaji Salai, near Chennai Port",
          "rating": 4.3,
          "reviews": [
            { "user": "Karthik N.", "rating": 4, "comment": "Historic British fort with museum showcasing colonial artifacts." },
            { "user": "Jennifer W.", "rating": 4, "comment": "St. Mary's Church inside is the oldest Anglican church in India." }
          ]
        },
        {
          "name": "Government Museum",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Government-Museum-Chennai_600.jpg",
          "hours": "9:30 AM - 5:00 PM (Closed on Fridays)",
          "fee": "₹15 for Indians, ₹250 for foreigners",
          "location": "Pantheon Road, Egmore",
          "rating": 4.5,
          "reviews": [
            { "user": "Ramesh K.", "rating": 5, "comment": "Excellent collection of bronze sculptures and archaeological artifacts." },
            { "user": "Sarah L.", "rating": 4, "comment": "The National Art Gallery in the same complex is worth visiting too." }
          ]
        },
        {
          "name": "Mahabalipuram",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Mahabalipuram_600.jpg",
          "hours": "6:00 AM - 6:00 PM",
          "fee": "₹40 for Indians, ₹600 for foreigners",
          "location": "Mahabalipuram (60 km from Chennai)",
          "rating": 4.7,
          "reviews": [
            { "user": "Madhu R.", "rating": 5, "comment": "UNESCO World Heritage site with incredible rock-cut temples." },
            { "user": "Thomas B.", "rating": 5, "comment": "Shore Temple and the Five Rathas are architectural marvels." }
          ]
        },
        {
          "name": "Elliot's Beach",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Elliots-Beach_600.jpg",
          "hours": "Open 24 hours",
          "fee": "Free",
          "location": "Besant Nagar, Chennai",
          "rating": 4.4,
          "reviews": [
            { "user": "Deepa V.", "rating": 5, "comment": "Cleaner and less crowded than Marina Beach, great for evening walks." },
            { "user": "Andrew M.", "rating": 4, "comment": "Nice cafes and restaurants nearby in Besant Nagar." }
          ]
        },
        {
          "name": "Santhome Cathedral",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Santhome-Cathedral_600.jpg",
          "hours": "6:00 AM - 8:00 PM",
          "fee": "Free",
          "location": "Santhome High Road, Mylapore",
          "rating": 4.6,
          "reviews": [
            { "user": "Rajesh S.", "rating": 5, "comment": "Beautiful neo-Gothic architecture with historical significance." },
            { "user": "Julia K.", "rating": 4, "comment": "One of only three churches built over the tomb of an apostle." }
          ]
        },
        {
          "name": "Valluvar Kottam",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Valluvar-Kottam_600.jpg",
          "hours": "8:00 AM - 6:00 PM",
          "fee": "₹10",
          "location": "Nungambakkam, Chennai",
          "rating": 4.2,
          "reviews": [
            { "user": "Lakshmi T.", "rating": 4, "comment": "Monument dedicated to Tamil poet Thiruvalluvar, unique chariot-shaped structure." },
            { "user": "Robert J.", "rating": 4, "comment": "All 1330 verses of Thirukkural are inscribed on the walls." }
          ]
        },
        {
          "name": "DakshinaChitra",
          "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/DakshinaChitra_600.jpg",
          "hours": "10:00 AM - 6:00 PM (Closed on Tuesdays)",
          "fee": "₹100 for Indians, ₹250 for foreigners",
          "location": "East Coast Road, Muttukadu",
          "rating": 4.7,
          "reviews": [
            { "user": "Ashwin P.", "rating": 5, "comment": "Living museum with traditional houses from South Indian states." },
            { "user": "Emily R.", "rating": 5, "comment": "Interactive cultural experience with craft demonstrations and workshops." }
          ]
        }
],

Bangalore:[
    {
      "name": "Lalbagh Botanical Garden",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Lalbagh-Botanical-Gardens_600.jpg",
      "hours": "6:00 AM - 7:00 PM",
      "fee": "₹20 for Indians, ₹100 for foreigners",
      "location": "Mavalli, Bengaluru",
      "rating": 4.6,
      "reviews": [
        { "user": "Suresh N.", "rating": 5, "comment": "Beautiful 240-acre garden with over 1000 species of plants." },
        { "user": "Linda P.", "rating": 4, "comment": "The glass house and flower shows are spectacular." }
      ]
    },
    {
      "name": "Bangalore Palace",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Bangalore-Palace_600.jpg",
      "hours": "10:00 AM - 5:30 PM",
      "fee": "₹230 for Indians, ₹460 for foreigners",
      "location": "Vasanth Nagar, Bengaluru",
      "rating": 4.3,
      "reviews": [
        { "user": "Arun G.", "rating": 4, "comment": "Tudor-style architecture inspired by Windsor Castle." },
        { "user": "Natalie S.", "rating": 4, "comment": "Interesting artifacts and paintings from the royal family." }
      ]
    },
    {
      "name": "Cubbon Park",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Cubbon-Park_600.jpg",
      "hours": "6:00 AM - 6:00 PM",
      "fee": "Free",
      "location": "Kasturba Road, Bengaluru",
      "rating": 4.7,
      "reviews": [
        { "user": "Pradeep K.", "rating": 5, "comment": "Green lung of the city with beautiful walking paths and trees." },
        { "user": "Maria T.", "rating": 5, "comment": "Perfect for morning jogs and weekend picnics." }
      ]
    },
    {
      "name": "ISKCON Temple Bangalore",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/ISKCON-Temple_600.jpg",
      "hours": "4:15 AM - 8:30 PM",
      "fee": "Free",
      "location": "Rajajinagar, Bengaluru",
      "rating": 4.8,
      "reviews": [
        { "user": "Sharmila R.", "rating": 5, "comment": "Beautiful temple complex with spiritual ambiance." },
        { "user": "Daniel B.", "rating": 5, "comment": "Amazing architecture and the prasad meal is delicious." }
      ]
    },
    {
      "name": "Wonderla Amusement Park",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Wonderla-Amusement-Park_600.jpg",
      "hours": "11:00 AM - 6:00 PM",
      "fee": "₹910 onwards (weekdays), ₹1130 onwards (weekends)",
      "location": "Mysore Road, Bengaluru",
      "rating": 4.6,
      "reviews": [
        { "user": "Prakash M.", "rating": 5, "comment": "Best amusement park in Bangalore with amazing water rides." },
        { "user": "Sophia L.", "rating": 4, "comment": "Fun for all ages with both dry and water rides." }
      ]
    },
    {
      "name": "Tipu Sultan's Summer Palace",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Tipu-Sultans-Summer-Palace_600.jpg",
      "hours": "8:30 AM - 5:30 PM",
      "fee": "₹15 for Indians, ₹200 for foreigners",
      "location": "Albert Victor Road, Chamrajpet",
      "rating": 4.2,
      "reviews": [
        { "user": "Venkat S.", "rating": 4, "comment": "Historical wooden palace with interesting exhibits about Tipu Sultan." },
        { "user": "Katherine J.", "rating": 4, "comment": "Beautiful Indo-Islamic architecture with intricate carvings." }
      ]
    },
    {
      "name": "Bannerghatta Biological Park",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Bannerghatta-Biological-Park_600.jpg",
      "hours": "10:00 AM - 5:00 PM (Closed on Tuesdays)",
      "fee": "₹80 for adults, additional charges for safari",
      "location": "Bannerghatta Road, Bengaluru",
      "rating": 4.4,
      "reviews": [
        { "user": "Krishnan P.", "rating": 5, "comment": "Great safari experience with lions, tigers, and bears." },
        { "user": "Jessica M.", "rating": 4, "comment": "The butterfly park is unique and beautiful." }
      ]
    },
    {
      "name": "Vidhana Soudha",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Vidhana-Soudha_600.jpg",
      "hours": "Only exterior views (except on weekends from 11:00 AM - 1:00 PM with permission)",
      "fee": "Free",
      "location": "Dr. Ambedkar Road, Bengaluru",
      "rating": 4.5,
      "reviews": [
        { "user": "Raghav B.", "rating": 5, "comment": "Impressive neo-Dravidian style building, spectacular when lit up at night." },
        { "user": "Amanda T.", "rating": 4, "comment": "Architectural marvel that houses the state legislature." }
      ]
    },
    {
      "name": "HAL Aerospace Museum",
      "image": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/HAL-Museum_600.jpg",
      "hours": "9:00 AM - 5:00 PM (Closed on Mondays)",
      "fee": "₹50 for adults",
      "location": "HAL Old Airport Road, Bengaluru",
      "rating": 4.3,
      "reviews": [
        { "user": "Suman C.", "rating": 4, "comment": "India's first aerospace museum with interesting aircraft displays." },
        { "user": "Gregory N.", "rating": 5, "comment": "The flight simulator experience is worth trying." }
      ]
    }
  ],

  Jaipur:[
    {
      "name": "Amber Fort",
      "image": "https://www.jaipur.org.uk/images/amber-fort.jpg",
      "hours": "8:00 AM - 5:30 PM",
      "fee": "₹200 for Indians, ₹500 for foreigners",
      "location": "Amer, Jaipur",
      "rating": 4.7,
      "reviews": [
        { "user": "Rahul S.", "rating": 5, "comment": "Magnificent hilltop fort with stunning architecture and elephant rides." },
        { "user": "Emily T.", "rating": 4, "comment": "The light and sound show in the evening is spectacular." }
      ]
    },
    {
      "name": "City Palace",
      "image": "https://www.jaipur.org.uk/images/city-palace.jpg",
      "hours": "9:30 AM - 5:00 PM",
      "fee": "₹200 for Indians, ₹700 for foreigners",
      "location": "Jaleb Chowk, Jaipur",
      "rating": 4.6,
      "reviews": [
        { "user": "Anjali K.", "rating": 5, "comment": "Beautiful palace with a blend of Rajasthani and Mughal architecture." },
        { "user": "Michael P.", "rating": 4, "comment": "The royal costumes museum and weapons collection are fascinating." }
      ]
    },
    {
      "name": "Hawa Mahal",
      "image": "https://www.jaipur.org.uk/images/hawa-mahal.jpg",
      "hours": "9:00 AM - 4:30 PM",
      "fee": "₹50 for Indians, ₹200 for foreigners",
      "location": "Badi Choupad, Pink City, Jaipur",
      "rating": 4.5,
      "reviews": [
        { "user": "Priya M.", "rating": 5, "comment": "Iconic five-story palace with 953 small windows (jharokhas)." },
        { "user": "Sarah L.", "rating": 4, "comment": "Best viewed in morning light, visit the café across the street for great photos." }
      ]
    },
    {
      "name": "Jantar Mantar",
      "image": "https://www.jaipur.org.uk/images/jantar-mantar.jpg",
      "hours": "9:00 AM - 4:30 PM",
      "fee": "₹50 for Indians, ₹200 for foreigners",
      "location": "Tripoliya Bazaar, near City Palace, Jaipur",
      "rating": 4.4,
      "reviews": [
        { "user": "Vivek S.", "rating": 4, "comment": "UNESCO World Heritage site with fascinating astronomical instruments." },
        { "user": "Jennifer H.", "rating": 5, "comment": "The world's largest stone sundial is truly impressive." }
      ]
    },
    {
      "name": "Jal Mahal",
      "image": "https://www.jaipur.org.uk/images/jal-mahal.jpg",
      "hours": "Viewable from outside only",
      "fee": "Free for viewing from shore",
      "location": "Man Sagar Lake, Jaipur",
      "rating": 4.3,
      "reviews": [
        { "user": "Gaurav T.", "rating": 4, "comment": "Beautiful palace in the middle of Man Sagar Lake, especially at sunset." },
        { "user": "Rebecca N.", "rating": 4, "comment": "Though you can't go inside, the views from the shore are worth it." }
      ]
    },
    {
      "name": "Nahargarh Fort",
      "image": "https://www.jaipur.org.uk/images/nahargarh-fort.jpg",
      "hours": "10:00 AM - 5:30 PM",
      "fee": "₹50 for Indians, ₹200 for foreigners",
      "location": "Krishna Nagar, Brahampuri, Jaipur",
      "rating": 4.5,
      "reviews": [
        { "user": "Sameer P.", "rating": 5, "comment": "Best panoramic views of Jaipur city, especially stunning at sunset." },
        { "user": "Laura B.", "rating": 4, "comment": "The wax museum and sculpture park inside are interesting additions." }
      ]
    },
    {
      "name": "Albert Hall Museum",
      "image": "https://www.jaipur.org.uk/images/albert-hall-museum.jpg",
      "hours": "9:00 AM - 5:00 PM, 7:00 PM - 10:00 PM",
      "fee": "₹40 for Indians, ₹300 for foreigners",
      "location": "Ram Niwas Garden, Jaipur",
      "rating": 4.4,
      "reviews": [
        { "user": "Rajesh M.", "rating": 4, "comment": "Oldest museum in Rajasthan with diverse collections from around the world." },
        { "user": "Catherine D.", "rating": 5, "comment": "Beautiful Indo-Saracenic architecture, spectacular when lit up at night." }
      ]
    },
    {
      "name": "Jaigarh Fort",
      "image": "https://www.jaipur.org.uk/images/jaigarh-fort.jpg",
      "hours": "9:00 AM - 4:30 PM",
      "fee": "₹85 for Indians, ₹200 for foreigners",
      "location": "Devisinghpura, Jaipur",
      "rating": 4.3,
      "reviews": [
        { "user": "Karan D.", "rating": 4, "comment": "Home to Jaivana, once the world's largest cannon on wheels." },
        { "user": "Tom W.", "rating": 4, "comment": "Less crowded than other forts with authentic military architecture." }
      ]
    },
    {
      "name": "Birla Mandir",
      "image": "https://www.jaipur.org.uk/images/birla-mandir.jpg",
      "hours": "6:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
      "fee": "Free",
      "location": "Jawahar Lal Nehru Marg, Jaipur",
      "rating": 4.6,
      "reviews": [
        { "user": "Neha G.", "rating": 5, "comment": "Beautiful white marble temple with peaceful atmosphere." },
        { "user": "David K.", "rating": 4, "comment": "Stunning when illuminated at night, with great views of the city." }
      ]
    }
  ],

  Hyderabad: [
    {
      "name": "Charminar",
      "image": "https://www.hyderabadtourism.travel/images/tourist-places/charminar-hyderabad/charminar-hyderabad-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 5:30 PM",
      "fee": "₹20 for Indians, ₹200 for foreigners",
      "location": "Charminar Road, Hyderabad",
      "rating": 4.5,
      "reviews": [
        { "user": "Ravi K.", "rating": 5, "comment": "Iconic symbol of Hyderabad with beautiful Islamic architecture." },
        { "user": "Alexandra B.", "rating": 4, "comment": "The surrounding bazaar is lively and perfect for shopping." }
      ]
    },
    {
      "name": "Golconda Fort",
      "image": "https://www.hyderabadtourism.travel/images/tourist-places/golconda-fort-hyderabad/golconda-fort-hyderabad-tourism-timings.jpg",
      "hours": "8:00 AM - 5:30 PM",
      "fee": "₹20 for Indians, ₹200 for foreigners",
      "location": "Ibrahim Bagh, Hyderabad",
      "rating": 4.6,
      "reviews": [
        { "user": "Anusha P.", "rating": 5, "comment": "Magnificent fort with impressive acoustic effects and light show." },
        { "user": "James W.", "rating": 4, "comment": "The climb to the top offers panoramic views of the city." }
      ]
    },
    {
      "name": "Ramoji Film City",
      "image": "https://www.hyderabadtourism.travel/images/places-to-visit/headers/ramoji-film-city-hyderabad-tourism-attraction-entry-fee.jpg",
      "hours": "9:00 AM - 5:30 PM",
      "fee": "₹1250 for adults (weekdays), ₹1450 (weekends)",
      "location": "Anaspur Village, Hayathnagar",
      "rating": 4.4,
      "reviews": [
        { "user": "Karthik N.", "rating": 5, "comment": "World's largest film studio complex with movie sets and attractions." },
        { "user": "Sophie R.", "rating": 4, "comment": "Fun day trip with stunt shows and themed entertainment." }
      ]
    },
    {
      "name": "Hussain Sagar Lake",
      "image": "https://www.hyderabadtourism.travel/images/places-to-visit/headers/hussain-sagar-lake-hyderabad-tourism-entry-fee.jpg",
      "hours": "24 hours (boat rides 8:00 AM - 9:00 PM)",
      "fee": "Free (boat rides ₹50 onwards)",
      "location": "Tank Bund Road, Hyderabad",
      "rating": 4.3,
      "reviews": [
        { "user": "Sudhir M.", "rating": 4, "comment": "Heart-shaped lake with the famous Buddha statue in the center." },
        { "user": "Emma P.", "rating": 4, "comment": "The evening boat ride to the Buddha statue is amazing." }
      ]
    },
    {
      "name": "Salar Jung Museum",
      "image": "https://www.hyderabadtourism.travel/images/places-to-visit/headers/salar-jung-museum-hyderabad-tourism-timings.jpg",
      "hours": "10:00 AM - 5:00 PM (Closed on Fridays)",
      "fee": "₹20 for Indians, ₹500 for foreigners",
      "location": "Darulshifa, Hyderabad",
      "rating": 4.7,
      "reviews": [
        { "user": "Preethi S.", "rating": 5, "comment": "One of the largest one-man collections of antiques in the world." },
        { "user": "Robert H.", "rating": 5, "comment": "The Veiled Rebecca sculpture and double-sided clock are must-see attractions." }
      ]
    },
    {
      "name": "Birla Mandir",
      "image": "https://www.hyderabadtourism.travel/images/places-to-visit/headers/birla-mandir-hyderabad-tourism-timings.jpg",
      "hours": "7:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
      "fee": "Free",
      "location": "Hill Fort Road, Hyderabad",
      "rating": 4.6,
      "reviews": [
        { "user": "Vishal A.", "rating": 5, "comment": "Beautiful white marble temple with panoramic views of the city." },
        { "user": "Hannah T.", "rating": 4, "comment": "Peaceful atmosphere and stunning architecture on Naubat Pahad hill." }
      ]
    },
    {
      "name": "Lumbini Park",
      "image": "https://www.hyderabadtourism.travel/images/places-to-visit/headers/lumbini-park-hyderabad-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 9:00 PM",
      "fee": "₹20 for entry, ₹50 for laser show",
      "location": "NTR Marg, Hyderabad",
      "rating": 4.2,
      "reviews": [
        { "user": "Prakash K.", "rating": 4, "comment": "Pleasant park with musical fountain and laser show in the evening." },
        { "user": "Olivia M.", "rating": 4, "comment": "The boat ride offers great views of Buddha statue on Hussain Sagar Lake." }
      ]
    },
    {
      "name": "Qutb Shahi Tombs",
      "image": "https://www.hyderabadtourism.travel/images/places-to-visit/headers/qutub-shahi-tombs-hyderabad-tourism-timings.jpg",
      "hours": "9:30 AM - 4:30 PM",
      "fee": "₹15 for Indians, ₹200 for foreigners",
      "location": "Ibrahim Bagh, Hyderabad",
      "rating": 4.3,
      "reviews": [
        { "user": "Farhan M.", "rating": 4, "comment": "Historical necropolis with beautiful Indo-Persian architecture." },
        { "user": "Claire B.", "rating": 4, "comment": "Serene complex with tombs of seven Qutb Shahi rulers." }
      ]
    },
    {
      "name": "Chowmahalla Palace",
      "image": "https://www.hyderabadtourism.travel/images/places-to-visit/headers/chowmahalla-palace-hyderabad-tourism-entry-fee.jpg",
      "hours": "10:00 AM - 5:00 PM (Closed on Fridays)",
      "fee": "₹50 for Indians, ₹200 for foreigners",
      "location": "Khilwat, Hyderabad",
      "rating": 4.5,
      "reviews": [
        { "user": "Deepa R.", "rating": 5, "comment": "Former palace of the Nizams with stunning chandeliers and royal artifacts." },
        { "user": "Thomas L.", "rating": 4, "comment": "The Khilwat Mubarak and vintage car collection are highlights." }
      ]
    }
  ],

  Pune: [
    {
      "name": "Aga Khan Palace",
      "image": "https://www.punetourism.co.in/images/tourist-places/aga-khan-palace-pune/aga-khan-palace-pune-tourism.jpg",
      "hours": "9:00 AM - 5:30 PM",
      "fee": "₹15 for Indians, ₹200 for foreigners",
      "location": "Nagar Road, Pune",
      "rating": 4.4,
      "reviews": [
        { "user": "Abhishek D.", "rating": 4, "comment": "Historical monument where Mahatma Gandhi was interned, with beautiful gardens." },
        { "user": "Rachel S.", "rating": 5, "comment": "The photo gallery and Gandhi's personal items are deeply moving." }
      ]
    },
    {
      "name": "Shaniwar Wada",
      "image": "https://www.punetourism.co.in/images/tourist-places/shaniwar-wada-pune/shaniwar-wada-pune-tourism.jpg",
      "hours": "8:00 AM - 6:30 PM",
      "fee": "₹5 for Indians, ₹125 for foreigners",
      "location": "Shaniwar Peth, Pune",
      "rating": 4.3,
      "reviews": [
        { "user": "Neeraj P.", "rating": 4, "comment": "Historic Peshwa fort with impressive gates and light & sound show." },
        { "user": "Elizabeth W.", "rating": 4, "comment": "The Delhi Gate and ruins tell fascinating stories of Maratha history." }
      ]
    },
    {
      "name": "Sinhagad Fort",
      "image": "https://www.punetourism.co.in/images/tourist-places/sinhagad-fort-pune/sinhagad-fort-pune-tourism.jpg",
      "hours": "24 hours (best visited during daylight)",
      "fee": "₹50 per person",
      "location": "Sinhagad Road, Pune",
      "rating": 4.6,
      "reviews": [
        { "user": "Anand K.", "rating": 5, "comment": "Stunning hilltop fort with panoramic views and historical significance." },
        { "user": "Madison B.", "rating": 4, "comment": "The trek is rewarding and local food vendors serve delicious Maharashtrian snacks." }
      ]
    },
    {
      "name": "Dagdusheth Halwai Ganpati Temple",
      "image": "https://www.punetourism.co.in/images/tourist-places/dagdusheth-halwai-ganpati-temple-pune/dagdusheth-halwai-ganpati-temple-pune-tourism.jpg",
      "hours": "6:00 AM - 10:30 PM",
      "fee": "Free",
      "location": "Budhwar Peth, Pune",
      "rating": 4.8,
      "reviews": [
        { "user": "Meera T.", "rating": 5, "comment": "One of the most revered Ganesh temples with a magnificent gold-plated idol." },
        { "user": "John M.", "rating": 5, "comment": "The spiritual energy and elaborate decorations are incredible." }
      ]
    },
    {
      "name": "Rajiv Gandhi Zoological Park",
      "image": "https://www.punetourism.co.in/images/tourist-places/rajiv-gandhi-zoological-park-pune/rajiv-gandhi-zoological-park-pune-tourism.jpg",
      "hours": "9:30 AM - 5:30 PM (Closed on Wednesdays)",
      "fee": "₹40 for adults",
      "location": "Katraj, Pune",
      "rating": 4.2,
      "reviews": [
        { "user": "Sanjay M.", "rating": 4, "comment": "Well-maintained zoo with diverse wildlife and a nice reptile park." },
        { "user": "Natalie C.", "rating": 4, "comment": "The white tiger enclosure and snake park are highlights." }
      ]
    },
    {
      "name": "Pataleshwar Cave Temple",
      "image": "https://www.punetourism.co.in/images/tourist-places/pataleshwar-cave-temple-pune/pataleshwar-cave-temple-pune-tourism.jpg",
      "hours": "8:30 AM - 5:30 PM",
      "fee": "Free",
      "location": "Jangli Maharaj Road, Pune",
      "rating": 4.3,
      "reviews": [
        { "user": "Vikram S.", "rating": 4, "comment": "Ancient rock-cut temple dedicated to Lord Shiva with interesting architecture." },
        { "user": "Kate D.", "rating": 4, "comment": "Peaceful sanctuary in the middle of the busy city." }
      ]
    },
    {
      "name": "Osho Ashram",
      "image": "https://www.punetourism.co.in/images/tourist-places/osho-ashram-pune/osho-ashram-pune-tourism.jpg",
      "hours": "6:00 AM - 9:30 PM",
      "fee": "₹990 for day pass, meditation sessions extra",
      "location": "Koregaon Park, Pune",
      "rating": 4.4,
      "reviews": [
        { "user": "Aditya R.", "rating": 5, "comment": "Serene meditation resort with beautiful Zen gardens and Japanese-style architecture." },
        { "user": "Jessica T.", "rating": 4, "comment": "The active meditation sessions are unique and transformative." }
      ]
    },
    {
      "name": "Lal Mahal",
      "image": "https://www.punetourism.co.in/images/tourist-places/lal-mahal-pune/lal-mahal-pune-tourism.jpg",
      "hours": "9:00 AM - 6:00 PM",
      "fee": "Free",
      "location": "Kasba Peth, Pune",
      "rating": 4.1,
      "reviews": [
        { "user": "Harish G.", "rating": 4, "comment": "Historic palace where Shivaji Maharaj spent his childhood." },
        { "user": "Anna P.", "rating": 4, "comment": "The statue and exhibits offer insights into Maratha history." }
      ]
    },
    {
      "name": "ISKCON NVCC Temple",
      "image": "https://www.punetourism.co.in/images/tourist-places/iskcon-nvcc-temple-pune/iskcon-nvcc-temple-pune-tourism.jpg",
      "hours": "4:30 AM - 9:00 PM",
      "fee": "Free",
      "location": "Katraj-Kondhwa Road, Pune",
      "rating": 4.7,
      "reviews": [
        { "user": "Rajesh B.", "rating": 5, "comment": "Beautiful modern temple with peaceful atmosphere and excellent prasad." },
        { "user": "Amy L.", "rating": 5, "comment": "The architecture is stunning and the evening aarti is a must-see." }
      ]
    }
  ],


  Ahmedabad: [
    {
      "name": "Sabarmati Ashram",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/sabarmati-ashram-ahmedabad-tourism-entry-fee.jpg",
      "hours": "8:30 AM - 6:30 PM",
      "fee": "Free",
      "location": "Ashram Road, Ahmedabad",
      "rating": 4.6,
      "reviews": [
        { "user": "Ramesh P.", "rating": 5, "comment": "Peaceful place where Gandhiji lived and led the freedom movement." },
        { "user": "Sarah M.", "rating": 4, "comment": "The museum displays Gandhi's personal belongings and important documents." }
      ]
    },
    {
      "name": "Kankaria Lake",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/kankaria-lake-ahmedabad-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 10:00 PM",
      "fee": "₹10 for adults",
      "location": "Maninagar, Ahmedabad",
      "rating": 4.3,
      "reviews": [
        { "user": "Nitin S.", "rating": 4, "comment": "Beautiful lake with various entertainment options like zoo, toy train, and balloon safari." },
        { "user": "Emily R.", "rating": 4, "comment": "The evening lighting and musical fountain show are highlights." }
      ]
    },
    {
      "name": "Adalaj Stepwell",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/adalaj-stepwell-ahmedabad-tourism-entry-fee.jpg",
      "hours": "8:00 AM - 6:00 PM",
      "fee": "₹25 for Indians, ₹300 for foreigners",
      "location": "Adalaj Village, Gandhinagar",
      "rating": 4.5,
      "reviews": [
        { "user": "Aarti K.", "rating": 5, "comment": "Five-story stepwell with intricate carvings and fascinating history." },
        { "user": "Benjamin L.", "rating": 4, "comment": "Architectural marvel with amazing stone craftsmanship." }
      ]
    },
    {
      "name": "Akshardham Temple",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/akshardham-temple-ahmedabad-tourism-entry-fee.jpg",
      "hours": "9:30 AM - 8:00 PM (Closed on Mondays)",
      "fee": "Free",
      "location": "Gandhinagar, near Ahmedabad",
      "rating": 4.8,
      "reviews": [
        { "user": "Patel J.", "rating": 5, "comment": "Stunning pink sandstone temple with beautiful gardens and exhibitions." },
        { "user": "Amanda T.", "rating": 5, "comment": "The evening light and sound show is spectacular." }
      ]
    },
    {
      "name": "Jama Masjid",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/jama-masjid-ahmedabad-tourism-entry-fee.jpg",
      "hours": "6:00 AM - 8:00 PM",
      "fee": "Free",
      "location": "Manek Chowk, Ahmedabad",
      "rating": 4.4,
      "reviews": [
        { "user": "Ahmed F.", "rating": 4, "comment": "Beautiful 15th-century mosque with 260 pillars and intricate carvings." },
        { "user": "Rachel W.", "rating": 5, "comment": "Peaceful atmosphere and impressive Indo-Islamic architecture." }
      ]
    },
    {
      "name": "Calico Museum of Textiles",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/calico-museum-of-textiles-ahmedabad-tourism-entry-fee.jpg",
      "hours": "10:30 AM - 12:30 PM (Reservation required)",
      "fee": "Free (with prior booking)",
      "location": "Shahibaug, Ahmedabad",
      "rating": 4.7,
      "reviews": [
        { "user": "Sanjay M.", "rating": 5, "comment": "One of the finest textile museums with incredible collection of antique fabrics." },
        { "user": "Olivia P.", "rating": 4, "comment": "The guided tour provides fascinating insights into Indian textile history." }
      ]
    },
    {
      "name": "ISKCON Temple",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/iskcon-temple-ahmedabad-tourism-entry-fee.jpg",
      "hours": "4:30 AM - 9:00 PM",
      "fee": "Free",
      "location": "SG Highway, Ahmedabad",
      "rating": 4.6,
      "reviews": [
        { "user": "Deepak V.", "rating": 5, "comment": "Beautiful marble temple with peaceful atmosphere and daily aartis." },
        { "user": "Melissa H.", "rating": 4, "comment": "The temple gardens are well-maintained and the prasad is excellent." }
      ]
    },
    {
      "name": "Auto World Vintage Car Museum",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/auto-world-vintage-car-museum-ahmedabad-tourism-entry-fee.jpg",
      "hours": "10:00 AM - 5:30 PM (Closed on Mondays)",
      "fee": "₹200 for adults",
      "location": "Dastan Estate, Sarkhej-Gandhinagar Highway",
      "rating": 4.3,
      "reviews": [
        { "user": "Rajiv T.", "rating": 4, "comment": "Impressive collection of vintage cars, motorcycles, and carriages." },
        { "user": "Christopher B.", "rating": 4, "comment": "The royal buggies and cars of former maharajas are fascinating." }
      ]
    },
    {
      "name": "Law Garden Night Market",
      "image": "https://www.ahmedabadtourism.in/images/places-to-visit/headers/law-garden-night-market-ahmedabad-tourism-entry-fee.jpg",
      "hours": "4:00 PM - 11:00 PM",
      "fee": "Free",
      "location": "Ellisbridge, Ahmedabad",
      "rating": 4.2,
      "reviews": [
        { "user": "Meena G.", "rating": 4, "comment": "Vibrant market for traditional Gujarati clothing, handicrafts, and street food." },
        { "user": "Laura S.", "rating": 4, "comment": "Great place to shop for colorful chaniya cholis and try local snacks." }
      ]
    }
  ],

  Lucknow: [
    {
      "name": "Bara Imambara",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/bara-imambara-lucknow-tourism-entry-fee.jpg",
      "hours": "6:00 AM - 5:00 PM",
      "fee": "₹50 for Indians, ₹500 for foreigners",
      "location": "Husainabad, Lucknow",
      "rating": 4.7,
      "reviews": [
        { "user": "Adil M.", "rating": 5, "comment": "Magnificent architecture with the famous Bhool Bhulaiya labyrinth." },
        { "user": "Katherine W.", "rating": 5, "comment": "The majestic hall without pillars and the secret passages are incredible." }
      ]
    },
    {
      "name": "Chota Imambara",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/chota-imambara-lucknow-tourism-entry-fee.jpg",
      "hours": "6:00 AM - 5:00 PM",
      "fee": "₹25 for Indians, ₹300 for foreigners",
      "location": "Husainabad, Lucknow",
      "rating": 4.6,
      "reviews": [
        { "user": "Farah K.", "rating": 5, "comment": "Beautiful building with intricate chandeliers and mirror work." },
        { "user": "Martin S.", "rating": 4, "comment": "Also known as the Palace of Lights, stunning when illuminated at night." }
      ]
    },
    {
      "name": "Rumi Darwaza",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/rumi-darwaza-lucknow-tourism-entry-fee.jpg",
      "hours": "24 hours",
      "fee": "Free",
      "location": "Husainabad, Lucknow",
      "rating": 4.5,
      "reviews": [
        { "user": "Aryan P.", "rating": 4, "comment": "Magnificent 60-foot tall gateway inspired by Turkish architecture." },
        { "user": "Isabella M.", "rating": 5, "comment": "Impressive symbol of Lucknow with beautiful carvings and design." }
      ]
    },
    {
      "name": "British Residency",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/british-residency-lucknow-tourism-entry-fee.jpg",
      "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
      "fee": "₹5 for Indians, ₹100 for foreigners",
      "location": "Mahatma Gandhi Marg, Lucknow",
      "rating": 4.3,
      "reviews": [
        { "user": "Vikrant S.", "rating": 4, "comment": "Historic ruins from the 1857 siege with interesting museum." },
        { "user": "Emma D.", "rating": 4, "comment": "The bullet-marked walls and cemetery tell powerful stories of the rebellion." }
      ]
    },
    {
      "name": "Hazratganj Market",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/hazratganj-market-lucknow-tourism-entry-fee.jpg",
      "hours": "11:00 AM - 9:00 PM",
      "fee": "Free",
      "location": "Hazratganj, Lucknow",
      "rating": 4.4,
      "reviews": [
        { "user": "Neha R.", "rating": 4, "comment": "Historic shopping street with a mix of modern and traditional stores." },
        { "user": "William C.", "rating": 5, "comment": "Great place to shop for Chikan embroidery and enjoy local cuisine." }
      ]
    },
    {
      "name": "Ambedkar Memorial Park",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/ambedkar-memorial-park-lucknow-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 6:00 PM (Closed on Mondays)",
      "fee": "₹10 for adults",
      "location": "Gomti Nagar, Lucknow",
      "rating": 4.3,
      "reviews": [
        { "user": "Sushil K.", "rating": 4, "comment": "Vast memorial park with impressive statues and monuments." },
        { "user": "Diane T.", "rating": 4, "comment": "Beautiful red sandstone structures and well-maintained gardens." }
      ]
    },
    {
      "name": "Lucknow Zoo",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/lucknow-zoo-tourism-entry-fee.jpg",
      "hours": "8:30 AM - 5:00 PM (Closed on Mondays)",
      "fee": "₹50 for adults",
      "location": "Narhi, Hazratganj, Lucknow",
      "rating": 4.1,
      "reviews": [
        { "user": "Rakesh S.", "rating": 4, "comment": "Well-maintained zoo with good variety of animals and train ride." },
        { "user": "Sophia B.", "rating": 4, "comment": "The aquarium and reptile house are particularly interesting." }
      ]
    },
    {
      "name": "Janeshwar Mishra Park",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/janeshwar-mishra-park-lucknow-tourism-entry-fee.jpg",
      "hours": "5:00 AM - 9:00 PM",
      "fee": "₹10 for adults",
      "location": "Gomti Nagar, Lucknow",
      "rating": 4.5,
      "reviews": [
        { "user": "Amit G.", "rating": 5, "comment": "Massive eco-park with lakes, jogging tracks, and beautiful landscapes." },
        { "user": "Rebecca H.", "rating": 4, "comment": "Perfect spot for morning walks and family outings with boating facilities." }
      ]
    },
    {
      "name": "Chattar Manzil",
      "image": "https://www.lucknowonline.in/images/places-to-visit/headers/chattar-manzil-lucknow-tourism-entry-fee.jpg",
      "hours": "10:00 AM - 5:00 PM",
      "fee": "₹10 for adults",
      "location": "Kaiserbagh, Lucknow",
      "rating": 4.2,
      "reviews": [
        { "user": "Imran H.", "rating": 4, "comment": "Historic palace with unique umbrella-shaped dome and European architecture." },
        { "user": "Natalie P.", "rating": 4, "comment": "The riverside location and blend of architectural styles are fascinating." }
      ]
    }
  ],

  Indore: [
    {
      "name": "Rajwada Palace",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/rajwada-palace-indore-tourism-entry-fee.jpg",
      "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
      "fee": "₹10 for Indians, ₹100 for foreigners",
      "location": "Rajwada, Indore",
      "rating": 4.4,
      "reviews": [
        { "user": "Ankit J.", "rating": 4, "comment": "Historic seven-story palace with beautiful architecture and courtyard." },
        { "user": "Chloe R.", "rating": 5, "comment": "The evening lighting makes the palace look spectacular." }
      ]
    },
    {
      "name": "Lal Bagh Palace",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/lal-bagh-palace-indore-tourism-entry-fee.jpg",
      "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
      "fee": "₹10 for Indians, ₹100 for foreigners",
      "location": "Lalbagh, Indore",
      "rating": 4.3,
      "reviews": [
        { "user": "Rahul S.", "rating": 4, "comment": "Grand palace with European architecture and beautiful gardens." },
        { "user": "Anna K.", "rating": 4, "comment": "The interior furnishings and artifacts offer glimpses of royal lifestyle." }
      ]
    },
    {
      "name": "Sarafa Bazaar",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/sarafa-bazaar-indore-tourism-entry-fee.jpg",
      "hours": "Jewelry shops: 11:00 AM - 8:00 PM, Food stalls: 8:00 PM - 2:00 AM",
      "fee": "Free",
      "location": "Sarafa Bazaar Road, Indore",
      "rating": 4.7,
      "reviews": [
        { "user": "Ritu P.", "rating": 5, "comment": "Jewelry market by day, food paradise by night with amazing street food." },
        { "user": "Mark T.", "rating": 5, "comment": "Must visit for food lovers to try local delicacies like bhutte ka kees and garadu." }
      ]
    },
    {
      "name": "Annapurna Temple",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/annapurna-temple-indore-tourism-entry-fee.jpg",
      "hours": "5:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
      "fee": "Free",
      "location": "Annapurna Road, Indore",
      "rating": 4.6,
      "reviews": [
        { "user": "Seema G.", "rating": 5, "comment": "Beautiful white marble temple dedicated to the goddess of food." },
        { "user": "Thomas W.", "rating": 4, "comment": "Peaceful atmosphere with impressive architecture and carvings." }
      ]
    },
    {
      "name": "Patalpani Waterfall",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/patalpani-waterfall-indore-tourism-entry-fee.jpg",
      "hours": "7:00 AM - 6:00 PM",
      "fee": "Free",
      "location": "Mhow, near Indore",
      "rating": 4.2,
      "reviews": [
        { "user": "Vikas M.", "rating": 4, "comment": "Beautiful waterfall especially during monsoon season with good hiking trails." },
        { "user": "Julia S.", "rating": 4, "comment": "Natural beauty spot with spectacular 300-foot waterfall when in full flow." }
      ]
    },
    {
      "name": "Kanch Mandir",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/kanch-mandir-indore-tourism-entry-fee.jpg",
      "hours": "6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
      "fee": "Free",
      "location": "Itwaria Bazaar, Indore",
      "rating": 4.4,
      "reviews": [
        { "user": "Deepika S.", "rating": 4, "comment": "Unique Jain temple with walls, ceilings, and pillars inlaid with mirrors." },
        { "user": "Patrick L.", "rating": 5, "comment": "The intricate glasswork creates a dazzling effect with countless reflections." }
      ]
    },
    {
      "name": "Central Museum (Indore Museum)",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/central-museum-indore-tourism-entry-fee.jpg",
      "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
      "fee": "₹10 for Indians, ₹100 for foreigners",
      "location": "Navlakha, Indore",
      "rating": 4.1,
      "reviews": [
        { "user": "Rajat K.", "rating": 4, "comment": "Interesting collection of prehistoric artifacts, sculptures, and coins." },
        { "user": "Michelle P.", "rating": 4, "comment": "The Egyptian mummy and medieval armor displays are highlights." }
      ]
    },
    {
      "name": "Ralamandal Wildlife Sanctuary",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/ralamandal-wildlife-sanctuary-indore-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 5:00 PM",
      "fee": "₹15 for adults",
      "location": "Mhow Road, Indore",
      "rating": 4.0,
      "reviews": [
        { "user": "Manoj T.", "rating": 4, "comment": "Small but nice wildlife sanctuary with good hiking trails and viewpoints." },
        { "user": "Sophie G.", "rating": 4, "comment": "Peaceful getaway from the city with chances to spot various birds and deer." }
      ]
    },
    {
      "name": "Chokhi Dhani",
      "image": "https://www.indoretourism.net/images/places-to-visit/headers/chokhi-dhani-indore-tourism-entry-fee.jpg",
      "hours": "4:00 PM - 11:00 PM",
      "fee": "₹700 onwards (includes dinner and activities)",
      "location": "Khandwa Road, Indore",
      "rating": 4.3,
      "reviews": [
        { "user": "Poonam D.", "rating": 4, "comment": "Ethnic village resort with Rajasthani culture, folk performances, and cuisine." },
        { "user": "Brian K.", "rating": 4, "comment": "Fun family destination with traditional games, camel rides, and buffet dinner." }
      ]
    }
  ],

  Goa: [
    {
      "name": "Calangute Beach",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/calangute-beach-goa-tourism-entry-fee.jpg",
      "hours": "24 hours",
      "fee": "Free",
      "location": "North Goa",
      "rating": 4.3,
      "reviews": [
        { "user": "Rohit M.", "rating": 4, "comment": "Goa's largest beach with plenty of water sports and beach shacks." },
        { "user": "Samantha T.", "rating": 4, "comment": "Lively atmosphere with good restaurants and shopping options nearby." }
      ]
    },
    {
      "name": "Basilica of Bom Jesus",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/basilica-of-bom-jesus-goa-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 6:30 PM (Closed during mass times)",
      "fee": "Free",
      "location": "Old Goa",
      "rating": 4.6,
      "reviews": [
        { "user": "Francis D.", "rating": 5, "comment": "UNESCO World Heritage site with remains of St. Francis Xavier." },
        { "user": "Elizabeth R.", "rating": 4, "comment": "Beautiful Baroque architecture and significant religious history." }
      ]
    },
    {
      "name": "Fort Aguada",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/fort-aguada-goa-tourism-entry-fee.jpg",
      "hours": "8:30 AM - 5:30 PM",
      "fee": "Free",
      "location": "Candolim, North Goa",
      "rating": 4.4,
      "reviews": [
        { "user": "Ajay S.", "rating": 4, "comment": "Well-preserved 17th-century Portuguese fort with lighthouse and sea views." },
        { "user": "Jennifer L.", "rating": 5, "comment": "The sunset views from the fort are absolutely breathtaking." }
      ]
    },
    {
      "name": "Dudhsagar Falls",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/dudhsagar-falls-goa-tourism-entry-fee.jpg",
      "hours": "7:00 AM - 5:00 PM",
      "fee": "₹400 for jeep safari",
      "location": "Bhagwan Mahavir Wildlife Sanctuary",
      "rating": 4.7,
      "reviews": [
        { "user": "Suresh N.", "rating": 5, "comment": "Spectacular four-tiered waterfall especially during monsoon season." },
        { "user": "Alice B.", "rating": 4, "comment": "The jeep ride through the forest and swim in the natural pool are amazing experiences." }
      ]
    },
    {
      "name": "Anjuna Flea Market",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/anjuna-flea-market-goa-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 6:00 PM (Wednesdays only)",
      "fee": "Free",
      "location": "Anjuna Beach, North Goa",
      "rating": 4.5,
      "reviews": [
        { "user": "Priya T.", "rating": 5, "comment": "Vibrant market with clothing, jewelry, handicrafts, and local food." },
        { "user": "Robert M.", "rating": 4, "comment": "Great place to shop for souvenirs and experience Goa's hippie culture." }
      ]
    },
    {
      "name": "Palolem Beach",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/palolem-beach-goa-tourism-entry-fee.jpg",
      "hours": "24 hours",
      "fee": "Free",
      "location": "Canacona, South Goa",
      "rating": 4.8,
      "reviews": [
        { "user": "Karan V.", "rating": 5, "comment": "Crescent-shaped beach with pristine waters and dolphin spotting trips." },
        { "user": "Maria G.", "rating": 5, "comment": "More relaxed than North Goa beaches with beautiful beachfront huts." }
      ]
    },
    {
      "name": "Spice Plantations (Sahakari Farms)",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/spice-plantations-goa-tourism-entry-fee.jpg",
      "hours": "9:00 AM - 5:00 PM",
      "fee": "₹400 (includes spice tour and lunch)",
      "location": "Ponda, Goa",
      "rating": 4.3,
      "reviews": [
        { "user": "Vikash P.", "rating": 4, "comment": "Educational tour with variety of spices, medicinal plants, and wildlife." },
        { "user": "Christine D.", "rating": 4, "comment": "The traditional Goan lunch and welcome drink are delicious." }
      ]
    },
    {
      "name": "Chapora Fort",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/chapora-fort-goa-tourism-entry-fee.jpg",
      "hours": "9:30 AM - 5:30 PM",
      "fee": "Free",
      "location": "Bardez, North Goa",
      "rating": 4.2,
      "reviews": [
        { "user": "Dinesh R.", "rating": 4, "comment": "Famous from the movie 'Dil Chahta Hai' with panoramic views of nearby beaches." },
        { "user": "Paul S.", "rating": 4, "comment": "The hike up is worth it for the stunning views of Vagator and Anjuna beaches." }
      ]
    },
    {
      "name": "Baga Beach",
      "image": "https://www.goatourism.gov.in/images/places-to-visit/headers/baga-beach-goa-tourism-entry-fee.jpg",
      "hours": "24 hours",
      "fee": "Free (water sports extra)",
      "location": "North Goa",
      "rating": 4.4,
      "reviews": [
        { "user": "Amit B.", "rating": 4, "comment": "Popular beach with vibrant nightlife, water sports, and beach clubs." },
        { "user": "Lauren H.", "rating": 5, "comment": "Lively atmosphere with excellent beach shacks and famous Tito's Lane nearby." }
      ]
    }
  ],

    Chandigarh: [
      {
        "name": "Rock Garden",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/rock-garden-chandigarh-tourism-entry-fee.jpg",
        "hours": "9:00 AM - 7:00 PM",
        "fee": "₹30 for adults, ₹10 for children",
        "location": "Sector 1, Chandigarh",
        "rating": 4.6,
        "reviews": [
          { "user": "Aditya K.", "rating": 5, "comment": "Unique sculpture garden created from industrial and urban waste by Nek Chand." },
          { "user": "Jessica T.", "rating": 4, "comment": "Fascinating collection of sculptures made from recycled materials in a maze-like setting." }
        ]
      },
      {
        "name": "Sukhna Lake",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/sukhna-lake-chandigarh-tourism-entry-fee.jpg",
        "hours": "5:00 AM - 9:00 PM",
        "fee": "Free (boating extra)",
        "location": "Sector 1, Chandigarh",
        "rating": 4.5,
        "reviews": [
          { "user": "Rahul M.", "rating": 5, "comment": "Peaceful man-made lake with a 3 km walking track and beautiful sunset views." },
          { "user": "Sarah P.", "rating": 4, "comment": "Perfect place for morning walks, boating, and watching migratory birds in winter." }
        ]
      },
      {
        "name": "Capitol Complex",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/capitol-complex-chandigarh-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
        "fee": "Free (prior permission required)",
        "location": "Sector 1, Chandigarh",
        "rating": 4.7,
        "reviews": [
          { "user": "Vikas S.", "rating": 5, "comment": "UNESCO World Heritage site designed by Le Corbusier with the High Court, Assembly, and Secretariat." },
          { "user": "Emma L.", "rating": 4, "comment": "Magnificent modernist architecture with the iconic Open Hand Monument." }
        ]
      },
      {
        "name": "Rose Garden",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/rose-garden-chandigarh-tourism-entry-fee.jpg",
        "hours": "6:00 AM - 8:00 PM",
        "fee": "Free",
        "location": "Sector 16, Chandigarh",
        "rating": 4.4,
        "reviews": [
          { "user": "Neha G.", "rating": 4, "comment": "Asia's largest rose garden with over 1600 species of roses and an annual Rose Festival." },
          { "user": "David M.", "rating": 5, "comment": "Beautiful garden with well-maintained walkways and medicinal plant section." }
        ]
      },
      {
        "name": "Government Museum and Art Gallery",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/government-museum-art-gallery-chandigarh-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 5:30 PM (Closed on Mondays)",
        "fee": "₹10 for adults",
        "location": "Sector 10, Chandigarh",
        "rating": 4.3,
        "reviews": [
          { "user": "Anand P.", "rating": 4, "comment": "Houses Gandhara sculptures, miniature paintings, and contemporary Indian art." },
          { "user": "Michelle K.", "rating": 4, "comment": "Impressive collection with works by Le Corbusier and modern Indian artists." }
        ]
      },
      {
        "name": "Pinjore Gardens",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/pinjore-gardens-chandigarh-tourism-entry-fee.jpg",
        "hours": "7:00 AM - 9:00 PM",
        "fee": "₹30 for adults",
        "location": "Pinjore, 20 km from Chandigarh",
        "rating": 4.2,
        "reviews": [
          { "user": "Vishal M.", "rating": 4, "comment": "17th century Mughal style garden with fountains, pavilions, and mini zoo." },
          { "user": "Natalie P.", "rating": 4, "comment": "Beautifully landscaped with seasonal festivals and heritage structures." }
        ]
      },
      {
        "name": "Terraced Garden",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/terraced-garden-chandigarh-tourism-entry-fee.jpg",
        "hours": "6:00 AM - 8:00 PM",
        "fee": "Free",
        "location": "Sector 33, Chandigarh",
        "rating": 4.1,
        "reviews": [
          { "user": "Simran K.", "rating": 4, "comment": "Seven-level garden with beautiful flowers, musical fountain, and walking paths." },
          { "user": "Mark T.", "rating": 4, "comment": "Perfect spot for evening strolls with well-maintained terraces and seating areas." }
        ]
      },
      {
        "name": "Chhatbir Zoo",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/chhatbir-zoo-chandigarh-tourism-entry-fee.jpg",
        "hours": "9:00 AM - 5:00 PM (Closed on Mondays)",
        "fee": "₹120 for adults, ₹60 for children",
        "location": "Zirakpur, 17 km from Chandigarh",
        "rating": 4.2,
        "reviews": [
          { "user": "Neeraj S.", "rating": 4, "comment": "Sprawling zoo with lion and deer safaris, aquarium, and well-kept enclosures." },
          { "user": "Amelia R.", "rating": 4, "comment": "Good collection of animals with spacious environments and battery-operated carts available." }
        ]
      },
      {
        "name": "Elante Mall",
        "image": "https://www.chandigarhtourism.gov.in/images/places-to-visit/headers/elante-mall-chandigarh-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 10:00 PM",
        "fee": "Free",
        "location": "Industrial Area Phase 1, Chandigarh",
        "rating": 4.5,
        "reviews": [
          { "user": "Gaurav P.", "rating": 5, "comment": "North India's largest shopping mall with international brands, food court, and multiplex." },
          { "user": "Sophie W.", "rating": 4, "comment": "Modern shopping complex with excellent dining options and entertainment facilities." }
        ]
      }
    ],
    
    Bhopal: [
      {
        "name": "Upper Lake (Bhojtal)",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/upper-lake-bhopal-tourism-entry-fee.jpg",
        "hours": "6:00 AM - 8:00 PM",
        "fee": "Free (boating extra)",
        "location": "Shyamla Hills, Bhopal",
        "rating": 4.5,
        "reviews": [
          { "user": "Ravi S.", "rating": 5, "comment": "One of the oldest man-made lakes in India with beautiful sunset views and boating options." },
          { "user": "Katherine B.", "rating": 4, "comment": "Serene atmosphere with walkways, food stalls, and various water activities." }
        ]
      },
      {
        "name": "Sanchi Stupa",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/sanchi-stupa-bhopal-tourism-entry-fee.jpg",
        "hours": "8:30 AM - 5:30 PM",
        "fee": "₹30 for Indians, ₹500 for foreigners",
        "location": "Sanchi, 46 km from Bhopal",
        "rating": 4.8,
        "reviews": [
          { "user": "Raj P.", "rating": 5, "comment": "UNESCO World Heritage site with Buddhist monuments dating back to the 3rd century BCE." },
          { "user": "Amanda J.", "rating": 5, "comment": "The detailed stone carvings and ancient architecture are truly breathtaking." }
        ]
      },
      {
        "name": "Bhimbetka Rock Shelters",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/bhimbetka-rock-shelters-bhopal-tourism-entry-fee.jpg",
        "hours": "9:00 AM - 5:00 PM (Closed on Mondays)",
        "fee": "₹25 for Indians, ₹300 for foreigners",
        "location": "Raisen District, 45 km from Bhopal",
        "rating": 4.7,
        "reviews": [
          { "user": "Alok M.", "rating": 5, "comment": "UNESCO site with prehistoric cave paintings dating back to 30,000 years ago." },
          { "user": "Rebecca T.", "rating": 4, "comment": "Fascinating glimpse into prehistoric life with well-preserved rock art." }
        ]
      },
      {
        "name": "Taj-ul-Masajid",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/taj-ul-masajid-bhopal-tourism-entry-fee.jpg",
        "hours": "6:00 AM - 8:00 PM (Closed during prayer times)",
        "fee": "Free",
        "location": "Kohefiza, Bhopal",
        "rating": 4.6,
        "reviews": [
          { "user": "Imran K.", "rating": 5, "comment": "One of Asia's largest mosques with beautiful pink façade and marble domes." },
          { "user": "Sophia R.", "rating": 4, "comment": "Impressive architecture with peaceful courtyard and prayer hall." }
        ]
      },
      {
        "name": "Madhya Pradesh Tribal Museum",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/tribal-museum-bhopal-tourism-entry-fee.jpg",
        "hours": "12:00 PM - 7:30 PM (Closed on Mondays)",
        "fee": "₹10 for Indians, ₹250 for foreigners",
        "location": "Shyamla Hills, Bhopal",
        "rating": 4.7,
        "reviews": [
          { "user": "Deepak S.", "rating": 5, "comment": "Stunning displays of tribal art, culture, and lifestyle of different tribes of MP." },
          { "user": "Claire N.", "rating": 4, "comment": "Beautifully curated museum with impressive life-sized recreations of tribal homes." }
        ]
      },
      {
        "name": "Van Vihar National Park",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/van-vihar-national-park-bhopal-tourism-entry-fee.jpg",
        "hours": "6:30 AM - 5:30 PM",
        "fee": "₹15 for Indians, ₹150 for foreigners",
        "location": "Shyamla Hills, Bhopal",
        "rating": 4.3,
        "reviews": [
          { "user": "Arun T.", "rating": 4, "comment": "Zoo-cum-safari park with tigers, lions, bears, and various bird species." },
          { "user": "Jennifer K.", "rating": 4, "comment": "Well-maintained wildlife sanctuary with cycling tracks and beautiful lake views." }
        ]
      },
      {
        "name": "Shaukat Mahal",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/shaukat-mahal-bhopal-tourism-entry-fee.jpg",
        "hours": "8:00 AM - 6:00 PM",
        "fee": "Free",
        "location": "Near Iqbal Maidan, Bhopal",
        "rating": 4.1,
        "reviews": [
          { "user": "Pradeep R.", "rating": 4, "comment": "Unique blend of Indo-Islamic and European architecture with Gothic influences." },
          { "user": "Hannah T.", "rating": 4, "comment": "Historical palace with interesting design elements and architectural details." }
        ]
      },
      {
        "name": "Gohar Mahal",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/gohar-mahal-bhopal-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 5:00 PM",
        "fee": "Free",
        "location": "Near Shyamla Hills, Bhopal",
        "rating": 4.0,
        "reviews": [
          { "user": "Samir K.", "rating": 4, "comment": "Historic palace built by the first female ruler of Bhopal with beautiful architecture." },
          { "user": "Victoria M.", "rating": 4, "comment": "Blend of Hindu and Mughal architectural styles with arts and crafts exhibitions." }
        ]
      },
      {
        "name": "Lower Lake (Chhota Talaab)",
        "image": "https://www.mptourism.com/images/places-to-visit/headers/lower-lake-bhopal-tourism-entry-fee.jpg",
        "hours": "24 hours",
        "fee": "Free",
        "location": "Central Bhopal",
        "rating": 4.2,
        "reviews": [
          { "user": "Vikrant S.", "rating": 4, "comment": "Connects to Upper Lake via a bridge with gardens and jogging tracks around." },
          { "user": "Kelly P.", "rating": 4, "comment": "Beautiful early morning spot with boating facilities and walkways." }
        ]
      }
    ],
    Guwahati: [
      {
        "name": "Kamakhya Temple",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/kamakhya-temple-guwahati-tourism-entry-fee.jpg",
        "hours": "5:30 AM - 7:30 PM",
        "fee": "Free",
        "location": "Nilachal Hill, Guwahati",
        "rating": 4.7,
        "reviews": [
          { "user": "Pranab B.", "rating": 5, "comment": "One of the oldest and most revered Shakti temples in India with unique architecture." },
          { "user": "Lisa O.", "rating": 4, "comment": "Important pilgrimage site with spiritual atmosphere and panoramic city views." }
        ]
      },
      {
        "name": "Umananda Temple",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/umananda-temple-guwahati-tourism-entry-fee.jpg",
        "hours": "6:00 AM - 6:00 PM",
        "fee": "Free (ferry charge extra)",
        "location": "Peacock Island, Brahmaputra River",
        "rating": 4.5,
        "reviews": [
          { "user": "Ankit D.", "rating": 5, "comment": "Beautiful Shiva temple on the smallest inhabited river island with golden-langur monkeys." },
          { "user": "Rachel B.", "rating": 4, "comment": "The ferry ride and island views make this a unique spiritual experience." }
        ]
      },
      {
        "name": "Assam State Museum",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/assam-state-museum-guwahati-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
        "fee": "₹20 for Indians, ₹500 for foreigners",
        "location": "Dighali Pukhuri, Guwahati",
        "rating": 4.3,
        "reviews": [
          { "user": "Sanjay G.", "rating": 4, "comment": "Comprehensive collection of archaeological artifacts, sculptures, and tribal cultural items." },
          { "user": "Karen W.", "rating": 4, "comment": "Well-organized museum with excellent displays of local history and culture." }
        ]
      },
      {
        "name": "Brahmaputra River Cruise",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/brahmaputra-river-cruise-guwahati-tourism-entry-fee.jpg",
        "hours": "3:00 PM - 5:00 PM (multiple departures)",
        "fee": "₹350 per person",
        "location": "Fancy Bazar Ghat, Guwahati",
        "rating": 4.6,
        "reviews": [
          { "user": "Mohan L.", "rating": 5, "comment": "Sunset cruise offering spectacular views of the mighty river and Guwahati skyline." },
          { "user": "Emily S.", "rating": 4, "comment": "Relaxing boat ride with good food options and cultural performances." }
        ]
      },
      {
        "name": "Pobitora Wildlife Sanctuary",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/pobitora-wildlife-sanctuary-guwahati-tourism-entry-fee.jpg",
        "hours": "7:00 AM - 3:00 PM",
        "fee": "₹100 for Indians, ₹500 for foreigners (safari extra)",
        "location": "Morigaon, 45 km from Guwahati",
        "rating": 4.4,
        "reviews": [
          { "user": "Vivek R.", "rating": 4, "comment": "Highest density of one-horned rhinos with excellent jeep and elephant safaris." },
          { "user": "Sophia K.", "rating": 5, "comment": "Better chances of spotting rhinos than even Kaziranga, with fewer tourists." }
        ]
      },
      {
        "name": "Srimanta Sankardeva Kalakshetra",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/srimanta-sankardeva-kalakshetra-guwahati-tourism-entry-fee.jpg",
        "hours": "9:30 AM - 5:30 PM (Closed on Mondays)",
        "fee": "₹50 for adults",
        "location": "Panjabari, Guwahati",
        "rating": 4.5,
        "reviews": [
          { "user": "Binod D.", "rating": 5, "comment": "Cultural museum showcasing Assamese heritage with performances and exhibits." },
          { "user": "Julia M.", "rating": 4, "comment": "Beautiful architecture with open-air theater and regional art displays." }
        ]
      },
      {
        "name": "Guwahati Planetarium",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/guwahati-planetarium-guwahati-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 6:00 PM (Shows: 12 PM, 1:30 PM, 3 PM)",
        "fee": "₹50 per person",
        "location": "M.G. Road, Guwahati",
        "rating": 4.1,
        "reviews": [
          { "user": "Rahul G.", "rating": 4, "comment": "Informative astronomy shows with comfortable seating and modern projectors." },
          { "user": "Rebecca H.", "rating": 4, "comment": "Educational experience with shows in both English and Assamese." }
        ]
      },
      {
        "name": "Fancy Bazaar",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/fancy-bazaar-guwahati-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 8:00 PM (Closed on Sundays)",
        "fee": "Free",
        "location": "Central Guwahati",
        "rating": 4.0,
        "reviews": [
          { "user": "Pradeep M.", "rating": 4, "comment": "Bustling wholesale market with textiles, handicrafts, and local food products." },
          { "user": "Melissa J.", "rating": 4, "comment": "Great place to shop for traditional Assamese silk and handloom products." }
        ]
      },
      {
        "name": "Assam State Zoo",
        "image": "https://www.assamtourism.gov.in/images/places-to-visit/headers/assam-state-zoo-guwahati-tourism-entry-fee.jpg",
        "hours": "8:00 AM - 4:30 PM (Closed on Mondays)",
        "fee": "₹60 for adults, ₹20 for children",
        "location": "Japorigog, Guwahati",
        "rating": 4.2,
        "reviews": [
          { "user": "Arnab G.", "rating": 4, "comment": "One of the largest zoos in Northeast India with many endangered species." },
          { "user": "Sarah L.", "rating": 4, "comment": "Well-maintained zoo with good collection of big cats and one-horned rhinos." }
        ]
      }
    ],
    Mysore:[
      {
        "name": "Mysore Palace",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/mysore-palace-mysore-tourism-entry-fee.jpg",
        "hours": "10:00 AM - 5:30 PM (Light show: 7:00 PM - 8:00 PM)",
        "fee": "₹70 for Indians, ₹300 for foreigners",
        "location": "Sayyaji Rao Road, Mysore",
        "rating": 4.8,
        "reviews": [
          { "user": "Siddharth N.", "rating": 5, "comment": "Stunning Indo-Saracenic architecture with opulent interiors and beautifully illuminated at night." },
          { "user": "Olivia P.", "rating": 5, "comment": "The Sunday light show transforms this already magnificent palace into a magical experience." }
        ]
      },
      {
        "name": "Chamundi Hills",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/chamundi-hills-mysore-tourism-entry-fee.jpg",
        "hours": "6:00 AM - 8:00 PM",
        "fee": "Free (temple entry)",
        "location": "13 km from Mysore City",
        "rating": 4.6,
        "reviews": [
          { "user": "Karthik R.", "rating": 5, "comment": "Sacred hill with Chamundeshwari Temple, Nandi statue, and panoramic city views." },
          { "user": "Nicole F.", "rating": 4, "comment": "The 1000 steps climb is rewarding with beautiful views and religious significance." }
        ]
      },
      {
        "name": "St. Philomena's Cathedral",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/st-philomenas-cathedral-mysore-tourism-entry-fee.jpg",
        "hours": "5:00 AM - 6:00 PM",
        "fee": "Free",
        "location": "Ashoka Road, Mysore",
        "rating": 4.5,
        "reviews": [
          { "user": "Prakash T.", "rating": 4, "comment": "Neo-Gothic architecture inspired by Germany's Cologne Cathedral with beautiful stained glass." },
          { "user": "Laura B.", "rating": 5, "comment": "One of India's largest churches with peaceful atmosphere and impressive twin spires." }
        ]
      },
      {
        "name": "Brindavan Gardens",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/brindavan-gardens-mysore-tourism-entry-fee.jpg",
        "hours": "6:30 AM - 8:00 PM (Musical fountain: 7:00 PM)",
        "fee": "₹30 for adults",
        "location": "KRS Dam, 24 km from Mysore",
        "rating": 4.3,
        "reviews": [
          { "user": "Ramesh K.", "rating": 4, "comment": "Terraced gardens below Krishna Raja Sagara dam with musical fountain shows." },
          { "user": "Hannah G.", "rating": 4, "comment": "Beautiful symmetrical garden with boating options and evening light show." }
        ]
      },
      {
        "name": "Mysore Zoo",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/mysore-zoo-mysore-tourism-entry-fee.jpg",
        "hours": "8:30 AM - 5:30 PM (Closed on Tuesdays)",
        "fee": "₹80 for adults, ₹40 for children",
        "location": "Indiranagar, Mysore",
        "rating": 4.4,
        "reviews": [
          { "user": "Arjun S.", "rating": 4, "comment": "One of India's oldest and most well-maintained zoos with wide variety of animals." },
          { "user": "Megan R.", "rating": 5, "comment": "Spacious enclosures with good collection of exotic species and clean walking paths." }
        ]
      },
      {
        "name": "Devaraja Market",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/devaraja-market-mysore-tourism-entry-fee.jpg",
        "hours": "6:00 AM - 8:00 PM",
        "fee": "Free",
        "location": "Sayyaji Rao Road, Mysore",
        "rating": 4.2,
        "reviews": [
          { "user": "Manju L.", "rating": 4, "comment": "Traditional market with vibrant displays of flowers, spices, fruits, and sandalwood products." },
          { "user": "Thomas S.", "rating": 4, "comment": "Authentic local shopping experience with reasonable prices and friendly vendors." }
        ]
      },
      {
        "name": "Karanji Lake",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/karanji-lake-mysore-tourism-entry-fee.jpg",
        "hours": "8:30 AM - 5:30 PM",
        "fee": "₹50 for adults, ₹25 for children",
        "location": "Near Zoo, Mysore",
        "rating": 4.3,
        "reviews": [
          { "user": "Sunil B.", "rating": 4, "comment": "Beautiful lake with bird sanctuary, butterfly park, and boating facilities." },
          { "user": "Emma K.", "rating": 5, "comment": "The walk-through aviary is the largest in India with impressive collection of birds." }
        ]
      },
      {
        "name": "Railway Museum",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/railway-museum-mysore-tourism-entry-fee.jpg",
        "hours": "9:30 AM - 5:30 PM (Closed on Mondays)",
        "fee": "₹25 for adults, ₹15 for children",
        "location": "KRS Road, Mysore",
        "rating": 4.2,
        "reviews": [
          { "user": "Rajesh T.", "rating": 4, "comment": "Outdoor museum with vintage locomotives, royal coaches, and railway artifacts." },
          { "user": "Catherine M.", "rating": 4, "comment": "Mini train ride and well-preserved historical engines make it enjoyable for all ages." }
        ]
      },
      {
        "name": "Jaganmohan Palace Art Gallery",
        "image": "https://www.karnatakatourism.org/images/places-to-visit/headers/jaganmohan-palace-mysore-tourism-entry-fee.jpg",
        "hours": "8:30 AM - 5:00 PM",
        "fee": "₹100 for adults",
        "location": "Jayachamarajendra Wadiyar Circle, Mysore",
        "rating": 4.4,
        "reviews": [
          { "user": "Nitin R.", "rating": 5, "comment": "Former royal palace housing impressive collection of paintings, sculptures, and artifacts." },
          { "user": "Diane P.", "rating": 4, "comment": "Beautiful traditional architecture with extensive collection of Raja Ravi Varma paintings." }
        ]
      }
    ],
      Udaipur: [
        {
          "name": "City Palace",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/city-palace-udaipur-tourism-entry-fee.jpg",
          "hours": "9:30 AM - 5:30 PM",
          "fee": "₹300 for Indians, ₹700 for foreigners",
          "location": "Old City, Udaipur",
          "rating": 4.7,
          "reviews": [
            { "user": "Aditi S.", "rating": 5, "comment": "Magnificent royal palace complex with stunning architecture, courtyards, and lake views." },
            { "user": "Michael T.", "rating": 5, "comment": "The blend of Rajasthani and Mughal architectural styles creates an unforgettable experience." }
          ]
        },
        {
          "name": "Lake Pichola",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/lake-pichola-udaipur-tourism-entry-fee.jpg",
          "hours": "Open 24 hours (Boat rides: 9:00 AM - 6:00 PM)",
          "fee": "Free (Boat ride: ₹400 per person)",
          "location": "City Center, Udaipur",
          "rating": 4.8,
          "reviews": [
            { "user": "Priya M.", "rating": 5, "comment": "Breathtaking artificial lake with the famous Lake Palace and city views reflected in its waters." },
            { "user": "Jennifer H.", "rating": 5, "comment": "The sunset boat ride offers magical views of illuminated palaces and surrounding Aravalli hills." }
          ]
        },
        {
          "name": "Jag Mandir",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/jag-mandir-udaipur-tourism-entry-fee.jpg",
          "hours": "10:00 AM - 6:00 PM",
          "fee": "Included in Lake Pichola boat ride",
          "location": "Lake Pichola, Udaipur",
          "rating": 4.5,
          "reviews": [
            { "user": "Vikram J.", "rating": 4, "comment": "Tranquil island palace with beautiful stone elephants at entrance and lush gardens." },
            { "user": "Sarah K.", "rating": 5, "comment": "Known as 'Lake Garden Palace,' it offered refuge to Shah Jahan and inspired Taj Mahal elements." }
          ]
        },
        {
          "name": "Saheliyon Ki Bari",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/saheliyon-ki-bari-udaipur-tourism-entry-fee.jpg",
          "hours": "9:00 AM - 5:00 PM",
          "fee": "₹50 for Indians, ₹100 for foreigners",
          "location": "Fateh Sagar Lake Area, Udaipur",
          "rating": 4.3,
          "reviews": [
            { "user": "Rashmi P.", "rating": 4, "comment": "Ornate garden with lotus pools, marble pavilions, and fountains built for royal ladies." },
            { "user": "David M.", "rating": 4, "comment": "Peaceful retreat with beautiful fountains that once used only rainwater for operation." }
          ]
        },
        {
          "name": "Jagdish Temple",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/jagdish-temple-udaipur-tourism-entry-fee.jpg",
          "hours": "5:00 AM - 12:00 PM & 4:00 PM - 8:00 PM",
          "fee": "Free",
          "location": "Near City Palace, Udaipur",
          "rating": 4.6,
          "reviews": [
            { "user": "Anant R.", "rating": 5, "comment": "Indo-Aryan style temple with intricate carvings and a prominent 79 ft spire." },
            { "user": "Rebecca L.", "rating": 4, "comment": "Active Hindu temple with beautiful sculptures and vibrant atmosphere of devotion." }
          ]
        },
        {
          "name": "Monsoon Palace",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/monsoon-palace-udaipur-tourism-entry-fee.jpg",
          "hours": "9:00 AM - 6:00 PM",
          "fee": "₹200 for Indians, ₹300 for foreigners",
          "location": "Sajjangarh Hill, Udaipur",
          "rating": 4.2,
          "reviews": [
            { "user": "Deepak S.", "rating": 4, "comment": "Hilltop palace offering panoramic views of Udaipur's lakes, palaces, and surrounding hills." },
            { "user": "Lisa W.", "rating": 4, "comment": "The sunset views make the uphill journey worthwhile, featured in James Bond film 'Octopussy'." }
          ]
        },
        {
          "name": "Fateh Sagar Lake",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/fateh-sagar-lake-udaipur-tourism-entry-fee.jpg",
          "hours": "Open 24 hours (Boat rides: 8:00 AM - 6:00 PM)",
          "fee": "Free (Boat ride: ₹300 per person)",
          "location": "North of City Center, Udaipur",
          "rating": 4.5,
          "reviews": [
            { "user": "Rahul T.", "rating": 5, "comment": "Beautiful artificial lake with three islands including a solar observatory and garden." },
            { "user": "Emily R.", "rating": 4, "comment": "Less crowded than Lake Pichola with peaceful atmosphere and mountain backdrop." }
          ]
        },
        {
          "name": "Vintage Car Museum",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/vintage-car-museum-udaipur-tourism-entry-fee.jpg",
          "hours": "9:00 AM - 9:00 PM",
          "fee": "₹350 for adults",
          "location": "Gulab Bagh Road, Udaipur",
          "rating": 4.4,
          "reviews": [
            { "user": "Karan M.", "rating": 4, "comment": "Collection of classic and vintage vehicles including Rolls-Royces used by Maharajas." },
            { "user": "Patricia H.", "rating": 5, "comment": "Well-maintained vintage cars with detailed history cards and palace memorabilia." }
          ]
        },
        {
          "name": "Eklingji Temple",
          "image": "https://www.rajasthantourism.gov.in/images/places-to-visit/headers/eklingji-temple-udaipur-tourism-entry-fee.jpg",
          "hours": "4:30 AM - 7:00 PM",
          "fee": "Free",
          "location": "22 km from Udaipur",
          "rating": 4.7,
          "reviews": [
            { "user": "Sachin J.", "rating": 5, "comment": "Ancient temple complex with 108 shrines and spectacular marble and sandstone architecture." },
            { "user": "Katherine B.", "rating": 4, "comment": "Sacred site considered the ruling deity of Mewar royalty with spiritual atmosphere." }
          ]
        }
      ],
      Varanasi: [
        {
          "name": "Dashashwamedh Ghat",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/dashashwamedh-ghat-varanasi-tourism-entry-fee.jpg",
          "hours": "Open 24 hours (Ganga Aarti: 6:30 PM - 7:30 PM)",
          "fee": "Free",
          "location": "Old City, Varanasi",
          "rating": 4.8,
          "reviews": [
            { "user": "Amar S.", "rating": 5, "comment": "The most famous and vibrant ghat known for spectacular evening Ganga Aarti ceremony." },
            { "user": "Jessica P.", "rating": 5, "comment": "An unforgettable spiritual experience with fire rituals, chanting, and flowers floating on water." }
          ]
        },
        {
          "name": "Kashi Vishwanath Temple",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/kashi-vishwanath-temple-varanasi-tourism-entry-fee.jpg",
          "hours": "3:00 AM - 11:00 PM",
          "fee": "Free (Special darshan: ₹300)",
          "location": "Vishwanath Gali, Varanasi",
          "rating": 4.7,
          "reviews": [
            { "user": "Vivek R.", "rating": 5, "comment": "One of the holiest Shiva temples with gold-plated spire and spiritual significance." },
            { "user": "Amanda H.", "rating": 4, "comment": "The newly constructed corridor provides better access to this ancient sacred site." }
          ]
        },
        {
          "name": "Manikarnika Ghat",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/manikarnika-ghat-varanasi-tourism-entry-fee.jpg",
          "hours": "Open 24 hours",
          "fee": "Free",
          "location": "Old City, Varanasi",
          "rating": 4.5,
          "reviews": [
            { "user": "Rajeev K.", "rating": 5, "comment": "Primary cremation ghat where Hindu funeral rituals have been performed for centuries." },
            { "user": "Sophia G.", "rating": 4, "comment": "A profound place to witness the Hindu belief in liberation through death in sacred Varanasi." }
          ]
        },
        {
          "name": "Sarnath",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/sarnath-varanasi-tourism-entry-fee.jpg",
          "hours": "8:00 AM - 5:00 PM",
          "fee": "₹25 for Indians, ₹300 for foreigners (Archaeological Site)",
          "location": "10 km from Varanasi",
          "rating": 4.6,
          "reviews": [
            { "user": "Ajay N.", "rating": 5, "comment": "Buddhist pilgrimage site where Buddha gave his first sermon after enlightenment." },
            { "user": "Rachel D.", "rating": 4, "comment": "Archaeological museum houses the famous Ashoka Pillar and other Buddhist artifacts." }
          ]
        },
        {
          "name": "Assi Ghat",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/assi-ghat-varanasi-tourism-entry-fee.jpg",
          "hours": "Open 24 hours (Morning yoga: 5:00 AM - 7:00 AM)",
          "fee": "Free",
          "location": "Southern end of Varanasi",
          "rating": 4.4,
          "reviews": [
            { "user": "Nikhil T.", "rating": 4, "comment": "Popular for morning yoga sessions, cultural events, and less crowded atmosphere." },
            { "user": "Lauren M.", "rating": 5, "comment": "The southernmost ghat offering authentic local experiences and beautiful sunrise views." }
          ]
        },
        {
          "name": "Banaras Hindu University",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/banaras-hindu-university-varanasi-tourism-entry-fee.jpg",
          "hours": "Campus: 24 hours (Museum: 10:00 AM - 5:00 PM, Closed Sundays)",
          "fee": "Free (Campus), ₹100 for New Vishwanath Temple Museum",
          "location": "Lanka, Varanasi",
          "rating": 4.5,
          "reviews": [
            { "user": "Sanjay P.", "rating": 4, "comment": "Largest residential university in Asia with beautiful campus, temple, and museum." },
            { "user": "Christine B.", "rating": 5, "comment": "The Bharat Kala Bhavan museum houses rare manuscripts and art collections." }
          ]
        },
        {
          "name": "Ramnagar Fort",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/ramnagar-fort-varanasi-tourism-entry-fee.jpg",
          "hours": "10:00 AM - 5:00 PM",
          "fee": "₹15 for Indians, ₹200 for foreigners",
          "location": "Across Ganges, Eastern Bank",
          "rating": 4.2,
          "reviews": [
            { "user": "Rakesh M.", "rating": 4, "comment": "18th-century sandstone fort with museum displaying royal artifacts and vintage cars." },
            { "user": "Alex W.", "rating": 4, "comment": "Offers beautiful sunset views of the Ganges and hosts famous Ramlila performances." }
          ]
        },
        {
          "name": "Tulsi Manas Temple",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/tulsi-manas-temple-varanasi-tourism-entry-fee.jpg",
          "hours": "5:30 AM - 12:00 PM & 3:30 PM - 9:00 PM",
          "fee": "Free",
          "location": "Sankat Mochan Road, Varanasi",
          "rating": 4.3,
          "reviews": [
            { "user": "Alok B.", "rating": 4, "comment": "Modern white marble temple where Tulsidas is believed to have written the Ramcharitmanas." },
            { "user": "Melissa K.", "rating": 4, "comment": "Verses from Ramcharitmanas are inscribed on temple walls with beautiful carvings." }
          ]
        },
        {
          "name": "Alamgir Mosque",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/alamgir-mosque-varanasi-tourism-entry-fee.jpg",
          "hours": "5:00 AM - 9:00 PM",
          "fee": "Free",
          "location": "Panchganga Ghat, Varanasi",
          "rating": 4.4,
          "reviews": [
            { "user": "Farhan A.", "rating": 5, "comment": "Magnificent mosque built by Aurangzeb with blend of Hindu and Islamic architectural styles." },
            { "user": "Elizabeth T.", "rating": 4, "comment": "Also known as Beni Madhav ka Darera with impressive towers and riverside location." }
          ]
        }
      ],
      Agra: [
        {
          "name": "Taj Mahal",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/taj-mahal-agra-tourism-entry-fee.jpg",
          "hours": "Sunrise to sunset (Closed on Fridays)",
          "fee": "₹50 for Indians, ₹1100 for foreigners",
          "location": "Dharmapuri, Forest Colony, Agra",
          "rating": 4.9,
          "reviews": [
            { "user": "Rajiv S.", "rating": 5, "comment": "UNESCO World Heritage site and one of the world's most iconic monuments of eternal love." },
            { "user": "Eleanor J.", "rating": 5, "comment": "The white marble mausoleum's intricate inlay work and perfect symmetry are breathtaking." }
          ]
        },
        {
          "name": "Agra Fort",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/agra-fort-agra-tourism-entry-fee.jpg",
          "hours": "6:00 AM - 6:00 PM",
          "fee": "₹40 for Indians, ₹550 for foreigners",
          "location": "Rakabganj, Agra",
          "rating": 4.7,
          "reviews": [
            { "user": "Anand V.", "rating": 5, "comment": "UNESCO site with red sandstone buildings and marble palaces from Mughal era." },
            { "user": "Victoria P.", "rating": 4, "comment": "Historical fortress with impressive architecture and views of Taj Mahal in distance." }
          ]
        },
        {
          "name": "Fatehpur Sikri",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/fatehpur-sikri-agra-tourism-entry-fee.jpg",
          "hours": "6:00 AM - 6:00 PM",
          "fee": "₹35 for Indians, ₹550 for foreigners",
          "location": "40 km from Agra",
          "rating": 4.6,
          "reviews": [
            { "user": "Mohit G.", "rating": 5, "comment": "UNESCO site and former Mughal capital with impressive red sandstone architecture." },
            { "user": "Natalie C.", "rating": 4, "comment": "The Buland Darwaza victory gate and Jama Masjid are architectural masterpieces." }
          ]
        },
        {
          "name": "Itimad-ud-Daulah",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/itimad-ud-daulah-agra-tourism-entry-fee.jpg",
          "hours": "6:00 AM - 6:00 PM",
          "fee": "₹30 for Indians, ₹310 for foreigners",
          "location": "Yamuna River, Agra",
          "rating": 4.5,
          "reviews": [
            { "user": "Krish P.", "rating": 5, "comment": "Known as 'Baby Taj' with delicate marble inlay work that inspired the Taj Mahal." },
            { "user": "Sophia R.", "rating": 4, "comment": "This jewel box mausoleum was the first structure to use pietra dura technique in India." }
          ]
        },
        {
          "name": "Mehtab Bagh",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/mehtab-bagh-agra-tourism-entry-fee.jpg",
          "hours": "6:00 AM - 6:00 PM",
          "fee": "₹25 for Indians, ₹300 for foreigners",
          "location": "Across Yamuna from Taj Mahal",
          "rating": 4.4,
          "reviews": [
            { "user": "Aarav S.", "rating": 4, "comment": "Perfectly aligned garden offering spectacular sunset views of Taj Mahal across river." },
            { "user": "Olivia M.", "rating": 5, "comment": "Originally built as 'moonlight garden' and provides best photographic angles of Taj Mahal." }
          ]
        },
        {
          "name": "Akbar's Tomb",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/akbars-tomb-agra-tourism-entry-fee.jpg",
          "hours": "6:00 AM - 6:00 PM",
          "fee": "₹20 for Indians, ₹310 for foreigners",
          "location": "Sikandra, Agra",
          "rating": 4.3,
          "reviews": [
            { "user": "Dinesh K.", "rating": 4, "comment": "Emperor Akbar's sandstone and marble mausoleum with impressive gateway and gardens." },
            { "user": "Heather T.", "rating": 4, "comment": "The tomb's design blends Hindu, Christian, Islamic, Buddhist, and Jain motifs." }
          ]
        },
        {
          "name": "Jama Masjid",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/jama-masjid-agra-tourism-entry-fee.jpg",
          "hours": "5:00 AM - 7:00 PM",
          "fee": "Free",
          "location": "Kinari Bazar, Agra",
          "rating": 4.2,
          "reviews": [
            { "user": "Imran Q.", "rating": 4, "comment": "Built by Shah Jahan for his daughter with beautiful red sandstone and white marble." },
            { "user": "Daniel P.", "rating": 4, "comment": "Large mosque with peaceful courtyard away from tourist crowds of Taj Mahal." }
          ]
        },
        {
          "name": "Chini Ka Rauza",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/chini-ka-rauza-agra-tourism-entry-fee.jpg",
          "hours": "Sunrise to sunset",
          "fee": "Free",
          "location": "Near Itimad-ud-Daulah, Agra",
          "rating": 4.0,
          "reviews": [
            { "user": "Varun T.", "rating": 4, "comment": "Persian-style tomb of Shah Jahan's prime minister known for glazed tile work." },
            { "user": "Claire W.", "rating": 4, "comment": "Off the typical tourist path with unique blue glazed tiles and peaceful atmosphere." }
          ]
        },
        {
          "name": "Wildlife SOS Elephant & Bear Sanctuary",
          "image": "https://www.uptourism.gov.in/images/places-to-visit/headers/wildlife-sos-agra-tourism-entry-fee.jpg",
          "hours": "8:30 AM - 5:00 PM",
          "fee": "₹500 for Indians, ₹1000 for foreigners",
          "location": "Near Mathura Road, Agra",
          "rating": 4.8,
          "reviews": [
            { "user": "Neha R.", "rating": 5, "comment": "Conservation center rescuing abused elephants and dancing bears with ethical practices." },
            { "user": "Brian K.", "rating": 5, "comment": "Educational experience about wildlife conservation with no riding or performance." }
          ]
        }
      ],
      Shimla: [
        {
          "name": "The Ridge",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/the-ridge-shimla-tourism-entry-fee.jpg",
          "hours": "Open 24 hours",
          "fee": "Free",
          "location": "Central Shimla",
          "rating": 4.6,
          "reviews": [
            { "user": "Ishaan M.", "rating": 5, "comment": "Large open space in heart of Shimla with panoramic mountain views and colonial buildings." },
            { "user": "Charlotte B.", "rating": 4, "comment": "The social hub of Shimla with Neo-Gothic Christ Church as prominent landmark." }
          ]
        },
        {
          "name": "Mall Road",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/mall-road-shimla-tourism-entry-fee.jpg",
          "hours": "8:00 AM - 9:00 PM",
          "fee": "Free",
          "location": "Central Shimla",
          "rating": 4.5,
          "reviews": [
            { "user": "Aditya R.", "rating": 4, "comment": "Vehicle-free main street with colonial architecture, shops, cafes, and restaurants." },
            { "user": "Emma S.", "rating": 5, "comment": "Perfect blend of colonial charm and modern amenities with beautiful mountain views." }
          ]
        },
        {
          "name": "Jakhu Temple",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/jakhu-temple-shimla-tourism-entry-fee.jpg",
          "hours": "5:00 AM - 9:00 PM",
          "fee": "Free",
          "location": "Jakhu Hill, Shimla",
          "rating": 4.4,
          "reviews": [
            { "user": "Vikas S.", "rating": 4, "comment": "Ancient Hanuman temple at highest point in Shimla with 108-foot statue and monkey residents." },
            { "user": "Hannah F.", "rating": 5, "comment": "The uphill trek offers stunning views and spiritual atmosphere at the summit." }
          ]
        },
        {
          "name": "Viceregal Lodge",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/viceregal-lodge-shimla-tourism-entry-fee.jpg",
          "hours": "9:00 AM - 5:00 PM (Closed on Mondays)",
          "fee": "₹150 for Indians, ₹250 for foreigners",
          "location": "Observatory Hill, Shimla",
          "rating": 4.5,
          "reviews": [
            { "user": "Rahul D.", "rating": 5, "comment": "Former British Viceroy residence with Jacobean architecture and beautifully maintained gardens." },
            { "user": "Michelle P.", "rating": 4, "comment": "Now houses Indian Institute of Advanced Studies with historical exhibits and guided tours." }
          ]
        },
        {
          "name": "Kufri",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/kufri-shimla-tourism-entry-fee.jpg",
          "hours": "Open 24 hours",
          "fee": "Free (Activities have separate charges)",
          "location": "13 km from Shimla",
          "rating": 4.3,
          "reviews": [
            { "user": "Vineet K.", "rating": 4, "comment": "Popular hill station for skiing in winter and horse riding, hiking in summer." },
            { "user": "Samantha G.", "rating": 4, "comment": "The Himalayan Wildlife Zoo and Himalayan Nature Park offer local wildlife viewing." }
          ]
        },
        {
          "name": "Shimla State Museum",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/shimla-state-museum-tourism-entry-fee.jpg",
          "hours": "10:00 AM - 5:00 PM (Closed on Mondays)",
          "fee": "₹50 for Indians, ₹300 for foreigners",
          "location": "Chaura Maidan, Shimla",
          "rating": 4.2,
          "reviews": [
            { "user": "Sunita P.", "rating": 4, "comment": "Colonial-style building housing diverse collection of Himachali art, crafts, and artifacts." },
            { "user": "James T.", "rating": 4, "comment": "The collection of ancient sculptures, paintings, and coins offers insight into regional history." }
          ]
        },
        {
          "name": "Christ Church",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/christ-church-shimla-tourism-entry-fee.jpg",
          "hours": "7:00 AM - 6:00 PM",
          "fee": "Free",
          "location": "The Ridge, Shimla",
          "rating": 4.6,
          "reviews": [
            { "user": "Ravi C.", "rating": 5, "comment": "Second oldest church in North India with Neo-Gothic architecture and beautiful stained glass." },
            { "user": "Julia M.", "rating": 4, "comment": "Iconic yellow structure on The Ridge that's become a symbol of Shimla's colonial past." }
          ]
        },
        {
          "name": "Chadwick Falls",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/chadwick-falls-shimla-tourism-entry-fee.jpg",
          "hours": "7:00 AM - 6:00 PM",
          "fee": "Free",
          "location": "7 km from Shimla",
          "rating": 4.0,
          "reviews": [
            { "user": "Manish B.", "rating": 4, "comment": "67-meter waterfall surrounded by dense pine and deodar forests with trekking trails." },
            { "user": "Kathryn H.", "rating": 4, "comment": "Most impressive during monsoon season with peaceful natural setting and fresh air." }
          ]
        },
        {
          "name": "Annandale",
          "image": "https://www.himachaltourism.gov.in/images/places-to-visit/headers/annandale-shimla-tourism-entry-fee.jpg",
          "hours": "9:00 AM - 5:00 PM",
          "fee": "Free (Army Museum: ₹50)",
          "location": "4 km from central Shimla",
          "rating": 4.1,
          "reviews": [
            { "user": "Amit S.", "rating": 4, "comment": "Flat terrain used for golf course and Army Museum with historical military exhibits." },
            { "user": "Stephanie L.", "rating": 4, "comment": "Former playground of British who organized racing and sporting events in this valley." }
          ]
        }
      ]
};

const packages = {
  Mumbai: [
    {
      title: "Mumbai Heritage Walk",
      duration: "1 Day",
      highlights: [
        "Gateway of India",
        "Colaba Causeway",
        "Marine Drive",
        "Chowpatty Beach",
      ],
      price: "₹1,999 per person",
      recommended: true,
    },
    {
      title: "Mumbai Cultural Experience",
      duration: "2 Days",
      highlights: [
        "Dharavi Tour",
        "Bollywood Studio Visit",
        "Local Food Trail",
        "Evening at Marine Drive",
      ],
      price: "₹3,999 per person",
      recommended: false,
    }
  ],
  Delhi: [
    {
      title: "Old Delhi Heritage Tour",
      duration: "1 Day",
      highlights: ["Red Fort", "Jama Masjid", "Chandni Chowk", "Spice Market"],
      price: "₹1,499 per person",
      recommended: true,
    },
  ]
};

const cityFeedback = [
  {
    user: "Alex Thompson",
    city: "Mumbai",
    rating: 4.5,
    comment: "Amazing city with rich culture and great food!",
    date: "2024-03-15",
  },
  {
    user: "Maria Garcia",
    city: "Delhi",
    rating: 4.8,
    comment: "The historical monuments are breathtaking. Loved every moment.",
    date: "2024-03-14",
  },
  {
    user: "James Wilson",
    city: "Mumbai",
    rating: 4.2,
    comment:
      "Vibrant city life and friendly people. Traffic can be challenging though.",
    date: "2024-03-13",
  },
];

// DOM Elements
const cityGrid = document.getElementById("cityGrid");
const touristSpotsSection = document.getElementById("touristSpots");
const selectedCityName = document.getElementById("selectedCityName");
const spotsGrid = document.getElementById("spotsGrid");
const packagesGrid = document.getElementById("packagesGrid");
const feedbackStats = document.getElementById("feedbackStats");
const feedbackGrid = document.getElementById("feedbackGrid");

// Initialize
renderCities();
renderFeedback();

// Functions
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
}

function renderCities() {
  cityGrid.innerHTML = cities
    .map(
      (city) => `
        <div class="city-card" onclick="selectCity('${city.name}')">
            <img src="${city.image}" alt="${city.name}">
            <div class="overlay">
                <h3>${city.name}</h3>
            </div>
        </div>
    `
    )
    .join("");
}

function selectCity(cityName) {
  selectedCityName.textContent = cityName;
  touristSpotsSection.classList.remove("hidden");
  renderTouristSpots(cityName);
  renderPackages(cityName);
}

function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = "";

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += '<span class="star full">★</span>';
    } else if (i === fullStars && hasHalfStar) {
      stars += '<span class="star half">★</span>';
    } else {
      stars += '<span class="star empty">☆</span>';
    }
  }

  return stars;
}

function renderTouristSpots(cityName) {
  const spots = touristSpots[cityName];
  if (!spots) {
    spotsGrid.innerHTML =
      '<div class="no-spots">Coming soon! We\'re working on adding tourist spots for this city.</div>';
    return;
  }

  spotsGrid.innerHTML = spots
    .map(
      (spot) => `
        <div class="spot-card">
            <img src="${spot.image}" alt="${spot.name}">
            <div class="spot-info">
                <h3>${spot.name}</h3>
                <div class="rating">
                    <div class="stars">
                        ${getStarRating(spot.rating)}
                    </div>
                    <span class="rating-value">${spot.rating.toFixed(1)}</span>
                </div>
                <div class="spot-details">
                    <div class="spot-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>${spot.hours}</span>
                    </div>
                    <div class="spot-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                        <span>${spot.fee}</span>
                    </div>
                    <div class="spot-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${spot.location}</span>
                    </div>
                </div>
                <div class="reviews">
                    <h4>Reviews</h4>
                    ${spot.reviews
                      .map(
                        (review) => `
                        <div class="review">
                            <div class="review-header">
                                <span class="review-user">${review.user}</span>
                                <div class="review-rating">
                                    ${getStarRating(review.rating)}
                                </div>
                            </div>
                            <p class="review-comment">${review.comment}</p>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function renderPackages(cityName) {
  const cityPackages = packages[cityName] || [];
  packagesGrid.innerHTML = cityPackages
    .map(
      (pkg) => `
        <div class="package-card ${pkg.recommended ? "recommended" : ""}">
            <div class="package-info">
                <h3 class="package-title">${pkg.title}</h3>
                <p class="package-duration">${pkg.duration}</p>
                <div class="package-highlights">
                    <ul>
                        ${pkg.highlights
                          .map(
                            (highlight) => `
                            <li>${highlight}</li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>
                <p class="package-price">${pkg.price}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// function renderFeedback() {
//   // Calculate statistics
//   const totalFeedback = cityFeedback.length;
//   const avgRating = (
//     cityFeedback.reduce((sum, feedback) => sum + feedback.rating, 0) /
//     totalFeedback
//   ).toFixed(1);

//   // Render statistics
//   feedbackStats.innerHTML = `
//         <div class="stat-card">
//             <div class="stat-value">${totalFeedback}</div>
//             <div class="stat-label">Total Reviews</div>
//         </div>
//         <div class="stat-card">
//             <div class="stat-value">${avgRating}</div>
//             <div class="stat-label">Average Rating</div>
//         </div>
//     `;

//   // Render feedback grid
//   feedbackGrid.innerHTML = cityFeedback
//     .map(
//       (feedback) => `
//         <div class="feedback-card">
//             <div class="feedback-header">
//                 <span class="feedback-user">${feedback.user}</span>
//                 <span class="feedback-city">${feedback.city}</span>
//             </div>
//             <div class="rating">
//                 <div class="stars">
//                     ${getStarRating(feedback.rating)}
//                 </div>
//                 <span class="rating-value">${feedback.rating.toFixed(1)}</span>
//             </div>
//             <p class="feedback-text">${feedback.comment}</p>
//             <p class="feedback-date">${new Date(
//               feedback.date
//             ).toLocaleDateString()}</p>
//         </div>
//     `
//     )
//     .join("");
// }
