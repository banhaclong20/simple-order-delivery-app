import { Container } from "semantic-ui-react";
import HeroBanner from "../HeroBanner/banner";

export default ({ children, banner, size, content, text }) => (
  <>
    {banner && <HeroBanner size={size} content={content} />}
    <Container text={text} style={{ marginTop: "3em" }}>
      {children}
    </Container>
  </>
);
