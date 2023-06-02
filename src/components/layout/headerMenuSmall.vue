<script setup></script>

<template>
  <div class="q-gutter-x-md" style="padding-top: 5px">
    <q-btn style="border-radius: 10px" flat icon="menu">
      <q-menu>
        <q-list separator style="min-width: 150px">
          <q-item clickable to="/playlist">
            <q-item-section> PLAYLIST </q-item-section>
          </q-item>
          <q-item clickable to="/files">
            <q-item-section> FILES </q-item-section>
          </q-item>

          <q-item clickable to="/setup">
            <q-item-section> SETUP </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<style scoped></style>
