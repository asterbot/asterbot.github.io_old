import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gitgraph,  templateExtend } from '@gitgraph/react';

import './index.css'

const processString = (commitString) => {
  // Convert string like "Initial Commit" to "initial_commit"
  return (commitString.toLowerCase()).split(" ").join("_")
}


const handleClick = (commitString, navigate) => {
  const urlLink = "/blogs/" + processString(commitString);
  navigate(urlLink);
}

const useAddCommit = () => {
  // This hook is a wrapper for the original commit function, to ensure that the correct properties are applied
  const navigate = useNavigate()

  return (branch, commitString) =>{
  branch.commit({
    subject: commitString,
    renderMessage: (commit) => {
      return (
        <text className="commit-message"
              onClick={()=>handleClick(commitString,navigate)}
              y={20}
        >
          {commit.subject}
        </text>
        )
      },
    });
  }
}

let options = {
  template: templateExtend("metro", {
    // colors: ["gray", "turquoise", "darkgreen", "yellowgreen", "navy"],
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
        display: true,
      },
    },
  }),
};

const CommitGraph = () => {
  const addCommit = useAddCommit()
  return (
    <div className="commit-graph-container">
      <Gitgraph options={options}>
        {(gitgraph) => {
          const main = gitgraph.branch("main");
          addCommit(main, "Initial Commit");

          // const cool_stuff = main.branch("Tech stuff")
          // addCommit(cool_stuff, "Sleep sort")

          // const school = main.branch("School");
          // addCommit(school, "OS course")

          addCommit(main,"Sample Blog");


        }}
      </Gitgraph>
    </div>
      );
};

export default CommitGraph;
