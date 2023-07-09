import { Container } from "react-bootstrap";
export const Home = () => {
  return (
    <Container className="d-flex justify-cotent-center m-5">
      <Container className="col-md-6">
        <h1 className="text-center fs-2">Ankur Patel</h1>
        <p className="mt-5">
          Welcome! Thanks for coming, I'm a Analytics Manager with passion of
          bringing future faster. Currently leveraging Large Lanageu model
          capabilities and providing value to my employer. Have a background in
          IT management and Electronics. Love football and ocassional reader.
        </p>
        <ul>
        <li>Sionic - A Davies Company - Consultant(AI Data Products)</li>

        <li>EXL - Analytics Manager</li>
        <li>
          Children's Literacy Initiative - Data Architecture and Reporting
        </li>
        <li>American Savins Bank - Data Analytics Intern</li>
        </ul>
      </Container>
    </Container>
  );
};


