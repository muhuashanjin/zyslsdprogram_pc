<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        font-size: 30px;
        font-weight: bold;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-1" theme="dark" width="auto" :class="collapsed-menu">
                    <MenuItem name="1-1">
                        <span>{{rowTitles[0]}}</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">{{rowTitles[0]}}</Header>
                <dambody-count :style="{margin: '20px' , minHeight: '220px'}">
                </dambody-count>
            </Layout>
        </Layout>
    </div>
</template>
<script>

    import dambodycount from './countlist/dambodycount.vue'

    export default {
        data () {
            return {
                isCollapsed: false,
                rowTitles: [
                    "重力坝抗滑稳定计算",
                    "重力坝抗滑计算",
                    "重力坝稳定计算",
                ]
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        components: {
            'dambody-count': dambodycount
        }
    }
</script>
