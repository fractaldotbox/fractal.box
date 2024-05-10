---
title: "31 tools teams need for effective remote working (Part 2)"
heroImagePath: "/heads.png"
highlight: ""
summary: "Continuing the previous article, this article will introduce the remaining remote tools to maximize the production capacity of the company."
order: 11
---

## 31 tools teams need for effective remote working (Part 2)

Read Part 1 in English here: [link](/case-study/31-tools-teams-need-for-effective-remote-working-(Part-1))

Read original article in Chinese here: [link](https://www.perapera.ai/post/remotework/)

### Reminder Notifications, Automating Workflow Integrations: Slackbot、IFTTT、Zapier、Workato

In a remote work setting, nobody walks into the office and says “It’s time for a meeting” or “Remember to tell the engineers to click publish at 3pm”. So how do you remind your teammates? The simplest way is to the /remind command in Slack to add different reminders. If you can’t be available around the clock to answer questions, the best thing to do is to automate replies.

There are [many Bot apps on the web](https://slack.com/apps/category/At0MQP5BEF-bots)you can integrate for this purpose, or you can even choose to write one yourself to remind you of colleagues’ birthdays…

You may also have heard of IFTTT, which allows you to automate various software and hardware. For example, one can automate smart-home applications such as “turn on my Philips Hue light, turn on the music when I am home”. Zapier has a similar concept to IFTTT and is even more suited for commercial application. For example, when a file is uploaded to Google Drive, it can send automatic Slack notifications or automatically upload the file onto a database. When a new article is published on our blog, it can automatically generate links and remind the team to share the article. When there are a lot of different workflows, without an office environment where we can verbally remind one another, these automations become extremely effective in aiding the team.

![Zapier](/zapier.png)

What people do not often notice is that Zapier has a [Chrome extension.](https://chrome.google.com/webstore/detail/zapier/ngghlnfmdgnpegcmbpgehkbhkhkbkjpj) In many of the teams I have worked in in the past, people often looked for engineers to develop internal user interfaces for semi-automated workflows. By adding this Chrome extension, you can actually achieve the result of getting the system to run the code automatically upon entering details.

![Zapier2](/zapier2.png)

More importantly, [Zapier](https://zapier.com/about/) is also a remote team, which makes a great case for their product. If you require an even more professional automation tool, [Workato](https://www.workato.com/) from Singapore is a powerful tool which supports complex and deep integrations, with subscription plans priced in the thousands.

### Product Management, Project Management, Task Lists: Trello, Airtable, ProductBoard

You may know that Slack was originally a tool developed for gaming. A day in the life of a remote worker also feels similar - you log in, get the latest updates on the battlefield, understand what your missions are and who has sent a signal for help. No one will be asking what the progress is on your report.

Thus, having a task list that is visible and understood by everyone, very much like in World of Warcraft, becomes all the more important.

Trello needs no introduction - it is the best tool for beginners to running Scrums. If you are not familiar with the “Kanban” flow, [The Kanban Way](https://blog.trello.com/kanban-data-nave) is a great reference. It is easy to use and supports integration with various extensions, and delivers a great user experience in terms of speed and keyboard shortcuts. Trello’s biggest flaw is that you are unable to arrange cards in as many ways as on Airtable, although you are able to select individual cards.

![Kanban](/kanban.png)

[ProductBoard](https://productboard.com/) is the best product management tool I have used to date which solves the most critical issue of product and project management: it allows product development to be aligned with user needs, allows you to arrange product features by priority and ensure that critical paths are not blocked.

The most interesting feature of ProductBoard is that after inputting product features and tasks, you can display these in different formats which facilitates discussions and priority assignments, and even allows auto-scoring if that is necessary for you. This enables discussions like “Our March release will be able to make use of our backend team’s new database developed in February, and is also in line with Apple’s campaign”, or “In light of our strategy in the Japanese market, we hope to be able to launch our minimum viable product with features A, B, and C in June… let me switch to our teams’ view - hang on, that may be too much work for our frontend team…”

While this is not a problem unique to remote teams, users do not come to you to get interviewed or observed. Apart from analysing user data, it is also important to manage records of user feedback online and insights from online user interviews. ProductBoard allows people to vote on top features, public company roadmaps, which allows product managers to link relevant insights with tools in the product development folder.

Airtable also allows information to be displayed in Kanban view, like Trello. Ever since Airtable launched the [Gantt Chart](https://support.airtable.com/hc/en-us/articles/360023032813-Gantt-block), I have never looked back. Our team has been replicating all of Product Board’s features using Airtable. The advantage of this is that we are able to view everyone’s tasks and progress easily during scrums in Kanban view, while we can also use Blocks to easily see metrics, flowcharts. When having a product meeting, we are also able to select different releases and conduct discussions around it, including examining the dependencies between tasks so that releases can happen on according to plan.

Airtable can also be integrated using Zapier to remind employees of their tasks and deadlines in Slack.

As for Jira, it’s more suited to large teams with many product managers. In any case, what is key is regular communication and cleaning up of tasks on any tool that you use to manage tasks.

### Scheduling, Leave, Check-ins: Google Calendar, Timetastic, Calendly, Status Hero, Zapier

The most obvious and convenient way to manage schedules is to use Google Calendar to share schedules and meeting times with your team. Using Zapier, meeting notifications and reminders can be sent to Slack to get employees to fill in meeting agendas, as well as to send meeting minutes and meeting recordings.

Check-in here refers not to clocking in at a company, but checking in during a scrum: What I have accomplished, any blockers present, anything I need help with. Remote team members generally have a high degree of flexibility when it comes to work and are outcome-driven, so the actual number of hours worked is less important. One of Github’s engineers Zach Holman even wrote an article stating that [Hours are Bullshit](https://zachholman.com/posts/how-github-works-hours/). So the point of checking in is to remind everyone to communicate with each other, and not to inadvertently hold up someone else’s progress.

Status Hero is a good tool which automatically sends reminders in Slack telling the team to check-in, and then sends out reports. You can also integrate leave calendars and set timezones. My team started out using Status Hero, but in order to cut down on the number of tools, I hacked together a Check-in Bot on Airtable, which reminds everyone to fill in an Airtable list to check-in, which is then automatically sent to Slack. This enabled better integration between our list of tasks which are already on Airtable with the Check-in process.

![head2](/heads2.png)

If you want to tell your team when you are on leave or online, particularly for customer service teams needing to operate 24/7, apart from Google Calendar, you may also consider [Timetastic](https://timetastic.co.uk/), which allows you to view all team members’ calendars. If you are asking others to block time in your calendar, you can use Calendly for that - it allows others to submit appointments and integrates that directly with your calendar.

### Documentation, documentation, documentation: Dropbox Paper,Hackmd.io

There is a Chinese saying that important things must be repeated thrice. For remote teams, that is having good documentation. With an organization like Github, where more than 60% of employees work remotely, [a product designer once famously said](https://www.pluralsight.com/blog/teams/collaborating-at-github-with-a-60--remote-workforce) “[Everything in Github is on Github](https://www.pluralsight.com/blog/teams/collaborating-at-github-with-a-60--remote-workforce)”, and that “there are almost zero meetings at GitHub”. Indeed, something that you could ask a colleague by walking over to his or her desk in the office could have become something that a colleague in a different timezone can only get to the following day. But even if you are in the same office, your colleagues could be busy with other tasks, so documentation could still help to increase efficiency.

In order to document company processes and important information clearly using a simple format that is easily searchable and shareable, having an document editing tool that supports multiple people editing at the same time becomes really important. Dropbox Paper, formerly Hackpad, was use by [G0V.TW](http://g0v.tw/)’s Hackfoldr. A useful feature is using a highlighter to point out important parts of the document for discussion with colleagues. Links from Adobe XD or Airtable can also be embedded so that you can fill in sheets all without leaving the document.

For new employees transitioning to remote work, documentation might be the hardest thing to adjust to. Documentation loses its effectiveness if it is not incorporated into your team’s daily work routine, regularly checked or updated. The open source culture of software development is a great example of designing processes and clearly documenting rationales behind them so that many people can understand the goals and collaborate. If you are a developer, then you may already be well acquainted with the concept of documentation, whether these are logging Github issues, using manuals, or reading API documentation. However, getting an entire team to invest in doing this takes time. Still, the consequence of not recording down what was discussed during a meeting means spending a lot more time in meetings while progress stalls, so it’s always better to document things.

### Online Whiteboards: Tools for Creating Diagrams, Flowcharts, Mindmaps

No whiteboards for your remote team meeting? If you are using Zoom for your online meetings, you can actually use the Whiteboard feature. If you’re on a tablet, this works seamlessly if you share your screen and use your iPad Pencil to do the job.

But if you are looking to have multiple persons creating professional-looking diagrams, I would recommend trying out [Whimsical.](https://whimsical.co/) Whimsical has templates for various frequently requested diagrams such as mindmaps, flowcharts, simple UI wireframes, and sticky notes, and can automatically manage the links between these diagams. I was a [Lucidchart](https://www.lucidchart.com/) user previously and found it really professional but too complex, so I ended up using it less. If what you need is a high quality UI mockup, then Adobe XD or Invision do pretty well for online collaborations, and I believe many designers are already using these.

### Cloud Operating Systems, One-Stop Solutions Platforms: Dropbox Business, Notion, BaseCamp

You must be thinking that there are too many tools. The solution to this is even more tools - tools which aim to integrate all other tools, or to become a one-stop solutions platform.

Last year, Dropbox joined the competition [by expressing its intention to become an enterprise collaobration workspace](https://paper.dropbox.com/ep/redirect/external-link?url=https%3A%2F%2Ftechcrunch.com%2F2019%2F06%2F11%2Fdropbox-search%2F&hmac=AeBlRIDxptLYbpP3mu5W5%2FQ0xhmsDTnEXgMVA8DUiC8%3D). Media analyst Ben Thompson also pointed out in his article that Dropbox [had a good shot to become THE Cloud OS](https://stratechery.com/2019/the-new-dropbox-the-cloud-os-connecting-versus-file-sharing/). Opening up Portal is like looking at the home screen of your mobile phone. You can see the latest updates in the company, and search for files or documents on the cloud. Most importantly, extensive integrations with software like Zoom, Slack and Adobe XD are allowed so that everyone can continue to work with the tools best suited for their jobs but easily collaborate with each other. A majority of paid features like access control and permissions management are targeted at enterprises. With a majority of important features still in beta, startups may not find a lot of reason to upgrade for now.

![screen](/screen.png)

A similar tool to Airtable is Notion, although both have different starting points. A member of our team once expressed that to do both frontend development as well as content editing required switching between interfaces. We started searching for a notetaking tool with a simple interface and supporting integrations across platforms, that could store code snippets but also format text easily at the same time. Finally we discovered the note-taking tool Notion, widely raved about in Silicon Valley, which satisfied all these requirements and even includes databases so you can manage large amounts of information like lists of movies you have watched or reading lists. There is even an indexing function which helps to arrange these lists in a certain order and make it easier to find what you are looking for.

Notion also provides [template resources](https://www.notion.so/Notion-Template-Gallery-181e961aeb5c4ee6915307c0dfd5156d) for Teams, Remote Teams, Startups, Students and Educators if you’re starting out, so that you can save time on designing these from scratch.

If you require other options, [Basecamp](https://basecamp.com/) counts as one of the earliest platforms, integrating with schedules, message boards and to-dos. Our team has not used this yet, but you can certainly check it out.

### Information Security: OpenVPN, 1Password

Many people go into the office in order to be able to connect to the company’s intranet, while remote teams do this through VPN software which allows employees to access this after safety checks from home. The best way to ensure information security is, of course, to have professionals manage these settings for you. One examples of a mainstream VPN service is [OpenVPN’s Business VPN.](https://openvpn.net/pricing/) Whether you are a remote team or not, please do not manage your passwords using whiteboards or post-its - consider using 1Password instead.

### Concluding notes: Team culture and processes matter more than the tools

While we have given an introduction to many tools to help you work remotely more effectively, tools remain secondary to a good team culture, processes and habits. As the [Agile Manifesto](https://agilemanifesto.org/) puts it, it is “individuals and interactions over processes and tools". While remote workers may have more experience with some of the tools discussed here, you may also discover that you are familiar with at least a few of them. In the future, the demand for cloud services and integrations will continue to grow, and it is imperative that our working cultures evolve to embrace these tools so that we can achieve maximum potential at work.