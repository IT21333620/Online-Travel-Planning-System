import React, {useEffect, useState} from "react";
import axios from "axios";
import  "./Adventure.module.css";



export default function Adventure(){

    const[outdooracts, setOutdoorActs] = useState([]);

    useEffect(() =>{
        function getOutdoorActs(){
            axios.get("http://localhost:8070/OutdoorAct/").then((res) =>{
                console.log(res.data);
                setOutdoorActs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getOutdoorActs();
    }, [])

const Adventure = () => {
  return (
    <div className="adventure">
      <img className="adventureChild" alt="" src="/rectangle-2@2x.png" />
      <b
        className="outdoorsAdventure"
      >{`OUTDOORS & ADVENTURE EXPERIENCES IN SRI LANKA`}</b>
      <div className={styles.southernLanka}>Southern Lanka</div>
      <div className={styles.revealingTheFabric}>
        Revealing the fabric of the destination
      </div>
      <div className={styles.readReviews}>Read reviews</div>
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <div className={styles.destinationsInSri}>DESTINATIONS IN SRI LANKA</div>
      <div className={styles.eventsInSri}>EVENTS IN SRI LANKA</div>
      <div className={styles.hotelsInSri}>HOTELS IN SRI LANKA</div>
      <div className={styles.adventureItem} />
      <div className={styles.getBackToContainer}>
        <p className={styles.getBackTo}>
          Get back to nature with adventure travel in Sri Lanka. We've selected
          our favourite outdoor activities in Sri Lanka, including the best
          tours and trips that you can experience on your holiday.
        </p>
        <p className={styles.getBackTo}>&nbsp;</p>
        <p className={styles.getBackTo}>
          There are adventure sports in Sri Lanka such as white water rafting,
          surfing and kite-surfing, though in general the activities that we
          include in our holidays are relatively gentle and relaxed. We're not
          an activity holiday specialist; we're more about revealing the fabric
          of the destination.
        </p>
        <p className={styles.getBackTo}>&nbsp;</p>
        <p className={styles.getBackTo}>
          That said, we're bursting with trip ideas for Sri Lanka, and we'd be
          delighted to share them with you. It's all about your holiday. Have a
          look at what's possible and get in touch today.
        </p>
      </div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div
        className={styles.outdoorsAdventure1}
      >{`OUTDOORS & ADVENTURE EXPERIENCES IN SRI LANKA`}</div>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.escapeWithUs}>Escape with us!</div>
      <img className={styles.adventureInner} alt="" src="/rectangle-57.svg" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-57.svg" />
      <img className={styles.adventureChild1} alt="" src="/rectangle-58.svg" />
      <img className={styles.adventureChild2} alt="" src="/rectangle-57.svg" />
      <img className={styles.adventureChild3} alt="" src="/rectangle-57.svg" />
      <img className={styles.adventureChild4} alt="" src="/rectangle-57.svg" />
      <div className={styles.dontJustSee}>
        Don’t just see Sri Lanka- feel Sri Lanka.
      </div>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.bicycleTour}>BICYCLE TOUR</div>
      <div className={styles.golfVictoria}>GOLF - VICTORIA COURSE, KANDY</div>
      <div className={styles.whiteWaterRafting}>WHITE WATER RAFTING</div>
      <div className={styles.seaKayaking}>SEA KAYAKING</div>
      <div className={styles.rockClimbing}>ROCK CLIMBING</div>
      <div className={styles.exploreBentotaBy}>
        Explore Bentota by bicycle, visiting the Virahaya Temple and Lunuganga
        House.
      </div>
      <div className={styles.halfDayRock}>
        Half day rock climbing excursion in Avissawella
      </div>
      <div className={styles.hillCountryAdventures}>
        HILL COUNTRY ADVENTURES
      </div>
      <div
        className={styles.hikingMountainBiking}
      >{`Hiking, Mountain Biking, Hiking & Rafting the Kelani River`}</div>
      <div className={styles.aRoundOn}>
        A round on one of the most scenic golf courses in Asia
      </div>
      <div className={styles.thrilingRideDown}>
        Thriling ride down the kelani River and its idyllic surroundings with
        experienced rafters.
      </div>
      <div className={styles.excitingFullDaySea}>
        Exciting full-day sea kayak trip from Bentota
      </div>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <img className={styles.adventureChild5} alt="" src="/rectangle-57.svg" />
      <img className={styles.adventureChild6} alt="" src="/rectangle-57.svg" />
      <img className={styles.adventureChild7} alt="" src="/rectangle-57.svg" />
      <div className={styles.waterSportsIn}>WATER SPORTS IN BENTOTA</div>
      <div className={styles.trainThroughThe}>
        TRAIN THROUGH THE HILL COUNTRY
      </div>
      <div className={styles.pidurangulaRock}>PIDURANGULA ROCK</div>
      <div
        className={styles.tryYourHand}
      >{`Try your hand at windsurfing, water skiing, wake boarding ,banana rides, jet skiing, canoeing or surfing at Bentota, one of the best sports for water sports in Sri Lanka.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             `}</div>
      <div className={styles.oneOfAsias}>
        One of Asia’s train journeys, with spectacular views from start to
        finish.
      </div>
      <div
        className={styles.justBesideSigiriya}
      >{`Just beside Sigiriya Rock Fortress lies another granite rock jutting out of the surrounding lowand, Pidurangala Rock. `}</div>
      <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
      <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
      <img className={styles.adventureChild8} alt="" src="/rectangle-347.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.everySouthernLankaContainer}>
        <p className={styles.getBackTo}>
          Every Southern Lanka journey is unique. Tell us your loves, your
          hates, your holiday ambitions, your hopes and fears, and we’ll share a
          suitcase so full of inspired holiday ideas you’ll need to sit on it to
          shut it tight.
        </p>
        <p className={styles.getBackTo}>&nbsp;</p>
        <p className={styles.getBackTo}>&nbsp;</p>
        <p className={styles.getBackTo}>
          Not sure what you’re looking for? Let us inspire you...
        </p>
      </div>
      <b className={styles.getInTouch}>GET IN TOUCH</b>
      <div className={styles.yourNextAdventureContainer}>
        <p className={styles.getBackTo}>
          ~ Your next adventure starts with a conversation ~
        </p>
      </div>
      <img
        className={styles.adventureChild9}
        alt=""
        src="/rectangle-348@2x.png"
      />
      <div className={styles.callUs94}>Call us +94 71 71 76 76</div>
      <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupChild} />
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.tourGuideServices}>Tour Guide Services</div>
        <div className={styles.termsAndConditions}>Terms and Conditions</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.advertisingServices}>Advertising Services</div>
        <div className={styles.paymentPolicy}>Payment Policy</div>
        <img
          className={styles.mdiinstagramIcon}
          alt=""
          src="/mdiinstagram.svg"
        />
        <img
          className={styles.icbaselineFacebookIcon}
          alt=""
          src="/icbaselinefacebook.svg"
        />
        <img className={styles.mditwitterIcon} alt="" src="/mditwitter.svg" />
        <img className={styles.groupInner} alt="" src="/rectangle-75@2x.png" />
        <div className={styles.allRightReserved}>© All right reserved 2023</div>
        <img className={styles.mdilinkedinIcon} alt="" src="/mdilinkedin.svg" />
      </div>
      <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupChild1} />
            <div className={styles.outdoor}>Outdoor</div>
            <div className={styles.home}>Home</div>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-2@2x.png"
            />
            <div className={styles.stayIn}>Stay in</div>
            <div className={styles.vehicle}>{`Vehicle `}</div>
            <div className={styles.destinations}>Destinations</div>
            <div className={styles.events}>Events</div>
            <div className={styles.insurance}>{`Insurance `}</div>
            <div className={styles.packages}>Packages</div>
          </div>
        </div>
        <img className={styles.ellipseIcon} alt="" src="/ellipse-19@2x.png" />
      </div>
    </div>
  );
};
}
