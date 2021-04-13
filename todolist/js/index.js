new Vue({
    el: "#wrapper",
    data() {
        return {
            today: null,
            createText: "",
            todoCounter: {
                all: 0,
                ing: 0,
                end: 0,
            },
            todoList: [],
        }
    },
    created() {
        this.today = this.getDate();
    },
    watch: {
    },
    methods: {
        getDate() {
            const date = new Date();
            const yyyy = date.getFullYear();
            const mm = date.getMonth() + 1;
            const dd = date.getDate();
            const week = date.getDay();
            const weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

            return `${yyyy}.${mm}.${dd} ${weekName[week]}`;
        },
        listCount() {

        },
        createTodoList() {
            if (this.createText && this.createText.length) {
                this.todoList.unshift({
                    date: this.getDate(),
                    txt: this.createText,
                    updateView: false,
                    clearFlag: false,
                });

                this.createText = "";
                this.todoCounter.all = this.todoList.length;
            }
            else {
                alert("글자를 입력하세요.");
            }
        },
        updateTodoList(idx, e) {
            this.todoList[idx].date = this.getDate();
            this.todoList[idx].txt = this.$refs.update__input[idx].value;
            this.todoList[idx].updateView = false;
        },
        deleteTodoList(idx, e) {
            if (confirm("삭제하시겠습니까?")) {
                this.todoList.splice(idx, 1);
                this.todoCounter.all = this.todoList.length;
            }
        },
        chnageClearFlag(idx, e) {
            console.log(this.todoList[idx].clearFlag)
            if (!this.todoList[idx].clearFlag) {
                this.todoList[idx].clearFlag = true;
            }
            else {
                this.todoList[idx].clearFlag = false;
            }
        },
        chnageView(idx, e) {
            if (!this.todoList[idx].updateView) {
                this.todoList[idx].updateView = true;
            }
            else {
                this.todoList[idx].updateView = false;
            }
        },
       
    },
})