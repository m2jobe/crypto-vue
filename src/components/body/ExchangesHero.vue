<template>
  <div>
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoExchange in firstFiveCryptoCurrencies" class="column">
        <router-link :to="`/exchange/${cryptoExchange.id}`">
          <div class="card">
            <div class="card-image" :class="{'card-image-iframe': isOpenedInIFrame}">
              <figure class="image is-4by3">
                <img style="object-fit:contain; padding:20px" :src="`${cryptoExchange.image}`">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5" :class="{'title-iframe': isOpenedInIFrame}">{{ cryptoExchange.name }}</p>

            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoExchange in  secondFiveCryptoCurrencies" class="column">
        <router-link :to="`/exchange/${cryptoExchange.id}`">
          <div class="card">
            <div class="card-image" :class="{'card-image-iframe': isOpenedInIFrame}">
              <figure class="image is-4by3">
                <img style="object-fit:contain; padding:20px" :src="`${cryptoExchange.image}`">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5" :class="{'title-iframe': isOpenedInIFrame}">{{ cryptoExchange.name }}</p>

            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {},
  name: 'bodyHero',
  data () {
    return {
      exchanges: [
        { name: 'Cryptopia', description: 'none', facebook: '', disques: '', id: '0', image: 'https://www.cryptopia.co.nz/content/images/home.png' },
        { name: 'GDAX', description: 'none', facebook: '', disques: '', id: '1', image: 'https://cdn.worldvectorlogo.com/logos/gdax.svg' },
        { name: 'Bitstamp', description: 'none', facebook: '', disques: '', id: '2', image: 'http://www.xbt.money/wp-content/uploads/2017/05/bitstampnewlogo.png' },
        { name: 'Gemini', description: 'none', facebook: '', disques: '', id: '3', image: 'https://gemini.com/wp-content/themes/cedar/assets/img/Gemini-Horizontal-Dark.png' },
        { name: 'Bittrex', description: 'none', facebook: '', disques: '', id: '4', image: 'https://qph.ec.quoracdn.net/main-qimg-d58049c1ffab500582e8345b0b115d80' },
        { name: 'CEX.IO', description: 'none', facebook: '', disques: '', id: '5', image: 'http://www.icegold.com/wp-content/uploads/2017/12/cex-logo.png' },
        { name: 'Bitfinex', description: 'none', facebook: '', disques: '', id: '6', image: 'http://blog.bitfinex.com/wp-content/uploads/2016/05/bfx-stacked.png' },
        { name: 'Paxful', description: 'none', facebook: '', disques: '', id: '7', image: 'https://bestbitcoinexchange.com/wp-content/uploads/2017/07/bestbitcoinexchange-paxful-logo.png' },
        { name: 'Yobit', description: 'none', facebook: '', disques: '', id: '8', image: 'http://www.bitnet.cc/en_US/wp-content/uploads/2014/11/yobit-300x229.png' }
      ],
      isOpenedInIFrame: false
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
    }
  },
  computed: {
    firstFiveCryptoCurrencies () {
      return this.exchanges.slice(0, 5)
    },
    secondFiveCryptoCurrencies () {
      return this.exchanges.slice(5)
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
$small: 590px;
$medium: 768px;
$large: 1024px;

.card {
  background-color: initial;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 50px 5px rgba(0,0,0,.25);

  @media screen and (max-width: $medium) {
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: $small) {
    max-width: 200px;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 5px 0 #fd6721;
    transition: .5s;
  }

  .card-image {
    .image {
      top: -15px;

      img {
        @media screen and (max-width: $small) {
          height: 90%;
          width: 90%;
          margin: 0 auto;
        }
      }
    }
  }

  .card-image-iframe {
    .image {
      top: -23px;
    }
  }

  .card-content {
    padding: 0;

    .title {
      position: absolute;
      bottom: 15%;
      left: 0;
      right: 0;
    }

    .title-iframe {
      font-size: 0.9rem;
      position: absolute;
      bottom: 12%;
      left: 0;
      right: 0;
    }

    .price-title {
      font-size: 1.0rem;
      font-weight: 600;

      .positive-percent-change {
        font-size: 0.9em;
        color: #00d1b2;

        .arrow-down {
          display: none;
        }
      }

      .negative-percent-change {
        font-size: 0.9em;
        color: #ff3860;

        .arrow-up {
          display: none;
        }
      }
    }

    .price-title-iframe {
      font-size: 0.9rem;
    }
  }
}

@-webkit-keyframes spinner {
    from
    {
        -webkit-transform: rotateY(0deg);
    }
    to {
        -webkit-transform: rotateY(-360deg);
    }
}
@keyframes spinner {
    from {
        -moz-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
    to
    {
        -moz-transform: rotateY(-360deg);
        -ms-transform: rotateY(-360deg);
        transform: rotateY(-360deg);

    }
}
</style>
