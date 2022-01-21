import { Container } from "./styles";

export default function Button({ action, title, ...rest }: any) {
  return (
    <Container onClick={action} {...rest}>
      {title}
    </Container>
  );
}
