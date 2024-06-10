<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">

    <!--      leftside-->
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo"  class="w-10"/>
      <div>
        <h2 class="text-xl font-bold uppercase">Sneakers</h2>
        <p class="text-slate-500">Shop the best sneakers</p>
      </div>
    </div>

    <!--      rightside-->
    <ul class="flex items-center gap-10">
      <li class="flex cursor-pointer items-center gap-3 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart">
        <b>5000 usd</b>
      </li>

      <li class="flex cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="Cart">
        <span>Favorite</span>
      </li>

      <li class="flex cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="Cart">
        <span>Profile</span>
      </li>
    </ul>

  </header>
</template>