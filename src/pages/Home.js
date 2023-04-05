import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./Home.css";

const Home = () => {
  const [profileDateTimePickerValue, setProfileDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="home">
        <div className="footer-wrapper">
          <div className="footer">
            <div className="copyright-2023-wrapped">{`Copyright 2023 Wrapped Ordinals, Inc. `}</div>
            <div className="social-media">
              <div className="twitter">Twitter</div>
              <div className="instagram">Instagram</div>
              <div className="discord">Discord</div>
              <div className="social-media1">Social Media</div>
            </div>
            <div className="comunity">
              <div className="become-a-partner">Become a Partner</div>
              <div className="faq-wrapper">
                <div className="faq">FAQ</div>
              </div>
              <div className="collections">Collections</div>
              <div className="token">Token</div>
              <div className="comunity1">Comunity</div>
            </div>
            <div className="about">
              <div className="support">Support</div>
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-of-service">Terms of Service</div>
              <div className="about-us">About Us</div>
              <div className="about1">About</div>
            </div>
            <div className="logo">
              <div className="wrap-your-btc">
                Wrap your BTC ordinals to enable trading on Opensea
              </div>
              <img className="logo-1-icon" alt="" src="/logo-1@2x.png" />
            </div>
          </div>
        </div>
        <div className="cta-wrapper">
          <div className="cta">
            <div className="container" />
            <div className="email">
              <button className="button">
                <div className="medium">Subscribe</div>
              </button>
              <input className="form" type="text" placeholder="Your Email" />
            </div>
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
            </div>
            <div className="stay-in-the">Stay in the loop</div>
          </div>
        </div>
        <div className="popular-articles-wrapper">
          <div className="popular-articles">
            <div className="nft-21">
              <div className="card" />
              <div className="button1">
                <div className="large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className="profile">
                <DatePicker
                  label="Cameron Williamson"
                  value={profileDateTimePickerValue}
                  onChange={(newValue) => {
                    setProfileDateTimePickerValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      variant="standard"
                      size="medium"
                      helperText=""
                    />
                  )}
                />
              </div>
              <div className="product-update-activity">
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className="image-placeholder" />
            </div>
            <div className="nft-20">
              <div className="card" />
              <div className="button1">
                <div className="large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className="profile1">
                <b className="cameron-williamson">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="/image-placeholder.svg"
                />
              </div>
              <div className="product-update-activity">
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className="image-placeholder" />
            </div>
            <div className="nft-17">
              <div className="card" />
              <div className="button1">
                <div className="large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className="profile1">
                <b className="cameron-williamson">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="/image-placeholder1.svg"
                />
              </div>
              <div className="product-update-activity">
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className="image-placeholder" />
            </div>
            <div className="nft-23">
              <div className="card" />
              <div className="button4">
                <div className="large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className="profile1">
                <b className="cameron-williamson">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="/image-placeholder2.svg"
                />
              </div>
              <div className="product-update-activity">
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className="image-placeholder" />
            </div>
            <div className="article-1">
              <div className="container1" />
              <div className="lorem-ipsum-dolor1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="profile4">
                <b className="cameron-williamson3">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon3"
                  alt=""
                  src="/image-placeholder3.svg"
                />
              </div>
              <div className="product-update-personalized-container">
                <span className="product-update-personalized">{`Product Update: Personalized Activity Feed `}</span>
                <b className="product-update">Product Update</b>
              </div>
              <div className="image-placeholder4" />
            </div>
            <div className="button5">
              <b className="large4">View All Articles</b>
            </div>
            <div className="popular-articles1">Popular Articles</div>
          </div>
        </div>
        <div className="popular-artist-wrapper">
          <div className="popular-artist">
            <div className="artist-9">
              <div className="bessiecr">@BessieCR</div>
              <b className="bessie-cooper">Bessie Cooper</b>
              <img
                className="image-placeholder-icon4"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">09</div>
            </div>
            <div className="artist-8">
              <div className="jacobjs">@JacobJS</div>
              <b className="jacob-jones">Jacob Jones</b>
              <img
                className="image-placeholder-icon5"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">08</div>
            </div>
            <div className="artist-7">
              <div className="estherh">@EstherH</div>
              <b className="esther-howard">Esther Howard</b>
              <img
                className="image-placeholder-icon6"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">07</div>
            </div>
            <div className="artist-6">
              <div className="cameron">@Cameron</div>
              <b className="cameron-williamson4">Cameron Williamson</b>
              <img
                className="image-placeholder-icon7"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">06</div>
            </div>
            <div className="artist-5">
              <div className="jenny">@Jenny</div>
              <b className="jenny-wilson">Jenny Wilson</b>
              <img
                className="image-placeholder-icon8"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">05</div>
            </div>
            <div className="artist-4">
              <div className="janec">@JaneC</div>
              <b className="jane-cooper">Jane Cooper</b>
              <img
                className="image-placeholder-icon9"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">04</div>
            </div>
            <div className="artist-3">
              <div className="brookly">@Brookly</div>
              <b className="brooklyn-simmons">Brooklyn Simmons</b>
              <img
                className="image-placeholder-icon10"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">03</div>
            </div>
            <div className="artist-2">
              <div className="marvinwoy">@MarvinWoy</div>
              <b className="marvin-mckinney">Marvin McKinney</b>
              <img
                className="image-placeholder-icon11"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div">02</div>
            </div>
            <div className="artist-1">
              <div className="arlenemc">@ArleneMc</div>
              <b className="arlene-mccoy">Arlene McCoy</b>
              <img
                className="image-placeholder-icon12"
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className="div8">01</div>
            </div>
            <div className="arrow-right">
              <div className="arrow-right-child" />
              <img
                className="arrows-arrow-right"
                alt=""
                src="/24--arrows--arrowright.svg"
              />
            </div>
            <div className="arrow-left">
              <div className="arrow-left-child" />
              <img
                className="arrows-arrow-right1"
                alt=""
                src="/24--arrows--arrowright1.svg"
              />
            </div>
            <div className="popular-artists">Popular ArtistS</div>
          </div>
        </div>
        <div className="explore-art-wrapper">
          <div className="explore-art">
            <div className="nft">
              <div className="nft-18">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-171">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-16">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-15">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-14">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-13">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-12">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-11">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
              <div className="nft-10">
                <div className="card" />
                <div className="button6">
                  <div className="place-bid">Place Bid</div>
                </div>
                <div className="end-in">
                  <b className="h-12m-32s">1 of 10</b>
                  <b className="available">Available:</b>
                </div>
                <div className="current-bid">
                  <b className="eth">0.4435 ETH</b>
                  <b className="current-bid1">Current Bid :</b>
                </div>
                <div className="profile5">
                  <b className="cameron-williamson5">Cameron Williamson</b>
                  <img
                    className="image-placeholder-icon13"
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className="inscription">Inscription</div>
                <div className="image-placeholder5" />
              </div>
            </div>
            <div className="category">
              <div className="button15">
                <div className="small">{`Filter & Sort`}</div>
                <div className="ui-filter">
                  <div className="combined-shape">
                    <div className="filter" />
                    <div className="rectangle" />
                    <div className="rectangle1" />
                  </div>
                </div>
              </div>
              <div className="button16">
                <div className="small">Memes</div>
              </div>
              <div className="button17">
                <div className="small">Music</div>
              </div>
              <div className="button18">
                <div className="small">Games</div>
              </div>
              <div className="button19">
                <div className="small">Photography</div>
              </div>
              <div className="button20">
                <div className="small">Art</div>
              </div>
              <div className="button21">
                <div className="small">All</div>
              </div>
            </div>
            <div className="explore-art1">Explore Styles</div>
          </div>
        </div>
        <div className="live-auctions-wrapper">
          <div className="live-auctions">
            <div className="nft-7">
              <div className="card" />
              <div className="button22">
                <div className="large5">Place a bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">10h 12m 32s</b>
                <b className="ends-in">Ends in :</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile5">
                <b className="cameron-williamson5">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon13"
                  alt=""
                  src="/image-placeholder6.svg"
                />
              </div>
              <div className="inscription">Inscription</div>
              <div className="image-placeholder5" />
            </div>
            <div className="nft-6">
              <div className="card" />
              <div className="button22">
                <div className="large5">Place a bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">10h 12m 32s</b>
                <b className="ends-in">Ends in :</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile5">
                <b className="cameron-williamson5">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon13"
                  alt=""
                  src="/image-placeholder6.svg"
                />
              </div>
              <div className="inscription">Inscription</div>
              <div className="image-placeholder5" />
            </div>
            <div className="nft-1">
              <div className="card" />
              <div className="button22">
                <div className="large5">Place bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">10h 12m 32s</b>
                <b className="ends-in">Ends in :</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile5">
                <b className="cameron-williamson5">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon13"
                  alt=""
                  src="/image-placeholder6.svg"
                />
              </div>
              <div className="inscription">Inscription</div>
              <div className="image-placeholder5" />
            </div>
            <div className="arrow-right1">
              <div className="arrow-right-item" />
              <img
                className="arrows-arrow-right"
                alt=""
                src="/24--arrows--arrowright2.svg"
              />
            </div>
            <div className="arrow-left1">
              <div className="arrow-left-item" />
              <img
                className="arrows-arrow-right1"
                alt=""
                src="/24--arrows--arrowright3.svg"
              />
            </div>
            <div className="live-auctions1">Live auctions</div>
          </div>
        </div>
        <div className="hero-wrapper">
          <div className="hero">
            <div className="nft-3">
              <div className="card" />
              <div className="button25">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="separator" />
              <div className="current-bid24">
                <b className="eth12">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile17">
                <b className="robert-fox">Robert Fox</b>
                <img
                  className="image-placeholder-icon25"
                  alt=""
                  src="/image-placeholder7.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <img
                className="image-placeholder-icon26"
                alt=""
                src="/image-placeholder8.svg"
              />
            </div>
            <div className="nft-4">
              <div className="card" />
              <div className="button25">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="separator" />
              <div className="current-bid24">
                <b className="eth12">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile17">
                <b className="robert-fox">Robert Fox</b>
                <img
                  className="image-placeholder-icon25"
                  alt=""
                  src="/image-placeholder9.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <img
                className="image-placeholder-icon26"
                alt=""
                src="/image-placeholder10.svg"
              />
            </div>
            <div className="button27">
              <div className="large5">Collections</div>
            </div>
            <div className="button28">
              <div className="large8">Wrap Your Ordinal</div>
            </div>
            <div className="lorem-ipsum-is">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before final copy is available.
            </div>
            <div className="wrapped-ordinals">Wrapped Ordinals</div>
          </div>
        </div>
        <div className="navbar">
          <div className="container4" />
          <div className="button29">
            <b className="large4">Connect Wallet</b>
          </div>
          <div className="menu">
            <div className="comunity2">
              <div className="community">Community</div>
              <img
                className="arrow-chevron-down"
                alt=""
                src="/arrow-chevron-down.svg"
              />
            </div>
            <div className="artist-collectors">{`Artist & Collectors`}</div>
            <div className="exhibition">Exhibition</div>
            <div className="explore">Explore</div>
            <div className="market">Market</div>
            <b className="home1">Home</b>
          </div>
          <img className="logo-1-icon1" alt="" src="/logo-11@2x.png" />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Home;
