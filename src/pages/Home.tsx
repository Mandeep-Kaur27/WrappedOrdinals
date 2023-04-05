import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const [profileDateTimePickerValue, setProfileDateTimePickerValue] = useState<
    string | null
  >(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.home}>
        <div className={styles.footerWrapper}>
          <div className={styles.footer}>
            <div
              className={styles.copyright2023Wrapped}
            >{`Copyright 2023 Wrapped Ordinals, Inc. `}</div>
            <div className={styles.socialMedia}>
              <div className={styles.twitter}>Twitter</div>
              <div className={styles.instagram}>Instagram</div>
              <div className={styles.discord}>Discord</div>
              <div className={styles.socialMedia1}>Social Media</div>
            </div>
            <div className={styles.comunity}>
              <div className={styles.becomeAPartner}>Become a Partner</div>
              <div className={styles.faqWrapper}>
                <div className={styles.faq}>FAQ</div>
              </div>
              <div className={styles.collections}>Collections</div>
              <div className={styles.token}>Token</div>
              <div className={styles.comunity1}>Comunity</div>
            </div>
            <div className={styles.about}>
              <div className={styles.support}>Support</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfService}>Terms of Service</div>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.about1}>About</div>
            </div>
            <div className={styles.logo}>
              <div className={styles.wrapYourBtc}>
                Wrap your BTC ordinals to enable trading on Opensea
              </div>
              <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <div className={styles.cta}>
            <div className={styles.container} />
            <div className={styles.email}>
              <button className={styles.button}>
                <div className={styles.medium}>Subscribe</div>
              </button>
              <input
                className={styles.form}
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
            </div>
            <div className={styles.stayInThe}>Stay in the loop</div>
          </div>
        </div>
        <div className={styles.popularArticlesWrapper}>
          <div className={styles.popularArticles}>
            <div className={styles.nft21}>
              <div className={styles.card} />
              <div className={styles.button1}>
                <div className={styles.large}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className={styles.profile}>
                <DatePicker
                  label="Cameron Williamson"
                  value={profileDateTimePickerValue}
                  onChange={(newValue: any) => {
                    setProfileDateTimePickerValue(newValue);
                  }}
                  renderInput={(params: any) => (
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
              <div className={styles.productUpdateActivity}>
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className={styles.imagePlaceholder} />
            </div>
            <div className={styles.nft20}>
              <div className={styles.card} />
              <div className={styles.button1}>
                <div className={styles.large}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className={styles.profile1}>
                <b className={styles.cameronWilliamson}>Cameron Williamson</b>
                <img
                  className={styles.imagePlaceholderIcon}
                  alt=""
                  src="/image-placeholder.svg"
                />
              </div>
              <div className={styles.productUpdateActivity}>
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className={styles.imagePlaceholder} />
            </div>
            <div className={styles.nft17}>
              <div className={styles.card} />
              <div className={styles.button1}>
                <div className={styles.large}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className={styles.profile1}>
                <b className={styles.cameronWilliamson}>Cameron Williamson</b>
                <img
                  className={styles.imagePlaceholderIcon}
                  alt=""
                  src="/image-placeholder1.svg"
                />
              </div>
              <div className={styles.productUpdateActivity}>
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className={styles.imagePlaceholder} />
            </div>
            <div className={styles.nft23}>
              <div className={styles.card} />
              <div className={styles.button4}>
                <div className={styles.large}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor iyfyif incididunt ut labore et dolore magna
                  bm,n k/aliquaLorem ipsum dolor sit amet, cardd khv
                </div>
              </div>
              <div className={styles.profile1}>
                <b className={styles.cameronWilliamson}>Cameron Williamson</b>
                <img
                  className={styles.imagePlaceholderIcon}
                  alt=""
                  src="/image-placeholder2.svg"
                />
              </div>
              <div className={styles.productUpdateActivity}>
                Product Update: Activity Feed + New Ways to Discover
              </div>
              <div className={styles.imagePlaceholder} />
            </div>
            <div className={styles.article1}>
              <div className={styles.container1} />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className={styles.profile4}>
                <b className={styles.cameronWilliamson3}>Cameron Williamson</b>
                <img
                  className={styles.imagePlaceholderIcon3}
                  alt=""
                  src="/image-placeholder3.svg"
                />
              </div>
              <div className={styles.productUpdatePersonalizedContainer}>
                <span
                  className={styles.productUpdatePersonalized}
                >{`Product Update: Personalized Activity Feed `}</span>
                <b className={styles.productUpdate}>Product Update</b>
              </div>
              <div className={styles.imagePlaceholder4} />
            </div>
            <div className={styles.button5}>
              <b className={styles.large4}>View All Articles</b>
            </div>
            <div className={styles.popularArticles1}>Popular Articles</div>
          </div>
        </div>
        <div className={styles.popularArtistWrapper}>
          <div className={styles.popularArtist}>
            <div className={styles.artist9}>
              <div className={styles.bessiecr}>@BessieCR</div>
              <b className={styles.bessieCooper}>Bessie Cooper</b>
              <img
                className={styles.imagePlaceholderIcon4}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>09</div>
            </div>
            <div className={styles.artist8}>
              <div className={styles.jacobjs}>@JacobJS</div>
              <b className={styles.jacobJones}>Jacob Jones</b>
              <img
                className={styles.imagePlaceholderIcon5}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>08</div>
            </div>
            <div className={styles.artist7}>
              <div className={styles.estherh}>@EstherH</div>
              <b className={styles.estherHoward}>Esther Howard</b>
              <img
                className={styles.imagePlaceholderIcon6}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>07</div>
            </div>
            <div className={styles.artist6}>
              <div className={styles.cameron}>@Cameron</div>
              <b className={styles.cameronWilliamson4}>Cameron Williamson</b>
              <img
                className={styles.imagePlaceholderIcon7}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>06</div>
            </div>
            <div className={styles.artist5}>
              <div className={styles.jenny}>@Jenny</div>
              <b className={styles.jennyWilson}>Jenny Wilson</b>
              <img
                className={styles.imagePlaceholderIcon8}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>05</div>
            </div>
            <div className={styles.artist4}>
              <div className={styles.janec}>@JaneC</div>
              <b className={styles.janeCooper}>Jane Cooper</b>
              <img
                className={styles.imagePlaceholderIcon9}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>04</div>
            </div>
            <div className={styles.artist3}>
              <div className={styles.brookly}>@Brookly</div>
              <b className={styles.brooklynSimmons}>Brooklyn Simmons</b>
              <img
                className={styles.imagePlaceholderIcon10}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>03</div>
            </div>
            <div className={styles.artist2}>
              <div className={styles.marvinwoy}>@MarvinWoy</div>
              <b className={styles.marvinMckinney}>Marvin McKinney</b>
              <img
                className={styles.imagePlaceholderIcon11}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div}>02</div>
            </div>
            <div className={styles.artist1}>
              <div className={styles.arlenemc}>@ArleneMc</div>
              <b className={styles.arleneMccoy}>Arlene McCoy</b>
              <img
                className={styles.imagePlaceholderIcon12}
                alt=""
                src="/image-placeholder4.svg"
              />
              <div className={styles.div8}>01</div>
            </div>
            <div className={styles.arrowRight}>
              <div className={styles.arrowRightChild} />
              <img
                className={styles.arrowsArrowRight}
                alt=""
                src="/24--arrows--arrowright.svg"
              />
            </div>
            <div className={styles.arrowLeft}>
              <div className={styles.arrowLeftChild} />
              <img
                className={styles.arrowsArrowRight1}
                alt=""
                src="/24--arrows--arrowright1.svg"
              />
            </div>
            <div className={styles.popularArtists}>Popular ArtistS</div>
          </div>
        </div>
        <div className={styles.exploreArtWrapper}>
          <div className={styles.exploreArt}>
            <div className={styles.nft}>
              <div className={styles.nft18}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft171}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft16}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft15}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft14}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft13}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft12}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft11}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
              <div className={styles.nft10}>
                <div className={styles.card} />
                <div className={styles.button6}>
                  <div className={styles.placeBid}>Place Bid</div>
                </div>
                <div className={styles.endIn}>
                  <b className={styles.h12m32s}>1 of 10</b>
                  <b className={styles.available}>Available:</b>
                </div>
                <div className={styles.currentBid}>
                  <b className={styles.eth}>0.4435 ETH</b>
                  <b className={styles.currentBid1}>Current Bid :</b>
                </div>
                <div className={styles.profile5}>
                  <b className={styles.cameronWilliamson5}>
                    Cameron Williamson
                  </b>
                  <img
                    className={styles.imagePlaceholderIcon13}
                    alt=""
                    src="/image-placeholder5.svg"
                  />
                </div>
                <div className={styles.inscription}>Inscription</div>
                <div className={styles.imagePlaceholder5} />
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.button15}>
                <div className={styles.small}>{`Filter & Sort`}</div>
                <div className={styles.uiFilter}>
                  <div className={styles.combinedShape}>
                    <div className={styles.filter} />
                    <div className={styles.rectangle} />
                    <div className={styles.rectangle1} />
                  </div>
                </div>
              </div>
              <div className={styles.button16}>
                <div className={styles.small}>Memes</div>
              </div>
              <div className={styles.button17}>
                <div className={styles.small}>Music</div>
              </div>
              <div className={styles.button18}>
                <div className={styles.small}>Games</div>
              </div>
              <div className={styles.button19}>
                <div className={styles.small}>Photography</div>
              </div>
              <div className={styles.button20}>
                <div className={styles.small}>Art</div>
              </div>
              <div className={styles.button21}>
                <div className={styles.small}>All</div>
              </div>
            </div>
            <div className={styles.exploreArt1}>Explore Styles</div>
          </div>
        </div>
        <div className={styles.liveAuctionsWrapper}>
          <div className={styles.liveAuctions}>
            <div className={styles.nft7}>
              <div className={styles.card} />
              <div className={styles.button22}>
                <div className={styles.large5}>Place a bid</div>
              </div>
              <div className={styles.endIn}>
                <b className={styles.h12m32s}>10h 12m 32s</b>
                <b className={styles.endsIn}>Ends in :</b>
              </div>
              <div className={styles.currentBid}>
                <b className={styles.eth}>0.4435 ETH</b>
                <b className={styles.currentBid1}>Current Bid :</b>
              </div>
              <div className={styles.profile5}>
                <b className={styles.cameronWilliamson5}>Cameron Williamson</b>
                <img
                  className={styles.imagePlaceholderIcon13}
                  alt=""
                  src="/image-placeholder6.svg"
                />
              </div>
              <div className={styles.inscription}>Inscription</div>
              <div className={styles.imagePlaceholder5} />
            </div>
            <div className={styles.nft6}>
              <div className={styles.card} />
              <div className={styles.button22}>
                <div className={styles.large5}>Place a bid</div>
              </div>
              <div className={styles.endIn}>
                <b className={styles.h12m32s}>10h 12m 32s</b>
                <b className={styles.endsIn}>Ends in :</b>
              </div>
              <div className={styles.currentBid}>
                <b className={styles.eth}>0.4435 ETH</b>
                <b className={styles.currentBid1}>Current Bid :</b>
              </div>
              <div className={styles.profile5}>
                <b className={styles.cameronWilliamson5}>Cameron Williamson</b>
                <img
                  className={styles.imagePlaceholderIcon13}
                  alt=""
                  src="/image-placeholder6.svg"
                />
              </div>
              <div className={styles.inscription}>Inscription</div>
              <div className={styles.imagePlaceholder5} />
            </div>
            <div className={styles.nft1}>
              <div className={styles.card} />
              <div className={styles.button22}>
                <div className={styles.large5}>Place bid</div>
              </div>
              <div className={styles.endIn}>
                <b className={styles.h12m32s}>10h 12m 32s</b>
                <b className={styles.endsIn}>Ends in :</b>
              </div>
              <div className={styles.currentBid}>
                <b className={styles.eth}>0.4435 ETH</b>
                <b className={styles.currentBid1}>Current Bid :</b>
              </div>
              <div className={styles.profile5}>
                <b className={styles.cameronWilliamson5}>Cameron Williamson</b>
                <img
                  className={styles.imagePlaceholderIcon13}
                  alt=""
                  src="/image-placeholder6.svg"
                />
              </div>
              <div className={styles.inscription}>Inscription</div>
              <div className={styles.imagePlaceholder5} />
            </div>
            <div className={styles.arrowRight1}>
              <div className={styles.arrowRightItem} />
              <img
                className={styles.arrowsArrowRight}
                alt=""
                src="/24--arrows--arrowright2.svg"
              />
            </div>
            <div className={styles.arrowLeft1}>
              <div className={styles.arrowLeftItem} />
              <img
                className={styles.arrowsArrowRight1}
                alt=""
                src="/24--arrows--arrowright3.svg"
              />
            </div>
            <div className={styles.liveAuctions1}>Live auctions</div>
          </div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.hero}>
            <div className={styles.nft3}>
              <div className={styles.card} />
              <div className={styles.button25}>
                <div className={styles.placeBid}>Place Bid</div>
              </div>
              <div className={styles.separator} />
              <div className={styles.currentBid24}>
                <b className={styles.eth12}>0.4435 ETH</b>
                <b className={styles.currentBid1}>Current Bid :</b>
              </div>
              <div className={styles.profile17}>
                <b className={styles.robertFox}>Robert Fox</b>
                <img
                  className={styles.imagePlaceholderIcon25}
                  alt=""
                  src="/image-placeholder7.svg"
                />
              </div>
              <div className={styles.inscription12}>Inscription</div>
              <img
                className={styles.imagePlaceholderIcon26}
                alt=""
                src="/image-placeholder8.svg"
              />
            </div>
            <div className={styles.nft4}>
              <div className={styles.card} />
              <div className={styles.button25}>
                <div className={styles.placeBid}>Place Bid</div>
              </div>
              <div className={styles.separator} />
              <div className={styles.currentBid24}>
                <b className={styles.eth12}>0.4435 ETH</b>
                <b className={styles.currentBid1}>Current Bid :</b>
              </div>
              <div className={styles.profile17}>
                <b className={styles.robertFox}>Robert Fox</b>
                <img
                  className={styles.imagePlaceholderIcon25}
                  alt=""
                  src="/image-placeholder9.svg"
                />
              </div>
              <div className={styles.inscription12}>Inscription</div>
              <img
                className={styles.imagePlaceholderIcon26}
                alt=""
                src="/image-placeholder10.svg"
              />
            </div>
            <div className={styles.button27}>
              <div className={styles.large5}>Collections</div>
            </div>
            <div className={styles.button28}>
              <div className={styles.large8}>Wrap Your Ordinal</div>
            </div>
            <div className={styles.loremIpsumIs}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before final copy is available.
            </div>
            <div className={styles.wrappedOrdinals}>Wrapped Ordinals</div>
          </div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.container4} />
          <div className={styles.button29}>
            <b className={styles.large4}>Connect Wallet</b>
          </div>
          <div className={styles.menu}>
            <div className={styles.comunity2}>
              <div className={styles.community}>Community</div>
              <img
                className={styles.arrowChevronDown}
                alt=""
                src="/arrow-chevron-down.svg"
              />
            </div>
            <div
              className={styles.artistCollectors}
            >{`Artist & Collectors`}</div>
            <div className={styles.exhibition}>Exhibition</div>
            <div className={styles.explore}>Explore</div>
            <div className={styles.market}>Market</div>
            <b className={styles.home1}>Home</b>
          </div>
          <img className={styles.logo1Icon1} alt="" src="/logo-11@2x.png" />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Home;
