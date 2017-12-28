<template>
    <div class="columns selected-section" :class="{'no-padding': isOpenedInIFrame}">
      <router-link to="/exchanges" class="nav-item">
        <div class="return-action" :class="{'return-action-iframe': isOpenedInIFrame}">
          <icon name="chevron-left" class="arrow-left" :class="{'arrow-left-iframe': isOpenedInIFrame}" height="22" width="22"></icon>
          <p class="return-text" :class="{'hide': isOpenedInIFrame}">Return</p>
        </div>
      </router-link>
      <div class="column  image-section">
        <img :src="`${selectedCryptoCurrency.image}`" class="cryptoCurrency-image" :class="{'cryptoCurrency-image-iframe': isOpenedInIFrame}"/>
        <h1 class="cryptoCurrency-title" :class="{'cryptoCurrency-title-iframe': isOpenedInIFrame}">{{ selectedCryptoCurrency.name }}</h1>
        <p class="cryptoCurrency-description" :class="{'cryptoCurrency-description-iframe': isOpenedInIFrame}">{{ selectedCryptoCurrency.description }}</p>
        <div class="icons-section">
          <span v-if="selectedCryptoCurrency.website" class="icon">
            <a :href="selectedCryptoCurrency.website" target="_blank"><icon name="link" scale="1.5"></icon></a>
          </span>
          <span v-if="selectedCryptoCurrency.facebook" class="icon">
            <a :href="selectedCryptoCurrency.facebook" target="_blank"><icon name="facebook" scale="1.5"></icon></a>
          </span>
        </div>
      </div>
      <div class="column " style="padding-right:6vw" :class="{'information-section-iframe': isOpenedInIFrame}">
        <p class="price-tag price-select-tag" style="font-size:2em; margin-bottom:2vh">Trusted Exchange Review of {{selectedCryptoCurrency.name}}</p>
        <vue-disqus  shortname="cryptoaffiliate" :identifier="`id-${selectedCryptoCurrency.id}`"   v-bind:url="'http://localhost:8080/exchange'+selectedCryptoCurrency.id" ></vue-disqus>
      </div>
    </div>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus.vue'

// const fiatCurrencies = [ 'AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'USD', 'KRW', 'MXN', 'RUB' ]
// const cryptoCurrencyData = require('../../cryptocurrency-data.json')

export default {
  name: 'selectedHero',
  data () {
    return {
      exchanges: [
        { name: 'Cryptopia', description: 'The Cryptopia exchange is a powerful currency trading platform. Deposit, trade, and withdraw Bitcoin, Litecoin, and over 400 other crypto currencies. Convert New Zealand dollars to crypto by despositing to NZDt, and trading it for the coins of your choice.', facebook: 'https://www.facebook.com/cryptopiaexchange/', disques: '', website: 'https://www.cryptopia.co.nz/', id: '0', image: 'https://www.cryptopia.co.nz/content/images/home.png' },
        { name: 'GDAX', description: 'The Most Trusted Digital Asset Exchange GDAX offers institutions and professionals the ability to trade a variety of digital currencies like Bitcoin, Ethereum, and more on a regulated U.S. based exchange.', facebook: 'https://www.facebook.com/GDAX.Exchange/', disques: '', website: 'https://www.gdax.com/', id: '1', image: 'https://cdn.worldvectorlogo.com/logos/gdax.svg' },
        { name: 'Bitstamp', description: 'SETTING STANDARDS Compliant with leading examples of best practice. NO HIDDEN FEES Transparent volume-based pricing with no hidden fees. INSTANT TRADING Trade Instantly - all major credit cards are supported. SECURE AND TRANSPARENT 98% of digital funds stored offline. Subject to yearly audit by one of the Big Four.', facebook: 'https://www.facebook.com/Bitstamp/', disques: '', website: 'https://www.bitstamp.net/', id: '2', image: 'http://www.xbt.money/wp-content/uploads/2017/05/bitstampnewlogo.png' },
        { name: 'Gemini', description: 'Security. Liquidity. Trust. The next generation digital asset platform built for businesses and investors. Buy, sell, and store both bitcoin and ether with superior trading features, security, and regulatory oversight.', facebook: 'https://www.facebook.com/gemini/', disques: '', website: 'https://gemini.com/', id: '3', image: 'https://gemini.com/wp-content/themes/cedar/assets/img/Gemini-Horizontal-Dark.png' },
        { name: 'Bittrex', description: 'We provide individuals and businesses a world class experience to buy and sell cutting-edge cryptocurrencies and digital tokens. Based and fully regulated in the USA, Bittrex is the go-to spot for traders who demand lightning fast trade execution, stable wallets, and industry-best security practices. Whether you are new to trading and cryptocurrencies, or a veteran to both, Bittrex.com was created for you!', facebook: 'https://www.facebook.com/bittrex/', disques: '', website: 'https://bittrex.com/', id: '4', image: 'https://qph.ec.quoracdn.net/main-qimg-d58049c1ffab500582e8345b0b115d80' },
        { name: 'CEX.IO', description: 'Among the numerous websites providing Bitcoin exchange services, the positive reputation of CEX.IO makes it worth the trust of the users all over the world. With the customer base of over 1,000,000, the platform can be recognized as the one that can be relied on. Starting your Bitcoin trading on a platform with substantial history, you will benefit from a deep understanding of the market and customers’ needs.', facebook: 'https://www.facebook.com/CEX.IO/', disques: '', website: 'https://cex.io/', id: '5', image: 'http://www.icegold.com/wp-content/uploads/2017/12/cex-logo.png' },
        { name: 'Bitfinex', description: 'Bitfinex is a full-featured spot trading platform for the major cryptocurrencies such as Bitcoin, Bitcoin Cash, Ripple, Ethereum, Iota, Litecoin, EOS, Ethereum Classic, Dash, NEO, Monero, OmiseGO, Zcash, Santiment, BTG, Qtum, ETP, Streamr, Eidoo, QASH, YOYOW, Aventus, Status, and Golem. The platform offers leveraged margin trading through our peer-to-peer funding market.', facebook: 'https://www.facebook.com/bitfinex1/', disques: '', website: 'https://www.bitfinex.com/', id: '6', image: 'http://blog.bitfinex.com/wp-content/uploads/2016/05/bfx-stacked.png' },
        { name: 'Paxful', description: 'On Paxful you buy bitcoin from other people in real-time. Trading happens online via live chat. SELL BITCOIN Paxful Vendors can earn six figures from the comfort of their home and many do. TRADE WITH SECURE ESCROW Once payment is made and verified by the seller, the bitcoin will be released to your wallet. BUILD YOUR REPUTATION We have built a feedback and reputation system on the advice of the very best traders in the space. GET A FREE WALLET Use the simplest bitcoin wallet on earth. You cannot make a mistake and know exactly where to go next. EARN PASSIVE INCOME Our Affiliate program helps you earn bitcoin by driving traffic to your afffiliate link.', facebook: 'https://www.facebook.com/paxful/', disques: '', website: 'https://paxful.com/', id: '7', image: 'https://bestbitcoinexchange.com/wp-content/uploads/2017/07/bestbitcoinexchange-paxful-logo.png' },
        { name: 'Yobit', description: 'Yobit.net is a cryptocurrency exchange platform that unites major market players. Yobit.net always supports cooperation with the most popular world cryptocurrencies and provides the possibility to gain profit at electronic money exchange transactions.', facebook: 'https://www.facebook.com/yobit-184032934952821/', disques: '', website: 'https://yobit.net/', id: '8', image: 'http://www.bitnet.cc/en_US/wp-content/uploads/2014/11/yobit-300x229.png' }
      ],
      selectedCryptoCurrency: {},
      dropDownOpen: false,
      isOpenedInIFrame: false
    }
  },
  created () {
    this.selectCryptoCurrency()

    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
    }
  },
  components: {
    VueDisqus
  },
  watch: {
    $route () {
      this.selectCryptoCurrency()
    }
  },
  computed: {

  },
  methods: {
    toggleDropDown () {
      this.dropDownOpen = !this.dropDownOpen
    },
    selectCryptoCurrency () {
      console.log(this.$route.params.id)
      this.selectedCryptoCurrency = this.exchanges[this.$route.params.id]
      console.log(this.selectedCryptoCurrency)
    }
  }
}
</script>

<style scoped lang="scss">
$small: 590px;
$medium: 768px;
$large: 1024px;


.selected-section {
  position: relative;
  align-items: center;

  @media screen and (max-width: $medium) {
    padding-top: 30px;
  }

  .return-action {
    position: absolute;
    left: 30px;
    color: #FFF;
    cursor: pointer;
    z-index: 10;

    .arrow-left {
      padding-right: 5px;
    }

    .arrow-left-iframe {
      color: #fd6721;
    }

    .return-text {
      font-size: 11px;

      @media screen and (max-width: $medium) {
        display: none;
      }
    }
  }

  .return-action-iframe {
    top: -10px;
  }

  .image-section {
    position: relative;

    .cryptoCurrency-image {
      height: 200px;

      -webkit-animation-name: spinner;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-duration: 60s;
      animation-name: spinner;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-duration: 60s;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .cryptoCurrency-image-iframe {
      height: 80px;
    }

    .cryptoCurrency-title {
      font-size: 20px;
      font-weight: 600;
    }

    .cryptoCurrency-title-iframe {
      font-size: 16px;
    }

    .tag-iframe {
      font-size: 0.63rem;
    }

    .cryptoCurrency-description {
      font-size: 14px;
      line-height: 1.65;
      max-width: 450px;
      display: block;
      margin: 0 auto;
      padding: 20px 0 30px;

      @media screen and (max-width: $medium) {
        font-size: 12px;
        max-width: 300px;
      }
    }

    .cryptoCurrency-description-iframe {
      font-size: 11px;
      padding-top: 10px;
      padding-bottom: 15px;
      line-height: 1.5;
      max-width: 425px;
    }

    .icons-section {
      height: 0px;

      .icon {
        margin: 0px 30px;
        -o-transition: .5s;
        -ms-transition: .5s;
        -moz-transition: .5s;
        -webkit-transition: .5s;
        transition: .5s;

        &:hover {
          color: #fd6721;
        }
      }
    }
  }

  .information-section {
    position: relative;
    padding-top: 25px;

    .dropdown-section {
      position: absolute;
      right: 50px;

      @media screen and (max-width: $medium) {
        right: 20px;
      }

      .control {
        text-align: center;

        .button {
          font-size: 11px;
          width: 50px;
          color: #1e1335;
          position: relative;

          &:focus {
            border-color: #FFF;
          }

          .arrow-icon {
            position: absolute;
            right: 2px;
            bottom: 1px;
            color: #fd6721;
          }
        }

        .box {
          padding: 7px;
          background-color: transparent;
        }

        .dropdown {
          width: 50px;
          box-shadow: 0 0 3px 0 #fd6721;
          display: none;
          left: 0;
          position: absolute;
          top: 100%;
          z-index: 1000;
          height: 150px;
          overflow-y: scroll;
          background-color: #FFF;

          ul {
          }

          &.is-open {
            display: block;
          }

          .nav-item {
            font-size: 11px;
            color: #1e1335;
            -o-transition: .5s;
            -ms-transition: .5s;
            -moz-transition: .5s;
            -webkit-transition: .5s;
            transition: .5s;

            &:hover {
              color: #fd6721;
            }
          }
        }
      }
    }

    .price-section {
      text-align: left;
      padding: 20px 0;

      @media screen and (max-width: $medium) {
        text-align: center;
      }

      .price-tag {
      }

      .price-select-tag {
        display: inline-block;
      }

      .control {
        display: inline-block;
        float: right;
        margin-right: 30px;
        font-size: 0.80rem;
        .select {
          select {
            padding-right: 1.2em;
          }
          &:after {
            right: 0.55em;
            border: 1px solid #fd6721;
            border-top: 0;
            border-right: 0;
          }
        }

        @media screen and (max-width: $medium) {
          display: block;
          text-align: center;
          float: none;
          margin-right: 0px;
        }
      }

      .price-amount {
        font-size: 40px;

        .positive-percent-change {
          color: #00d1b2;
        }

        .negative-percent-change {
          color: #ff3860;
        }

        .percent-tooltip {
          color: #FFF;
          text-align: center;
          font-size: 10px;
          font-weight: 500;
          cursor: initial;
        }

        @media screen and (max-width: $medium) {
          font-size: 30px;
        }
      }

      .market-cap-price-amount {
        display: inline-block;
      }

      .doughnut-chart {
        display: block;
        text-align: center;
        font-weight: 500;
        width: 50px;
        margin: 0 auto;
      }

      .price-amount-iframe {
        font-size: 20px;
        font-weight: 600;
      }
    }

    .price-select-section {
      @media screen and (min-width: $medium) {
      }
    }

    .price-section-iframe {
      padding: 10px 0;
    }
  }

  .information-section-iframe {
  }
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  &:hover .tooltiptext {
    visibility: visible;
  }

  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #383838;
    font-size: 11px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
  }
}

.doughnut-tooltip {
  .tooltiptext {
    top: 110%;
  }
}

.hide {
  display: none !important;
}

.show {
  display: block !important;
}

.no-padding {
  padding: 0px;
}

.transparent {
  background-color: transparent !important;
}

.font-white {
  color: #FFF !important;
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

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #FFF;
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
</style>
