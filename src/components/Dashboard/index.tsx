import { Summary } from "../Summary";
import { TranstactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TranstactionsTable />
    </Container>
  );
}
