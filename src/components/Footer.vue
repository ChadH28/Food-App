<template>
  <div class="mt-5 pt-5 pb-5  bg-dark footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-xs-12 about-company">
          <h5>Heading</h5>
          <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
          <p>
            <a href="#">
              <i class="fa fa-facebook-square mr-1"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin-square"></i>
            </a>
          </p>
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h5>Weekly Menu</h5>
          <ul class="m-0 p-0">
            <li>-
              <a href="#">Monday</a>
            </li>
            <li>-
              <a href="#">Tuesday</a>
            </li>
            <li>-
              <a href="#">Wednesday</a>
            </li>
            <li>-
              <a href="#">Thursday</a>
            </li>
            <li>-
              <a href="#">Friday</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h5 class="mt-lg-0 mt-sm-3">Stay Connected</h5>
          <ul class="m-0 p-0">
            <li>-
              <a href="#">Facebook</a>
            </li>
            <li>-
              <a href="#">Twitter</a>
            </li>
            <li>-
              <a href="#">WhatsApp</a>
            </li>
            <li>-
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-xs-12 location">
          <h5 class="mt-lg-0 mt-sm-4">Location</h5>
          <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
          <p>
            <i class="fa fa-phone mr-3"></i>(021) 593-2573</p>
          <p>
            <i class="fa fa-envelope-o mr-3"></i>food@gmail.com</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright">
          <p>
            <small class="text-white-100">© 2021. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="css" scoped>
.footer {
  /* background: #152f4f; */
  color: white;
}
.links ul {
  list-style-type: none;
}
.links li a {
  color: white;
  transition: color 0.2s;
  text-decoration: none;
}
.links li a:hover {
  text-decoration: none;
  color: #4180cb;
}

.about-company i {
  font-size: 25px;
}
.about-company a {
  color: white;
  transition: color 0.2s;
}
.about-company a:hover {
  color: #4180cb;
}

.location i {
  font-size: 18px;
}
.copyright p {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

