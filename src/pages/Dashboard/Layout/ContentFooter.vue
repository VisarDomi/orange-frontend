<template>
  <footer class="footer">
    <div class="container">
      <!-- <nav>
        <ul>
          <li>
            <router-link
              v-if="$route.meta.rtlActive"
              :to="{ path: 'https://orange-frontend.ml' }"
              >منزل</router-link
            >
            <a v-else href="https://orange-frontend.ml">Creative Tim</a>
          </li>
          <li>
            <a v-if="$route.meta.rtlActive" href="http://blog.creative-tim.com">
              شركة
            </a>
            <a v-else href="https://creative-tim.com/presentation">
              About Us
            </a>
          </li>
          <li>
            <a v-if="$route.meta.rtlActive" href="http://blog.creative-tim.com">
              محفظة
            </a>
            <a v-else href="http://blog.creative-tim.com">
              Blog
            </a>
          </li>
          <li>
            <a
              v-if="$route.meta.rtlActive"
              href="https://orange-frontend.ml/license"
            >
              بلوق
            </a>
            <a v-else href="https://orange-frontend.ml/license">
              Licenses
            </a>
          </li>
        </ul>
      </nav> -->
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="#" target="_blank"
          >OrangeLimo</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style></style>
