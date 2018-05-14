<template>
    <div class="detail-wrapper">
        <!-- <v-layout row wrap>
            <v-flex xs10 offset-xs1> -->
                <header class="detail-title text-xs-center">
                    土石坝坝顶高程计算
                </header>
                <article class="detail-content text-xs-center">
                    <header class="detail-title text-xs-center">
                        1、波浪计算　
                    </header>
                    <table class="table">
                        <tr>
                            <th>{{row1Titles[0]}}{{B6}}</th>
                            <td>
                                <input v-model.number="B6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row1Titles[1]}}{{C6}}</th>
                            <td>
                                <input v-model.number="C6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row1Titles[2]}}{{D6}}</th>
                            <td>
                                <input v-model.number="D6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row1Titles[3]}}{{E6}}</th>
                            <td>
                                <input v-model.number="E6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row1Titles[4]}}{{F6}}</th>
                            <td>
                                <input v-model.number="F6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row1Titles[5]}}{{L6}}</th>
                            <td>
                                <input v-model.number="L6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                    </table>
                    <button v-on:click="incrementCounter" style="width:150px;margin-top:20px;text-align:center;background-color:#1976d2;color:#fff;line-height:200%;">
                        点击生成计算结果
                    </button>
                    <table class="table" style="margin-top:20px;margin-bottom:20px;">
                        <tr>
                            <th>{{result1Titles[0]}}{{resultG6}}</th>
                        </tr>
                        <tr>
                            <th>{{result1Titles[1]}}{{resultH6}}</th>
                        </tr>
                        <tr>
                            <th>{{result1Titles[2]}}{{resultI6}}</th>
                        </tr>
                        <tr>
                            <th>{{result1Titles[3]}}{{resultJ6}}</th>
                        </tr>
                        <tr>
                            <th>{{result1Titles[4]}}{{resultK6}}</th>
                        </tr>
                    </table>
                </article>
                <article class="detail-content text-xs-center">
                    <header class="detail-title text-xs-center">
                        2、坝顶高程计算
                    </header>
                    <table class="table">
                        <tr>
                            <th>{{row2Titles[0]}}{{B12}}</th>
                            <td>
                                <input v-model.number="B12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row2Titles[1]}}{{C12}}</th>
                            <td>
                                <input v-model.number="C12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row2Titles[2]}}{{D12}}</th>
                            <td>
                                <input v-model.number="D12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row2Titles[3]}}{{H12}}</th>
                            <td>
                                <input v-model.number="H12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{row2Titles[4]}}{{J12}}</th>
                            <td>
                                <input v-model.number="J12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                    </table>
                    <button v-on:click="incrementCounter" style="width:150px;margin-top:20px;text-align:center;background-color:#1976d2;color:#fff;line-height:200%;">
                        点击生成计算结果
                    </button>
                    <table class="table" style="margin-top:20px;margin-bottom:20px;">
                        <tr>
                            <th>{{result2Titles[0]}}{{resultE12}}</th>
                        </tr>
                        <tr>
                            <th>{{result2Titles[1]}}{{resultF12}}</th>
                        </tr>
                        <tr>
                            <th>{{result2Titles[2]}}{{resultG12}}</th>
                        </tr>
                        <tr>
                            <th>{{result2Titles[3]}}{{resultI12}}</th>
                        </tr>
                        <tr>
                            <th>{{result2Titles[4]}}{{resultK12}}</th>
                        </tr>
                        <tr>
                            <th>{{result2Titles[5]}}{{resultL12}}</th>
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
      row1Titles: [
        "计算风速W（m/s）：",
        "水库吹程D（km）：",
        "重力加速度：",
        "河床高程(m)：",
        "计算水位(m)：",
        "累计频率波高与平均波高的比值："
      ],
      result1Titles: [
        "坝前水深Hm（m）：",
        "累积频率hs：",
        "浪高hp(m)：",
        "波长Lm（m）：",
        "平均波高hm（m）："
      ],
      row2Titles: [
        "上游坝坡m：",
        "斜坡糙率透性系数K△：",
        "KW：",
        "计算风向与坝轴线法线的夹角β",
        "安全超高A（m）："
      ],
      result2Titles: [
        "Rm（m）：",
        "波浪爬高R（m）：",
        "综合摩阻系数k：",
        "风壅水面高度e(m)：",
        "坝顶超高Y：",
        "坝顶高程(m)："
      ],
      B6: "",
      C6: "",
      D6: "",
      E6: "",
      F6: "",
      L6: "",

      B12: "",
      C12: "",
      D12: "",
      H12: "",
      J12: "",

      //最终结果
      resultG6: 0,
      resultH6: 0,
      resultI6: 0,
      resultJ6: 0,
      resultK6: 0,

      resultE12: 0,
      resultF12: 0,
      resultG12: 0,
      resultI12: 0,
      resultK12: 0,
      resultL12: 0
    };
  },
  methods: {
    incrementCounter: function() {
        
        //--------------------1、波浪计算-------------------------

        //坝前水深Hm（m）
        this.resultG6 = this.F6-this.E6;
        console.log("坝前水深Hm（m）： " + this.resultG6);

        //累积频率hs
        this.resultH6 = 1000*this.C6*this.D6/Math.pow(this.B6,2);
        console.log("累积频率hs：" +  this.resultH6);

        //浪高hp(m)
        this.resultI6 = Math.pow(this.B6,2)*0.0076*Math.pow(this.B6,-1/12)* Math.pow(((this.D6*1000*this.C6)/Math.pow(this.B6,2)),1/3)/this.D6;
        console.log("浪高hp(m)：" + this.resultI6);

        //波长Lm（m）
        this.resultJ6 = Math.pow(this.B6,2)*0.331*Math.pow(this.B6,-1/2.15)*Math.pow((this.D6*1000*this.C6/Math.pow(this.B6,2)),1/3.75)/this.D6;
        console.log("波长Lm（m）：" + this.resultJ6);

        //平均波高hm（m）
        this.resultK6 = this.resultI6/this.L6;
        console.log("平均波高hm（m）：" + this.resultK6);

        //--------------------2、坝顶高程计算-------------------------

        //Rm（m）分三种情况
        let E12 = this.C12*this.D12/Math.pow((1+Math.pow(this.B12,2)),0.5)*Math.pow(this.resultJ6*this.resultK6,0.5);
        let C15 = this.C12*this.D12*2.5*this.resultK6;
        let H15 = C15+(E12-C15)*(this.B12-1.25)/(1.5-1.25);

        if (1.5<=this.B12 && this.B12<=5.0) {
            this.resultE12 = E12;
            this.resultF12 = 1.84*E12;
        }
        else if (this.B12<=1.25) {
            this.resultE12 = C15;
            this.resultF12 = 1.84*C15;
        }
        else {
            //1.25<this.B12<1.5
            this.resultE12 = H15;
            this.resultF12 = 1.84*H15;
        }

        //Rm（m）
        console.log("Rm（m）：" + this.resultE12);

        //波浪爬高R（m）
        console.log("波浪爬高R（m）：" + this.resultF12);

        //综合摩阻系数k
        this.resultG12 = 3.6*Math.pow(10,-6);
        console.log("综合摩阻系数k：" + this.resultG12);

        //风壅水面高度e(m)
        this.resultI12 = this.resultG12*Math.pow(this.B6,2)*this.C6*1000*Math.cos(3.1415926*this.H12/180)/(2*this.D6*this.resultG6);
        console.log("风壅水面高度e(m)：" + this.resultI12);

        //坝顶超高Y
        this.resultK12 = this.J12 + this.resultI12 + this.resultF12;
        console.log("坝顶超高Y：" + this.resultK12);

        //坝顶高程(m)
        this.resultL12 = this.F6 + this.resultK12;
        console.log("坝顶高程(m)：" + this.resultL12);
        
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