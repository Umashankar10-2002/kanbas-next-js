"use client";
import Link from "next/link";
import "./lab2.css";
import { FaHome, FaUser, FaEnvelope, FaHeart, FaStar, FaCog } from "react-icons/fa";


export default function Lab2() {
  return (
    <div>
      <h1>Lab 2: CSS</h1>
      <p>
        <Link href="/">Home</Link> | <Link href="/Labs">Back to Labs</Link>
      </p>

      <h2>CSS Selectors and Document Structure</h2>

      <p id="p1">This paragraph should be white text on a red background.</p>
      <p id="p2">This paragraph should be black text on a yellow background.</p>
      <p className="p3">
        This paragraph should be blue text on a yellow background.
      </p>
      <h3 className="heading">
        This heading should be blue text on a yellow background.
      </h3>

      <div id="div1">
        This DIV should have white text on a red background.
        <br />
        <span className="smallspan">
          This small span should have blue text on a yellow background.
        </span>
      </div>

      <p>
        These examples demonstrate the use of <b>ID</b>, <b>class</b>, and{" "}
        <b>descendant</b> selectors in CSS.
      </p>
      <h2>Foreground and Background Colors</h2>

<h3 className="blue-on-white">This heading is blue text on white background.</h3>
<p className="red-on-white">This paragraph is red text on white background.</p>
<p className="green-on-white">This paragraph is green text on white background.</p>
<h3 className="white-on-blue">This heading is white text on blue background.</h3>
<p className="black-on-red">This paragraph is black text on red background.</p>

<p>
  Here is a sentence with a
  <span className="white-on-green"> white text on green span </span>
  inside it.
</p>

<h2>Borders, Padding, and Margins</h2>

<div className="fat-red-border">Fat red border</div>
<div className="thin-blue-dashed">Thin blue dashed border</div>

<div className="red-fat-padding">
  Fat red border with yellow background and padding top & left
</div>

<div className="blue-fat-padding">
  Fat blue border with yellow background and padding at bottom
</div>

<div className="yellow-fat-padding">
  Fat yellow border with blue background and big padding all around
</div>

<div className="red-fat-margin">
  Fat red border with yellow background and margin at bottom
</div>

<div className="blue-center">
  Fat blue border with yellow background and centered using auto margins
</div>

<div className="yellow-margin-all">
  Fat yellow border with blue background and big margins all around
</div>

<div className="rounded-top">
  Rounded corners at top left and right
</div>

<h2>Rounded Corners and Dimensions</h2>

<div className="rounded-bottom">Rounded corners at bottom left and right</div>
<div className="rounded-all">Rounded corners on all sides</div>
<div className="rounded-except-topright">
  Rounded corners everywhere except top right
</div>

<div className="tall-rect">Taller than wide (Yellow)</div>
<div className="wide-rect">Wider than tall (Blue)</div>
<div className="square-rect">Square shape (Red)</div>

<h2>Relative and Absolute Positioning</h2>

<div className="relative-yellow">Yellow div – nudged down and right</div>
<div className="relative-blue">Blue div – moved up and right</div>

<div className="position-wrapper">
  <div className="portrait">Portrait</div>
  <div className="landscape">Landscape</div>
  <div className="square-abs">Square</div>
</div>


<h2>Fixed Position, Z-Index, Floating, Grid, and Flex</h2>

<div className="fixed-blue">I stay fixed even if you scroll</div>

<div className="z-container">
  <div className="z-portrait">Portrait</div>
  <div className="z-landscape">Landscape (above others)</div>
  <div className="z-square">Square</div>
</div>

<h3>Floating Rectangles</h3>
<div className="float-box yellow">Box 1</div>
<div className="float-box blue">Box 2</div>
<div className="float-box red">Box 3</div>
<div style={{ clear: "both" }}></div>

<h3>Floating Image Right</h3>
<img src="/starship.jpeg" className="float-right" alt="Floating Right Example" width={150} />
<p>
  This paragraph demonstrates how text wraps around an image floated to the right. 
  When using float, the text will fill the space around the image automatically.
</p>

<h3>Grid Layout</h3>
<div className="grid-layout">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>

<h3>Flexbox Layout</h3>
<div className="flex-row">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<h3>React Icons Example</h3>
<div className="icon-demo">
  <FaHome />
  <FaUser />
  <FaEnvelope />
  <FaHeart />
  <FaStar />
  <FaCog />
</div>


    </div>
  );

  
}
