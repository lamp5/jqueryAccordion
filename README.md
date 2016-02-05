# jqueryAccordion
lightweight jQuery plugin to provide accordion effect  it is a early beta version.

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
autoOpen: true, 		// if true, first row will be open`ed
openChild: 1, 			// number of row to be open
animation: 'fast'  		//speed of animation: slow, fast, 1000, 500 ...
```

