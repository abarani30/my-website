import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function SocialIcons({ classname }) {
  return (
    <div>
      <a href="https://facebook.com/AliSattarBarani">
        <FaFacebook className={classname} />
      </a>
      <a href="https://www.instagram.com/asattar_29/">
        <AiFillInstagram className={classname} />
      </a>
      <a href="https://www.youtube.com/channel/UCgJJUE42J8-x-qopxkRHVSQ">
        <AiFillYoutube className={classname} />
      </a>
    </div>
  );
}
