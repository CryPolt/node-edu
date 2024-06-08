<script>
import inputform from "@/components/inputform.vue";
import selector from "@/components/Selector.vue";
import CryptoConvert from "crypto-convert";

const convert = new CryptoConvert();

export default {
  components: { inputform, selector },
  data() {
    return {
      amount: 0,
      cryptoFirst: '',
      cryptoSecond: '',
      error: '',
      result: 0
    };
  },
  
  methods: {
    changeAmount(val) {
      this.amount = val;
    },
    setCryptoFirst(val) {
      this.cryptoFirst = val;
    },
    setCryptoSecond(val) {
      this.cryptoSecond = val;
    },
    async convert() {
      if (this.amount <= 0) {
        this.error = 'Number please > 0';
        return;
      }  else if(this.cryptoFirst === '' || this.cryptoSecond === ''){
        this.error = 'Convert error: please select cryptocurrencies.';
        return;
      }else if(this.cryptoFirst === this.cryptoSecond){
        this.error = 'Convert error: please select different cryptocurrencies.';
        return;
      }
      this.error = '';

      await convert.ready();

      if (this.cryptoFirst === 'BTC' && this.cryptoSecond === 'ETH')
        this.result = convert.BTC.ETH(this.amount);
      else if(this.cryptoFirst === 'BTC' && this.cryptoSecond === 'USDT')
        this.result = convert.BTC.USDT(this.amount);
      else if(this.cryptoFirst === 'ETH' && this.cryptoSecond === 'BTC')
        this.result = convert.ETH.BTC(this.amount);
      else if(this.cryptoFirst === 'ETH' && this.cryptoSecond === 'USDT')
        this.result = convert.ETH.USDT(this.amount);
      else if(this.cryptoFirst === 'USDT' && this.cryptoSecond === 'BTC')
        this.result = convert.USDT.BTC(this.amount);
      else if(this.cryptoFirst === 'USDT' && this.cryptoSecond === 'ETH')
        this.result = convert.USDT.ETH(this.amount);
    }
  }
};
</script>

<template>
  <div>
    <h1>CRYPTO</h1>
    <div class="form-container">
      <inputform @changeAmount="changeAmount" @convert="convert" />
      <p v-if="error != '' ">{{ error }}</p>
      <p v-if="result != 0 "> {{result}}</p>
    </div>
    <div class="selectors">
      <selector @set-crypto="setCryptoFirst" />
      <selector @set-crypto="setCryptoSecond"/>
    </div>

  </div>
</template>

<style scoped>
.form-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.selectors {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: 20px auto;
}

</style>
