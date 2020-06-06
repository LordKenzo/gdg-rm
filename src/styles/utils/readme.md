# Ispirazione
https://www.toptal.com/sass/theming-scss-tutorial
https://zellwk.com/blog/organizing-multiple-theme-styles-with-sass/

```scss
@mixin themable($theme-name, $theme-map) {
  .#{$theme-name} {
      .container {
          .left, .right {
              font-size: 2rem;
          }
      }

      .container .right {
          position: relative
      }

      .button {
          border: 0;
          border-radius: 10px;
          bottom: 10px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          padding: 1em 2em;
          position: absolute;
          right: 10px;
      }

      // Loop through each of the keys (sections)
      @each $section, $map in $theme-map {
          @if ($section == container) {
              .container {
                  background-color: map-get($map, bg);
                  border: 1px solid map-get($map, border-color);
                  display: flex;
                  height: 500px;
                  justify-content: space-between;
                  margin: 0 auto;
                  padding: 1em;
                  width: 50%;
              }
          } @else {
              .#{$section} {
                  background-color: map-get($map, bg);
                  color: map-get($map, color);

                  @if ($section != button) {
                    height: map-get($map, height);
                    width: map-get($map, width);
                  } @else {
                    &:hover {
                      background-color: lighten(map-get($map, bg), 20%);
                    }
                  }
              }
          }
      }
  }
 }

$theme-1: (
  container: (
      bg: #e4ada7,
      color: #000,
      border-color: #000
  ),
  left: (
      bg: #d88880,
      color: #fff,
      height: 100%,
      width: 69%
  ),
  right: (
      bg: #cc6359,
      color: #fff,
      height: 100%,
      width: 29%
  ),
  button: (
      bg: #481b16,
      color: #fff
  )
);

$theme-2: (
  container: (
      bg: #e4ada9,
      color: #000,
      border-color: #000
  ),
  left: (
      bg: #d88880,
      color: #fff,
      height: 100%,
      width: 69%
  ),
  right: (
      bg: #cc6359,
      color: #fff,
      height: 100%,
      width: 29%
  ),
  button: (
      bg: #481b16,
      color: #fff
  )
);
 
@include themable(theme-1, $theme-1);
@include themable(theme-2, $theme-2);
```

 /*

 .theme-1 .container .left, .theme-1 .container .right {
  font-size: 2rem;
}
.theme-1 .container .right {
  position: relative;
}
.theme-1 .button {
  border: 0;
  border-radius: 10px;
  bottom: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 1em 2em;
  position: absolute;
  right: 10px;
}
.theme-1 .container {
  background-color: #e4ada7;
  border: 1px solid #000;
  display: flex;
  height: 500px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1em;
  width: 50%;
}
.theme-1 .left {
  background-color: #d88880;
  color: #fff;
  height: 100%;
  width: 69%;
}
.theme-1 .right {
  background-color: #cc6359;
  color: #fff;
  height: 100%;
  width: 29%;
}
.theme-1 .button {
  background-color: #481b16;
  color: #fff;
}

.theme-2 .container .left, .theme-2 .container .right {
  font-size: 2rem;
}
.theme-2 .container .right {
  position: relative;
}
.theme-2 .button {
  border: 0;
  border-radius: 10px;
  bottom: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 1em 2em;
  position: absolute;
  right: 10px;
}
.theme-2 .container {
  background-color: #e4ada9;
  border: 1px solid #000;
  display: flex;
  height: 500px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1em;
  width: 50%;
}
.theme-2 .left {
  background-color: #d88880;
  color: #fff;
  height: 100%;
  width: 69%;
}
.theme-2 .right {
  background-color: #cc6359;
  color: #fff;
  height: 100%;
  width: 29%;
}
.theme-2 .button {
  background-color: #481b16;
  color: #fff;
}

*/