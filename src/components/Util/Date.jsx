import React from "react";
import monday from "../../images/icons/days/1.svg";
import tuesday from "../../images/icons/days/2.svg";
import wednesday from "../../images/icons/days/3.svg";
import thursday from "../../images/icons/days/4.svg";
import friday from "../../images/icons/days/5.svg";
import saturday from "../../images/icons/days/6.svg";
import sunday from "../../images/icons/days/7.svg";
import calenderIcon from "../../images/icons/days/default.svg";
import styled from "styled-components";

const DateWrapper = styled.div`
	width: ${props => props.width};
  
  white-space: nowrap;
 	background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  img {
    padding: 3px;
  }
	h4 {
			margin:0;
      margin-left: 5px;
      font-size: 1.2rem;
     
    }
  }
`;

const DateTime = ({ date, width }) => {
  const day = new Date(date).getDay();

  let calender = calenderIcon;
  switch (day) {
    case 1:
      calender = monday;
      break;

    case 2:
      calender = tuesday;
      break;

    case 3:
      calender = wednesday;
      break;

    case 4:
      calender = thursday;
      break;

    case 5:
      calender = friday;
      break;

    case 6:
      calender = saturday;
      break;

    case 0:
      calender = sunday;
      break;

    default:
      break;
  }

  return (
    <DateWrapper width={width}>
      <img src={calender} alt="day" />
      <h4>{date}</h4>
    </DateWrapper>
  );
};

export default DateTime;
