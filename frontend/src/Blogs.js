import { Gitgraph, templateExtend } from "@gitgraph/react";

let options = {
  template: templateExtend("metro", {
    colors: ["gray", "blue", "turquoise", "darkgreen", "yellowgreen", "navy"],
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
    },
  }),
};

const Blogs = () => {
  return (
    <Gitgraph options={options}>
      {(gitgraph) => {
        const master = gitgraph.branch("master");
        master.commit("Initial commit");

        const feat1 = gitgraph.branch("F1");
        const feat2 = gitgraph.branch("F2");

        feat1
          .commit("Hi")
          .tag({
            name: "Click me!",
            style: {
              background: "blue",
              color: "white",
              cursor: "pointer",
            },
            onClick: () => window.open("https://google.com", "_blank"),
          });

        feat2
          .commit("Bye")
          .tag({
            name: "Visit!",
            style: {
              background: "green",
              color: "white",
              cursor: "pointer",
            },
            onClick: () => window.open("https://bing.com", "_blank"),
          });

        master.commit("Lol");
      }}
    </Gitgraph>
  );
};

export default Blogs;
