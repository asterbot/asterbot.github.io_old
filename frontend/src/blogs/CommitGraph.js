import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

import { Gitgraph,  templateExtend } from '@gitgraph/react';

// const { Gitgraph } = require("@gitgraph/react");

const processString = (commitString) => {
  // Convert string like "Initial Commit" to "initial_commit"
  return (commitString.toLowerCase()).split(" ").join("_")
}


const handleClick = (commitString, navigate) => {
  const urlLink = "/blogs/" + processString(commitString);
  navigate(urlLink);
}

const addCommit = (branch, commitString, navigate) => {
  branch.commit({
    subject: commitString,
    onMessageClick: () => handleClick(commitString, navigate),
    onMouseOut: () => {console.log("HI!")},
  })
}

let options = {
  template: templateExtend("metro", {
    // colors: ["gray", "turquoise", "darkgreen", "yellowgreen", "navy"],
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
    },
  }),
};

const CommitGraph = () => {
  const navigate = useNavigate()
  return (
        <Gitgraph options={options}>
          {(gitgraph) => {
            // Simulate git commands with Gitgraph API.
            const main = gitgraph.branch("main");
            addCommit(main, "Sample Blog", navigate);

            const cool_stuff = gitgraph.branch("Cool Stuff")
            addCommit(cool_stuff, "First heere", navigate)

            addCommit(main, "New Blog", navigate)
            
            addCommit(cool_stuff, "Second here", navigate)

          }}
        </Gitgraph>
      );
};

export default CommitGraph;