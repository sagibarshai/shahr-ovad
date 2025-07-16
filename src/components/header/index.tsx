import { asset } from "../../utils/asset";
import {
  StyledHeaderContentWrapper,
  StyledHeaderImg,
  StyledHeaderSubtitle,
  StyledHeaderTitle,
  StyledHeaderWrapper,
  StyledHeaderLogo,
} from "./styled";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContentWrapper>
        <StyledHeaderLogo src={asset("/images/logo-2.png")} />
        <StyledHeaderTitle>
          {" "}
          עבודות מקלחונים / מעקות / דלתות זכוכית / מראות / <br /> עבודות אלומניום ורשתות
        </StyledHeaderTitle>
        <StyledHeaderSubtitle>
          ברוכים הבאים לסהר עבודות זכוכית, ופרוייקטים, אצלנו תמצאו את כל הפתרונות בעבודות זכוכית בהתאמה אישית,
          <br />
          סגירות אלומניום ורשתות נגד יתושים, תריסים חשמליים ותריסי גלילה.
          <br />
          מותאמים בדיוק למה שאתם צריכים, עם דגש על שירות מקצועי ואמין .
        </StyledHeaderSubtitle>
        <StyledHeaderImg />
      </StyledHeaderContentWrapper>
    </StyledHeaderWrapper>
  );
};
export default Header;
