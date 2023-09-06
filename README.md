# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

#### Desktop View
![](./images/finaldesktopsample.png)

### Links

- [Github repo](https://github.com/cmdarcy/9-4-IntroCompwSignup)
- [Live site](https://cmdarcy.github.io/9-4-IntroCompwSignup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript


### What I learned

- Utilizing `position: absolute` on an element within a `position: relative` container can help line up icons or pictures in relation to their container regardless of size
- Abstracting functions in JS can help to reduce amount of copy-pasting
- Utilizing the built-in methods such as `document.querySelector`, `document.getElementByID`, `element.classList.remove` or the `element.parentElement`, `element.innerText` properties help to manipulate the dom elements dynamically through js

### Continued development

#### Concepts I Encountered that I would like to explore further...

- Position absolute vs/with position relative
- Pseudo-elements (`::before`, `::after` )
- Dom-manipulation through JS

### Useful resources

- [Regexr](https://regexr.com/) - This helped me create regex to use for form validations.
- [CSS Cheat Sheet](https://htmlcheatsheet.com/css/) - Great website for all things css, also has a html and js cheatsheet too.


## Author

- Website - [Christopher d'Arcy](https://cmdarcy.github.io/portfolio_website/)
- Frontend Mentor - [@cmdarcy](https://www.frontendmentor.io/profile/cmdarcy)
