import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


const markdown1 = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Code:
~~~py
print("hi")
if x>5:
    print("wow")
~~~

$x^2+y^2$
`

// for border:  border: '1px solid #ccc', borderRadius: '8px'

const Blog = () => {
    return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '10px'}}>
        <ReactMarkdown
        children={markdown1}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
    
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