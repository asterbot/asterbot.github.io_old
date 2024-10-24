const { Gitgraph } = require("@gitgraph/react")

const Blogs = () => {
    return(
        <Gitgraph>
        {(gitgraph) => {
            // Simulate git commands with Gitgraph API.
            const master = gitgraph.branch("master");
            master.commit("Initial commit");
        }}
        </Gitgraph>

    )
}

export default Blogs;