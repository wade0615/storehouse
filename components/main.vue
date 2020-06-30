<template>
    <section>
        <h2>{{ content.id }}. {{ content.title }}</h2>

        <div>
            <b-card-group deck class="card_group">
                <b-card v-for="city in cities" :title="city.name" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                    <b-card-text>
                        {{ city.weather[0].description }}
                        <br>
                        {{ city.main.temp }}
                    </b-card-text>
                    <b-button href="#" variant="primary" @click='mainfunc'>Go somewhere</b-button>
                </b-card>
            </b-card-group>
        </div>
    </section>
</template>

<script>
export default {
    props: ['content'],
    data () {
        return {
            msgs: [`Card title 1`,`Card title 2`,`Card title 3`,`Card title 4`,`Card title 5`],
            cities: []
        }
    },
    methods: {
        mainfunc(){
            const api = 'http://api.openweathermap.org/data/2.5/group?id=1668341,1850144,1835848,1609350,1701668&units=metric&appid=77c60ed4e299decbb6b97e90264426ca&lang=en';
            this.axios.get(api).then((response) => {
                // console.log(response.data)
                this.cities = response.data.list
            });
        }
    },
    beforeMount(){
        this.mainfunc()
    },
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped src="./styles/main.sass"></style>