<template>
  <section>
    <div class="main-img">
      <h1>Meet&Eat</h1>
      <img src="../img/hero.jpg" />
      <div class="container">
        <input type="text" placeholder="Search..." />
        <div class="search"></div>
        <router-link to="/meal">Search</router-link>
      </div>
    </div>
    <div class="third-main">
      <h1>third section</h1>
    </div>
    <div class="section-testimonials">
      <!-- <img src="../img/back-customers-min.jpg" /> -->
      <h2>Our customers can't live without us</h2>

      <div class="row">
        <div class="col span-1-of-3">
          <blockquote>
            Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
            <cite>
              <img src="../img/customer-1.jpg" alt="Customer 1 photo" />Alberto Duncan
            </cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
            <cite>
              <img src="../img/customer-2.jpg" alt="Customer 2 photo" />Joana Silva
            </cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
            <cite>
              <img src="../img/customer-3.jpg" alt="Customer 3 photo" />Milton Chapman
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
    
    
  </section>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>


<style scoped>
.main-img img {
  filter: brightness(50%);
  width: 100%;
  height: 100%;
}

.main-img h1 {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: whitesmoke;
  font-size: 5rem;
}

.section-testimonials {
  padding: 40px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../img/back-customers-min.jpg);
  background-size: cover;
  color: rgb(255, 255, 255);
  background-attachment: fixed;
  font-size: 20px;
}
.section-testimonials h2{
  text-transform: uppercase;
      font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px
}

.row {
  /* font-family: "Lato", "Arial", sans-serif; */
  display: flex;

  font-weight: 300;
}

blockquote {
  padding: 2%;
  font-style: italic;
  line-height: 145%;
  position: relative;
  margin-top: 40px;
}

blockquote:before {
  content: "\201C";
  font-size: 500%;
  display: block;
  position: absolute;
  top: -5px;
  left: -5px;
}

cite {
  font-size: 90%;
  margin-top: 25px;
  display: block;
}

cite img {
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}
</style>