import React from 'react';

import WarningIcon from "../../asset/warning.png";
import SnowIcon from "../../asset/snowIcon.png";
import SnowMan from "../../asset/snowMan.png";
import Reindeer from "../../asset/icons8-reindeer-64.png";
import Sleigh from "../../asset/icons8-sleigh-64.png";
import SantaIcon from "../../asset/santaIcon.png";
import GiftIcon from "../../asset/gift.png";
import BoyIcon from "../../asset/boy.png";
import GirlIcon from "../../asset/girl.png";
import FireIcon from "../../asset/fire.png";
const TextIntro = () => {
  const scrollToSection = () => {
    // Calculate scroll amount based on screen height
    const screenHeight = window.innerHeight;
    const scrollAmount = screenHeight * 2.6; // Adjust the multiplier as needed

    // Scroll with smooth behavior
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  // text intro
  return (
    <div
    className="bg-backGround opacity-95 flex flex-col gap-10 px-40 py-8 w-full h-auto items-center
      mobileSmall:px-4 mobileSmall:gap-2
      tablet:px-12
      laptop:px-16 laptop:gap-4
      desktop:px-32 desktop:gap-4"
  >
    <div className="flex flex-col gap-1 text-center">
      <div
        className="font-DancingScript text-textTitle text-[#ffbb33] text-[50px] 
          mobileSmall:text-[30px]
          tablet:text-[60px]
          desktop:text-[85px]
          desktopLarge:text-[110px]"
      >
        Gänse ab jetzt vorbestellen!
      </div>
    </div>

    <div
      className="text-left font-Changa text-textColor leading-loose mx-auto max-w-[800px] 
        pl-4 text-2xl
        mobileSmall:text-base mobileSmall:leading-snug
        tablet:text-xl tablet:leading-normal
        desktop:text-xl desktop:leading-relaxed
        desktopLarge:text-xl desktopLarge:leading-loose"
    >
      <p>
        <span className="text-[#ffbb33] font-bold">
          Sichern Sie sich jetzt Ihre köstliche Weihnachtsgans von CoCo
        </span>{" "}
        und genießen Sie eine sorglose, genussvolle und festliche Zeit mit Ihren
        Liebsten.
      </p>

      <p>
        🎁{" "}
        <span className="text-[#ffbb33] font-bold">
          Unsere Weihnachtsgans – ein Festmahl mit Beilagen:
        </span>
      </p>

      <ul>
        <li className="ml-8">
          <span className="text-[#ffbb33]">* Hausgemachter Rotkohl</span>,
          verfeinert durch seine perfekte Mischung aus süßen und würzigen
          Aromen.
        </li>

        <li className="ml-8">
          <span className="text-[#ffbb33]">* Fluffige Klöße</span>, die ideal
          zur zarten, saftigen Gans passen.
        </li>
      </ul>

      <p className="text-[#ffbb33] font-bold">Bitte beachten Sie:</p>
      <p>
        Geben Sie Ihre Bestellung{" "}
        <span className="text-[#ffbb33]">
          mindestens 2 Tage vor Ihrem gewünschten Abhol- oder Liefertermin
        </span>{" "}
        auf, damit wir Ihnen die beste Qualität und den besten Service
        garantieren können.
      </p>

      <p className="text-[#ffbb33] font-bold">Abholung:</p>
      <p>
        Holen Sie Ihre frisch zubereitete Weihnachtsgans ab{" "}
        <span className="text-[#ffbb33]">12:00 Uhr</span> an jedem{" "}
        <span className="text-[#ffbb33]">Adventssonntag</span> sowie am{" "}
        <span className="text-[#ffbb33]">24. Dezember</span> bei uns ab.
      </p>

      <p className="text-[#ffbb33] font-bold">Lieferung:</p>
      <p>
        Lassen Sie sich Ihre Gans bequem nach Hause liefern – zwischen{" "}
        <span className="text-[#ffbb33]">11:00</span> und{" "}
        <span className="text-[#ffbb33]">14:00</span> Uhr an allen{" "}
        <span className="text-[#ffbb33]">Adventssonntagen</span>.
      </p>

      <p>
        Wir freuen uns darauf, Ihnen ein unvergessliches kulinarisches
        Erlebnis zu bieten.
        <span className="text-[#ffbb33] font-bold">
          🎄 Festlicher Genuss – einfach, lecker und stressfrei mit CôCô!
        </span>
      </p>
    </div>
    <div className="w-[300px] flex justify-center font-DancingScript px-3 py-4 bg-[#ffbb33] text-[#2d2322] font-extrabold over:border-4 hover:border-white hover:bg-[#ffbb3a] hover:text-white rounded-2xl mb-6 cursor-pointer desktopLarge:px-5 desktopLarge:py-7 mt-6">
        <button
          onClick={scrollToSection}
          className="w-full h-full text-3xl"
          type="submit"
        >
          Jetzt bestellen{" "}
        </button>
      </div>
    </div>
  );
};

export default TextIntro;
