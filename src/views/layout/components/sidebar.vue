<script type="text/jsx">
import { mapGetters } from 'vuex'

export default {
  created () {
    this.showTimeout = 200
  },
  computed: {
    isCollapse () {
      return !this.sidebar.opened
    },
    collapseCls () {
      return this.sidebar.opened ? 'sidebar--opened' : 'sidebar--collapse'
    },
    ...mapGetters(['sidebar', 'menu'])
  },
  methods: {

    renderSvg (icon) {
      return icon ? (
        <svg-icon iconClass={ icon } class="sidebarSvg" />
      ) : null
    },
    renderSubmenu (items) {
      const { label, icon, children } = items
      return (
        <el-submenu index={label}>
          <template slot="title">
            { this.renderSvg(icon) }
            <span slot="title">{ label }</span>
          </template>
          { children.map((item) => this.renderSidebar(item)) }
        </el-submenu>
      )
    },
    // renderItem (item) {
    //   const { path, icon, label } = item
    //   return (
    //     <el-menu-item index={path}>
    //       { this.renderSvg(icon) }
    //       <span>{ label }</span>
    //     </el-menu-item>
    //   )
    // },
      renderItem (item) {
      const { path, icon, label, onClick } = item
      if (item.onClick) {
          return (
          <el-menu-item onClick={item.onClick}>
            { this.renderSvg(icon) }
            <span>{ label }</span>
          </el-menu-item>
        )
      } else {
              return (
            <el-menu-item index={path}>
              { this.renderSvg(icon) }
              <span>{ label }</span>
            </el-menu-item>
          )
      }
    },
    renderSidebar (item) {
      if (item.children) {
        return this.renderSubmenu(item)
      } else {
        return this.renderItem(item)
      }
    }
  },
  render () {
    return (
      <div class={this.collapseCls}>
        <el-scrollbar>
          <el-menu
            show-timeout={this.showTimeout}
            default-active={this.$route.path.slice(1)}
            collapse={this.isCollapse}
            router={true}
            mode="vertical"
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409EFF"
          >
            {this.menu.map(item => this.renderSidebar(item))}
          </el-menu>
        </el-scrollbar>
      </div>
    )
  }
}
</script>

<style lang="scss">
@import "~common/style/variable";

.sidebar--opened {
  flex: $sidebar-width 0 0;
  width: $sidebar-width;
}
.sidebar--collapse {
  flex: 64px 0 0;
  width: 64px;
}
</style>
