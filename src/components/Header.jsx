import person from "@imgs/person.svg";
import '@styles/header.css';
import { Player } from "./Player";

export const Header = ({setOpenModal}) => {

  return (
    <header>
      <h1>Clone of the website https://block.xyz for technical proof.</h1>
      <Player />
      <nav>
        <ul>
          <li>
            <a href="https://block.xyz/news">NEWS</a>
          </li>
          <li>
            <a href="https://block.xyz/careers">CAREERS</a>
          </li>
          <li>
            <a href="https://investors.block.xyz/overview/default.aspx">
              INVESTORS
            </a>
          </li>
          <li onClick={() => setOpenModal(true)}>
              <img src={person} alt="Person" height="24" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
