<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  font-size: 30px;
  font-weight: bold;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu @on-select="onselect" active-name="0" theme="dark" width="auto" :class="collapsed-menu">
                    <MenuItem  name="0">
                        <span>{{rowTitles[0]}}</span>
                    </MenuItem>
                    <MenuItem name="1">
                        <span>{{rowTitles[1]}}</span>
                    </MenuItem>
                    <MenuItem name="2">
                        <span>{{rowTitles[2]}}</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <component v-bind:is="currentTabConmmpoment" :style="{margin: '20px' , minHeight: '220px'}">
                </component>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import dambodycount from "./countlist/gravitydam_antisliding_stable_count.vue";
import dambodylimithighcount from "./countlist/gravitydam_top_superelevation_count.vue";
import rockdamtopcount from "./countlist/rockdam_top_count.vue";


import { currentId } from 'async_hooks';
import { PassThrough } from 'stream';

export default {
  data() {
    return {
      currentTab: "dambody-count",
      isCollapsed: false,
      rowTitles: ["重力坝抗滑稳定计算", "重力坝坝顶超高计算","土石坝坝顶高程计算"],
      tabs: ["dambody-count", "dambodylimithigh-count","rockdamtop-count"]
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    currentTabConmmpoment: function() {
      return this.currentTab;
    }
  },
  components: {
    "dambody-count": dambodycount,
    "dambodylimithigh-count": dambodylimithighcount,
    "rockdamtop-count": rockdamtopcount
  },
  methods:{
    onselect:function (name){
      this.currentTab = this.tabs[Number(name)];
    }
  }
};
</script>
