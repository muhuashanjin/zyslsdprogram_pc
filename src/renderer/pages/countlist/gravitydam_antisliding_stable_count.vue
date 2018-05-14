<template>
    <div class="detail-wrapper">
        <!-- <v-layout row wrap>
            <v-flex xs10 offset-xs1> -->
                <article class="detail-content text-xs-center">
                    <header class="detail-title text-xs-center">
                        重力坝抗滑稳定计算
                    </header>
                    <table class="table">
                        <tr>
                            <th>{{rowTitles[0]}}{{B3}}</th>
                            <td>
                                <input v-model.number="B3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[1]}}{{B4}}</th>
                            <td>
                                <input v-model.number="B4" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[2]}}{{B5}}</th>
                            <td>
                                <input v-model.number="B5" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[3]}}{{B6}}</th>
                            <td>
                                <input v-model.number="B6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[4]}}{{B7}}</th>
                            <td>
                                <input v-model.number="B7" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[5]}}{{B8}}</th>
                            <td>
                                <input v-model.number="B8" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[6]}}{{B9}}</th>
                            <td>
                                <input v-model.number="B9" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[7]}}{{B10}}</th>
                            <td>
                                <input v-model.number="B10" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[8]}}{{B11}}</th>
                            <td>
                                <input v-model.number="B11" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[9]}}{{B12}}</th>
                            <td>
                                <input v-model.number="B12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[10]}}{{B13}}</th>
                            <td>
                                <input v-model.number="B13" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[11]}}{{D3}}</th>
                            <td>
                                <input v-model.number="D3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[12]}}{{D4}}</th>
                            <td>
                                <input v-model.number="D4" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[13]}}{{D5}}</th>
                            <td>
                                <input v-model.number="D5" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <!-- <tr>
                            <th>{{rowTitles[14]}}{{D6}}</th>
                            <td>
                                <input v-model.number="D6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[15]}}{{D7}}</th>
                            <td>
                                <input v-model.number="D7" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr> -->
                        <tr>
                            <th>{{rowTitles[16]}}{{D8}}</th>
                            <td>
                                <input v-model.number="D8" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[17]}}{{D9}}</th>
                            <td>
                                <input v-model.number="D9" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[18]}}{{D10}}</th>
                            <td>
                                <input v-model.number="D10" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[19]}}{{D11}}</th>
                            <td>
                                <input v-model.number="D11" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[20]}}{{D12}}</th>
                            <td>
                                <input v-model.number="D12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[21]}}{{D13}}</th>
                            <td>
                                <input v-model.number="D13" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[22]}}{{K5}}</th>
                            <td>
                                <input v-model.number="K5" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[23]}}{{K6}}</th>
                            <td>
                                <input v-model.number="K6" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[24]}}{{K7}}</th>
                            <td>
                                <input v-model.number="K7" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[25]}}{{K8}}</th>
                            <td>
                                <input v-model.number="K8" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[26]}}{{K9}}</th>
                            <td>
                                <input v-model.number="K9" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[27]}}{{K10}}</th>
                            <td>
                                <input v-model.number="K10" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>                        
                        <tr>
                            <th>{{rowTitles[28]}}{{K11}}</th>
                            <td>
                                <input v-model.number="K11" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[29]}}{{K12}}</th>
                            <td>
                                <input v-model.number="K12" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[30]}}{{K13}}</th>
                            <td>
                                <input v-model.number="K13" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                        <tr>
                            <th>{{rowTitles[31]}}{{M3}}</th>
                            <td>
                                <input v-model.number="M3" style="border: 2px solid #1976d2" placeholder=" 必填">
                            </td>
                        </tr>
                    </table>
                    <button v-on:click="incrementCounter" style="width:150px;margin-top:20px;text-align:center;background-color:#1976d2;color:#fff;line-height:200%;">
                        点击生成计算结果
                    </button>
                    <table class="table" style="margin-top:20px;margin-bottom:20px;">
                        <tr>
                            <th>{{resultTitles[0]}}{{resultH13}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[1]}}{{M11}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[2]}}{{resultM12}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[3]}}{{resultM13}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[4]}}{{resultC35}}</th>
                        </tr>
                        <tr>
                            <th>{{resultTitles[4]}}{{resultC36}}</th>
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
        data: function () {
            return {
                rowTitles: [
                    "坝顶高程(m)：",
                    "建基面高程（m)：",
                    "上游水位(m)：",
                    "下游水位(m)：",
                    "上游面放坡高程(m)：",
                    "下游面放坡高程(m)：",
                    "上游坝坡坡度（1：m）：",
                    "下游坝坡坡度（1：m）：",
                    "水溶重ro(t/m3)：",
                    "坝体材料溶重r(t/m3)：",
                    "淤沙高程(m)：",
                    "淤沙浮溶重rs(t/m3)：",
                    "淤沙摩擦角（度)：",
                    "扬压力折减系数：",
                    "排水孔处折减系数：",
                    "排水孔宽度(m)：",
                    "坝顶宽度(m)： ",
                    "灌浆距上游坝面平距(m)：",
                    "抗剪断摩擦系数f´： ",
                    " 抗剪断粘结力C´(t)：",
                    "抗剪摩擦系数f： ",
                    "浪高hz（m）: ",
                    "第一滑裂面与水平面夹角α（角度）: ",
                    "第二滑裂面与水平面夹角β（角度）（先试算使K2´最小）:",
                    "第一滑裂面与水平面夹角α（弧度）:",
                    "第二滑裂面与水平面夹角β（弧度）: ",
                    "两滑面上岩体间作用面上作用力与水平面的夹角φ: ",
                    "第一滑裂面抗剪断摩擦系数f1´：",
                    "第二滑裂面抗剪断摩擦系数f2´：",
                    "第一滑裂面抗剪断粘结力C1´(t): ",
                    "第二滑裂面抗剪断粘结力C2´(t): ",
                    "岩体溶重r(t/m3)："
                ],
                resultTitles: [
                    "沿建基面滑动（单滑面）- 抗剪断安全系数K´：",
                    "两滑面上岩体间作用面上作用力Q(试算使K1´=K2´)：",
                    "深层滑动（双滑面）- 第一滑裂面的抗滑稳定安全系数K1´:",
                    "深层滑动（双滑面）- 第二滑裂面的抗滑稳定安全系数K2´:",
                    "重力坝上、下游边缘正应力计算（沿建基面） - 上游边缘正应力:",
                    "重力坝上、下游边缘正应力计算（沿建基面） - 下游边缘正应力:",
                ],

                // rowTitles[0]-B3，rowTitles[11]-D3，rowTitles[22]-K5
                // 以此类推往下一一对应
                B3: "",
                B4: "",
                B5: "",
                B6: "",
                B7: "",
                B8: "",
                B9: "",
                B10: "",
                B11: "",
                B12: "",
                B13: "",
                D3: "",
                D4: "",
                D5: "",
                D6: "0",
                D7: "0",
                D8: "",
                D9: "",
                D10: "",
                D11: "",
                D12: "",
                D13: "",
                K5: "",
                K6: "",
                K7: "",
                K8: "",
                K9: "",
                K10: "",
                K11: "",
                K12: "",
                K13: "",
                M3: "",
                M11:0,
                //最终结果
                resultH13:0,
                resultM12:0,
                resultM13:0,
                resultC35:0,
                resultC36:0,

            }
        },
        methods: {
        
        incrementCounter: function () {
            //==================沿建基面滑动（单滑面）===================

            //最大坝高(m)：
            let F3 = this.B3-this.B4;
            console.log("最大坝高(m)： " + F3);

            //坝底宽度(m)：
            let F4 = ((this.B7>this.B4?this.B7:this.B4)-this.B4)/(this.B9>0?this.B9:1) + this.D8+(this.B8-this.B4)/this.B10;
            console.log("坝底宽度(m)： " + F4);

            //矩形体自重G1(t)：
            let F5 = this.D8 * this.B12 * F3;
            console.log("矩形体自重G1(t)： " + F5);

            //下游楔形体自重G2(t)：
            let F6 = 0.5*Math.pow((this.B8-this.B4),2)*this.B12/this.B10;
            console.log("下游楔形体自重G2(t)： " + F6);

            //上游楔形体自重G2(t)：
            let F7 = 0.5*this.B12*Math.pow((this.B7-this.B4),2)*(this.B9>0?1:0)/(this.B9>0?this.B9:1);
            console.log("上游楔形体自重G2(t)： " + F7);
            
            //上游矩形体水重G2(t)：
            let F8 = this.B11*(this.B5-this.B7)*((this.B7>this.B4?this.B7:this.B4)-this.B4)/(this.B9>0?this.B9:1);
            console.log("上游矩形体水重G2(t)：" + F8);


            //上游楔形体水重G2(t)：
            let F9 = 0.5*this.B11*Math.pow(((this.B7>this.B4?this.B7:this.B4)-this.B4),2)*(this.B9>0?1:0)/(this.B9>0?this.B9:1);
            console.log("上游楔形体水重G2(t)：" + F9);

            //下游楔形体水重G2(t)：
            let F10 = 0.5*this.B11*Math.pow((this.B6-this.B4),2)/this.B10;
            console.log("下游楔形体水重G2(t)：" + F10);

            //垂直淤沙压力PsV(t)：
            let F11 = 0.5*this.D3*Math.pow((this.B13-this.B4),2)*(this.B9>0?1:0)/(this.B9>0?this.B9:1);
            console.log("垂直淤沙压力PsV(t)：" + F11);

            //竖直向下合力ΣG(t):
            let F12 = F5 + F6 + F7 + F8 + F9 + F10 + F11;
            console.log("竖直向下合力ΣG(t):" + F12);

            //下游水深矩形浮托力U1(t)：
            let F13 = this.B11*F4*(this.B6-this.B4)*(this.B4>this.B6?0:1);
            console.log("下游水深矩形浮托力U1(t)：" + F13);

            //排水孔折减处扬压力U2(t)：
            let H3 = 0.5*this.B11*(this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D6*(F4-this.D9-this.D7);
            console.log("排水孔折减处扬压力U2(t)：" + H3);

            //灌浆折减处扬压力U3(t)：
            let H4 = (this.D6>0,
            0.5*this.B11*((this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D5+((this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D6))*this.D7,
            0.5*this.B11*(this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D5*(F4-this.D9));
            console.log("灌浆折减处扬压力U3(t)：" + H4);
            
            //坝踵处扬压力U4(t)：
            let H5 = 0.5*this.B11*((this.B5-(this.B4>this.B6?this.B4:this.B6))+(this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D5)*this.D9;
            console.log("坝踵处扬压力U4(t)：" + H5);

            //总扬压力ΣU(t):
            let H6 = F13 + H3 + H4 + H5;
            console.log("总扬压力ΣU(t):" + H6);

            //总铅直力ΣW(t):↓
            let H7 = F12 - H6;
            console.log("总铅直力ΣW(t):↓" + H7);

            //上游水平水压力P1(t)：
            let H8 = 0.5*this.B11*Math.pow((this.B5-this.B4),2);
            console.log("上游水平水压力P1(t)：" + H8);

            //下游水平水压力P2(t)：
            let H9 = 0.5*this.B11*Math.pow((this.B6-this.B4),2)*(this.B4>this.B6?0:1);
            console.log("下游水平水压力P2(t)：" + H9);

            //上游水平淤沙压力PsH(t)：
            let H10 = 0.5*this.D3*Math.pow((this.B13-this.B4),2)*Math.pow((Math.tan((45-this.D4/2)*3.1415926/180)),2);
            console.log("上游水平淤沙压力PsH(t)：" + H10);

            //浪压力(t)：
            let H11 = this.B11*5*this.D13*(5*this.D13+this.D13+0.3*this.D13)/2-this.B11*Math.pow((5*this.D13),2)/2;
            console.log("浪压力(t)：" + H11);

            //总水平力ΣP(t):→
            let H12 = H8-H9+H10+H11;
            console.log("总水平力ΣP(t):→" + H12);
            
            //抗剪断安全系数K´:
            let H13 = (this.D10*H7+this.D11*F4*1)/H12;
            console.log("抗剪断安全系数K´:" + H13);
            
            this.resultH13 = H13;

            //==================深层滑动（双滑面）===================
           
            //坝体竖直向下的合力W(t)↓:
            let K3 = F12;
            console.log("坝体竖直向下的合力W(t)↓：" + K3);

            //坝体水平向合力H(t)→:
            let K4 = H12;
            console.log("坝体水平向合力H(t)→：" + K4);    
 
            //第一滑裂面面积A1:
            let M4 = F4/Math.cos(this.K7)*1;
            console.log("第一滑裂面面积A1：" + M4);   

            //第二滑裂面面积A2:
            let M5 = (F4*Math.tan(this.K7)+3)/Math.sin(this.K8)*1;
            console.log("第二滑裂面面积A2：" + M5);  
            
            //第一滑裂面上岩体自重G1(t):
            let M6 = this.M3*0.5*F4*F4+Math.tan(this.K7)*1;
            console.log("第一滑裂面上岩体自重G1(t)：" + M6);

            //第二滑裂面上岩体自重G2(t):
            let M7 = this.M3*0.5*(F4*Math.tan(this.K7)+3)*(F4*Math.tan(this.K7)+3)/Math.tan(this.K8);
            console.log("第二滑裂面上岩体自重G2(t)：" + M7);

            //第一滑裂面上扬压力U1:
            let M8 = (this.B11*(this.B6-this.B4+F4*Math.tan(this.K7))*F4/Math.cos(this.K7))+0.5*(this.B11*(this.B5-this.B4-(this.B6-this.B4+F4*Math.tan(this.K7)))+this.D5*this.B11*(this.B5-this.B4-(this.B6-this.B4+F4*Math.tan(this.K7))))*this.D9/Math.cos(this.K7)+0.5*this.D5*this.B11*(this.B5-this.B4-(this.B6-this.B4+F4*Math.tan(this.K7)))*(F4/Math.cos(this.K7)-this.D9/Math.cos(this.K7));
            console.log("第一滑裂面上扬压力U1：" + M8);
            
            //第二滑裂面上扬压力U2:
            let M9 = 0.5*(this.B11*(this.B6-this.B4)+this.B11*(this.B6-this.B4+F4*Math.tan(this.K7)))*F4*Math.tan(this.K7)/Math.sin(this.K8);
            console.log("第二滑裂面上扬压力U2：" + M9);

            //两滑面上岩体间作用面上扬压力U3:
            let M10 = 0.5*(this.B11*(this.B6-this.B4)+this.B11*(this.B6-this.B4+F4*Math.tan(this.K7)))*F4*Math.tan(this.K7);
            console.log("两滑面上岩体间作用面上扬压力U3：" + M10);
            
            let M12 = 0;
            let M13 = 0;
            let fixM12 = 0;
            let fixM13 = 0;

            do{
                M12 = (this.K10*((K3+M6)*Math.cos(this.K7)-K4*Math.sin(this.K7)-this.M11*Math.sin(this.K9-this.K7)-
                M8+M10*Math.sin(this.K7))+this.K12*M4)/((K3+M6)*Math.sin(this.K7)+
                K4*Math.cos(this.K7)-M10*Math.cos(this.K7)-this.M11*Math.cos(this.K9-this.K7));

                M13 = (this.K11*(M7*Math.cos(this.K8)+this.M11*Math.sin(this.K9+this.K8)-
                M9+M10*Math.sin(this.K8))+this.K13*M5)/(this.M11*Math.cos(this.K9+this.K8)-
                M7*Math.sin(this.K8)+M10*Math.cos(this.K8));

                fixM12 = M12.toFixed(2);
                fixM13 = M13.toFixed(2);

                this.M11 += 0.1;
            }
            while( fixM12 != fixM13 );

            console.log("两滑面上岩体间作用面上作用力Q(试算使K1´=K2´)：" + this.M11);

            //第一滑裂面的抗滑稳定安全系数K1´:
            // let M12 = (this.K10*((K3+M6)*Math.cos(this.K7)-K4*Math.sin(this.K7)-this.M11*Math.sin(this.K9-this.K7)-M8+M10*Math.sin(this.K7))+this.K12*M4)/((K3+M6)*Math.sin(this.K7)+K4*Math.cos(this.K7)-M10*Math.cos(this.K7)-this.M11*Math.cos(this.K9-this.K7));
            console.log("第一滑裂面的抗滑稳定安全系数K1´：" + M12);

            //第二滑裂面的抗滑稳定安全系数K2´:
            // let M13 = (this.K11*(M7*Math.cos(this.K8)+this.M11*Math.sin(this.K9+this.K8)-M9+M10*Math.sin(this.K8))+this.K13*M5)/(this.M11*Math.cos(this.K9+this.K8)-M7*Math.sin(this.K8)+M10*Math.cos(this.K8));
            console.log("第二滑裂面的抗滑稳定安全系数K2´：" + M13);         
            
            this.resultM12 = M12;
            this.resultM13 = M13;

            //==================重力坝上、下游边缘正应力计算（沿建基面）==================

            let C17 = F5;
            let C18 = F6;
            let C19 = F7;
            let C22 = F8;
            let C23 = F9;
            let C24 = F10;
            let C30 = F11;

            let D25 = F13;
            let D26 = H3;
            let D27 = H4;
            let D28 = H5;

            let E20 = H8;
            let E29 = H11;
            let E31 = H10;

            let F21 = H9;

            //垂直力总计:
            let C33 = (C17+C18+C19+C22+C23+C24+C30) - (D25+D26+D27+D28)
            console.log("垂直力总计：" + C33);  

            //水平力总计:
            let E33 = (E20+E29+E31) - F21
            console.log("水平力总计:" + E33);

            //-----------对基础中心的力臂-------------

            //矩形体自重
            let G17 = F4/2-(this.D8/2)-((this.B7>0?this.B7:this.B4)-this.B4)/(this.B9>0?this.B9:1)
            console.log("矩形体自重:" + G17);

            //下游楔形体自重
            let G18 = ((F4/2-((this.B8-this.B4)/this.B10)*2/3)>0?(-(F4/2-((this.B8-this.B4)/this.B10)*2/3)):((((this.B8-this.B4)/this.B10)*2/3)-F4/2));
            console.log("下游楔形体自重:" + G18);

            //上游楔形体自重
            let G19 = F4/2-((this.B7-this.B4)/this.B9)*2/3;
            console.log("上游楔形体自重:" + G19);

            //上游水平水压力
            let G20 = -(this.B5-this.B4)/3;
            console.log("上游水平水压力:" + G20);

            //下游水平水压力
            let G21 = (this.B6-this.B4)/3;
            console.log("下游水平水压力:" + G21);

            //上游矩形体水重
            let G22 = F4/2-(this.B7-this.B4)*(this.B9>0?1:0)/((this.B9>0?this.B9:1)*2);
            console.log("上游矩形体水重:" + G22);

            //上游楔形体水重
            let G23 = F4/2-(this.B7-this.B4)*(this.B9>0?1:0)/((this.B9>0?this.B9:1)*3);
            console.log("上游楔形体水重:" + G23);   

            //下游楔形体水重
            let G24 = -(F4/2-((this.B6-this.B4)/this.B10)/3);
            console.log("下游楔形体水重:" + G24);
            
            //下游水深矩形浮托力
            // let G25 = 0;
            // console.log("下游水深矩形浮托力:" + G25);

            //排水孔折减处扬压力
            let G26 = (F4/2-(F4-this.D9-this.D7)*2/3)>0?(F4/2-(F4-this.D9-this.D7)*2/3):-((F4-this.D9-this.D7)*2/3-F4/2);
            console.log("排水孔折减处扬压力:" + G26);

            //灌浆折减处扬压力
            let G27 =  this.D6>0?
            -(F4/2-this.D9-(((this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D5+2*(this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D6)*this.D7/3*(((this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D5+(this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D6)))):
            ((F4/2-(F4-this.D9)*2/3)>0?(F4/2-(F4-this.D9)*2/3):-((F4-this.D9)*2/3-F4/2));
            console.log("灌浆折减处扬压力:" + G27);

            //坝踵处扬压力
            let G28 = -(F4/2-((this.B5-(this.B4>this.B6?this.B4:this.B6))+2*(this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D5)/(3*((this.B5-(this.B4>this.B6?this.B4:this.B6))+(this.B5-(this.B4>this.B6?this.B4:this.B6))*this.D5)));
            console.log("坝踵处扬压力:" + G28);

            //浪压力
            let G29 = -(this.B5-this.B4+this.D13/2);
            console.log("浪压力:" + G29);
           
            //垂直淤沙压力
            let G30 = (F4/2-(this.B13-this.B4)*(this.B9>0?1:0)/((this.B9>0?this.B9:1)*3));
            console.log("垂直淤沙压力:" + G30);

            //水平淤沙压力
            let G31 = -(this.B13-this.B4)/3;
            console.log("水平淤沙压力:" + G31);
            
            //-----------力矩(吨-米）-----------

            //矩形体自重 ↙+
            let H17 = C17*G17;
            console.log("矩形体自重 ↙+:" + H17);

            //下游楔形体自重 ↙+
            let H18 = G18*C18*(G18>0?1:0);
            console.log("下游楔形体自重 ↙+:" + H18);

            //上游楔形体自重 ↙+
            let H19 = C19*G19;
            console.log("上游楔形体自重 ↙+:" + H19);

            //下游水平水压力 ↙+
            let H21 = F21*G21;
            console.log("下游水平水压力 ↙+:" + H21);

            //上游矩形体水重 ↙+
            let H22 = G22*C22;
            console.log("上游矩形体水重 ↙+:" + H22);

            //上游楔形体水重 ↙+
            let H23 = G23*C23;
            console.log("上游楔形体水重 ↙+:" + H23);

            //排水孔折减处扬压力 ↙+ 
            let H26 = G26*D26*(G26>0?1:0);
            console.log("排水孔折减处扬压力 ↙+:" + H26);

            //灌浆折减处扬压力 ↙+   
            let H27 = G27*D27*(G27>0?1:0);
            console.log("灌浆折减处扬压力 ↙+:" + H27);

            //坝踵处扬压力 ↙+   
            let H28 = G28*D28*(G28>0?1:0);
            console.log("坝踵处扬压力 ↙+:" + H28);

            //浪压力 ↙+   
            let H29 = G29*E29*(G29>0?1:0);
            console.log("浪压力 ↙+:" + H29);

            //垂直淤沙压力 ↙+   
            let H30 = G30*C30*(G30>0?1:0);
            console.log("垂直淤沙压力 ↙+:" + H30);

            //水平淤沙压力 ↙+   
            let H31 = G31*E31*(G31>0?1:0);
            console.log("水平淤沙压力 ↙+:" + H31);

            //下游楔形体自重 ↘- 
            let I18 = G18*C18*(G18<0?1:0);
            console.log("下游楔形体自重 ↘-:" + I18);

            //上游水平水压力 ↘- 
            let I20 = E20*G20;
            console.log("上游水平水压力 ↘-:" + I20);

            //下游楔形体水重 ↘- 
            let I24 = C24*G24;
            console.log("下游楔形体水重 ↘-:" + I24);

            //排水孔折减处扬压力 ↘-
            let I26 = G26*D26*(G26<0?1:0)
            console.log("排水孔折减处扬压力 ↘-:" + I26);

            //灌浆折减处扬压力 ↘-   
            let I27 = G27*D27*(G27<0?1:0);
            console.log("灌浆折减处扬压力 ↘-:" + I27);

            //坝踵处扬压力 ↘-   
            let I28 = G28*D28*(G28<0?1:0);
            console.log("坝踵处扬压力 ↘-:" + I28);

            //浪压力 ↘-   
            let I29 = G29*E29*(G29<0?1:0);
            console.log("浪压力 ↘-:" + I29);

            //垂直淤沙压力  ↘-   
            let I30 = G30*C30*(G30<0?1:0);
            console.log("垂直淤沙压力 ↘-:" + I30);

            //水平淤沙压力 ↘-    
            let I31 = G31*E31*(G31<0?1:0);
            console.log("水平淤沙压力 ↘-:" + I31);

            //力矩总计    
            let H33 = (H17+H18+H19+H21+H22+H23+H26+H27+H28+H29+H30+H31) + (I18+I20+I24+I26+I27+I28+I29+I30+I31);
            console.log("力矩总计:" + H33);

            //偏心矩:
            let C34 = -H33/C33;
            console.log("偏心矩:" + C34);
            let G34 = F4/6;
            console.log("偏心矩:" + G34);

            //上游边缘正应力:
            let C35 = C33/F4+6*H33/Math.pow(F4,2);
            console.log("上游边缘正应力:" + C35);

            //下游边缘正应力:
            let C36 = C33/F4-6*H33/Math.pow(F4,2);
            console.log("下游边缘正应力:" + C36);

            this.resultC35 = C35;
            this.resultC36 = C36;
        }
  },
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