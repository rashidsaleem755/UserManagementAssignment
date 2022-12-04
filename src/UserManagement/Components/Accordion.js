import Accordion from "react-bootstrap/Accordion";

function AccordionReact(props) {
  let accStyle = { backgroundColor: props.mode === "dark" ? "grey" : "white" };
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>About - {props.name}</Accordion.Header>
        <Accordion.Body style={accStyle}>{props.text}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionReact;
