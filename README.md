## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
   ## head with title of page, body header (h1) , main with <section> and <p> and <div>
1. **For each HTML element ask: Why do I need this?**

## title, to let people who come to my site know what it's about, the header will also tell people what type of content they will get on my site. we will need sections to hold any paragraphs to give more information as well as any bottons. we can also put any images or links in this section.

1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**

## we will use the header tag. the paragraph tag will be used to write more info.we will need to make a class and an id for the buttons that will all be inside of the div tag.

1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
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
