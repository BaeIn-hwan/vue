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
});

Vue.component("todoTemplate", {
    template : `
        <div class="ih__todo">
            <ul class="ih__todo__inner">
                <template v-if="todoList && todoList.length">
                    <li class="ih__todo__list">
                        <div class="ih__todo__view view">
                            <div class="view">
                                <label class="view__title">
                                    <input type="checkbox" class="blind">
                                    <p>qwe</p>
                                </label>
                                <span class="view__date">0000.00.00 N요일</span>
                            </div>

                            <div class="view__btn ih__btn">
                                <button type="button" class="view__btn__update ih__btn__black ih__btn__s">수정</button>
                                <button type="button" class="view__btn__delete ih__btn__gray ih__btn__s">삭제</button>
                            </div>
                        </div>

                        <div class="ih__todo__update update">
                            <input type="text" class="update__input">
                            <div class="update__btn ih__btn">
                                <button type="button" class="update__btn__update ih__btn__black ih__btn__b">수정</button>
                                <button type="button" class="update__btn__cancel ih__btn__white ih__btn__b">취소</button>
                            </div>
                        </div>
                    </li>
                <!-- </template>
                <template v-else> -->
                    <li class="empty-list">
                        <p>리스트가 없습니다.</p>
                    </li>
                <!-- </template> -->
            </ul>
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
});


new Vue({
    el: "#wrapper",
})