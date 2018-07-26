(function(){

    
    angular
        .module("QuizandFacts")
        .factory("DataService", DataService);

    
    function DataService(){
        

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        
        return dataObj;
    }

    
    var correctAnswers = [1, 3, 3, 2, 2, 3, 3, 3, 3, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "The world famous Ajanta caves are situated in the state of",
            possibilities: [
                {
                    answer: "Madhya Pradesh"
                },
                {
                    answer: "Maharashtra"
                },
                {
                    answer: "Karnataka"
                },
                {
                    answer: "Orissa"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Golden Temple is situated in",
            possibilities: [
                {
                    answer: "Chandigarh"
                },
                {
                    answer: "Haryana"
                },
                {
                    answer: "Punjab"
                },
                {
                    answer: "Amritsar"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "The world famous ‘Khajuraho’ sculptures are located in",
            possibilities: [
                {
                    answer: "http://s3.india.com/wp-content/uploads/2017/05/Gujarat.jpg"
                },
                {
                    answer: "https://www.indushealthplus.com/images/articles/heart-diseases-maharashtra-on-rise-thumb.jpg"
                },
                {
                    answer: "https://www.webindia123.com/orissa/IMAGES/Oris.jpg"
                },
                {
                    answer: "https://www.oneindia.com/img/2015/07/29-1438172853-madhyapradesh.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Kushinagar’ is known for",
            possibilities: [
                {
                    answer: "rocket launching station"
                },
                {
                    answer: "largest sugar factory in India"
                },
                {
                    answer: "place where Lord Buddha breathed his last"
                },
                {
                    answer: "None of these"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Buland Darwaza is located in",
            possibilities: [
                {
                    answer: "Hyderabad"
                },
                {
                    answer: "Bijapur"
                },
                {
                    answer: "Fatehpur Sikri"
                },
                {
                    answer: "Delhi"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Ajanta-Ellora caves are situated near",
            possibilities: [
                {
                    answer: "Patna"
                },
                {
                    answer: "Jaipur"
                },
                {
                    answer: "Ajmer"
                },
                {
                    answer: "Aurangabad"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "The famous Meenakshi temple is in",
            possibilities: [
                {
                    answer: "Maharashtra"
                },
                {
                    answer: "Gujarat"
                },
                {
                    answer: "Orissa"
                },
                {
                    answer: "Tamil Nadu"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "The famous Dilwara Temples are situated in",
            possibilities: [
                {
                    answer: "https://www.indushealthplus.com/images/articles/heart-diseases-maharashtra-on-rise-thumb.jpg"
                },
                {
                    answer: "http://s3.india.com/wp-content/uploads/2016/03/Uttar-pradesh.jpg"
                },
                {
                    answer: "https://www.oneindia.com/img/2015/07/29-1438172853-madhyapradesh.jpg"
                },
                {
                    answer: "https://i.ytimg.com/vi/PWRaPNdCZXI/maxresdefault.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "The ‘Char Minar’ is in",
            possibilities: [
                {
                    answer: "Ahmednagar"
                },
                {
                    answer: "Fatehpur Sikri"
                },
                {
                    answer: "Ahmedabad"
                },
                {
                    answer: "Hyderabad"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Sun Temple is situated at which of the following places ?",
            possibilities: [
                {
                    answer: "Haridwar"
                },
                {
                    answer: "Vrindavan"
                },
                {
                    answer: "Kanyakumari"
                },
                {
                    answer: "Konark"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        {
            type: "Taj Mahal",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/agra-min-min-1.jpg",
            locations: "Agra",
            fee: "Indian – INR 40, Foreigner- INR 1000",
            timings: "6:30 am to 9:30 pm",
            description: "This epitome of Mughal architecture, built entirely with white marble is one of the most well-known identifiers of India. Its grandeur and beauty will have you spellbound. Shah Jahan built this paragon for his wife Noor Jahan to enunciate his love for her. Situated in one of the “Golden Triangle” cities, you also get an opportunity to explore the streets of Agra."
        },
        {
            type: "Qutub Minar",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/6-min-2-1.jpg",
            locations: "Delhi",
            fee: "Indians- INR 10 and Foreigners- INR 250",
            timings: "7 am to 5 pm",
            description:"One of the tallest creations in the Indian history is the Qutub Minar. With its red sandstone and aesthetic Iranian architecture, the minaret is the most famous tourist attraction in India. This UNESCO World Heritage site towers at a  height of 240 feet making it one of the tallest ancient towers across the globe. Assimilate history of the minaret by reading the inscriptions engraved in Parso-Arabic and Nagari characters. Built by Qutub Ud-Din-Aibak in the nineteenth century this tower is a must visit place in Delhi."

        },
        {
            type: "Amer Fort",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/Amber-Fort-min-min.jpg",
            locations: "Rajasthan",
            fee: "Indians- INR 25 and Foreigners- INR 200",
            timings: "9:30 am to 4:30 pm",
            description:"The splendid Amer Fort sits atop a hill called Cheel ka Teela, safeguarded by the Maota Lake. The essence of the Amer fort lies in its captivating architecture and the lustrous red sandstone and marble. The gigantic fort has some mystical elements enveloped in it, like the Diwan-i-Khaas, the Diwan-i-aam, and the beguiling Sheesh Mahal. Enjoy an elephant ride towards the Suraj Pol (sun gate). A hidden tunnel in the fort takes you on a prolonged path bridging the paerfedlace to the Jaigarh Fort."
        },
        {
            type: "Ajanta and Ellora Caves",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/8-min-1-1.jpg",
            locations: "Maharashtra",
            fee: "Indians- INR 30 and Foreigners- INR 500",
            timings: "8 am to 5 pm",
            description: "The enthralling caves of Ajanta and Ellora in Maharashtra are the epitome of beauty. With their authentic rock-cut sculptures and ancient Indian art, the caves have become a UNESCO World Heritage site. The artifacts in the cave portray the past lives and rebirths of Buddha in spellbinding sculptures and murals. Discovered in 1819, the caves are a popular tourist hot spots and a must visit."
        },
        {
            type: "Virupaksha Temple",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/7-min-2.jpg",
            locations: "Karnataka",
            fee: "Indians- INR 10 and Foreigners- INR 250",
            timings: "6 am to 6 pm",
            description: "Situated in Karnataka, the exquisite city of Hampi houses some of the most breath-taking temples. The Virupaksha Temple situated in Hampi is the most astonishing marvel ever discovered.The sculptures of Lord Shiva carved on stones is the predominant feature of this spectacular temple. Built under the ruler Deva Raya II of the great Vijayanagara Empire is a UNESCO World Heritage site in Hampi. Enjoy the annual festivals of Virupaksha, Pampa, and chariot in Hampi to get a deeper look into the ever so opulent temple of Virupaksha."
        },
        {
            type: "Mahabalipuram",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/4-min-3.jpg",
            locations: "Tamil Nadu",
            fee: " Indians- INR 10 and Foreigners- INR 250",
            timings: "6 am to 6 pm",
            description: "The antique carved rocks blended with the chariots and cave sanctuaries make Mahabalipuram, one of the key historic sites of Tamil Nadu. Built in the 7th century by the dynasty of Pallavas, the Shore Temple is one of the most popular monuments of Mahabalipuram. Dedicated to Lord Shiva, the temple exhibits a strong Dravidian influence in its architecture infused with some Buddhist elements. Admire the great sculptures in Mahabalipuram on your visit."
        },
        {
            type: "Konark Temple",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/5-min-3.jpg",
            locations: "Odisha",
            fee: "Indians- INR 30 and Foreigners- INR 250",
            timings: "6 am to 8 pm",
            description: "Devoted to the Sun God ‘Surya’, the prepossessing Konark Temple is the most spellbinding historic site in Odisha. The Kalinga architecture reflecting in its gigantic chariot, pillars and walls give the temple an Odiya touch. Also classified as ‘Black Pagoda’ by some European sailors, this UNESCO World Heritage site has also featured in the list of 7 Wonders of India.  The magnificent Khandolite rocks make the beauty of this temple even more alluring to the human eyes."
        },
        {
            type: "Sanchi Stupa",
            image_url: "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/2-min-3.jpg",
            locations: "Madhya Pradesh",
            fee: "Indians- INR 20 and Foreigners- INR 250",
            timings: "Sunrise to Sunset",
            description: "The Sanchi stupa stands as an unparalleled example of the majestic aura that is encompassed within the Buddhist style of architecture. Ancient relics of Lord Buddha are rooted within the dome- shaped structure of the stupa, which was how the structure looked until the dawn of the 1st century. The stupa borrows its esteem from its commissioner, Ashoka of the Maurya dynasty, whose stature can be well indicated in the terms of the stupa’s altitude. The 54 ft. high stupa tells the tales of Lord Buddha’s life through its mesmerizing carvings, whose intricacy personifies the architecture. Marked as a UNESCO world heritage site the stupa is visited regularly by uncountable visitors. So what are you waiting for!"
        }
    ];

})();
