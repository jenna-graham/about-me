## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wire frames"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
   ## head, title ; body; header; main; section p and div section for favorite animal img id and class for the hidden part, a button
1. **For each HTML element ask: Why do I need this?**
## title, to let people who come to my site know what it's about, the header will also tell people what type of content they will get on my site. we will need sections to hold any paragraphs to give more information as well as any images or links. and a button to make it interactive.
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
## head add metadata and title 
## body  add header and h1  to add the Header
## main add section add another h1, add my-info in p add a second section. add div to hold image, add src to image. create a button with an id of "animal-button" add text to button for users to push. 

1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
## load site, image of me is shown, hover over img for more info about me. animal image is hidden; click button; img appears
1. **Think about how to validate each of your features according to a Definition of Done**
## every object in html is accessible to CSS and JS for styling and events 
## if i add a class in html, i can style that class or carry out an action with that class. 
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
