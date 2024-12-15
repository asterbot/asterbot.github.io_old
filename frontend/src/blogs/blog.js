import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


// for border:  border: '1px solid #ccc', borderRadius: '8px'


const Blog = () => {

    const { id } = useParams(); // get id from URL

    const FILE_PATH = "./blogs/" + id + ".md" // get the correct md file from public directory
    const [markdown, setMarkdown] = useState("")

    useEffect(()=>{
        fetch(FILE_PATH)
        .then((response) => response.text())
        .then((text) =>{
                setMarkdown(text)
            } )
            .catch((error)=>console.error("lol bad md file => " + error))
    }, [FILE_PATH])

    return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '10px'}}>
        <ReactMarkdown
        children={markdown}
        className="markdown-content"
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}

        components={{
            code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={dracula}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                            backgroundColor: 'transparent', // Removes the black highlight
                            border: '1px solid #ccc', // Optional: Add a border
                            borderRadius: '8px', // Optional: Add rounded corners
                        }}                
                        {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }
        }}
        />
    </div>
    )
  };
  
  export default Blog;