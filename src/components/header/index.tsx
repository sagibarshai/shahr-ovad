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
        <StyledHeaderLogo src={asset("/images/logo-1.svg")} />
        <StyledHeaderTitle> עבודות זכוכית ואלומיניום </StyledHeaderTitle>
        <StyledHeaderSubtitle>
          ברוכים הבאים ל-GLASSTECH, אצלנו תמצאו את כל הפתרונות בעבודות זכוכית, אלומיניום ורשתות
          <br />
          מותאמים בדיוק למה שאתם צריכים, עם דגש על שירות מקצועי ואמין .
        </StyledHeaderSubtitle>
        <StyledHeaderImg />
      </StyledHeaderContentWrapper>
    </StyledHeaderWrapper>
  );
};
export default Header;
