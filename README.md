# jqueryAccordion
lightweight jQuery plugin to provide accordion effect.

# Html structure

```html
<div class="your-content">
	<div class="your-row">
		<div class="head">
		Accordion title
		</div>
		<div class="body">
		Accordion body
		</div>
	</div>
	<div class="your-row">
		<div class="head">
		Accordion title
		</div>
		<div class="body">
		Accordion body
		</div>
	</div>
</div>
```

# Initial

```js
$('.your-content').jqueryAccordion();
```

# Options

```js
animation: 'fast'  		//speed of animation: slow, fast, 1000, 500 ...
autoOpen: true, 		//if true, first row will be open
clickOpen: true,		//open on click event, recomended to use clickOpen or hoverOpen, not both
hoverOpen: false,		//open on hover event, recomended to use clickOpen or hoverOpen, not both
onlyOneOpen: true,		//when you open row, all open rows will be closed	
openChild: 1, 			//number of row to be open
openLast: false,		//open last row
mediaQuery: 1024        // !beta! if window width is less than 1024px, accordion effect will be applied, use 0 to always apply - not add autoupdate function on window resize
```

# Destroy

```js
$('.your-content').jqueryAccordion('destroy');
```

# Roadmap

```
*learn jQuery
*optimalize code
*bugs fix
```