# bootstrap-carousel-single-push
This is a working example of a single-push Bootstrap slider for v3.3.4 which will most likely be useless when v4 comes out.
## Installation
Don't forget to add this conditional IE statement to the \<head\>
```
<!--[if IE]>
  <link rel="stylesheet" type="text/css" href="css/bootstrap-carousel-single-push.ie.min.css" />
<![endif]-->
```
## TODO
Allow custom column count
## Suggested Usage
Taken directly from Bootstrap's carousel documentation (http://getbootstrap.com/javascript/#carousel-examples)
```
<div id="carousel-example-generic" class="carousel slide single-push" data-ride="carousel">
  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <div class="col-xs-4">
        <img src="..." alt="...">
        <div class="carousel-caption">
          ...
        </div>
      </div>
    </div>
    <div class="item">
      <div class="col-xs-4">
        <img src="..." alt="...">
        <div class="carousel-caption">
          ...
        </div>
      </div>
    </div>
    ...
  </div>
</div>
```
