<template>
  <div id="app">
    <div class="row wrap">
      <div v-if="!selected">
        <form class="col s12" v-on:submit.prevent="submitHandler">
          <div class="row">
            <div class="input-field col s12">
              <input id="text" type="text" class="validate" v-model="text" />
              <label for="text">Введите описание задачи</label>
            </div>
          </div>
          <input type="text" class="datepicker" ref="datepicker">
          <button class="waves-effect waves-light btn" type="submit" v-bind:disabled="!text">
            Добавить
          </button>
        </form>
        <div class="custom-v">
          <div class="row" v-if="list.length">
            <table>
              <thead>
              <tr>
                <th>#Номер</th>
                <th>Описание</th>
                <th>Дэдлайн</th>
                <th>Подробнее</th>
                <th>Отчистить</th>
              </tr>
              </thead>
              <tbody>
              <tr
                class="collection-item"
                v-for="(todo, idx) of list"
                :key="todo.id"
              >
                <td>{{ idx + 1 }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.date.toLocaleDateString() }}</td>
                <td><button @click="clickHandlerOpen(todo.id)" class="btn small">open</button></td>
                <td><button @click="clickHandler(todo.id)" class="btn small">clear</button></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="row" v-else>
            <p class="flow-text">
              Список пуст
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <Details :selected="selected" @dropSelected="dropSelectedHandler" />
      </div>
    </div>
  </div>
</template>

<script>
import Details from '@/components/Details.vue';

export default {
  name: 'App',
  components: { Details },
  data: () => ({
    text: '',
    date: null,
    list: [],
    selected: null,
  }),
  methods: {
    submitHandler() {
      if (this.text.trim()) {
        const item = {
          id: Date.now(),
          description: this.text,
          completed: false,
          date: this.date.date,
        };
        this.list.unshift(item);
        this.text = '';
      }
    },
    clickHandler(id) {
      this.list = this.list.filter((el) => el.id !== id);
    },
    clickHandlerOpen(id) {
      this.selected = this.list.find((el) => el.id === id);
    },
    dropSelectedHandler() {
      this.selected = null;
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  },
};

</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
.wrap {
  margin: 2rem 300px;
}
.custom-v {
  padding-top: 50px;
}
</style>
