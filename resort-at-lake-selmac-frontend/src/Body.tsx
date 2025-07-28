import { useQuery, gql } from "@apollo/client";
import "../src/styles/body.css";
import fishing_pole from "../src/assets/fishing_pole.png";
import img1 from "../src/assets/rob_img_2.jpeg";
// import img2 from "../src/assets/rob_img_3.jpeg";
import teepees from "../src/assets/teepees.jpeg";
import img3 from "../src/assets/rob_img_4.jpeg";
import top from "../src/assets/Top.png";
import map from "../src/assets/map.png";
import Footer from "./Footer";
import ContactForm from "./Form";
// import Gallery from "./Gallery";

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
      cabins
      cabinsContentRaw
      cabinsImg1 {
        asset {
          url
        }
      }
      cabinsImg2 {
        asset {
          url
        }
      }
      cabinsImg3 {
        asset {
          url
        }
      }
      cabinsImg4 {
        asset {
          url
        }
      }
      cabinsImg5 {
        asset {
          url
        }
      }
      cabinsImg6 {
        asset {
          url
        }
      }
      dogWash
      dogWashContentRaw
      dogWashImg1 {
        asset {
          url
        }
      }
      dogWashImg2 {
        asset {
          url
        }
      }
      dogWashImg3 {
        asset {
          url
        }
      }
      dogWashImg4 {
        asset {
          url
        }
      }
      heading5
      rentalImage5 {
        asset {
          url
        }
      }
      content5Raw
      bulletPoints {
        points
      }
      heading6
      Additional1
      TentDaily
      TentWeekly
      PartialHookupDaily
      PartialHookupWeekly
      FullHookupDaily
      FullHookupWeekly
      CabinDaily
      CabinWeekly
      TipiDaily
      TipiWeekly
      Additional2
      rentalImage6 {
        asset {
          url
        }
      }
      heading7
      Additiona3
      DumbStation
      TentRVAdditionalPersonRate
      Pets
      CabinExtraInfo
      SpaceHeaters
      Additional4
      rentalImage7 {
        asset {
          url
        }
      }
      heading8
      Additional5
      BoatsandTrollingMotors
      PedalBoats
      KayakOrCanoe
      StandUpPaddleBoard
      Additional6
      heading9
      image6 {
        asset {
          url
        }
      }
      content6Raw
      heading10
      image7 {
        asset {
          url
        }
      }
      content7Raw
      heading11
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
  console.log(data);
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
    cabins: "CABINS",
    cabinsContentRaw: "Available for reservations are 2 cabins",
    heading5: "RENTALS",
    content5Raw:
      "We also rent boats with a trolling motor, stand up paddle boards, pedal boats, and kayaks. Our prices are listed on our rates page. There’s more to do than fish! Go play on the frisbee disc golf course, bike or hike the groomed trail around Lake Selmac. Take a day for local attractions like the Oregon Caves, Great Cats World Park, or go wine tasting at Foris Vineyards Winery and Augustino Estate vineyards for a taste of the community.",
    heading6: "Family Owned and Managed Again!",
    content6Raw:
      "Vince and Shannon are running the resort at Lake Selmac and intend on providing a safe quaint and family friendly resort along this cherish lake sell Mac near Cave Junction and has no longer smoke on the water the local community is thrilled to have the family back",
    heading7:
      "Resort at Selmac Lake where you can catch sizable largemouth bass",
    content7Raw:
      "Selmac Lake is not a big lake, but has a splendid amount of sizable largemouth bass. This southern Oregon reservoir, located 20 miles southwest of Grants Pass, is stocked annually with rainbow trout and has plenty of pan fish. The Resort at Lake Selmac, also known as Lake Selmac Resort, has been a favorite outdoor adventure and camping destination for generations. Families return annually for boating, fishing, hiking, biking, swimming and just plain relaxing. It’s a great location for family reunions, class reunions, and events.",
    heading8: "Many things to do are just a short drive away",
    content8Raw:
      "Visit the Oregon Caves National Monument and Preserve, take a jetboat ride down the Wild and Scenic Rogue River out of Grants Pass (20 miles away) with Hellgate Excursions, take a guided tour at the amazing Great Cats of the World Park (a wild cat reserve here in Cave Junction), taste gold medal wines from this region at Foris Vineyards Winery, and have an incredible experience tasting wines in a tree house tasting room overlooking a beautiful lake at Augustinos Estate & Vineyard, just to name a few adventures you can have if you want to explore the local attractions.",
  };

  if (loading) {
    return <h1>LOADING</h1>;
  }
  const pageData = data.allHomePage[0];

  function contentReturner(content: any) {
    return content.map((node: any, i: number) => (
      <div className="block" key={i}>
        <p className="small_paragraph">
          {node.children.map((child: any, j: number) =>
            child.marks.includes("strong") ? (
              <strong key={j}>{child.text}</strong>
            ) : (
              child.text
            )
          )}
        </p>
      </div>
    ));
  }

  return (
    <div>
      <div className="body_content">
        <img
          src={pageData.Image1.asset.url ? pageData.Image1.asset.url : top}
          alt="resort at lake selmac store front"
        />
        <p className="large_paragraph">
          {pageData.heading1 ? pageData.heading1 : fallbacks.heading1}
        </p>
        <p className="large_paragraph">
          Call or text today to learn more: 541-597-2277
        </p>

        <a
          href="https://app.fireflyreservations.com/Reserve/Property/ResortatLakeSelmac?holdExpired=False"
          className="book-now-button shake-on-hover"
        >
          <b>Book Now</b>
        </a>
        <br></br>
        <br></br>
        <div className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XUxeijsET-g?si=zreiJ9FYUhBreHwn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <br></br>
        <br></br>
        <b className="fishing_blurb">
          <img
            src={fishing_pole}
            alt="Largemouth Bass"
            className="fishingIcon"
          />
          Lake Selmac produced a total of three state-record largemouth bass{" "}
          <img
            src={fishing_pole}
            alt="Largemouth Bass"
            className="fishingIcon"
          />{" "}
          <a href="#fishing">Learn More</a>
        </b>
        <br></br>
        <h2>{pageData.heading2 ? pageData.heading2 : fallbacks.heading2}</h2>
        <p>
          {contentReturner(pageData.content1Raw)
            ? contentReturner(pageData.content1Raw)
            : fallbacks.content1Raw}
        </p>
        <h2 id="store">
          {pageData.heading3 ? pageData.heading3 : fallbacks.heading3}
        </h2>
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
        {/* CABINS */}
        {pageData.cabins ? (
          <>
            <h2>{pageData.cabins ? pageData.cabins : fallbacks.cabins}</h2>
            <a
              href="https://app.fireflyreservations.com/Reserve/Property/ResortatLakeSelmac?holdExpired=False"
              className="book-now-button shake-on-hover"
            >
              <b>Book Now</b>
            </a>
            <p>
              {contentReturner(pageData.cabinsContentRaw)
                ? contentReturner(pageData.cabinsContentRaw)
                : fallbacks.cabinsContentRaw}
            </p>

            <div className="grid-container">
              {pageData.cabinsImg1 && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.cabinsImg1.asset.url
                        ? pageData.cabinsImg1.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.cabinsImg2 && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.cabinsImg2.asset.url
                        ? pageData.cabinsImg2.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.cabinsImg3 && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.cabinsImg3.asset.url
                        ? pageData.cabinsImg3.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.cabinsImg4 && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.cabinsImg4.asset.url
                        ? pageData.cabinsImg4.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.cabinsImg5 && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.cabinsImg5.asset.url
                        ? pageData.cabinsImg5.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.cabinsImg6 && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.cabinsImg6.asset.url
                        ? pageData.cabinsImg6.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
            </div>
          </>
        ) : null}
        {/* DOG WASH */}

        {pageData.dogWash ? (
          <>
            <h2>{pageData.dogWash ? pageData.dogWash : null}</h2>
            <p className="large_paragraph">
              Call or text today to learn more: 541-597-2277
            </p>
            <p>
              {contentReturner(pageData.dogWashContentRaw)
                ? contentReturner(pageData.dogWashContentRaw)
                : null}
            </p>

            <div className="grid-container">
              {pageData.dogWashImg1?.asset?.url && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.dogWashImg1.asset.url
                        ? pageData.dogWashImg1.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.dogWashImg2?.asset?.url && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.dogWashImg2.asset.url
                        ? pageData.dogWashImg2.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.dogWashImg3?.asset?.url && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.dogWashImg3.asset.url
                        ? pageData.dogWashImg3.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
              {pageData.dogWashImg4?.asset?.url && (
                <div className="grid-item">
                  <img
                    src={
                      pageData.dogWashImg4.asset.url
                        ? pageData.dogWashImg4.asset.url
                        : null
                    }
                    alt="lake shot"
                  />
                </div>
              )}
            </div>
          </>
        ) : null}
        <h2>{pageData.heading5 ? pageData.heading5 : fallbacks.heading5}</h2>
        <p>
          {contentReturner(pageData.content5Raw)
            ? contentReturner(pageData.content5Raw)
            : fallbacks.content5Raw}
        </p>
        {pageData.bulletPoints.points ? (
          <ul>
            {pageData.bulletPoints.points.map(function (
              point: string,
              i: number
            ) {
              return <li key={i}>{point}</li>;
            })}
          </ul>
        ) : (
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
        )}
        <div className="rentalRates">
          <div className="rentalRatesContent">
            <img
              src={
                pageData.rentalImage5.asset.url
                  ? pageData.rentalImage5.asset.url
                  : null
              }
              alt="rates"
              id="rates"
            />
            <h2>
              {pageData.heading6
                ? pageData.heading6
                : "Resort at Lake Selmac Rates"}
            </h2>
            <h3>{pageData.Additional1 ? pageData.Additional1 : null}</h3>
            <span className="span1">
              {pageData.TentDaily && <h3>Tent Daily: {pageData.TentDaily}</h3>}
              {pageData.TentWeekly && (
                <h3>Tent Weekly: {pageData.TentWeekly}</h3>
              )}
              <h3>Partial Hookup: {pageData.PartialHookupDaily}</h3>
              <h3>Partial Hookup Weekly: {pageData.PartialHookupWeekly}</h3>
              <h3>Full Hookup Daily: {pageData.FullHookupDaily}</h3>
              <h3>Full Hookup Weekly: {pageData.FullHookupWeekly}</h3>
              <h3>Cabin Daily: {pageData.CabinDaily}</h3>
              <h3>Cabin Weekly: {pageData.CabinWeekly}</h3>
              <h3>Tipi Daily: {pageData.TipiDaily}</h3>
              <h3>Tipi Weekly: {pageData.TipiWeekly}</h3>
            </span>
            <h3>{pageData.Additional2 ? pageData.Additional2 : null}</h3>
          </div>
          <div className="rentalRatesContent">
            <img
              src={
                pageData.rentalImage6.asset.url
                  ? pageData.rentalImage6.asset.url
                  : null
              }
              alt="rates"
              id="rates"
            />
            <h2>
              {pageData.heading7
                ? pageData.heading7
                : "Extra Fees & Additional Information"}
            </h2>
            <h3>{pageData.additiona3 ? pageData.additiona3 : null}</h3>
            <span className="span2">
              <h3>Dump Stations: {pageData.DumbStation}</h3>
              <h3>
                Tent, RV and Tipi Site Rate:{" "}
                {pageData.TentRVAdditionalPersonRate}
              </h3>
              <h3>Pets: {pageData.Pets}</h3>
              <h3>Cabin Rate: {pageData.CabinExtraInfo}</h3>
              <h3>Space Heaters: {pageData.SpaceHeaters}</h3>
            </span>
            <h3>{pageData.Additional4 ? pageData.Additional4 : null}</h3>
          </div>
          <div className="rentalRatesContent">
            <img
              src={
                pageData.rentalImage7.asset.url
                  ? pageData.rentalImage7.asset.url
                  : null
              }
              alt="rates"
              id="rates"
            />
            <h2>
              {pageData.heading8 ? pageData.heading8 : "Watercraft Rentals"}
            </h2>
            <h3 className="h3One">
              {pageData.Additional5
                ? pageData.Additional5
                : "To rent watercraft's you must show identification to prove you are 18 years or older."}
            </h3>
            <span className="span3">
              <h3>
                Boats with Trolling Motor: {pageData.BoatsandTrollingMotors}
              </h3>
              <h3>Pedal Boats: {pageData.PedalBoats}</h3>
              <h3>Kayak or Canoe: {pageData.KayakOrCanoe}</h3>
              <h3>Stand Up Paddle Board: {pageData.StandUpPaddleBoard}</h3>
            </span>
            <h3>{pageData.Additional6 ? pageData.Additional6 : null}</h3>
          </div>
          <p className="large_paragraph">
            Call or text today to learn more: 541-597-2277
          </p>
        </div>
        <h2>Map of the Resort at Lake Selmac</h2>
        <img src={map} alt="map of resort at lake selmac" />
        <br />
        <br />
        <br />
        <h2>{pageData.heading9 ? pageData.heading9 : fallbacks.heading6}</h2>
        <img
          src={pageData.image6.asset.url ? pageData.image6.asset.url : null}
          alt="rates"
          id="rates"
        />

        <p>
          {contentReturner(pageData.content6Raw)
            ? contentReturner(pageData.content6Raw)
            : fallbacks.content6Raw}
        </p>
        <h2 id="fishing">
          {pageData.heading10 ? pageData.heading10 : fallbacks.heading7}
        </h2>
        <img
          src={pageData.image7.asset.url ? pageData.image7.asset.url : img3}
          alt="lake shot"
        />
        <p>
          {contentReturner(pageData.content7Raw)
            ? contentReturner(pageData.content7Raw)
            : fallbacks.content7Raw}
        </p>
        <a
          href="https://app.fireflyreservations.com/Reserve/Property/ResortatLakeSelmac?holdExpired=False"
          className="book-now-button shake-on-hover"
        >
          <b>Book Now</b>
        </a>
        <h2 id="todo">
          {pageData.heading11 ? pageData.heading11 : fallbacks.heading8}
        </h2>
        <p>
          {contentReturner(pageData.content8Raw)
            ? contentReturner(pageData.content8Raw)
            : fallbacks.content8Raw}
        </p>
        <img
          src={pageData.image8.asset.url ? pageData.image8.asset.url : img3}
          alt="lake shot"
        />
        <div id="contact">
          <ContactForm />
        </div>
      </div>

      <Footer loading={loading} />
    </div>
  );
}

export default Body;
