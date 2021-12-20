# v-scroll-load

A scroll loading component for VueJS.

## Install

### NPM

```shell
npm install v-scroll-load
```

### CDN

```html
<script src="https://unpkg.com/v-scroll-load"></script>
```

## Usage

Put  **`<v-scroll-load/>`** below the list, and use **`loader-*`** props to define its options.

When the **v-scroll-load** reaches the bottom of the viewport, the method specified by **loader-method** is executed.

```html
<v-scroll-load :loader-method="getImageList" :loader-disable="disable">
</v-scroll-load>

<!-- Replace the default loading animation with slot -->
<v-scroll-load :loader-method="getImageList" :loader-disable="disable">
   <div>Loading...</div>
</v-scroll-load>
```

```javascript
import Vue from 'vue'
import VScrollLoad from 'v-scroll-load'

Vue.use(VScrollLoad)

new Vue({
    el: '#app',
    data() {
      return {
        disable: false,
        page: 1,
        pageSize: 30,
        images: [],
      }
    },
    methods: {
      getImageList() {
        axios.get('https://api.example.com/', {
            params: {
              page: this.page++,
              pageSize: this.pageSize,
            }
          })
          .then(res => {
               this.images = [...this.images, ...res.data]

            // Stop scroll loading...
            this.disable = res.data.length < this.pageSize
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  })
```



## Options

| Props           | Description                                                                                                                | **Required** | Type     | Default  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------- |
| loader-method   | Scrolling to the bottom to execute the method.                                                                             | true         | Function | --       |
| loader-disable  | scroll-loader will be disabled if the value of this props is true.                                                         | false        | Boolean  | false    |
| loader-distance | The minimum distance between the scroll-loader and the bottom of the viewport before the loader-method method is executed. | false        | Number   | 0        |
| loader-color    | scroll-loader the color of the animation.                                                                                  | false        | String   | \#CCCCCC |
| loader-size     | scroll-loader the size of the animation.                                                                                   | false        | Number   | 50       |
| loader-viewport | relative viewport element,default top-level document viewport.                                                             | false        | Element  | viewport |

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/AbdallaMohammed/v-scroll-loader/blob/master/LICENSE) file for details

## Acknowledgments

The default loading animation is from [CSSFX](https://github.com/jolaleye/cssfx)
