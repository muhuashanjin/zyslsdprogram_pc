<template>
    <div class="detail-wrapper">
        <!-- <v-layout row wrap>
            <v-flex xs10 offset-xs1> -->
                <article class="detail-content text-xs-center">
                    <header class="detail-title text-xs-center">
                        重力坝坝顶超高计算
                    </header>
                    <table class="table">
                        <tr>
                            <th>{{rowTitles[0]}}{{A3}}</th>
                            <td>
                                <input v-model.number="A3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[1]}}{{B3}}</th>
                            <td>
                                <input v-model.number="B3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[2]}}{{C3}}</th>
                            <td>
                                <input v-model.number="C3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[3]}}{{D3}}</th>
                            <td>
                                <input v-model.number="D3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[4]}}{{J3}}</th>
                            <td>
                                <input v-model.number="J3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[5]}}{{X}}</th>
                            <td>
                                <input v-model.number="X" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                    </table>
                    <button v-on:click="incrementCounter" style="width:150px;margin-top:20px;text-align:center;background-color:#1976d2;color:#fff;line-height:200%;">
                        点击生成计算结果
                    </button>
                    <table class="table" style="margin-top:20px;margin-bottom:20px;">
                        <tr>
                            <th>{{resultTitles[4]}}{{resultG3}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[0]}}{{resultF3}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[1]}}{{resultH3}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[2]}}{{resultK3}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[3]}}{{resultL3}}</th>
                        </tr>
                    </table>
                </article>
            <!-- </v-flex>
        </v-layout> -->
    </div>
</template>

<script>
let state = {
  appHeaderState: {
    show: true,
    title: "ZyslsdProgram",
    showMenu: false,
    showBack: true,
    showLogo: false,
    actions: [
      {
        icon: "home",
        route: {
          name: "index"
        }
      }
    ]
  }
};

function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", state.appHeaderState);
}

export default {
  name: "detailId",
  metaInfo() {
    return {
      title: `ZyslsdProgram`,
      titleTemplate: "%s - 遵义水利水电勘测设计研究院的计算程序",
      meta: [
        { name: "keywords", content: "Zyslsd Program" },
        { name: "description", content: "Zyslsd Program" }
      ]
    };
  },
  async asyncData({ store, route }) {
    setState(store);
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  },
  activated() {
    setState(this.$store);
  },
  data: function() {
    return {
      rowTitles: [
        "风速Vf(m/s)：",
        "吹程D(km)：",
        "洪水位(m)：",
        "建基面高程(m)：",
        "hc(m)：",
        "累计频率波高与平均波高的比值："
      ],
      resultTitles: [
        "波浪高hl(m)：",
        "浪高hz(m)：",
        "坝顶超高⊿h(m)：",
        "坝顶高程(m)：",
        "gD/v²："
      ],
      A3: "",
      B3: "",
      C3: "",
      D3: "",
      J3: "",
      X: "",

      //最终结果
      resultG3: 0,
      resultF3: 0,
      resultH3: 0,
      resultK3: 0,
      resultL3: 0
    };
  },
  methods: {
    incrementCounter: function() {
      //波高hb(m)：
      let E3 =
        0.0076 *
        Math.pow(this.A3, -1 / 12) *
        Math.pow(9.81 * this.B3 * 1000 / Math.pow(this.A3, 2), 1 / 3) *
        (Math.pow(this.A3, 2) / 9.81);
      console.log("波高hb(m)： " + E3);

      //波浪高hl(m)
      let F3 = E3 * this.X;
      console.log("波浪高hl(m)： " + F3);

      this.resultF3 = F3;

      //gD/v²
      let G3 = 9.81 * this.B3 * 1000 / Math.pow(this.A3, 2);
      console.log("gD/v²： " + G3);

      this.resultG3 = G3;

      //波长Ll(m)
      let I3 =
        0.331 *
        Math.pow(this.A3, -1 / 2.15) *
        Math.pow(9.81 * this.B3 * 1000 / Math.pow(this.A3, 2), 1 / 3.75) *
        (Math.pow(this.A3, 2) / 9.81);
      console.log("波长Ll(m)： " + I3);

      //浪高hz(m)
      let H3 =
        Math.PI *
        Math.pow(F3, 2) /
        I3 *
        ((Math.pow(2.718281828, 2 * Math.PI * (this.C3 - this.D3) / I3) +
          Math.pow(2.718281828, -2 * Math.PI * (this.C3 - this.D3) / I3)) /
          (Math.pow(2.718281828, 2 * Math.PI * (this.C3 - this.D3) / I3) -
            Math.pow(2.718281828, -2 * Math.PI * (this.C3 - this.D3) / I3)));
      console.log("浪高hz(m)： " + H3);

      this.resultH3 = H3;

      //坝顶超高⊿h(m)
      let K3 = F3 + H3 + this.J3;
      console.log("坝顶超高⊿h(m)： " + K3);

      this.resultK3 = K3;

      //坝顶高程(m)
      let L3 = K3 + this.C3;
      console.log("坝顶超高⊿h(m)： " + L3);

      this.resultL3 = L3;
    }
  }
};
</script>

<style scoped>
.detail-content {
  font-size: 16px;
  line-height: 30px;
  margin-top: 30px;
}

.detail-title {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
}

table {
  border: 2px solid #1976d2;
  border-radius: 3px;
  background-color: #fff;
  padding: 30px;
}

th {
  border: 2px solid white;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  border: 2px solid #1976d2;
  background-color: #f9f9f9;
}

th,
td {
  min-width: 80px;
  padding: 10px;
}
</style>