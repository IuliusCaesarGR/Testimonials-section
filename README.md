# Frontend Mentor - Testimonials grid section

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).

## Build with
 - HTML and CSS.
    - CSS Grid and Flexbox.
    - Media queries (responsive design).
 - Preprocessor(SASS).
 - Mobile-first workflow.
 - Javascript:
    - Web components
 - Command with NPM(for transform Sass a CSS).

### Web Component
In this challenge, I created a component web(called **testimonial-card**) to use a custom HTML tag in the layout.

#### **How to use the web component?**
This web component is used to create every testimonial section in the HTML file, and it gets:
  - **attributes**
    - ```image="url"```
    - ```name="user-name"```

   - *Two paragraphs with **slot** attribute for  user opinion*
     Example:
     - Principal
     ```
        <p slot="principal"></p>
     ```
     - Secondary
     ```
        <p slot="secundary"></p>
     ```

### Example of Web component in HTML file.

```
    <testimonial-card image="/URL" name="username">
        <p slot="principal">user_text_focus</p>
        <p slot="secondary">user_text_review</p>
    </testimonial-card>
```

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.

### Links
- Solution URL: [Github](https://github.com/IuliusCaesarGR/Testimonials-section)
- Live Site URL: [Github pages](https://iuliuscaesargr.github.io/Testimonials-section/)

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->
- Frontend Mentor - [@IuliusCaesarGR](https://www.frontendmentor.io/profile/IuliusCaesarGR)
- Twitter - [@IuliusCeasar](https://twitter.com/IuliusCeasar)