import React from "react";
import { PanelGroup, Panel } from "react-bootstrap";
import "../../css/rush_faq_panel.css";

export default class rushFAQPanel extends React.Component {
  render() {
    return (
      <div>
        <PanelGroup accordion id="faq-accordion">
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle id="faq-question">
                What is Rush?
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible id="faq-answer">
              Rush allows you to learn more about Theta Tau and what we have to
              offer. There will be several events that shows you what our
              fraternity is about and gives you a chance to meet our active
              members. Rush is free and isn't a requirement but it will give a
              better opportunity to learn about the fraternity and increase your
              chances of receiving a bid.
            </Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading>
              <Panel.Title toggle id="faq-question">
                Why should I rush?
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible id="faq-answer">
              Rush is an opportunity that will allow you to gauge your interest
              in a professional fraternity. Theta Tau will help you grow
              academically, socially, and professionally. It will provide a
              strong social and professional network that will last a lifetime.
            </Panel.Body>
          </Panel>
          <Panel eventKey="3">
            <Panel.Heading>
              <Panel.Title toggle id="faq-question">
                What are the requirements to join Theta Tau?
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible id="faq-answer">
              You must have an academic GPA of 2.5 or above.
              <br /> You cannot be an active member in a competing fraternity.
            </Panel.Body>
          </Panel>
          <Panel eventKey="4">
            <Panel.Heading>
              <Panel.Title toggle id="faq-question">
                Do I have to attend all rush events to join?
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible id="faq-answer">
              No you don't! However, it will help us get to know you more and
              make you stand out. We understand that it's difficult to attend
              every single rush event because of school and other time
              commitments. We highly recommend you show up to as many events as
              possible and reserve an interview slot! If you can't make it to
              any event please make sure to email us at ucsbthetatau@gmail.com
              and explain to us your situation!
            </Panel.Body>
          </Panel>
          <Panel eventKey="5">
            <Panel.Heading>
              <Panel.Title toggle id="faq-question">
                Do I have to be an engineer to rush?
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible id="faq-answer">
              No! But you must have a clear path to switch into the engineering
              major!
            </Panel.Body>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}
