<template>
    <div class="home">
        <Carousel/>
        <header class="text-center">
            <div class="card-body ">
                <h1 class="card-title Header">FLAVOURS TO SUIT OH SO MANY PALATES</h1>
                <h4 class="card-text">Your home for quality frozen meals delivered in Cape Town</h4>
            </div>
        </header>
        <itemCarousel/>
        <deliveryMethod/>
        <div class="container">
            <div class="row review">
                <div class="col-sm"><h4>Happy with your experience?</h4></div>
                <div class="col-sm d-grid gap-2"><button type="button" class="btn btn-dark">Rate us on google</button> </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import itemCarousel from "@/components/ItemCarousel.vue";
import deliveryMethod from "@/components/DeliveryMethod.vue";

export default {
    name: 'Home',
    components: {
        Carousel,
        itemCarousel,
        deliveryMethod
    }
}
</script>


<style>

.review{
    padding: 5px;
    margin-top: 15px
}

</style>
