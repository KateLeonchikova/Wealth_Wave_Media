import { SectionTop } from "./SectionTop/SectionTop";
import { SectionAbout } from "./SectionAbout/SectionAbout";
import { SectionGame } from "./SectionGame/SectionGame";
import { SectionBenefits } from "./SectionBenefits/SectionBenefits";

export const MainPage = () => {
  return (
    <main>
      <SectionTop />
      <SectionAbout />
      <SectionGame />
      <SectionBenefits />
    </main>
  );
};
