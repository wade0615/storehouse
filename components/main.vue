<template>
    <main>
        <h2>{{ content.id }}. {{ content.title }}</h2>

        <div>
            <b-card-group deck class="card_group">
                <b-card v-for="msg in msgs" :title="msg" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card below as a natural lead-in to additional content.
                    </b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-card-group>
        </div>
    </main>
</template>

<script>
export default {
    props: ['content'],
    data () {
        return {
            msgs: [`Card title 1`,`Card title 2`,`Card title 3`,`Card title 4`,`Card title 5`]
        }
    },
    methods: {
        mainfunc(){
            console.log('main.vue active');
        }
    },
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped src="./styles/main.sass"></style>