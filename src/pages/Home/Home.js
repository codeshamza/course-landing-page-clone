import React from "react";
import AboutCourse from "../../components/AboutCourse/AboutCourse";
import Access from "../../components/Access/Access";
import Banner from "../../components/Banner/Banner";
import CareerMovement from "../../components/CareerMovement/CareerMovement";
import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TimerButton from "../../components/TimerButton/TimerButton";

const Home = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setShow(true), 10000);
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <AboutCourse />
      <Courses />
      <Access />
      <CareerMovement />
      <Footer />
      {show && <TimerButton />}/
    </>
  );
};

export default Home;
