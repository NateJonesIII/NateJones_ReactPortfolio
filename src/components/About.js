import React from 'react';
import self from '../assets/self.PNG';
import { DiReact, DiJavascript1, DiMongodb, DiMysql, DiNodejs, DiDreamweaver, DiGithubBadge } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";

const appIcons = [DiReact, DiJqueryLogo, DiJsBadge, DiMongodb, DiMysql, DiNodejs, GrGraphQl, DiHtml5];

function About() {
  return (
    <div>
      {appIcons.map((icon, index) => {
        return <h4 key={`icon-${index}`}>{icon}<icon /></h4>
      })};
      <main className={"container-fluid font"}>
        <div className={"row col-12 p-4 p-md-5 mb-4 text-dark rounded"}>
          <div className={"col-3"}>
            <img alt="Nate Jones Picture" className={"img-fluid rounded-circle img-thumbnail"} src={self} width="370" height="370" />
          </div>
          <div className="col-10 col-md-8 px-0">
            <h1 className={"display-8 fst-italic text-header font-smaller "}>About me</h1>
            <p className={"my-6 lead text-dark fw-bold"}>
              Hello and welcome to my portfolio site! My name is Nathaniel Jones I am an avid tech enthuiast, IT professional, and now a programmer
              just graduating from University of Miami's Coding Bootcamp!
            </p>
            <h1 className={"display-8 fst-italic text-header font-smaller"}>Technology Tools:</h1>
            <div className={"py-1 mt-auto text-dark text-center"}>
              <h1 className={"row text-center"}>
                <i class="fab fa-node-js icon"></i>
                <h3 className={"icon"}>Mongo DB</h3>
                <i class="fab fa-react icon"></i>
                <h3 className={"icon"}>MySQL</h3>
                <i class="fab fa-html5 icon"></i>
              </h1>
            </div>


            <div className="row col-12 biginfo">
              <div className="col-6  px-0 bg-light text-center info">
                <h1 className={"display-8 fst-italic text-header font-smaller "}>Education</h1>
                <p className={"my-6 lead text-dark fw-bold"}>
                  <hr></hr>
                  <h4>BS:Information Technology: Software Track</h4>
                  <h7>Florida International University December, 2018</h7>
                  <h4>Full Stack Development</h4>
                  <h7>University of Miami August, 2021</h7>
                </p>
              </div>
              <div className="col-6  px-0 bg-light text-center">
                <h1 className={"display-8 fst-italic text-header font-smaller "}>Work Exerience</h1>
                <p className={"my-6 lead text-dark fw-bold"}>
                  <h4>Lead IT Intergration Speciliast </h4>
                  <h6>Classic Collision [July 2021-Present]</h6>
                  <hr></hr>
                  <h4>IT System Administrator </h4>
                  <h6>Classic Collision [May 2021-July 2021]</h6>
                  <hr></hr>
                </p>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About;