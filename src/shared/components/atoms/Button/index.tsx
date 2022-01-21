import { Container } from "./styles";

export default function Button({ action, title }: any) {
  return <Container onClick={action}>{title}</Container>;
}
