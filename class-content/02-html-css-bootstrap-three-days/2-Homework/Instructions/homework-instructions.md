# Week 2 Assignment

### Overview
In this assignment, you'll be making two different portfolios. The first is an update of the one you made in the last class--you'll enhance with a mobile-responsive layout. Then you'll make a second portfolio, this time with Bootstrap.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Before You Begin

* You've learned a ton of material in these past two weeks: HTML/CSS, GitHub, Heroku and Bootstrap. If you feel like you're falling behind, there's no need to panic. You'll have 22 weeks to digest this material and master at it. 

* We're diving into JavaScript next week, and the HTML/CSS will start getting less focus. Still, you'll find that a basic understanding of HTML/CSS will help you understand basic JavaScript operations.


### Instructions
1. Create a new GitHub repository and name it `Portfolio`.

2. Clone this repository onto your computer.

3. `cd` your way into your cloned copy of the repository, then create the folders `assignment1` and `assignment2`.

4. Copy the contents of `Basic-Portfolio` (your first homework solution) and paste the mentioned files into `assignment1`.
  * Note: Be sure not to include any dot files (e.g .git, .gitignore for example) from the `Basic-Portfolio` repo.
  * If you chose the `Skeleton` exercise for your first homework assignment, contact a TA, who will provide you with a template for your portfolio.


### Assignment One Instructions - (No Bootstrap)
1. Inside your `assignment1` folder, find your `style.css` file, it may be in `assets/css`. At the bottom of `styles.css` you will write your media queries.
  * Use three `@media screen` tags, each with one of these `max-width`s: `980px`, `768px` and `640px`.
    * You use `980px` because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before your content gets cut off.
    * `768px` is about the width of a tablet and `640px` is about the width of a phone in landscape

2. Make the layout match the following screenshots:
  * `index.html`: [980px](Images/980-index.jpg), [768px](Images/768-index.jpg), [640px](Images/640-index.jpg)
  * `portfolio.html`: [980px](Images/980-portfolio.jpg), [768px](Images/768-portfolio.jpg), [640px](Images/640-portfolio.jpg)
  * `contact.html`: [980px](Images/980-contact.jpg), [768px](Images/768-contact.jpg), [640px](Images/640-contact.jpg)

3. Make the position of the header `static` (the default positioning) when the screen is `640px` wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site.

4. Be sure to include the `viewport` tag in all your html files, otherwise your media-queries won't function like you'd expect on mobile devices.

5. **Protip**: Use the Chrome extensions [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) and [Browser Width](https://chrome.google.com/webstore/detail/browser-width/mlnegepkjlccabakompdmbcmdieaideh) to see the browser dimensions in Chrome.*

### Assignment Two Instructions (Bootstrap)
For this assignment, we're giving you two options. The first is recommended but the latter may be more exciting for those of you looking to implement a cool theme you find online.

1. Inside your `assignment2` folder, create `style.css`, `index.html`, `portfolio.html`, and `contact.html`.

2. Using Boostrap compononents and css, recreate your first homework assignment.

- OR

1. Find a Bootstrap theme that you like (or make your own!). There are plenty of free options available, or you can pay for one if you choose. Here are a few site where you can find themes.
  * [Wrap Bootstrap](https://wrapbootstrap.com/themes/portfolios)
  * [Boots Watch](https://bootswatch.com/)
  * [Start Bootstrap](http://startbootstrap.com/template-categories/portfolios/)
  * [Theme Forest](http://themeforest.net/tags/bootstrap)
  * [Bootstrap Skins](https://www.bootstrapskins.com/)
  * [Blacktie](http://blacktie.co/tag/portfolio/)

2. Install the Bootstrap theme and add your portfolio content.
  * Be sure to leave space for your future projects. 


After compleing either option follow the following steps to deploy to heroku:

3. Create the `index.php` and `composer.json` inside `assignment2`
  * Make sure you have `<?php include_once("yourFileNameHere"); ?>` and `{}` for those files.

4. Deploy your new Bootstrap-powered portfolio to Heroku. Remember:
  * `heroku login`
  * `heroku create`
  * `git push heroku master`

### Submitting Your Work on [BootcampSpot.com](http://bootcampspot.com/)

1. Submit the GitHub link to your portfolio repositories on GitHub.

2. Submit the link to your Heroku site in the same input field.


### BONUS
* Incorporate CSS animations in your portfolio. [More info here](http://www.w3schools.com/css/css3_animations.asp).

-------
### One More Thing
If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.

**Good Luck!**

## Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
