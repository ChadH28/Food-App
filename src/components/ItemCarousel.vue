<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner weeklyMenu">
          <div class="carousel-item menu-item active">
              <div class="row">
                  <h3>Monday</h3>
                  <div class="col-sm-6">
                      <img src="../assets/apple-pie.jpg" class="d-block" alt="monday">
                  </div>
                  <div class="col-sm-6">
                      <img src="../assets/burger.jpg" class="d-block" alt="monday">
                  </div>
              </div>
          </div>
          <div class="carousel-item menu-item">
              <div class="row">
                  <h3>Tuesday</h3>
                  <div class="col-sm-6"><img src="../assets/pancakes.jpg" class="d-block" alt="tuesday"></div>
                  <div class="col-sm-6"><img src="../assets/pasta.jpg" class="d-block" alt="tuesday"></div>
              </div>
          </div>
          <div class="carousel-item menu-item">
              <div class="row">
                  <h3>Wednesday</h3>
                  <div class="col-sm-6"><img src="../assets/wrap.jpg" class="d-block" alt="wednesday"></div>
                  <div class="col-sm-6"><img src="../assets/apple-pie.jpg" class="d-block" alt="wednesday"></div>
              </div>
          </div>
          <div class="carousel-item menu-item">
              <div class="row">
                  <h3>Thursday</h3>
                  <div class="col-sm-6"><img src="../assets/burger.jpg" class="d-block" alt="thursday"></div>
                  <div class="col-sm-6"><img src="../assets/pancakes.jpg" class="d-block" alt="thursday"></div>
              </div>
          </div>
          <div class="carousel-item menu-item">
              <div class="row">
                  <h3>Friday</h3>
                  <div class="col-sm-6"><img src="../assets/pasta.jpg" class="d-block" alt="friday"></div>
                  <div class="col-sm-6"><img src="../assets/wrap.jpg" class="d-block" alt="friday"></div>
              </div>
          </div>
      </div>
  </div>
</template>


<style>

.weeklyMenu {
    background-color: rgba(0, 0, 0, 0.95);
    color: white;
    padding: 12px;
}

.menu-item {
    height: auto;
}

.menu-item img {
    border-radius: 6px;
    width: 100%;
    height: 40vh;
    margin-bottom: 10px;
}



</style>
