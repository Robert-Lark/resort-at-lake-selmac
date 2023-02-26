import { useQuery, gql } from "@apollo/client";
import "../src/styles/body.css";
import img1 from "../src/assets/rob_img_2.jpeg";
// import img2 from "../src/assets/rob_img_3.jpeg";
import teepees from "../src/assets/teepees.jpeg";
import img3 from "../src/assets/rob_img_4.jpeg";
import top from "../src/assets/Top.png";

const GET_HOME_QUERY = gql`
  query GetAllHomePage {
    allHomePage {
      Image1 {
        asset {
          url
        }
      }
      heading1
      heading2
      content1Raw
      heading3
      image2 {
        asset {
          url
        }
      }
      content2Raw
      heading4
      image4 {
        asset {
          url
        }
      }
      content4Raw
      heading5
      image5 {
        asset {
          url
        }
      }
      content5Raw
      heading6
      image6 {
        asset {
          url
        }
      }
      content6Raw
      heading7
      image7 {
        asset {
          url
        }
      }
      content7Raw
      heading8
      image8 {
        asset {
          url
        }
      }
      content8Raw
    }
  }
`;

function Body() {
  const { loading, data } = useQuery(GET_HOME_QUERY);

  const fallbacks = {
    heading1:
      "Located in beautiful southern Oregon just over the California state line is the resort at Lake sell Mac this lake has a great fishing and is stocked annually with trout you can fish largemouth bash catfish bluegill crappy perch and pan fish and Oregon record bass has been caught in lake sell Mac.",
    heading2: "A great place for family reunions and events",
    content1Raw:
      "Lake Selmac offers a lot of outdoor activities to all ages, hiking, boating, fishing and relaxing. Ask us about your event.",
    heading3: "COUNTRY STORE",
    content2Raw:
      "The store is well stocked and conveniently located within walking distance from all our campsites. You’ll find firewood and kindling, coffee, ice cold beer and beverages, wine, fishing bait, tackle, and day fishing licenses. We have a lot of your favorite snacks, candy, and meals, as well as, camping supplies, kites, and fun water toys. Boat and watercraft rentals are available here too. Feel free to visit us and ask about local activities and places to visit nearby.",
    heading4: "CAMPSITES",
    content4Raw:
      "Available for reservations are 2 cabins, 3 tipis, a total of 29 RV/tent sites, 11 of those are pull throughs, a 50 amp electricity service, dump station ($5) , wireless internet, bathrooms, hot showers, and laundry facility.  Our prices are very reasonable. Take a look at our rates.",
    heading5: "RENTALS",
    content5Raw:
      "We also rent boats with a trolling motor, stand up paddle boards, pedal boats, and kayaks. Our prices are listed on our rates page. There’s more to do than fish! Go play on the frisbee disc golf course, bike or hike the groomed trail around Lake Selmac. Take a day for local attractions like the Oregon Caves, Great Cats World Park, or go wine tasting at Foris Vineyards Winery and Augustino Estate vineyards for a taste of the community.",
      heading6: "Family Owned and Managed Again!",
    content6Raw:
      "Vince and Shannon are running the resort at Lake Selmac and intend on providing a safe quaint and family friendly resort along this cherish lake sell Mac near Cave Junction and has no longer smoke on the water the local community is thrilled to have the family back",
      heading7: "Resort at Selmac Lake where you can catch sizable largemouth bass" ,
      content7Raw:
      "Selmac Lake is not a big lake, but has a splendid amount of sizable largemouth bass. This southern Oregon reservoir, located 20 miles southwest of Grants Pass, is stocked annually with rainbow trout and has plenty of pan fish. The Resort at Lake Selmac, also known as Lake Selmac Resort, has been a favorite outdoor adventure and camping destination for generations. Families return annually for boating, fishing, hiking, biking, swimming and just plain relaxing. It’s a great location for family reunions, class reunions, and events.",
      heading8: "Many things to do are just a short drive away" ,
      content8Raw:
      "Visit the Oregon Caves National Monument and Preserve, take a jetboat ride down the Wild and Scenic Rogue River out of Grants Pass (20 miles away) with Hellgate Excursions, take a guided tour at the amazing Great Cats of the World Park (a wild cat reserve here in Cave Junction), taste gold medal wines from this region at Foris Vineyards Winery, and have an incredible experience tasting wines in a tree house tasting room overlooking a beautiful lake at Augustinos Estate & Vineyard, just to name a few adventures you can have if you want to explore the local attractions.",
  };

  if (loading) {
    return <h1>LOADING</h1>;
  }
  const pageData = data.allHomePage[0];
  
  function contentReturner(content: any) {
    return content.map((node: any, i: number) => (
      <p className="small_paragraph" key={i}>
        {node.children[0].text}
      </p>
    ));
  }

  return (
    <div className="body_content">
      <img
        src={pageData.Image1.asset.url ? pageData.Image1.asset.url : top}
        alt="resort at lake selmac store front"
      />
      <p className="large_paragraph">
        {pageData.heading1 ? pageData.heading1 : fallbacks.heading1}
      </p>
      <h2>{pageData.heading2 ? pageData.heading2 : fallbacks.heading2}</h2>
      <p>
        {contentReturner(pageData.content1Raw)
          ? contentReturner(pageData.content1Raw)
          : fallbacks.content1Raw}
      </p>

      <h2>{pageData.heading3 ? pageData.heading3 : fallbacks.heading3}</h2>
      <p>
        {contentReturner(pageData.content2Raw)
          ? contentReturner(pageData.content2Raw)
          : fallbacks.content2Raw}
      </p>
      <img
        src={pageData.image2.asset.url ? pageData.image2.asset.url : img1}
        alt="lake shot"
      />
      <h2>{pageData.heading4 ? pageData.heading4 : fallbacks.heading4}</h2>
      <p>
        {contentReturner(pageData.content4Raw)
          ? contentReturner(pageData.content4Raw)
          : fallbacks.content4Raw}
      </p>
      <img
        src={pageData.image4.asset.url ? pageData.image4.asset.url : teepees}
        alt="lake shot"
      />
      <h2>{pageData.heading5 ? pageData.heading5 : fallbacks.heading5}</h2>
      <p>
        {contentReturner(pageData.content5Raw)
          ? contentReturner(pageData.content5Raw)
          : fallbacks.content5Raw}
      </p>
      <ul>
        <li>RV park</li>
        <li>tent camping</li>
        <li>cabins and teepees available</li>
        <li>Full service Country Store </li>
        <li> RV sites with 13 pull-throughs</li>
        <li>Tent camping sites with electric and water</li>
        <li>Well-shaded camping sites</li>
        <li>Wireless Internet service</li>
        <li>50 amp service</li>
        <li>Bathrooms with CLEAN hot showers</li>
        <li>Laundry room</li>
        <li>Fire rings</li>
        <li>Picnic tables</li>
        <li>Volleyball court</li>
        <li>Tetherball pole</li>
        <li>Horseshoe pits</li>
        <li>Pets welcome (No aggressive dogs allowed)</li>
        <li>Disc golf in walking distance of the Resort</li>
      </ul>
      <img
        src={pageData.image5.asset.url ? pageData.image5.asset.url : null}
        alt="rates"
        id="rates"
      />
      <h2>{pageData.heading6 ? pageData.heading6 : fallbacks.heading6}</h2>
      <p>
        {contentReturner(pageData.content6Raw)
          ? contentReturner(pageData.content6Raw)
          : fallbacks.content6Raw}
      </p>
      <img
        src={pageData.image6.asset.url ? pageData.image6.asset.url : img3}
        alt="lake shot"
      />
      <h2 id="fishing">{pageData.heading7 ? pageData.heading7 : fallbacks.heading7}</h2>
      <p>
        {contentReturner(pageData.content7Raw)
          ? contentReturner(pageData.content7Raw)
          : fallbacks.content7Raw}
      </p>
      <img
        src={pageData.image7.asset.url ? pageData.image7.asset.url : img3}
        alt="lake shot"
      />
      <h2 id="todo">{pageData.heading8 ? pageData.heading8 : fallbacks.heading8}</h2>
      <p>
        {contentReturner(pageData.content8Raw)
          ? contentReturner(pageData.content8Raw)
          : fallbacks.content8Raw}
      </p>
      <img
        src={pageData.image8.asset.url ? pageData.image8.asset.url : img3}
        alt="lake shot"
      />
    </div>
  );
}

export default Body;
