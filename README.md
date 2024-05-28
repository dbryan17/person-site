page layout:

two types:

all titles are has-text-success

hero (large text optional subtitle):

- defaults to 3 rem padding on top and bottom of heading

smaller title:

- use "title" class and is-size-4
  : defaults to 0 rem padding top, so need outer container with class "pageContNonHero", has 2 rem padding bottom

page-chunk is area of page they have padding bottom of 1.5 rem
each page chunk is an area of text or picutures, if it has a line under it (<hr>) it should have inner-page-chunk with has padding-bottom 1 rem, then hr has 2 rem margin on either side

HENRY INSTRUCTIONS:

- /app/data/blogs/henryBlogs.js
- const [next number] = {
  title:
  author:
  date:
  content: `[content here]`
  };
- NOTE: for every new line EXCEPT THE LAST add %%n
  ex.
  content:
  `One paragraph.%%n
Another pagragraph here. %%n
The last paragraph.`
- then, notice the const blogs = { 0: zero, 1: one };
  - say you add blog two. add it to this. so if you just defined const two = {...}, it will now be blogs = {0: zero, 1: one, 2: two}
