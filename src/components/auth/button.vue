<template>
    <div
        @click="$emit('btnClick')"
        class="button no-blue"
        :class="{login: type==='login', 'registration-btn': type==='registration-btn'}"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "button",
    props: {
        type: String,
    }

}
</script>

<style scoped lang="scss">
.button {
    text-align: center;
    border-radius: 500px;
    width: 300px;
    padding: 19px 18px 18px 18px;
    cursor: pointer;
    transition: all .2s ease;
}
.login {
    border: 1px solid #fff;
    background: transparent;
    margin-bottom: 21px;
    &:hover {
        //border: 1px solid #ED58DC;
        //background: #ED58DC;
        transform: scale(1.03);
    }
}
.registration-btn {
    border: 1px solid #ED58DC;
    background: #ED58DC;
    &:hover {
        transform: scale(1.03);
    }
}
@media (max-width: $md1 + 'px') {
    .button {
        width: 265px;
        padding: 17px 16px 16px 16px;
    }
}
@media (max-width: $md3 + 'px') {
    .button {
        width: 250px;
        padding: 16px 15px 15px 15px;
    }
}
</style>