import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from "rehype-raw";

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


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

    // Title is decided by blog name and file name :D
    let title_arr = id.split("_")
    for (let i=0; i<title_arr.length; ++i){
        // Capitlize first letter
        title_arr[i] = String(title_arr[i]).charAt(0).toUpperCase() + String(title_arr[i]).slice(1);
    }

    const title = title_arr.join(" ") 

    return (
    <div className="blog">
        <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h2><span>{title}</span></h2><br /> 
                </Box> 
            </div>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '10px'}}>
            <ReactMarkdown
                children={markdown}
                className="markdown-content"
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[
                    [rehypeKatex, {
                    throwOnError: false,  // This will help catch KaTeX rendering errors
                    // errorColor: '#cc0000',
                    output: "html",
                    macros: {
                        "\\dfrac": "\\frac"  // Fallback macro
                    }
                    }], 
                    rehypeRaw
                ]}

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
                    },
                    math: ({children}) => {
                        console.log("Math content:", children);
                        return <span>{children}</span>;
                    },
                    inlineMath: ({children}) => {
                    console.log("Inline Math content:", children);
                    return <span>{children}</span>;
                    }
                }}
            />
        </div>
    </div>
    )
  };
  
  export default Blog;