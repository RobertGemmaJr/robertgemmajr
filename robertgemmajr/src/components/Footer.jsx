import React from "react";

const year = new Date().getFullYear();
export default function Footer() {
    return(<h1>Footer: {year}</h1>);
}