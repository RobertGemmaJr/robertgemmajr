import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Icons = styled.div`
  width: 50%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;

  a {
    color: ${props => props.theme.primary};
    :hover {
      color: ${props => props.theme.secondary};
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1.2em;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary}
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return(
    <div>
      <Icons >
        <a href="https://www.linkedin.com/in/robert-gemma-jr/"><FaLinkedin size={30}/></a>
        <a href="https://github.com/RobertGemmaJr"><FaGithub size={30}/></a>
        <a href="https://twitter.com/RobertGemmaJr"><FaTwitter size={30}/></a>
        <a href="https://www.instagram.com/robertgemmajr/?hl=en"><FaInstagram size={30}/></a>
      </Icons>
      <Copyright>Copyright {year} © Robert Gemma, Jr.</Copyright>
    </div>
  );
}