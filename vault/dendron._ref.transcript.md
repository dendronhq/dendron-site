---
id: 097cf7ed-e9aa-4580-86cf-0347bf7a623d
title: Dendron Onboarding Transcript
desc: ''
updated: 1599235587751
created: 1599235587751
stub: false
---
0:00  
So getting started? And have you had a chance to play around with engine at all, or this is the first time.

0:07  
Um, I've opened it and read a little bit of the doc in it. And that's all I've done.

0:13  
Okay, cool. That's perfect. And so right now,

0:17  
when you turned up in the, in the, in the couple of discord threads was really the first point that I looked at it at all, and I haven't spent much time looking. And then you throw this out, like, Okay, this jumpstart.

0:33  
Cool. Yeah. And that's kind of what this onboarding is for. It's, it's, you know, today's help, even if you haven't even opened it up just to give you the idea of, you know, why you might want to. And so right now, what you're looking at is identity and workspace, and the way so let's back up and tension. We manage your notes and our work states and if you use VS code, it's the equivalent of the VS code workspace. So that's a one to one match in there. And the way that you start off is you can initialize the workspace. And right now, I did me, we can just make a new one, like lead you. And so this is saying the workspace should be at this location. And so when we create a workspace, we can either create one with intention tutorial notes, and that has right or you can do an empty one. So I'm just going to do an empty one in this case. And so when you create an empty workspace, you have one file, which is the root file. And this is just there for this is kind of like your phone. And the way that denture and works is if you want to create a file, you can just type command L. I'm going to toggle screencast mode, command l triggers to look up bar, and most of the things you'll do in engine will involve this one have you used tools like Notational Velocity no So Notational Velocity, it's it was a tool where basically when you are looking for a file, for example, if I type Python, if the file doesn't exist, then it creates it for you. If it does, if that if it does exist, it will fetch it. So it's this idea that you never really have to think about

2:22  
the accessing your data.

2:26  
And

2:27  
so I'm assuming that Dendron is putting the is that a YAML? header?

2:33  
Yes, that is a yamo header.

2:35  
So it's just automatically doing that when it creates the file.

2:39  
Exactly.

2:41  
And for the yamo header, the idea here is we store some metadata. So every node has a unique ID. And the reason we do that is because if you choose to you can publish your notes. That's my local version that this is the engine website is actually a published vault.

2:59  
Ah, Why. So I created a

3:03  
workspace with the with the help notes. Yeah. So that's why it looks the same.

3:10  
Yep, exactly. And it is generated from the notes. And the reason and if you notice the IDs for each note, when you publish the notes are actually published by their ID not by the name. And what's nice about that is even if you've renamed the notes, as long as you keep the frontmatter, it will show publish to the same URL.

3:29  
Interesting,

3:30  
okay. And, okay, so, and as I'm battling off, if at any point, you want to just like stop me and say, like, hey, like, what's this? What would you guess? Do you just feel free to I tend to otherwise just keep talking?

3:42  
Oh, no, that's fine. That's exactly what I was hoping. Okay,

3:45  
okay. Um, so creating, so as far as creating notes, you can type it. If it exists, it'll fetch it. If it doesn't then it it will create a another way of creating notes as using wiki links, which is double bracket syntax. So for example, if I wanted to go to Ruby, I could type in Ruby. And then if you do the go to definition shortcut, then you can go to default on Mac is something different. I just changed it to Ctrl, enter. So if I do Ctrl, enter, I can go into Ruby, sometimes some Markdown preview, well, like, not update right away. But in, for example, in groovy, I can type in Python, and I can go here and I can go back to Python. And making these links, it's kind of the same thing as look up in like JavaScript, for example, JavaScript doesn't exist. But if I navigate to it, then venturing well creatively.

4:42  
That's kind of the same way obsidian works.

4:47  
And it's just this idea that you shouldn't be thinking about the order of files. It's, you know, not likely and notetaking should just be the information that you're working with. And as far as bi directional linking On the left hand panel, so we have a backlink section. And the backlinks section shows you all the notes that this note is linked by. And so in Python, it's showing you that hey, Ruby links do Python. Yep. And I think obsidian has a similar panel, but it's, yeah, it's a backlink panel. Now, the thing that Oh, and I guess one more thing before I get into hierarchies, we support let's see, this is header one.

5:35  
This is header Two,

5:39  
one.

5:43  
So denisha. We also support what we call defences, loan costs and block graph. I think loan costs and block references. We call them nodes references. I think obsidian also has a doe I'm not sure what they call it.

5:58  
I don't actually have this Same. There are references to headers and things, but they don't. It's a little different.

6:07  
Right? So what I'm going to show you is in Dendron, you can embed notes and other notes. So for example, I just hit Command Shift R, which copy the left lens of this note, and the, and then I can paste it, for example in JavaScript. And so I'm seeing the Python notes embedded in the JavaScript note. You can either choose to reference a note, or you can choose to reference a header. So for example, everything starting from heading one, and you can also do games. So you can say everything starting from header one to header two, that you can embed notes into other nodes. And then the other thing that you can do is you if you keep bullets, the Markdown preview is mutable in the sense that you can click on the lead and also update the Markdown. Yes, that's a little thing that I find people get quite excited about that

7:08  
over if you're going to use to do if you're going to use those

7:10  
as to dues it's a big deal. Exactly. Um, okay, and now getting to the part. So right now what I've shown you it's pretty similar to obsidian it's pretty similar to go more like how normal note taking apps work. The things that dungeon the dungeon now starts doing differently is we're focused on having your notes conform to some sort of structure. And so that's not to say like, as you can see, like we support backlinks so you can link any note to any note. But the problem that I found and the reason why I made my own note taking tool is I find that once you get a lot of notes, you need some sort of structure, if you organize it, if it's all backlinks, like it becomes really hard to find something, whether it's a naming convention, whether it's some sort of hierarchy, like there need to be some sort of structure to help you find it. And so in Benjamin, for us that structure is hierarchy. So the way that you create a hierarchy, and Benjamin is whatever. So when you do command L, you the lookup bar gets populated by the current note that you're in. And so if you have not, then you're creating a new level in the hierarchy. So for example, I can do Python data. And so you know, this is a data node. But the hierarchy is, Python is parents data as a child. And under data, for example, I might want to do if I'm learning about Python, data could be you know, all of the various data structures that Okay, my path and setting I can look in billions and things. And the nice thing about this hierarchy is now instead of, you know, you manually having to link all the nodes together, because you are in the Python hierarchy, you can you have a bird's eye view of everything in this hierarchy.

8:59  
That's just kind of Gaining

9:02  
interest. Another way you can see the hierarchy is we have to show graph command. And so just like how obsidian has a graph, Python, now Python engine has a graph. But this is a graph with backlinks. It's a graph of your hierarchy. And so, you know, as you note, like there isn't a connection between Ruby and Python, even though there's a backlink, what this is showing you, you can think of it as a top down view of your table of contents of the hierarchies that you have. Right. Now, the nice thing about having this is like right now, for example, Python this in stone thing, that web engine lets you do, so let me back up for a moment. hierarchies, I find are one of the best ways of organizing notes by most people and most tools don't really support it as well. And that's because I think not because hacky some work, but because he had no tooling on our piece. Like if you had your files in a folder Actually, you could put them in a bunch of different folders, but then like finding them is more difficult. And then if you ever wanted to rename anything, that's just a nightmare. And so attention, we're building on this idea that it is actually some of the most effective ways of managing information with people. And we it's built around this idea that as hope you work with hierarchies, and one thing we let you view is we let you be factor. So for example, right now, I'm under a Python. But let's say that I shut off a entering text I want to replace. So I'm saying for Python instead of Python. Oops, let me again, instead of Python, go place Python with Lang Python. And what this is going to do is everywhere where you have python.md, it's going to add the Lang prefix for programming language. And if I hit proceed, proceed. What you'll notice is that not only did all the falaschi name but also If I go, for example, into movie, all the links to the palace, and also then. And so it's just an easier way of managing the hierarchies. And now, like, why might you want to do this? Well, because I have this just crazy thing. So because I have this programming language it, what it lets me do. And this is really what I started doing with my notes is, if I'm learning, for example, a programming language, and I'm working on like two or three at a time, it's really difficult to context switch between them. It's like, how do we do this in Ruby, how you listen to Python? What I found was much more conducive is if I could think like, okay, in a programming, what is my model for programming language. And so for example, a programming language has data structures, and so I could apply that to Ruby as well. So for example, for Ruby, it also has data structures. And then what I could do is when I'm learning about Ruby, you know, I could translate that higher He that I learned from Python, and put it into a movie. And what this lets me do now is, now it's a lot easier to context switch between different programming languages, because I'm thinking more about the concepts than the actual implementation. And for example, now, if I'm like in my hierarchy for So first of all, like, if I'm looking at data structures in Python, I have all of them in one view. But now let's say that I want to look up data structures for all my programming languages, then I also have a similar view for that. And so now, this idea, and this is where it really, for me, like, became like, the way that I did all my notes is having these hierarchies not only are they a great organizational scheme, because now instead of having 100, you know, 1000 notes at the top level, you only have, you know, the very good stuff behind this. So it's programming languages. It's cooking as you know. Few things that you care about at the top level, and you can drill down into them. And when you drill down into them, it's not just organizational. It's something that, for me, at least, it helps me learn about the topic. Because I find the heipiess that I create, for, you know, a programming language or anything, they affect my mental model of it. And I find over time, when I'm learning about things, it's not actually the implementation that matters, but it's the fact that I've been able to develop this hierarchy and then continue refining it over time.

13:34  
That makes sense. Well, there's nothing that keeps you from just having a bunch of loose notes at some, somewhere even if, even if it's nothing. If for the sake of cleanliness, you you create a hierarchy starting with Miss and stuff under it. You have the same thing you have typically totally get the language thing. I once had a situation where I had the word two computer assembly languages. Yeah. And one of them had right to left operation on the instructions. And the other had left to right, but three quarters and now, three quarters of the names of operations were the same. So you just had to remember whether you were in left, right or right, left. So yeah, I totally get that.

14:28  
And the other thing that I do for these notes, and let me just going to show you this is my one of my vaults. This is a notes for a meeting today. But for example, I have a CI and this is like all the CI commands that I run into, and it's not just necessary. Oh, okay. So that one. It's like, if I run into a problem instead of, you know, googling it,

14:55  
yeah.

14:56  
I don't know how half a cache of it. So if I run into the same problem, they And, you know, I can just go into that COI hierarchy.

15:04  
And right because it's the one, it's the one. I did that last month. I know I know that, but I don't remember.

15:12  
Exactly. And if you look at this, I think I have a couple of hundred different commands. And the nice thing about this as like, I did none of this, you know, ahead of time, it was kind of a just in time, I ran into cognitive work. I needed to Stack Overflow, it took me 10 minutes. I never want to spend time on it again. Let me go into, you know, yeah.

15:36  
Okay, cool.

15:38  
So, can we look a little bit at, um, kind of your to dues?

15:44  
Yeah. So, two dues let me actually, okay, I'm going to do two things. I'm first going to show you how you would create it from scratch and then I'll show you my two dues for the day. I like to organize things by projects. And so I usually have like a project hierarchy. Actually. And so for example, one project might be different. And so under Dendron, what I actually do is I have a daily journal that I go over everything I need to do for that particular day. And let me think, what is the best way of showcasing, I'm just going to show you my to do actually.

16:28  
So this is my to do for a Dendron.

16:32  
And let me show you and the video. And what I do is intention, you have this notion of your journal notes. And so journal notes is basically whatever hierarchy you're currently in, and appends journal to it in the current date. And this is configurable. You can change the date format, you can change how it appends it, but I'm going to move on to tomorrow's date. And the way you do that is Ctrl Shift J. But you can use that to create a new Going on it. And then what I do is every day, are you familiar with snippets inside VS code?

17:07  
Oh, I haven't used them inside VS code. I use external snippet code.

17:14  
Well, I, anyways, I use a bunch of snippets. And so apprehension journal snippet, and that will fill it out with

17:21  
Okay, might get the idea even though I haven't used it.

17:25  
Yeah. And then the way I do two dues that's worked really well. For me, if I'm just working by myself, I have a snippet to make this bullet. And then I'll write you know, task one, task two tasks week.

17:38  
Something that

17:40  
dension does fairly well is for example, sometimes like past one, it turns out to be a much bigger task and has a notion of sketch notes. And so let me and so this is all just special cases, it's you can create a sketch note by Command Shift s, and you can choose to add a title or not. If you don't add a title by default. It creates under your current high hierarchy denture and dots batch, and then the current date and timestamp. And you can think of this cache notice as caches, it's just, oh, I'm in a meeting, I need to take a note, I don't want to figure out where I'm gonna move it. So I'm just going to start you know, taking. And so that's kind of the purpose of discussion. And then later on, you can like rename it, and then follow it away somewhere if you want to. The more interesting thing is, if I highlight tasks, for example, and then I do the shortcut for a sketch note, what it does, is it creates a link from this task to the sketch note. And so now, you know, I can use this to create nested tasks. So you know, task 1.1 1.2 and if I find that, you know, task 1.1 is still too big, and I need to break it down even further. I can create another cash flow from that and then you know, create even more tasks. So you can go as deep as you want to that I usually find that to be To TCP level sign up yeah

19:04  
that deeper probably needs to be broken up

19:08  
and but what's really cool about this is you can start off with a bullet and you can still keep this nicely bulleted list but then you can you know, expand upon it as much as you need to. Um, but as far as like project management goes the way I manage projects is I have my daily to dues and then I look at my to dues from the previous day. And then like anything I haven't done the previous day, I will copy it over into today. And then I will I use a bullet journal format so like I will add like a lesson sign.

19:47  
Go No, I don't use it, but I'm familiar with it.

19:51  
And something else that you can do is this is VS code feature more than attention feature better And then most people don't know about this. If you notice, for example, I have tags to some of my tasks, what I can do VS code has a search editor feature where you can search within your current note. And so if I type in start, it shows me For example, all my lines were have to start counting. And what's cool about this is this search is globbing. And so what I can do is by I have this shortcut set up, that brings me a search of whatever the current notice, but I can, for example, go here to show me Okay, what are all my past titled start within this month? And this shows me all of that materialized in a single view. All right, go What is everything, you know, in this year, or, you know, it's a quote skyjack so you can get as fancy as you like, and what what I will say this like this search, edit I view it's a VS code thing, not an engine thing, but it's Because the engine, if you follow dingemans method of putting stuff in hierarchies, it makes us search things super powerful, because now you can glob and search within. Yeah, the big dates. You can, for example, if you think back to a programming example, in Python, you can search, you know, under Python, everything in Python that has a gotcha tag, or everything in programming languages, that was hard. And that is something that you get for free with the hierarchy. This is nicely structured, being able to just search everything within that.

21:38  
So what's really fascinating about this for me to watch, is that the name that you get, which is the hierarchy with with dots as separators on the mainframe, that's actually how hierarchical folder structures are achieved. Yeah,

22:01  
that exact naming convention.

22:04  
Nice. I haven't had the pleasure of using many mainframes in the days.

22:09  
Yeah, so that was that one harks back, like decades for me. Okay.

22:14  
Um, so I have an unrelated question, what is the tool you're using? That's echoing the keystrokes. And that's actually VS code. So VS code has something called screencast mode. I'll go ahead, it will show you all the keystrokes.

22:29  
Cool. All right.

22:31  
And that's a nice thing about building engine inside VS code is that, for me, like what was different about attention and what the thing I'm trying to promote is this idea of keeping your notes in a hierarchy and giving you the tools to work with that hierarchy. But then all the other stuff, for example, like being able to work with Markdown and supporting multiple panes and having all the other stuff that you need in an editor. It's not really differentiating and you codecademy is a great place for that. And plus you have all the extensions. And VS code has and VS code has like a lot of new features. One of them another one that I really like that I find most people don't know about is you can toggle lines. So if you do option, arrow key, you can move lines up and down. And I find that really nice for prioritizing because I usually like to, you know, keep stuff in this sort of format. And this way, I can easily move stuff down when I'm done. And what's cool is it's not just a single line, you can highlight a whole block and you can move that whole block at a time. But it's just another one little known feature that I find it makes a big quality of life. Yeah.

23:48  
Let's see.

23:51  
Um, this. That's the other thing that you can do. indention is you can paste images. I find that's a question I get a lot specially with Mark And so I use a program called sketch, which lets me take a screenshot of the screen. And then if I do Command Shift C, it puts that image into my clipboard. And then inside address, you can kinda paste image command, which will take whatever is in your clipboard, put it in this path in the vault. And then now you have the picture. And I find that useful because I in Markdown paste ads at night, adding media is usually like a problem that people have.

24:32  
Yeah, obsidian handles that pretty well, much the same way. So yeah, that one I haven't had a lot of friction on.

24:41  
And

24:42  
that's really interesting.

24:45  
Yeah, the hierarchy is definitely the thing that I am working upon. And oh, one thing I haven't shown you and this is more of an advanced feature, but you can create schemas for your hierarchies and you can think of femurs is kind of being able to type check. And so I'll show you what I mean by that. So right now I'm creating a lens. And the way I go to schema is I do Command Shift L. And this shows me all the schemas that I have. So it's kind of lookup, but instead of looking for Markdown files, I'll explore YAML files. And so your schema, it is just a yamo. And it follows. And what it does, so is it says that, okay, there is a node that is named. And so Lang is the root of your hierarchy. And you can, for example, say that this has children. So for example, Python, it's Ruby. And the only thing you need to specify for the children is that they exist. And now you need to reload the index between schema changes because it hasn't picked up on Live, that's going to change later. But now, if I go into my lookup, if I type in Lang, for example, you'll notice it's actually a little book to it. And the little book over here means that hey, Lang is part of the schema. And if I go down, I can see that Oh, like there's a little book next to Python. That's part of the schema. If you look at JavaScript, because I created

26:31  
it. It's not in the schema, if you look at Java, this little question mark, because it's not in the schema. And the reason you might want to do this is for example, like as I'm building my hierarchy, oh, one thing is you don't have to like enumerate everything. So this a namespace property where you can say this is a namespace. And so now, this is essentially saying that this is going to match now Not start the globbing pattern. The scheme is just based off this simple globbing pattern

27:06  
that would pick up if it existed.

27:08  
Yeah. And so now if I go to Java, this little book to it, because that's in a sec, okay, I recognize it. Now, the interesting part here is now for my children, for example, if I say data,

27:21  
so data structures,

27:24  
and you know, and data, let's say that as their children, like, spring, I have a lot of different autocompletes. So that Well, sometimes,

27:38  
yeah, no, I know how that works. I get that a lot. Yeah.

27:43  
So let's say that I crave

27:46  
that. And so this schema of the way that the globbing patterns work is the children will inherit the parents as a prefix. So this will match Lang dot star dot data. And then string will match Lang dot star dot data watchman. But the schema is also hierarchal. And so now, if I reload my index, if I go to lang.db, dot away, for example, there's a book, because it's part of my schema. But if I look into your data, that Boolean does nothing, because it's not part of my schema. And schemas are really lightweight. It's just that yamo and we don't stop you from creating things outside of your schema, we just show you a question mark. But it's nice. For example, if you're building a programming language hierarchy, and just like sometimes use Google, sometimes use Boolean and you want to keep it consistent, you can document it in your schema. And the engine will also tell you when you're going outside of it, and in the future, we'll add options if you want you to actually enforce it. So you can say like, hey, like, actually don't have any great things that go outside of this. Okay? And that's just because like if my this is how likely entropy builds up and up looks like you name one thing for one fee and then another one for another, and then you have a million different things.

29:07  
Yep, I have, I have several backlinks that I have to go clean up because I did somebody's name or title or something differently in two different places.

29:20  
l and schema strike now. We are also this going to be more features that you can do with schemas. And right now, it does two things. One is it gives you the little book with a little question mark, if you're in a note that matches it. The other thing is you can assign templates to it. So for example, for this thing, I can say that it has a template. And what that means is when I create a note that matches the schema, automatically apply this template to it. And so the idea of this template is going to be the name of another note. And so for example, if I just do a Lang, template, M and M Then I can say this is something inflige. And it's a note template. And the reason you have this this in the future will have different types of templates, you can make templates from snippets, or other sources. And now if I reload my index, and let's create a screen for something I don't have fishing for so let's say Lang dot java data archwing. And oh, something else that schemas that you do is it autocompletes so like, even though again, string haven't been created, it shows you Hey, this matches the dang schema. According to that schema, you happen assumptions.

30:40  
Nice. So if I type in train,

30:46  
it shows you how demos will always break your hearts.

30:52  
Of course,

30:54  
that's me.

30:57  
delete this. So Command Shift D is to do Return note.

31:03  
And

31:06  
let's try this again. I might have to reload the window for it to pick it up. So, let me I just reloaded the window. I'm going to delete this and then try to create it one more time. And then hopefully, but

31:26  
Okay, I'll look into that. But so yeah, yeah, yeah. Okay.

31:37  
And there are other things, but these are essentially like the core parts of Dendron. Something else that you can do is you can take your notes, and you can publish it to GitHub. So that's a build command. Right now, because we're in an empty space, you need to run another command to add in some pals, but basically what that when you do build power On a workspace is that it can, it'll generate, it'll turn it into static files that you can publish to GitHub. And it'll have the same template as an engine website. Um, and it's also hierarchical. So you know you the same hierarchy you happen engine you can have on your website, you can choose to publish either everything in your vault, or you can choose which hierarchies you want to publish. And then the other thing is this search bar here. This is actually also path based. So the same lookup mechanism that you use insight engine, you can also use on an engine website.

32:42  
Nice. Yeah.

32:43  
Cool.

32:44  
Yep. Well, thank you. Yeah, no problem.

