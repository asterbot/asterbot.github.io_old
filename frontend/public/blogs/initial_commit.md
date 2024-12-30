## Intro
Hi! Welcome to my website and this blog! Good to have you here :)

I'm starting this blogging part of my website and I thought it would be cool to make it like a git graph (which you will probably see properly as I add more blogs). The main idea is that each blog is a commit, and each git branch can represent different "topics" I can write blogs about. Not entirely sure how the last part will work yet. You may think this is an overkill to write blogs, and I completely agree, but it was fun to work on lol.


Also I can render markdown, with stuff like 
```cpp
code_blocks()
```
and
```math
\LaTeX
```
> Yikes. That's a problem for future me :) Most math blocks work but it doesn't like `\LaTeX` for some reason.

so I can talk about some of the stuff I want to. 

## What will I put in these blogs?
Honestly, anything I want to talk about. It could be about an algorithm I found cool/funny/interesting, some project I am working on, or maybe just a random story about technology that I wanted to share! Really just anything I want to talk about and share with the 3 people that actually read this. 


## About the design
As said by a famous philosopher:
> "*Whenever a JavaScript developer encounters a problem, they will instinctively find a framework or library that makes the abstraction*" \
> ~ Someone, probably

Unfortunately this website is built with React JavaScript (I'll shift to TypeScript at some point, I'm in too deep rn), and this language really knows how to be, hmm, interesting. 

Right, the design. I spent a some time (not too long thankfully) finding the right configurations with `@react/gitgraph` and some react-markdown framework to make it work for my use case. The way it works is when you click on a commit, it navigates you to the respective blog page. The blog page, after applying the markdown configuration searches for a markdown file in the URL name. \
\
For example for this blog, the url ends in `initial_commit`, so the script searches for `initial_commit.md` in the public directory and renders it. These markdown files are just saved in the public directory of the source code, you'll find them in the public folder here:\
https://github.com/asterbot/asterbot.github.io/tree/main/frontend/public/blogs
