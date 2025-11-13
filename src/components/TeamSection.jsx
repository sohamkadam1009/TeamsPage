import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import "./teamSection.css";
import Card from "./Card";

import Abhishek from "../assets/abhishek.webp";
import Pooja from "../assets/pooja.webp";
import Varun from "../assets/varun.webp";
import Vinay from "../assets/vinay.webp";
import Manisha from "../assets/manisha.webp";
import Priya from "../assets/priya.webp";
import Arshia from "../assets/arshia.webp";
import Mansi from "../assets/mansi.webp";
import Ayesha from "../assets/Ayesha.webp";

const TeamSection = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleScroll = () => {
    const targetSection = document.getElementById("next-section");
    if (targetSection && lenisRef.current) {
      lenisRef.current.scrollTo(targetSection, {
        duration: 1.8, // same duration as Lenis
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <>
      <div className="team_section">
        <div className="team_heading_div">
          <h1 className="team_heading">Team Members</h1>
        </div>

        {/* Animated arrow stack */}
        <div
          className="arrow-stack"
          role="button"
          tabIndex={0}
          aria-label="Scroll indicator"
          onClick={handleScroll}
        >
          <ChevronDown className="arrow a1" />
          <ChevronDown className="arrow a2" />
          <ChevronDown className="arrow a3" />
        </div>
      </div>

      <div id="next-section" className="next_section main_team_section">
        <Card
          frontImage={Abhishek}
          name={"Abhishek\nMehta"}
          title="Co-Founder & Chief Strategist"
          isMainMember={true}
        />
        <Card
          frontImage={Pooja}
          name={"Pooja\nchandgothia"}
          title="CEO & Founder"
          isMainMember={true}
        ></Card>

        <Card
          frontImage={Varun}
          name={"Varun\nVinayan"}
          title="Vice President"
          isMainMember={true}
        ></Card>
      </div>
      <div className="co_team_section">
        <div className="co_team_container">
          <Card
            frontImage={Vinay}
            name={"Vinay\nPhadtare"}
            title={"Accountant Manager"}
            isMainMember={false}
          ></Card>
          <Card
            frontImage={Manisha}
            name={"Manisha\nParmar"}
            title={"Accountant & Taxation"}
            isMainMember={false}
          ></Card>
          <Card
            frontImage={Priya}
            name={"Priya\nDodiya"}
            title={"Accountant & Taxation"}
            isMainMember={false}
          ></Card>
          <Card
            frontImage={Arshia}
            name={"Arshia\nPehel"}
            title={"Brand Manager"}
            isMainMember={false}
          ></Card>
          <Card
            frontImage={Mansi}
            name={"Mansi\nMhatre"}
            title={"Operation Execute"}
            isMainMember={false}
          ></Card>
          <Card
            frontImage={Ayesha}
            name={"Ayesha\nParadiwalla"}
            title={"Research Analyst"}
            isMainMember={false}
          ></Card>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
