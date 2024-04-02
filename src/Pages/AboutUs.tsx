import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

const AboutUs = () => {
  const navigate =useNavigate();
  const handleClick = () =>{
    navigate("/")
  }
  return (
    <div className="container">
      <h1>ABOUT US PAGE</h1>
      <Slider />
      <div>
        <p>
          Welcome to My To Do List, your ultimate productivity companion! We're
          thrilled to have you here and excited to share our journey with you.
          At To Do List, we understand the challenges of managing busy
          schedules, juggling multiple tasks, and staying organized amidst the
          chaos of daily life.
          <br />
          <br />
          That's why we've created a powerful yet simple solution to help you
          take control of your tasks and maximize your productivity. Our mission
          is simple: to empower individuals like you to achieve more, one task
          at a time. Whether you're a student, a professional, a parent, or
          anyone in between, our app is designed to streamline your workflow,
          keep you focused, and help you accomplish your goals with ease.
          <br />
          <br />
          With To Do List, you can: Create and organize your to-do lists
          effortlessly Prioritize tasks based on urgency and importance Set
          deadlines and reminders to stay on track Collaborate with others and
          share tasks with ease Access your tasks anytime, anywhere, on any
          device And much more! But To Do List is more than just a to-do list
          app.
          <br />
          <br />
          It's a tool for transformation, a catalyst for growth, and a partner
          in your journey towards success. Whether you're tackling your daily
          tasks, managing projects, or chasing your dreams, we're here to
          support you every step of the way. Join thousands of users who have
          already discovered the power of To Do List and experience the
          difference for yourself. Say goodbye to overwhelm, stress, and missed
          deadlines, and hello to productivity, efficiency, and peace of mind.
          Thank you for choosing To Do List. Here's to a more organized,
          productive, and fulfilling life!
        </p>
        <br />
        <br />
        <br />
        <h1>Our Mission</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="d-block"
            src="https://images.pexels.com/photos/39348/musician-trumpet-metal-snowman-39348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="First slide"
            style={{ maxHeight: "350px", maxWidth: "45%", objectFit: "cover" }}
          />
          <p style={{ marginLeft: "20px" }}>
            Our mission extends beyond just providing a to-do list app; it's
            about fostering a community of motivated individuals who are
            dedicated to personal growth and continuous improvement. We're
            passionate about helping our users thrive in all aspects of their
            lives, and we're honored to be part of their journey towards
            success.
            <br />
            <br />
            We're committed to creating a tool that not only simplifies task
            management but also inspires users to take action, pursue their
            passions, and make progress towards their aspirations. Whether
            you're a student striving for academic success, a professional
            managing multiple projects, or a busy parent juggling family
            responsibilities, Our work here is to support you every step
            of the way.
          </p>
        </div>
      </div>
      <br />
      
      <button onClick={handleClick}>home</button>
    </div>
  );
};

export default AboutUs;
