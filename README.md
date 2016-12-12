Diaeresis.js
============

### A lightweight JavaScript library that lets you wield diæreses like ~~Chuck~~ Mary Norris.

## [&rarr; Check out the Demo &larr;](https://curiositry.github.io/diaeresis)

### Usage:

All you need to do is include the script in your page and initialize it (in this example, using the RawGit CDN so you don’t even have to download it):

```language-html
<script src="https://cdn.rawgit.com/curiositry/diaeresis/master/diaeresis.min.js"></script>

<script>
  var d = new Diaeresis();
</script>
```

By default, it will run on the contents of `#diaeresis`, and use the small built-in dictionary. But you can change all that when you initialize it:

```language-javascript
var d = new Diaeresis({
  selector: "myCustomId",
  dictionary: {
    "bronte": "brontë",
    "find": "replace"
  }
});
```

In the above example, diaeresis will run on the element with the ID #myCustomId, which is handy if you don't want to change your markup to include the Diaeresis ID. And in the above example, we define additional dictionary entries. The dictionary object you give Diaeresis when you initialize it gets merged into the default dictionary, but it takes priority. So you can add new items, or overwrite existing items. (For example: if you think that reëlect should be spelled with a hyphen, you could add a rule like this: `"reelect": "re-elect"`, which would override the default rule that changes reelect to reëlect.)

You’ll probably want to run Diaeresis asynchronously, like this:

```
<script src="diaeresis.min.js" defer></script>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    var d = newDiaeresis();
  }
</script>
```
