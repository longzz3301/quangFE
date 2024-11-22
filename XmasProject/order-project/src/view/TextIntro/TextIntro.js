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
    desktop:px-32 desktop:gap-4
  "
    >
      <div className="flex flex-col gap-1 text-center">
        {/* <div
          className="font-DancingScript text-[#ffbb33] text-[60px] 
            mobileSmall:text-[40px]
            tablet:text-[60px]
            desktop:text-[85px]
            desktopLarge:text-[110px]"
        >
          Gans schön lecker!{" "}
        </div> */}

        <div
          className="font-DancingScript text-textTitle text-[#ffbb33]  text-[50px] 
            mobileSmall:text-[30px]
            tablet:text-[60px]
            desktop:text-[85px]
            desktopLarge:text-[110px]
            "
        >
          Gänse ab jetzt vorbestellen !
        </div>
      </div>
      {/* <p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
      mobileSmall:text-[16px] mobileSmall:leading-snug
      tablet:text-[24px] tablet:leading-normal
      desktop:text-[20px] desktop:leading-relaxed
      desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
        Sichern Sie sich jetzt Ihre köstliche Weihnachtsgans und genießen Sie eine sorglose, genussvolle und festliche Zeit mit Ihren Liebsten.
      </p>

      <p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
       Unsere Weihnachtsgans – ein Festmahl mit Beilagen:

      </p>
      <p
       className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
       mobileSmall:text-[16px] mobileSmall:leading-snug
       tablet:text-[24px] tablet:leading-normal
       desktop:text-[20px] desktop:leading-relaxed
       desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
      Hausgemachter Rotkohl, verfeinert durch seine perfekte Mischung aus süßen und würzigen Aromen.</p>
      <p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
      Fluffige Klöße, die ideal zur zarten, saftigen Gans passen.</p>

      <p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
     Bitte beachten Sie:
</p>

<p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
    Geben Sie Ihre Bestellung mindestens 2 Tage vor Ihrem gewünschten Abhol- oder Liefertermin auf, damit wir Ihnen die beste Qualität und den besten Service garantieren können.
</p>

<p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
    Abholung:

</p>
<p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
    Holen Sie Ihre frisch zubereitete Weihnachtsgans ab 12:00 Uhr an jedem Adventssonntag sowie am 24. Dezember bei uns ab.


</p>

<p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
  Lieferung:


</p>

<p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
  Lassen Sie sich Ihre Gans bequem nach Hause liefern – zwischen 11:00 und 14:00 Uhr an allen Adventssonntagen.



</p>

<p
        className="font-Changa text-[#ffbb33] font-bold text-[20px] leading-relaxed text-center
        mobileSmall:text-[16px] mobileSmall:leading-snug
        tablet:text-[24px] tablet:leading-normal
        desktop:text-[20px] desktop:leading-relaxed
        desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
  Wir freuen uns darauf, Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten. 🎄
Festlicher Genuss – einfach, lecker und stressfrei mit CôCô!




</p> */}



      {/* <p
        className="font-Changa text-[30px] leading-relaxed text-center
      mobileSmall:text-[16px] mobileSmall:leading-snug
      tablet:text-[24px] tablet:leading-normal
      desktop:text-[30px] desktop:leading-relaxed
      desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
        <span className="text-[#ffbb33] font-bold underline">ABHOLUNG:</span>
        &nbsp;
        <span className="text-textColor">AB 12 UHR AN JEDEM</span>&nbsp;
        <span className="text-[#ffbb33] font-bold">ADVENTSSONNTAG</span>&nbsp;
        <span className="text-textColor">UND AM</span>&nbsp;
        <span className="text-[#ffbb33] font-bold">24. DEZEMBER.</span>
      </p> */}

      {/* <p
        className="font-Changa text-[30px] leading-relaxed text-center
      mobileSmall:text-[16px] mobileSmall:leading-snug
      tablet:text-[24px] tablet:leading-normal
      desktop:text-[30px] desktop:leading-relaxed
      desktopLarge:text-[40px] desktopLarge:leading-loose"
      >
        <span className="text-[#ffbb33] font-bold underline">LIEFERUNG:</span>
        &nbsp;
        <span className="text-white">11-14 UHR AN ALLEN</span>&nbsp;
        <span className="text-[#ffbb33] font-bold">ADVENTSSONNTAGEN.</span>
      </p> */}
      {/* <p
        className="bg-[#ffbb33] text-[#2d2322] font-extrabold flex text-2xl text-textWarning font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            "
      >
        Damit Sie ein vollständiges Festmahl genießen können, verkaufen wir
        unsere Gans mit sorgfältig ausgewählten Beilagen: hausgemachtem Rotkohl,
        der eine perfekte Mischung aus süß und würzig bietet, und Klößen, die
        eine ideale Begleitung für die zarte Gans sind.
      </p> */}
      {/* <p className="flex text-2xl text-textColor font-Changa leading-loose italic
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-3xl
                desktopLarge:text-5xl
            ">
                hausgemachtem Rotkohl, der eine perfekte Mischung aus süß und würzig bietet, und Klößen, die eine ideale Begleitung für die zarte Gans sind.
            </p> */}
      {/* <img src={WarningIcon} className="w-10 h-10
                tablet:w-12 tablet:h-12
                desktop:w-20 desktop:h-20
                desktopLarge:w-32 desktopLarge:h-32
            "
            /> */}
      {/* <p
        className="flex text-2xl text-textColor font-Changa italic
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            "
      >
        Bitte beachten Sie, dass die Vorbestellung Ihres Weihnachtsgänseessens
        erforderlich ist, um sicherzustellen, dass wir Ihnen die beste Qualität
        und den besten Service bieten können.
      </p> */}
      {/* <p
        className="flex text-2xl text-textColor font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            "
      >
        Sichern Sie sich Ihr köstliches Weihnachtsgans und genießen Sie eine
        sorgenfreie und festliche Zeit mit Ihren Liebsten. Wir freuen uns
        darauf, Ihnen einen winterlichen Hochgenuss zu bieten.
      </p> */}

<div className="text-left font-Changa text-textColor  font-bold leading-relaxed 
 mx-auto max-w-[800px] /* Thu hẹp chiều rộng */
  pl-4  /* Thêm padding trái */
  mobileSmall:text-[14px] mobileSmall:leading-snug
  tablet:text-[18px] tablet:leading-normal
  desktop:text-[16px] desktop:leading-relaxed
  desktopLarge:text-[24px] desktopLarge:leading-loose"
>
  <p>Sichern Sie sich jetzt Ihre köstliche Weihnachtsgans und genießen Sie eine sorglose, genussvolle und festliche Zeit mit Ihren Liebsten.</p>

  <p>🎁 <strong>Unsere Weihnachtsgans – ein Festmahl mit Beilagen:</strong></p>

  <ul>
    <li>Hausgemachter Rotkohl, verfeinert durch seine perfekte Mischung aus süßen und würzigen Aromen.</li>
    <li>Fluffige Klöße, die ideal zur zarten, saftigen Gans passen.</li>
  </ul>

  <p><strong>Bitte beachten Sie:</strong></p>
  <p>
    Geben Sie Ihre Bestellung mindestens 2 Tage vor Ihrem gewünschten Abhol- oder Liefertermin auf, 
    damit wir Ihnen die beste Qualität und den besten Service garantieren können.
  </p>

  <p><strong>Abholung:</strong></p>
  <p>
    Holen Sie Ihre frisch zubereitete Weihnachtsgans ab 12:00 Uhr an jedem Adventssonntag sowie am 24. Dezember bei uns ab.
  </p>

  <p><strong>Lieferung:</strong></p>
  <p>
    Lassen Sie sich Ihre Gans bequem nach Hause liefern – zwischen 11:00 und 14:00 Uhr an allen Adventssonntagen.
  </p>

  <p>
    Wir freuen uns darauf, Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten. 🎄
    Festlicher Genuss – einfach, lecker und stressfrei mit CôCô!
  </p>
</div>


      <div className="w-[900px] flex justify-center font-DancingScript px-3 py-4 bg-[#ffbb33] text-[#2d2322] font-extrabold over:border-4 hover:border-white hover:bg-[#ffbb3a] hover:text-white rounded-2xl mb-6 cursor-pointer desktopLarge:px-5 desktopLarge:py-7 ">
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
