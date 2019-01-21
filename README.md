# A responsive CV template

## install
Clone or download the project

```
git clone https://github.com/mpascucci/csscv.git my-cv
```

Go to the new folder with you file explorer and open `index.html` in your favorite browser

Otherwise you can just fork the project to your github and enable git pages from the repository settings, chosing to use the `master` branch.

## Customize the content
The content is all in the `data.js` file. It is organized as a json object.
Please note that ***the order you enter your data will be respected***.

## Customize the style
you can customize the style of the page by editing the `style.css` file.

## advanced
all elements of the data object in `data.js` can be used in the html files with a special syntax.
in order to use a particular value defined in the data object you just need to create an html tag with an id referring to the object.

For example if you want to put the value of data.personal.name in a `<p>` tag, all you have to do is create this tag in your `index.html`:
```
<p id="personal-name"></p>
```
if the id is exactly this one, the tag content will be filled automatically with the value of data.personal.main

You can create and use your own parameters and value in the data object.

### special lists
`data.educationList`, `data.experienceList` and `data.Miscellaneous` are special lists used to populate the main part of the CV.
the values `where` and `date` are always put on the left column, other parameters (even new custom ones) will appear in the right column.
