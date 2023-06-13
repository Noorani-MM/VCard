<template>
  <Detail title="Contact" description="I'd love to hear from you">
    <CardBackgrounded background="/Images/network.jpeg" alt="network"
      ><h2 class="card-title">My communication</h2>
      <p>You can contact me through the links below.</p>
      <footer class="footer footer-center p-10 text-base-content rounded">
        <div>
          <div class="grid grid-flow-col gap-4">
            <a
              target="_blank"
              href="https://t.me/Pe3arAbi"
              class="hover:scale-110 transition-all duration-150"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                class="bi bi-telegram"
                viewBox="0 0 32 32"
              >
                <path
                  d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"
                /></svg
            ></a>
            <a
              target="_blank"
              href="https://github.com/noorani-mm"
              class="hover:scale-110 transition-all duration-150"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                /></svg
            ></a>
            <a
              target="_blank"
              href="mailto:matio.nora2000@gmail.com"
              class="hover:scale-110 transition-all duration-150"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 32 32"
              >
                <path
                  d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"
                /></svg
            ></a>
          </div>
        </div>
        <div>
          <p>
            Knowledge is a precious heritage, and manners are always fresh
            ornaments, and thought is a transparent mirror.<br /><span
              class="font-bold"
              >Ali ibn Abi Talib</span
            >
          </p>
        </div>
      </footer>
    </CardBackgrounded>
  </Detail>
</template>

<script setup>
const form = ref({
  mobile: null,
  description: null,
});
</script>