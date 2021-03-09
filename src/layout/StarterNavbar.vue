<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <template v-slot:="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        MixOnline
      </router-link>

      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim & Zayed Charef
        </div>
        <div>
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="MENU">
        <router-link class="special" to="/mix">
        <nav-link class="dropdown-item">

          <i class="now-ui-icons shopping_box"></i>
          Mix Assistant

        </nav-link>
        </router-link>

      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
.special{
  color: #2c2c2c !important;
}
</style>
