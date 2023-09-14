<script lang="ts">
</script>
<section class="text-gray-200 flex items-center justify-center bg-gray-800">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-50">Log In to our project management system</h1>
      <p class="leading-relaxed mt-4">Hello! here you can find all our projects and see other things like the project tasks, documents, version management like <b>GIT</b>, employees, project status and more...</p>
    </div>
    <form method="post" class="lg:w-3/6 md:w-1/2 bg-surface-400 rounded-4xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 card">
      <h2 class="text-3xl font-medium title-font mb-5 card-header">Log in</h2>
      <div class="card-header relative mb-4">
        <label for="email" class="label text-gray-50">Email</label>
        <input type="email" id="email" name="email" class="input (text)">
      </div>
      <div class="card-header relative mb-4">
        <label for="password" class="label text-gray-50">Password</label>
        <input type="password" id="password" name="password" class="input (password)">
      </div>
      <button class="btn variant-ghost-primary mx-auto align-middle">Button</button>
    </form>
  </div>
</section>
<style lang="scss">
  section{
    height: calc(100vh - 65px);
  }
</style>