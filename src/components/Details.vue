<template>
  <div>
    <div>
      <div class="col s12 m7">
        <h2 class="header">{{ selected.text }}</h2>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p><b>Нужно сделать:</b> {{ selected.description }}</p>
              <p><b>Дэдлайн:</b> {{ selected.date.toLocaleDateString() }}</p>
            </div>
            <div class="card-action">
              <a href="#">Статус задачи:<b>
                  {{ selected.completed ? 'Выполнено' : 'Не выполнена' }}
                </b>
              </a>
              <button class="waves-effect waves-light btn small" @click="$emit('dropSelected')">
                button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { selected: Object },
};
</script>
