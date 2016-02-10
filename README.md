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
autoOpen: true, 		//if true, first row will be open
openChild: 1, 			//number of row to be open
animation: 'fast'  		//speed of animation: slow, fast, 1000, 500 ...
clickOpen: true,		//open on click event, recomended to use clickOpen or hoverOpen, not both
hoverOpen: false,		//open on hover event, recomended to use clickOpen or hoverOpen, not both
openLast: false,		//open last row
```

# Destroy

```js
$('.your-content').jqueryAccordion('destroy');
```