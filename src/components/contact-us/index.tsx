import { IconCar, IconPhone, IconWhatsapp, IconFacebook, IconInstagram } from "../../icons";
import IconText from "../icons-text";
import {
  StyleContactUsTitle,
  StyledContactUsContentWrapper,
  StyledContactUsFixed,
  StyledContactUsFixedA,
  StyledContactUsPersonalPhone,
  StyledContactUsRow,
  StyledContactUsText,
  StyledContactUsWrapper,
} from "./styled";

const ContactUs = () => {
  return (
    <>
      <StyledContactUsFixed>
        <StyledContactUsFixedA target="_blank" href="https://wa.me/972543188238?text=הגעתי מהאתר אשמח לפרטים נוספים">
          <IconWhatsapp color="green" size={28} />
        </StyledContactUsFixedA>
        <StyledContactUsFixedA target="_blank" href="tel:+972543188238">
          <IconPhone size={28} />
        </StyledContactUsFixedA>
        <StyledContactUsFixedA target="_blank" href="">
          <IconFacebook color="#1877F2" size={28} />
        </StyledContactUsFixedA>
        <StyledContactUsFixedA target="_blank" href="">
          <IconInstagram color="#E1306C" size={28} />
        </StyledContactUsFixedA>
      </StyledContactUsFixed>

      <StyledContactUsWrapper>
        <StyledContactUsContentWrapper>
          <StyleContactUsTitle>דברו איתנו!</StyleContactUsTitle>
          <StyledContactUsRow>
            <StyledContactUsPersonalPhone target="_blank" href="https://wa.me/972543188238?text=הגעתי מהאתר אשמח לפרטים נוספים">
              <IconWhatsapp color="green" size={28} />
              <StyledContactUsText>דברו איתנו ב-Whatsapp.</StyledContactUsText>
            </StyledContactUsPersonalPhone>
            <StyledContactUsPersonalPhone target="_blank" href="tel:+972543188238">
              <IconPhone size={28} />
              <StyledContactUsText>התקשרו אלינו - 054-3188238 </StyledContactUsText>
            </StyledContactUsPersonalPhone>
            <StyledContactUsPersonalPhone target="_blank" href="">
              <IconFacebook color="#1877F2" size={28} />
              <StyledContactUsText>עקבו אחרינו בפייסבוק</StyledContactUsText>
            </StyledContactUsPersonalPhone>
            <StyledContactUsPersonalPhone target="_blank" href="">
              <IconInstagram color="#E1306C" size={28} />
              <StyledContactUsText>עקבו אחרינו באינסטגרם</StyledContactUsText>
            </StyledContactUsPersonalPhone>
          </StyledContactUsRow>
        </StyledContactUsContentWrapper>
      </StyledContactUsWrapper>
    </>
  );
};
export default ContactUs;
