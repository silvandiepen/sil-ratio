# Ratio

The lack of being able to set a ratio on an element, is simple fixed by this directive. Implement it and make your element any ratio you need. 

The height is set based on the widht of the image. For instance: 
- ratio is set on 16:9
- Width of element is 900px
- Height = (900 / 16) * 9 = 506.25px

### Install

Install the package
`npm install @sil/ratio`


Import the package

`import Ratio from '~/@sil/ratio`

Define the component:

```js
	Vue.directive(Ratio);
```

Use the component with default values:

```html
<any-element v-ratio="'1:1'" />	
```



### Settings

The value is always the ratio. This has to be passed as a string, thats why it needs the double quotes since Vue directives are always variables. This means you could also just throw a variable at it: `<div v-ratio="myRatio"></div>` if `let myRatio = '3:4'`. 


#### responsive

The directive also a few responsive functionalities. 

**set breakpoints:**
```
	small: 0,
	medium: 750,
	large: 1024,
	xlarge: 1440,
	xxlarge: 1920
```
To set specific breakpoints, the element will need some extra attributes. The default one will be set for all ranges. To set a specific 
ratio **from** large you can add an extra attribute like: `<video v-ratio="'1:1'" ratio-medium="16:9"></video>`. This will make the video square  on mobile screens and from portrait it will be 16:9. 