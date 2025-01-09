import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import HomeItem from "../../components/homeItem";
import AboutItem from "../../components/aboutItem";
import ProjectItem from "../../components/projectItem";
import ContactItem from "../../components/contactItem";
import CompetenceItem from "../../components/competenceItem";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <>
    <HomeItem />
    <AboutItem />
    <CompetenceItem />
    <ProjectItem />
    <ContactItem />
    </>
  );
}
