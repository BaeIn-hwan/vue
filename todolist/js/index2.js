const eventBus = new Vue();

Vue.component("writeTemplate", {
    template : `
        <div class="ih__writing">
            <input type="text" class="ih__writing__input" placeholder="텍스트를 입력하세요.">
            <button type="button" class="ih__writing__add ih__btn__black ih__btn__b">추가</button>
        </div>
    `,
    created() {
    },
    data() {
        return {
        }
    },
    methods: {
    }
})


new Vue({
    el: "#wrapper",
})