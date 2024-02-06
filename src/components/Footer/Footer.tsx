import React from "react";
import logo from "../../assets/logo.png";
import discord from "../../assets/DiscordLogo.svg";
import youtube from "../../assets/YoutubeLogo.svg";
import twitter from "../../assets/TwitterLogo.svg";
import instagram from "../../assets/InstagramLogo.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div className="py-5 mt-8 bg-neutral-700">
        <div className="border-neutral-700 h-[5px] bg-zinc-700 w-full" />
        <div className="w-full px-10 md:ms-0 py-10 flex-col justify-start sm:justify-center items-center gap-[30px] inline-flex">
          <div className="w-full justify-evenly items-start lg:inline-flex md:inline-block">
            <div className="w-[327.41px] pr-[84px] flex-col justify-start items-start gap-[30px] inline-flex">
              <div className="w-[243.41px] h-8 relative">
                <div className="w-100 left-0 top-0 absolute ">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch w-[238px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
                  NFT marketplace UI created with Anima for Figma.
                </div>
                <div className="flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch w-[238px] h-[18px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
                    Join our community
                  </div>
                  <div className="justify-start items-start gap-2.5 inline-flex">
                    <div className="Discordlogo w-8 h-8 relative text-stone-500">
                      <Link to="https://www.facebook.com/">
                        <img src={discord} alt="" />
                      </Link>
                    </div>
                    <div className="w-8 h-8 relative text-stone-500">
                      <Link to="https://www.instagram.com/">
                        <img src={youtube} alt="" />
                      </Link>
                    </div>
                    <div className="w-8 h-8 relative text-stone-500">
                      <Link to="/">
                        <img src={twitter} alt="" />
                      </Link>
                    </div>
                    <div className="w-8 h-8 relative text-stone-500">
                      <Link to="/">
                        <img src={instagram} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex-col justify-start items-start gap-[15px] mt-12 md:mt-14 lg:mt-0 inline-flex">
              <div className="text-white text-[22px] font-bold font-['Work Sans'] capitalize leading-9">
                Explore
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-stone-300 font-normal font-['Work Sans'] leading-snug text-sm">
                  Marketplace
                </div>
                <div className="text-stone-300 font-normal font-['Work Sans'] leading-snug">
                  Rankings
                </div>
                <div className="text-stone-300 font-normal font-['Work Sans'] leading-snug">
                  Connect a wallet
                </div>
              </div>
            </div>
            <div className="w-60 flex-col justify-start items-start gap-[15px] mt-12 md:mt-14 lg:mt-0 inline-flex">
              <div className="text-white text-[22px] font-bold font-['Work Sans'] capitalize leading-9">
                Join our weekly digest
              </div>
              <div className="w-60 flex-col justify-start items-start gap-5 flex">
                <div className="w-60 text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
                  Get exclusive promotions & updates straight to your inbox.
                </div>
                <div className="justify-center mt-3 items-end gap-3 lg:gap-0 flex flex-wrap lg:flex-nowrap  w-[250px] sm:w-[320px]">
                  <input
                    className="p-4 ps-6 rounded-[20px] w-full text-zinc-800 justify-center items-center text-base font-normal font-['Work Sans'] leading-snug"
                    placeholder="Enter your email here"
                  />
                  <div className=" bg-purple-500 py-4 px-[34px] w-full relative lg:left-[-32px] lg:w-2/5 rounded-[20px] justify-center items-center  text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90vw] border border-zinc-500 md:px-7" />
          <div className="items-start flex min-w-full ">
            <div className=" text-stone-300 text-start font-normal font-['Work Sans'] leading-[17px] min-w-full">
              <p>&copy; NFT Market. Made by Muhammad Huzaifa Rauf.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
