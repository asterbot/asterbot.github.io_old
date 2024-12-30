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

const addCommit = (branch, commitString, navigate) => {
  // This is a wrapper for the original commit function, to ensure that the correct properties are applied
  branch.commit({
    subject: commitString,
    renderMessage: (commit) => {
      return (
        <text className="commit-message"
              onClick={()=>handleClick(commitString,navigate)}      
        >
          {commit.subject}
        </text>
      )
    },
  });
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
  const navigate = useNavigate()
  return (
    <div className="commit-graph-container">
      <Gitgraph options={options}>
        {(gitgraph) => {
          const main = gitgraph.branch("main");
          addCommit(main, "Sample Blog", navigate);

          const cool_stuff = gitgraph.branch("Cool Stuff");
          addCommit(cool_stuff, "First heere", navigate);

          addCommit(main, "New Blog", navigate);
          
          addCommit(cool_stuff, "Second here", navigate);
        }}
      </Gitgraph>
    </div>
      );
};

export default CommitGraph;
