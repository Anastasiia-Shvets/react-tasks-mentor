import styled from './Statistics.module.css'
import { IconContext } from "react-icons";

export const StatisticsItem = ({title, total, icon}) => {
  return (
      <li className={styled.item}>
      <IconContext.Provider value={{ color: "#111", size: 30 }}>
        {icon}
      </IconContext.Provider>
        <span className={styled.counter}>{total}</span>
        <p className={styled.text}>{title}</p>
      </li>
  )
};
