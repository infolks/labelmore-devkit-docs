<template>
    <main>
        <div class="section bg-light" id="hero">
            <div class="container text-center m-vertical-auto">
                <h1 class="heading-hero">LabelMore Devkit</h1>
                <p class="text-lead">Plugin Development Kit for LabelMore Annotation Tool</p>

                <div class="m-top-4">
                    
                    <a href="#" class="button button-block button-dark m-right">
                        Github <i class="fab fa-github-alt m-left-small"></i> 
                    </a>

                    <a @click.prevent="gotoStart" class="button button-block button-success m-right">
                        Get Started <i class="fas fa-rocket m-left-small"></i>
                    </a>

                    <router-link :to="{name: 'api.content'}" class="button button-block button-primary">
                        API Docs <i class="fas fa-book m-left-small"></i>
                    </router-link>

                </div>

            </div>
        </div>

        <div class="section bg-primary theme-dark" id="get_started">
            <div class="container p-4">
                <h2 class="heading-large heading-divider">Get Started</h2>
                <div class="m-left m-top">
                    <p class="d-before-secondary">LabelMore is an annotation tool developed at <a href="">Infolks</a>.</p>
                    <p class="d-before-secondary">LabelMore is different from other annotation tools since it is highly extensible making use of the plugin architecture.</p>
                    <p class="d-before-secondary">LabelMore is developed using <a href="https://vuejs.org/">Vue.js</a> and <a href="https://electronjs.org">Electron</a>.</p>
                    <p class="d-before-secondary">LabelMore plugins are implemented using the Vue's plugin architecture.</p>
                    <p class="d-before-secondary">The plugins we develop are actually Vue plugins itself but with some level of abstraction.</p>
                    <p class="d-before-secondary">Hence, it is recommended that anyone developing the plugins must have basic knowledge on:</p>

                    <ul class="list list-bullet-secondary m-vertical m-left-5 text-medium">
                        <li>JavaScript, HTML &amp; CSS</li>
                        <li>Node.js &amp; NPM</li>
                        <li>SCSS</li>
                        <li>TypeScript</li>
                        <li>Vue.js Framework</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section bg-light" id="installation">
            <div class="container p-4">
                <h2 class="heading-large heading-divider">Installation</h2>

                <div class="m-left m-top">
                    <p class="d-before-primary">LabelMore devkit can be installed via npm.</p>

                    <app-code language="bash" :line-numbers="false" code="npm i -D @infolks/labelmore-devkit"></app-code>
                </div>
            </div>
        </div>

        <div class="section bg-muted" id="starter">
            <div class="container p-4">
                <h2 class="heading-large heading-divider">Starter Template</h2>

                <div class="m-left m-top">
                    <p class="d-before-primary">We recommend using <a href="https://bili.egoist.sh/#/">bili</a> for building your plugins.</p>
                    <p class="d-before-primary">We have already setup a basic <a href="https://github.com/infolks/labelmore-plugin-starter">Starter Template</a> for getting you started with the plugin development.</p>

                    <p class="d-before-primary">Clone the repository into a folder with the name of the plugin you are making.</p>
                    <app-code language="bash" :line-numbers="false">git clone https://github.com/infolks/labelmore-plugin-starter.git &lt;PLUGIN_NAME&gt;</app-code>

                    <p class="d-before-primary">Change into the plugin directory and install the dependencies:</p>
                    <app-code language="bash" :line-numbers="false">
                        cd &lt;PLUGIN_NAME&gt;
                        npm install
                    </app-code>

                    <p class="d-before-primary">Change the remote directory to your git directory</p>
                    <app-code language="bash" :line-numbers="false">
                        git remote set-url origin &lt;GIT_URL&gt;
                    </app-code>

                    <p class="d-before-primary">Edit the package.json to reflect your plugin information</p>
                    <app-code language="json" :line-numbers="true">
                        {
                            "name": "labelmore-plugin-starter", // change this to your plugin name
                            "version": "1.0.0",
                            "description": "A starter repo for labelmore plugin development", // change the description

                            ...

                            "repository": {
                                "type": "git",
                                "url": "git+https://github.com/infolks/labelmore-plugin-starter.git"
                            }, // change repository

                            "keywords": [
                                "labelmore",
                                "plugin",
                                "starter"
                            ], // change the keywords

                            "author": "infolks", // change author
                            "license": "ISC",
                            "bugs": {
                                "url": "https://github.com/infolks/labelmore-plugin-starter/issues" // change url
                            },

                            "homepage": "https://github.com/infolks/labelmore-plugin-starter#readme", // change home page
                            
                            ...
                        }
                    </app-code>


                </div>
            </div>
        </div>

        <div class="section bg-primary theme-dark">
            <div class="container p-2 text-center">
                Copyright &copy; {{new Date().getFullYear()}} at <a href="www.infolks.info">Infolks</a> 
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue'
    import AppCode from '../components/Code.vue'

    export default Vue.extend({

        methods: {
            gotoStart() {
               $('html, body').animate({
                   scrollTop: $('#get_started').offset().top
               }, 500)
            }
        },
        components: {
            AppCode
        }
    })
</script>

<style lang="scss" scoped>
    #hero {
        display: flex;
        height: 100vh;
        align-items: center;
        background-image: url('../../assets/doodle.png');
    }
</style>