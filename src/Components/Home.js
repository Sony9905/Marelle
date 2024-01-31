import React from 'react'
import "./Home.css"
import { Chrono } from "react-chrono";
import TypeWriter from "typewriter-effect";
import MA1 from '../images/ma1.jpg'
import MA2 from '../images/m2.jpg'
import MA3 from '../images/m3.jpg'
import MA4 from '../images/m4.jpg'
import MA5 from '../images/m5.jpg'
import MA6 from '../images/m6.jpg'
import Gif from './Gif';
const Home = () => {
  const items = [
    {
      title: "Start of December 9th: 6:45AM",
      cardTitle: "The Day We First Met",
      url: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=0NxwPl8DILNdpLaVtPGTPw&cb_client=search.gws-prod.gps&yaw=203.41664&pitch=0&thumbfov=100&w=520&h=175",
      cardDetailedText: "You could say this was the official starting point of our relationship. I wanted to document everything, but for now, it will be based on my point of view. If I asked you for your point of view, it would have spoiled the gift, so I hope you don't mind! I will say this amazing day really started when you arrived around 6:45 at Port Authority, and I arrived at 6:55 due to train traffic. I left my house at 5:20 and wanted to be early, so I'm thankful I decided to be early, or else I would have been extremely late. I was so shocked at the fact that you were real and standing right in front of me. In my head, I wanted to run up to you and give you a big hug and immediately start holding your hand, but I was at a loss for words. You were so beautiful. Thankfully, you grabbed my hand, almost like you read my mind. You wore this gorgeous black outfit, with this amazing cute skirt and leggings, paired with your six-cm Doc Martens. You had this big smile on your face, and I couldn't even hold back my own smile. The sun was still rising, and the majority of the city was still closed—Saturday schedule in New York City, unfortunately, but ironically, I was able to take you to Paris Baguette. [Not racist, I swear; it was the only bakery open within a mile/1km range].",
      media: {
        name: "Meet up",
        source: {
          url: "https://media.timeout.com/images/105738924/image.jpg"
        },
        type: "IMAGE"
      }
    },
    {
    title: "6:55 AM",
    cardTitle: "Paris Baguette",
    url: "https://www.google.com/maps/place/Paris+Baguette/@40.7569109,-73.9920289,15.75z/data=!3m1!5s0x89c259a3913f2615:0x452b1bcd9a3bd47d!4m10!1m2!2m1!1sParis+Baguette!3m6!1s0x89c259da457f669d:0xa6fd6184963ca5fe!8m2!3d40.7548557!4d-73.9864994!15sCg5QYXJpcyBCYWd1ZXR0ZSIDiAEBWhAiDnBhcmlzIGJhZ3VldHRlkgEGYmFrZXJ54AEA!16s%2Fg%2F11hzhf86km?entry=ttu",
    cardDetailedText: "After meeting each other for the first time in person, I wanted to take you to a nearby cafe to sit down and grab a drink together. The only one open at the time was Paris Baguette. I will never forget the walk to the cafe; it was my first time holding your hand, and I didn't want to let go. I was so nervous, but you kept smiling and told me everything was fine. I didn't know I was able to fall more in love than I already was, but you kept proving me wrong. When we arrived at the cafe, you ordered a black tea and grabbed packets of sugar for yourself, and I ordered a black iced coffee. Both of us weren't hungry, so we decided to have our first in-person conversation on the second floor! My dumbass was so in disbelief that I kept repeating to myself, 'this is really happening.' Soon enough, two hours went by, and in between that time, we exchanged our first gifts. I bought you a Tommy Hilfiger scarf to match with my navy blue sweater, some JJK pins for Sola and Anthony, and a dino keychain! I had written in my notes that you lost your dino a couple of days into talking with one another, and I thought it was a cute gift to get you. In return, you gave me an origami of my favorite flower!",
    media: {
      name: "First Date PB",
      source: {
        url: "https://www.parisbaguette.com/wp-content/uploads/display-brand.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "9:00 AM",
    cardTitle: "Madison Square Park",
    url: "https://www.google.com/maps/place/Madison+Square+Park/@40.7421991,-73.9905741,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259a6bd917da7:0x79997d3983197d7c!8m2!3d40.7421951!4d-73.9879992!16zL20vMDVraG5z?entry=ttu",
    cardDetailedText: "This park is where my life changed. My life became a whole lot brighter. After exchanging gifts at Paris Baguette, we decided to take a walk, and I really wanted to show you the Winter Market. Unfortunately, most stores weren't open as they opened at 10 AM, but we still got to walk around quickly, and that's when I decided to show you Madison Square Park—the place I used to come to relax during my Uni days. I still remember you grabbing my hand and saying you won't let go ever. It was one of the cutest things you have ever said, and you stuck by those words as you dragged the native New Yorkers across the streets of Manhattan. It was at that point I fell deeply in love. I still remember thinking there were two Flatiron buildings {John Wick Buildings} but realized it was because of the angle! After arriving at the Park, we found a nice cozy and quiet area to sit and decided to talk about each other and exchange all the compliments face to face. I couldn't help but stare at your gorgeous eyes. This was also the first time you rested your head on my shoulder, and I was in shock. I wanted to wait until we ice skated to ask you out, but I remember telling myself this might be the best time because I wanted to spend the rest of our date as boyfriend and girlfriend. I was still taken by surprise when you asked if you could kiss me, and I somehow fell in love all over again. December 9, 10:17 AM.",
    media: {
      name: "MSP",
      source: {
        url: "https://media.timeout.com/images/105305487/750/422/image.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "11:00 AM",
    cardTitle: "Bryant Park Ice Skating Rink",
    url: "https://www.google.com/maps/place/Bryant+Park/@40.7535407,-73.9855278,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259aae7a0b1bd:0xb49cafb82537f1a7!8m2!3d40.7535367!4d-73.9829529!16zL20vMDN2Z2Rf?entry=ttu",
    cardDetailedText: "After weeks of waiting, I finally got the chance to formally tell you that I fell in love with you. We finally got to spend the rest of the day together as an official couple! The look on your face when I asked you out, to me, looked like you were waiting for that moment all day, and I'm so happy I took the opportunity to ask you in that park—one of the first things we did as a couple. You immediately grabbed my hand and again led the way back to Bryant Park. It got very windy and chilly at this time, so we both agreed it was time to get hot chocolate. After making it back to the Winter Market, we ordered our drinks. You ordered a Vanilla Hot Chocolate, and I ordered mint. Surprisingly, you did not taste any vanilla! I also found out at this moment that you can't drink hot chocolate. You started to experience some pain, but we quickly got to ice skate right after. Our time was 11:20 AM, and we got to the rink at 11:30 after checking in and grabbing our shoes. I was able to help you remember your shoe size, and you, in return, helped tighten my own shoes! Something about that made me fall in love again. After getting on the ice, I had the best teacher one could ever ask for. You made ice skating so much easier than I originally thought, and I only fell once throughout the entire time! You taught me how to control, balance, stop, and most importantly, how to fall correctly. Unfortunately, I landed on my ass, and it's still hurting as I write this. Rest assured, I am feeling better.",
    media: {
      name: "MSP",
      source: {
        url: "https://bryantpark.org/images/cache/assets/uploads/images/general/Winter-Village_lores_2021-12-15_Colin-Miller_29-700x467.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "12:45 PM",
    cardTitle: "New York Public Library",
    url: "https://www.google.com/maps/place/New+York+Public+Library+-+Stephen+A.+Schwarzman+Building/@40.7535407,-73.9855278,17z/data=!4m14!1m7!3m6!1s0x89c259aae7a0b1bd:0xb49cafb82537f1a7!2sBryant+Park!8m2!3d40.7535367!4d-73.9829529!16zL20vMDN2Z2Rf!3m5!1s0x89c2590099a8a8a9:0x3b51df6e509a734c!8m2!3d40.7531823!4d-73.9822534!16s%2Fm%2F03gyv_y?entry=ttu",
    cardDetailedText: "After ice skating, the original plan I had for us was walking to Kinokuniya bookstore which was right across the park. I had written in my notes that you needed a nap break and from the look in your eyes, you were in need of a break. You grabbed my hand and I pointed the direction to the store and we were off. Last time I was at this store the entire upstairs was a lounge but was cut in half to add more manga. Unfortunately it wasn't the best spot to let you nap. So we decided to go the Public Library which was behind the park. I never been inside so it was my first time exploring it, and I got to do it with you! I remember walking inside those doors and going up three flights of stairs and trying to navigate a space for you to take a nap. Luckily we found a big public and quiet space, and a table all the way in the back for you to take a nice nap. This was one of my favorite moments because you opened up to me. You told me you felt comfortable and trusted me to hold you. I set the timer for 30 minutes and just watched you sleep and took care of your bag. 100% would do it all again. After your nap, you reminded me that you had to call your friends and ironically Sola spilled the tea, which led to more tea, which led to me getting to say hello to them. Still wish I was more confident but it was really fun to get to meet them! ",
    media: {
      name: "NYPL",
      source: {
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/New_York_Public_Library_-_Main_Branch_%2851396225599%29.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "2:00 PM",
    cardTitle: "Rockefeller Center",
    url: "https://www.google.com/maps/place/Rockefeller+Center/@40.7587442,-73.9835445,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258fecf664df5:0x33d224a0d5dacca2!8m2!3d40.7587402!4d-73.9786736!16zL20vMDE2M2Zm?entry=ttu",
    cardDetailedText: "After your nap break in the Public Library, (And all the kissing and flirting), we finally decided to do one of the things you looked most forward too, which was to see my University: Hunter College. One of the stops along the way was Rockefeller center. You grabbed my hand, dragged me across the streets of New York once more, and made ourway uptown. I suggested you at least get to see the big famous Christmas tree and luckily we did. It wasn't a magical view with all the people blocking our way but we still managed to get one of the things I wanted to show you out the way!",
    media: {
      name: "NYPL",
      source: {
        url: "https://images.ctfassets.net/1aemqu6a6t65/Ti57OtDyvancQGktS0DOG/e5d7867f356487809f83a7e36b36d61c/The-Rink-Rockefeller-Center-Manhattan-NYC-photo-Kat-Harris-03.jpg?w=1200&h=800&q=75"
      },
      type: "IMAGE"
    }
  },
  {
    title: "3:00 PM",
    cardTitle: "Nobu",
    url: "https://www.google.com/maps/place/Nobu+Fifty+Seven/@40.7635671,-73.9812188,16z/data=!3m1!5s0x89c258f9f9173275:0xe0329303b3d7f26!4m10!1m2!2m1!1sNobu!3m6!1s0x89c258fa09627e3d:0x9ca4f60708c02900!8m2!3d40.763705!4d-73.9762452!15sCgROb2J1IgOIAQFaBiIEbm9idZIBCnJlc3RhdXJhbnTgAQA!16s%2Fm%2F0zfzpd3?entry=ttu",
    cardDetailedText: "After our small stop in Rockefeller center, we continued walking up to Central Park, since we had to go across the park to arrive at Hunter. I believe you suggested we finally grab some lunch and was okay with getting something hot, I brought Japanese food and we quickly searched for some spots to eat and I remembered the name Nobu. I made the small mistake of realizing there are multiple Nobu's in New York City and we ended up going to one of the most luxurious ones. Thankfully we did because I got to show you an amazing place with great scenery for someone as beautiful as you! Luckily for us, there was no wait time, and we immediately got seats. After looking at the menu, we agreed on ordering the Chicken Teriyaki with rice and two miso soups, because you wanted something hot. The food was amazing and I got to witness your chopstick skills and it was so cute. I also dropped some food but overwall the experience was amazing. You looked so divine under dark lightning and I kept falling in love with every passing second.",
    media: {
      name: "NYPL",
      source: {
        url: "https://images.ctfassets.net/1aemqu6a6t65/6eUZikJBcy9iM688F1e4sC/3e8bb84849117c9f8f20097c672416d3/nobu-fifty-seven-manhattan-nyc-nobu-resturant-group?w=1200&h=800&q=75"
      },
      type: "IMAGE"
    }
  },
  {
    title: "4:30 PM",
    cardTitle: "The Pond at Central Park",
    url: "https://www.google.com/maps/place/The+Pond+at+Central+Park/@40.7669001,-73.977005,17.25z/data=!4m14!1m7!3m6!1s0x89c2589a018531e3:0xb9df1f7387a94119!2sCentral+Park!8m2!3d40.7825547!4d-73.9655834!16zL20vMDljN3Y!3m5!1s0x89c2599fc68e1503:0x20d6e221da701544!8m2!3d40.7658967!4d-73.9739293!16s%2Fg%2F11f77902lm?entry=ttu",
    cardDetailedText: "After our meal at Nobu, we were on our way to Hunter. In one of our conversations, I brought up the fact that I used to sometimes come to the park inbetween my classes to just study/rest. You really wanted to see the exact spot in which I used to sit down and thankfully the bench was free! It took some time to find the exact picture on google, but you will see on the card the same spot we had an amazing view on of the city. We talked for hours here, and it was at this time you rested your legs on me and gave me consent to hold onto you and that you trusted me. It was also the same time you told me your brother attempted, not once, but two times to murder you????????? Can't believe I learned that but it was really funny and we got to see the sunset at 6:30.",
    media: {
      name: "The Pond",
      source: {
        url: "https://hiddenwatersblog.files.wordpress.com/2019/08/title.jpg?w=676&h=505"
      },
      type: "IMAGE"
    }
  },
  {
    title: "6:00 PM",
    cardTitle: "Hunter College",
    url: "https://www.google.com/maps/place/Hunter+College/@40.7678398,-73.9732838,16z/data=!4m10!1m2!2m1!1shunter+college!3m6!1s0x89c258eb899f0889:0xb5e90aa7d877ee1f!8m2!3d40.7678398!4d-73.9645291!15sCg5odW50ZXIgY29sbGVnZZIBB2NvbGxlZ2XgAQA!16zL20vMDNxZG0?entry=ttu",
    cardDetailedText: "The walk to Hunter after Central Park felt like a fever dream. I was walking back to my Uni after years with the most beautiful girl ever, and she was my girlfriend. I got to show you each store I visited and the walk to my Uni from the train station I usually got off at. You still led me along the way and actively avoided everyone, and I was just so in love. You hated people as much as I did; the day couldn't have been any better. I also don't want you to forget that it was at this time we saw Adonis and Zeng lose us because they went to the wrong museum, LMFAO! They were not able to stalk us until way later, and I'm still not sure how we didn't see them, but still cool. Unfortunately, as we walked to the campus, the school was closed, and we weren't able to go inside. However, you were able to see the main campus and a blueprint of the entire school. I apologize; it wasn't as big or grand as you probably thought, but I'm still glad you got to see the Uni I went to! The most important part about this point in time was the fact that I was able to ask you the three important questions I been dying to ask. 1. Are you comfortable with dating me? 2. Are you okay with long distance? 3. Are you certain you are looking for a long term relationship? I was so happy when you said yes to all three, and you were just as communicative as me. It secured the deal for me that I wanted to be with you.",
    media: {
      name: "Hunter College",
      source: {
        url: "https://specials-images.forbesimg.com/imageserve/64e8feab956971f5163b061a/0x0.jpeg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "6:30 PM",
    cardTitle: "Trump Tower and Viand",
    url: "https://www.google.com/maps/place/Viand/@40.7654269,-73.9740031,16.75z/data=!4m10!1m2!2m1!1sViand!3m6!1s0x89c258efc4e53d5f:0xcbe26dbafc922a9d!8m2!3d40.7648494!4d-73.970189!15sCgVWaWFuZFoHIgV2aWFuZJIBBGNhZmXgAQA!16s%2Fg%2F1tgzc7vy?entry=ttu",
    cardDetailedText: "At this point, I believe both of us were tired, and our original plan was to go see the Museum (The MOMA, Zeng and Adonis were dumbasses and went to the MOA). The MOMA closed at 7 pm, however, and if we were to go, we would only have 30-45 minutes to actually see the museum. You also cared about Zeng and Adonis since they wouldn't have been able to see it either (they would not have been able to catch up anyway). We ended up wanting to find a place to sit down and grab coffee and tea and ended up walking down to 57th Ave, PASSING THE TRUMP TOWER! Unfortunately, no graffiti or vandalism the day we saw it, but next time I will show you pictures. We also ended up finding a café that required a reservation—kind of cool, but soon after, we got to find a nice small family-owned diner called Viand, and we got seats extremely quickly. Seems like the entire day was just lucky for us. I had ordered an iced coffee with milk and sugar on the side with some fries so we didn't waste the owners time and seats, and you had ordered a hot black tea. Here I got to admire your beauty a lot more and I absolutely loved your turtleneck. I was falling so deeply in love. But I also remembered the day was coming to an end and I didn't want it to :(",
    media: {
      name: "Viand",
      source: {
        url: "https://res.cloudinary.com/the-infatuation/image/upload/c_scale,w_1200,q_auto,f_auto/cms/media/reviews/viand/banners/Viand-Diner_0"
      },
      type: "IMAGE"
    }
  },
  {
    title: "8:00 PM",
    cardTitle: "Train Ride Together",
    url: "https://www.google.com/maps/place/57+St-7+Av/@40.7633484,-73.9803936,17z/data=!4m9!1m2!2m1!1sQ!3m5!1s0x89c258f78785e36f:0x5dc19262e7b89500!8m2!3d40.7655439!4d-73.9803258!16s%2Fm%2F048bjfk?entry=ttu",
    cardDetailedText: "This wasn't a huge or signficant part in general, but to me it was one of my favorite times. I always rode the train alone and never thought much of it. But today I was able to enjoy a ride together with you resting on my shoulder. I was having butterflies in my stomach as you rested your head on me and your hair was so beautiful. Fun fact, Adonis and Zeng were also on this train, but we never got to see them. They followed us and ended up eating chicken in the store right next to us. Don't find them creepy, this is just Zeng's payback for what I did to him.",
    media: {
      name: "QTRAIN",
      source: {
        url: "https://www.nydailynews.com/wp-content/uploads/migration/2022/06/16/474HPI7Q7VBIVKNOKAT2UY3ZMU.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "8:15 PM",
    cardTitle: "Shaved Ice Cream",
    url: "https://www.google.com/maps/place/Grace+Street+Coffee+%26+Desserts/@40.7485746,-73.9873748,17z/data=!3m1!5s0x89c259a8fb0ce6fb:0x603dfdb1ba139342!4m10!1m2!2m1!1sShaved+Ice+Cream!3m6!1s0x89c259a8e1682bf5:0xea388e8841a2955e!8m2!3d40.7477172!4d-73.9865302!15sChBTaGF2ZWQgSWNlIENyZWFtWhIiEHNoYXZlZCBpY2UgY3JlYW2SARJkZXNzZXJ0X3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUndOVkF6Tm1wM1JSQULgAQA!16s%2Fg%2F11g696_rfj?entry=ttu",
    cardDetailedText: "As promised, I wanted to end day with ice cream. Thankfully the day wasn't as cold, so we got to enjoy some amazing shaved ice cream at one of my favorite spots in the city. After arriving in 34st, we were in K-town, and I also promised you I'll deliver you to Port Authority by 9:00 so you don't arrive late to your bus. This was the last stop of our date and I enjoyed every second of it. We ordered the orea flavored shaved ice cream and being able to grab a seat by the middle section toward the wall, with an outlet to charge your phone and mine. We started talking about the future of our relationship and most importantly, gift giving, setting our limit of how much we can spend on one another. My limit was set to 100 and yours was set to 50. We also agreed on not changing it until 1.5 years of being together. Hopefully that changes around 1 year because I want your anniversary gift to be really special. With that I conclude your gift. I hope I was able to recall majority of the day for you and whenever you forget a detail, I hope this timeline will jog your memory. I love you with all my heart - Sony",
    media: {
      name: "Grace Street Coffee & Desserts",
      source: {
        url: "https://images.letgroup.com/14hr2jEUhG/cmsimg_1622518098.jpg"
      },
      type: "IMAGE"
    }
  },];
  return (
    <div className='Chrono-Wrapper'> 
      <div style={{ width: '950px', height: '950px' }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" slideShow slideItemDuration={4500} slideShowType="slide_from_sides" style={{boxShadow: '10px 5px 5px black'}}theme={{
    primary: 'purple',
    secondary: '#8AAAE5',
    cardBgColor: '#8AAAE5',
    titleColor: 'Purple',
    titleColorActive: 'White',
  }}/>
      </div>
      <div className='Right-side'>
        <h1 style={{color: '#8AAAE5'}}>
          <TypeWriter options= {{
            autoStart:true,
            loop:true,
            delay:50,
            strings: ["With this, you'll never forget Marelle"]
          }}
          />
        </h1>
        <div className='scene'>
          <div class="card-home">
              <div class="card__face card__face--front">
                <img src={MA1} />
              </div>
              <div class="card__face card__face--back">
                <img src={MA2} />
              </div>
          </div>
          <div class="card-home">
              <div class="card__face card__face--front">
                <img src={MA3} />
              </div>
              <div class="card__face card__face--back">
                <img src={MA4} />
              </div>
          </div>
          <div class="card-home">
              <div class="card__face card__face--front">
                <img src={MA5} />
              </div>
              <div class="card__face card__face--back">
                <img src={MA6} />
              </div>
          </div>
        </div>
        <p>I hope you enjoy your Christmas Gift.<br/> <br/>You mentioned you are pretty forgetful, <br/> <br/>So I made this so you never forget one of the best days of my life. <br/><br/> Love you -Sony
        </p>
        <Gif/>
        </div>
      </div>
  )
}

export default Home