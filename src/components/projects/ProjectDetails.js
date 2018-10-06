import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  //console.log(props); will give you a list of props given by react router
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            ratione officia! Quaerat consequuntur necessitatibus laborum
            repudiandae harum asperiores nulla eos, sapiente eligendi placeat
            iste, quasi eveniet, dicta odit. Voluptatum, quibusdam?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Rui Huang</div>
          <div>9/20/2018</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
