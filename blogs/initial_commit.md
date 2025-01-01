## Intro
Hi! Welcome to my website and this blog! Good to have you here :D

I'm starting this blogging part of my website and I thought it would be cool to make it like a git graph (which you will probably see properly as I add more blogs). The main idea is that each blog is a commit, and each git branch can represent different "topics" I can write blogs about. Not entirely sure how the last part will work yet, but I'll figure it out. 

You may think this is an overkill to write blogs, and I completely agree, but it was fun to work on lol.


Also I can render markdown, with stuff like 
```cpp
code_blocks()
```
and math equations with LaTeX
```math
\dfrac{10}{y+2^z}
```

so I can talk about some of the stuff I want to. 

## What will I put in these blogs?
Honestly, anything I want to talk about. Some potential topic categories include:
- A cool piece of CS/Math I wanna share
- Something funny/interesting in the tech world
- A project I'm working on/worked on and what all I learned
- Some coursework I am doing and what I'm learning from it

Or anything else I decide to blog about :D but it will probably be one of these


## The blog framework
### JS :'D
As said by a famous philosopher:
> "*JS Developers: Why write 10 lines of code when theres a library to do it in 100?*" \
> ~ ChatGPT, when asked to roast JS devs

Unfortunately this website is built with React *JavaScript* (I'll shift to TypeScript at some point, I'm in too deep rn), and this language really knows how to be, hmm, interesting. \
\
![](./blogs/images/image.png)
> Such intuitive much wow

<br/>

### The design

Right, the design. I spent a some time (not too long thankfully) finding the right configurations with `@react/gitgraph` and some react-markdown framework to make it work for my use case. The way it works is when you click on a commit, it navigates you to the respective blog page. The blog page, after applying the markdown configuration searches for a markdown file in the URL and renders it. \
\
For example for this blog, the URL ends in `initial_commit`, so the script searches for `initial_commit.md` in the public directory and renders it. These markdown files are just saved in the public directory of the source code, you'll find them in the public folder here:\
https://github.com/asterbot/asterbot.github.io/tree/main/frontend/public/blogs
