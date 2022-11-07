import React from 'react';
import '../src/styles/body.css'
import img1 from '../src/assets/rob_img_2.jpeg'
import img2 from '../src/assets/rob_img_3.jpeg'
import img3 from '../src/assets/rob_img_4.jpeg'
import top from '../src/assets/Top.png'

function Body() {
    return (
        <div className='body_content'>
            <img src={top} alt='resort at lake selmac store front' />
           <p className='first_paragraph'> Located in beautiful southern Oregon just over the California state line is the resort at Lake sell Mac this lake has a great fishing and is stocked annually with trout you can fish largemouth bash catfish bluegill crappy perch and pan fish and Oregon record bass has been caught in lake sell Mac.</p> 
           <h2>A great place for family reunions and events</h2>
           <p>Lake Selmac offers a lot of outdoor activities to all ages hiking boating fishing and relaxing ask us about your event</p>

           <h2>Country store</h2>
           <p>The store is well stocked and conveniently located within walking distance from all our campsites you’ll find firewood and kindling coffee ice cold beer and beverages wine fishing bait tackle and day fishing licenses we have a lot of your favorite snacks candy and meals as well as camping supplies kites and fun water toys boat and watercraft rentals are available here too feel free to visit us and ask about our local activities and places to visit nearby</p>
           <img src={img1} alt='lake shot' />
           <h2>Campsites</h2>
           <p>Available for reservations are two cabins three teepees a total of 29 RV/tent sites 11 of those are pull through as a 50 amp electricity service dump station for five dollars wireless Internet bathrooms hot showers and laundry facilities our prices are very reasonable take a look at our rights</p>
           <img src={img2} alt='lake shot' />
            <h2>Rentals</h2>
            <p>we also rent boats with a trolling major stand up paddleboard‘s paddle boats and kayaks our prices are listed on our rights page there’s more to do than fish go play on the frisbee disc golf course bike or hike the groomed trail around Lake Selnick take a day for local attractions like the Oregon caves great cats world park or go winetasting at Forest Vineyards winery and Augustino estate vineyards for a taste of the community</p>
            <h2>Call for reservations and information to make a reservation call the resort at 541-597-2277</h2>
            <ul>
                <li>RV park</li>
                <li>tent camping</li>
                <li>cabins and teepees available</li>
                <li>full-service country store </li>
                <li> RV sites with 13 pool throws</li>
                <li>tent camping sites with electric and water</li>
                <li>well shaded camping sites</li>
                <li>wireless Internet service</li>
                <li>50 amp service</li>
                <li>bathrooms with clean hot showers</li>
                <li>laundry room</li>
                <li>fire rings</li>
                <li>picnic tables</li>
                <li>volleyball court</li>
                <li>tetherball pole</li>
                <li>oh shoot pets</li>
                <li>pets welcome no aggressive dogs allowed</li>
                <li> Disculpe in walking distance of the resort</li>
            </ul>
            <img src={img3} alt='lake shot' />
            <h2>Family owned and managed again!</h2>
            <p>Vince and Shannon are running the resort at Lake Selmac and intend on providing a safe quaint and family friendly resort along this cherish lake sell Mac near Cave Junction and has no longer smoke on the water the local community is thrilled to have the family back</p>
            <h2>Resort at Lake Selmac: where you can catch sizable largemouth bass</h2>
            <p>Salmac like it’s not a big lake but has a splendid amount of sizable largemouth bass the southern Oregon Reservoir located 20 miles south west of grants Pass is stocked annually with rainbow trout and has plenty of pound fish in the resort at Lake Selnick also known as Lake Salmac resort has been a favorite outdoor adventure and camping destinations for generations families return annual leave for boating fishing hiking biking swimming and just playing relaxing it’s a great location for family reunions class reunions and events</p>
            <h2>Many things to do are just a short drive away</h2>
            <p>visit the Oregon caves national monument and preserve take a jet by boat ride town the wild and scenic rogue River out of grants Pass 20 miles away with Hellgate excursions take a guided tour at the amazing great cats of the world park a wildcat reserve here in Cave Junction taste gold medal wines from this region at forest vineyards winery and have an incredible experience tasting wines in a treehouse tasting room overlooking a beautiful lake at Augustino estate and Vineyards just to name a few adventures you can have if you want to explore the local attractions </p>
        </div>
    );
}

export default Body;