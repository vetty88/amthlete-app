import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both CompetitionList and CompetitionListItem from this file

// CompetitionList renders a bootstrap list item
export function CompetitionList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// CompetitionListItem renders a bootstrap list item containing data from the Competition api call
export function CompetitionListItem({
  // thumbnail,
  title,
  EventNames,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            {/* <Thumbnail src={thumbnail || "https://placehold.it/300x300"} /> */}
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>EventNames: {EventNames}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to Competition!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
