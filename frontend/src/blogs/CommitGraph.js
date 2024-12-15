import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

// HACK: My own react component (kind of) for commit graphs
// cuz @react/gitgraph was kinda bad lol


// Reusable CommitLink Component
const CommitLink = ({ message, url }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: 'white',
        textDecoration: isHovered ? 'underline' : 'none',
        cursor: 'pointer'
      }}
    >
      {message}
    </a>
  );
};

// Commit Component with more flexibility
const Commit = ({
  x,
  y,
  message,
  url,
  color = "gray",
  textOffset = { x: 20, y: 5 }
}) => {
  return (
    <>
      <circle
        cx={x}
        cy={y}
        r="10"
        fill={color}
      />
      <text
        x={x + textOffset.x}
        y={y + textOffset.y}
        style={{ fontSize: '0.875rem', fill: 'white' }}
      >
        <CommitLink message={message} url={url} />
      </text>
    </>
  );
};

// Branch Line Component
const BranchLine = ({
  startX,
  startY,
  endX,
  endY,
  color = "gray",
  strokeWidth = 2
}) => (
  <line
    x1={startX}
    y1={startY}
    x2={endX}
    y2={endY}
    stroke={color}
    strokeWidth={strokeWidth}
  />
);

const CommitGraph = () => {
  return (
    <div className="git-graph-container">
      <svg
        viewBox="0 0 400 300"
        className="git-graph-svg"
      >
        <BranchLine startX={200} startY={50} endX={200} endY={250} />
        {/* Commits */}
        <Commit
          x={200}
          y={250}
          message="Initial blog"
          url="/blogs/sample_blog"
        />
        <Commit
          x={200}
          y={120}
          message="Lol"
          url="/master-update"
          color="blue"
        />
        {/* Feature branches */}
        <BranchLine
          startX={200}
          startY={120}
          endX={250}
          endY={80}
          color="blue"
        />
        <Commit
          x={250}
          y={80}
          message="Hi"
          url="/feature1"
          color="blue"
        />
        <BranchLine
          startX={200}
          startY={120}
          endX={150}
          endY={80}
          color="turquoise"
        />
        <Commit
          x={150}
          y={80}
          message="Bye"
          url="/feature2"
          color="turquoise"
        />
      </svg>
    </div>
  );
};

export default CommitGraph;
