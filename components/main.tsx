import Link from "next/link";
import HomeItem from "../../components/homeItem";
import AboutItem from "../../components/aboutItem";
import ProjectItem from "../../components/projectItem";
import ContactItem from "../../components/contactItem";
// import '@mantine/core/styles.css';
export default function Home() {
  return (
    <main>
      <HomeItem />

      <AboutItem />

      <ProjectItem />

      <ContactItem />
    </main>
  );
}