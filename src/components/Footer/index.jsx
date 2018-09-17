import React, { Component } from "react";
import styled from "styled-components";
import selfie from "../../images/superhandsomedude.png";

const FooterBar = styled.div`
  @media (max-width: 690px) {
    min-height: 460px;
  }

  @media (max-width: 600px) {
    clip-path: none;
  }

  position: relative;
  background-color: #70c8c2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23e6e3ec' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
  min-height: 350px;
  padding-top: 30px;
`;

const HandsomeDude = styled.div`
  @media (max-width: 690px) {
    flex-direction: column-reverse;
    justify-items: right;
  }

  display: flex;
  width: 600px;
  position: absolute;
  right: 5%;
  bottom: 10px;

  img {
    @media (max-width: 690px) {
      align-self: flex-end;
    }
    flex: 1 0 auto;
    align-self: center;
    width: 150px;
    height: 150px;
    float: right;
  }
`;

const TextArea = styled.div`
  .up {
    display: none;
  }
  .side {
    display: inline-block;
  }
  @media (max-width: 690px) {
    text-align: right;
    .up {
      margin-top: 10px;
      display: inline-block;
    }
    .side {
      display: none;
    }
  }
  @media (max-width: 480px) {
    text-align: right;

    p {
      font-size: 0.6rem !important;
    }
  }
  flex: 0 1 auto;
  h3,
  p {
    background: #fff;
    color: #000;
    display: inline-block;
    padding: 3px;
    margin: 0;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  p {
    font-size: 0.7rem;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterBar>
        <HandsomeDude>
          <TextArea>
            <h3 className="side">ABOUT THIS GUY 👉</h3>
            <h3 className="up">ABOUT THIS GUY 👆</h3>
            <br />
            <p>
              THIS IS ROSS, ROSS STILL HAS HOPES AND DREAMS, ROSS HAS STILL TO
              FEEL THE
            </p>
            <br />
            <p>
              COLD HARD BACK HAND OF REALITY FLICK HIM IN THE TESTES, LEAVING
              HIM
            </p>
            <br />
            <p>
              CURLED UP IN THE FETAL POSITION ON THE FLOOR WONDERING, WHERE THE
            </p>
            <p>
              HELL DID 30 YEARS OF MYLIFE GO?! ROSS GET A GRIP OF YOURSELF MAN!
              MAKE A
            </p>
            <br />
            <p>
              CHANGE GODDAMN IT! DO SOMETHING WITH YOUR LIFE! SOMETHING YOU
              ENJOY!
            </p>
            <br />
            <p>
              SOMETHING THAT MAKES YOU WANT TO GET OUT OF BED EVERY MORNING!
            </p>
            <br />
            <p>FAILING THAT, TRAIN TO BECOME A DEV...</p> <br />
            <p>LETS SEE HOW HE GETS ON WITH THAT THEN.</p> <br />
          </TextArea>
          <img src={selfie} alt="some super handsome dude" />
        </HandsomeDude>
      </FooterBar>
    );
  }
}
