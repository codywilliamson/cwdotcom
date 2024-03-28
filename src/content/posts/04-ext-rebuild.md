---
title: "Rebuilding My Edge Extension"
publishedAt: 2024-03-28
description: "Rebuilding what was built for myself into something others can use."
slug: "rebuilding-tab-grouper"
isPublish: true
---

<h1 style="color: white !important;">Rebuilding Tab Grouper</h1>

[Tab Grouper](https://microsoftedge.microsoft.com/addons/detail/tab-grouper/cjamddajnhimgjogcgighnbaojgliccc) started as a necessity — a way to manage the million tabs I kept open 24/7. It was primitively simple. I wanted to group by domain (or subdomain), quickly collapse, expand, close, sort all from keyboard shortcuts, context menus, and a UI. I have used this thing on all my devices since I built it. A few of my friends have to. But then I noticed I had almost 200 users (187-ish)... and I thought I might as well give it some love.

![Tab Grouper Before](/tab-grouper-before.png)

![Tab Grouper After](/tab-grouper-after.png)

## Analysis Paralysis

As with most of my side projects (and client projects, work projects, decisions, life......) I was initially stuck in analysis paralysis. There are so many options out there, and I really wasn't sure the best pursuit. In short, I wanted a few things:

-   Decent dev experience
-   Modern JS framework
-   Easy to work with backend (and budget friendly)

Apparently, the extension space isn't as loved out as traditional web development, but that's ok. I found [Plasmo](https://www.plasmo.com/) to be the best suited for my needs. I did initially try migrating the project as is over to Plasmo, but I failed. I ended up scrapping all the old work and rebuilding it from scratch. I used their [supabase starter](https://docs.plasmo.com/quickstarts/with-supabase) to get things bootstrapped, then added tailwindcss and [flowbite-react](https://www.flowbite-react.com/).

I have to say -- this combination is incredible. I was able to rebuild my entire extension pretty quickly. Now I have a great foundation for long-term maintenance and feature enhancement. More on this setup in future posts.

## Some Minor Details

Here's the gist for those considering a similar venture:

-   Make sure you add your `postcss.config.js` when adding tailwind to the project manually.
-   Plasmo and `pnpm` are like peanut butter and jelly. They just work better together. Seriously, just use pnpm.

## The Future

I will be monetizing the extension. I believe this space can be taken advantage of if I do things right. Of course, the features I launched it with will remain free. I have some great ideas for what I want to offer that I hope my users like as well. I snagged tabgrouper.com (not live yet) so I can build out the landing page and start driving traffic to the extension. I also plan to release it to the Chrome extension store as well.

Before I add any premium features or subscriptions, I'm re-releasing the app built on the new foundation with a small survey to gauge how my current users are liking and using the app. Using these insights (if I get any), I can build out the premium features and hopefully land a few users from the get go. We will see how it goes!

[Feel free to check out the repo.](https://github.com/codywilliamson/tabgrouper)
