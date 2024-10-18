import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/leetcode.webp";
import projImg2 from "../assets/img/image-11-1024x723.png";
import projImg3 from "../assets/img/schemaimage.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/food.jpg";
import projImg5 from "../assets/img/images.png";
import projImg6 from "../assets/img/whiteboards_draw2x.avif";

export const Projects = () => {

  const projects = [
    {
      title: "leetCode Clone",
      description: "Full stack",
      imgUrl: projImg1,
    },
    {
      title: "Zerodha-Money Exchange App",
      description: "Advanced backend and devops",
      imgUrl: projImg2,
    },
    {
      title: "Type Racer Game",
      description: "Next.js,Socket.io,Turborepo",
      imgUrl: projImg3,
    },
    {
      title: "Food Ordering Site",
      description: "Full Stack",
      imgUrl: projImg4,
    },
    {
      title:"Online Drawing tool",
      description: "Using Next.js",
      imgUrl: projImg6,
    },
    {
      title: "Sorting Visualizer with Sound",
      description: "Dsa with mern",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
    
                <h2>Projects</h2>
                <p> Explore a collection of my projects, where I've applied various technologies to solve real-world problems. Each project reflects my skills in web development, design, and problem-solving. From full-stack applications to innovative UI/UX designs, these projects showcase my growth, creativity, and dedication to building practical and impactful solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More Projects Upcoming</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More Projects Upcoming </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            
          
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}