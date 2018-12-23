<template>
    <div id="app">
        <h2 id="breadcrumbs">Breadcrumbs</h2>
        <breadcrumbs>
            <breadcrumb-item url="/">Home</breadcrumb-item>
            <breadcrumb-item url="/">About</breadcrumb-item>
            <breadcrumb-item url="/" active>Test</breadcrumb-item>
        </breadcrumbs>
        <h2 id="typography">Typography</h2>
        <h1>H1 Tag</h1>
        <h2>H2 Tag</h2>
        <h3>H3 Tag</h3>
        <h4>H4 Tag</h4>
        <h5>H5 Tag</h5>
        <h6>H6 Tag</h6>
        <br>
        <h2 id="alerts">Alerts</h2>
        <button class="button primary" @click="toggleAlert">Toggle Alert</button>
        <br>
        <br>
        <br>
        <alert
            v-for="color in variations"
            :key="color"
            fill
            :dismissible="true"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            :alert-variation="color"
        >This is just a test for {{color}}!</alert>
        <alert
            :dismissible="true"
            :show="alertIsShown"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            alert-variation="primary"
            position="bottom-left"
        >This is just a test for "bottom-left"!</alert>
        <h2 id="badges">Badges</h2>
        <p>
            <badge v-for="variation in variations" :key="'badge-' + variation" :variation="variation">{{ variation }}</badge>
        </p>
        <p>
            <badge v-for="variation in variations" :key="'badge-hollow-' + variation" :variation="variation" hollow>{{ variation }}</badge>
        </p>
        <p>
            <badge v-for="variation in variations" :key="'badge-pill-' + variation" :variation="variation" pill>{{ variation }}</badge>
        </p>
        <p>
            <badge v-for="variation in variations" :key="'badge-pill-hollow-' + variation" :variation="variation" pill hollow>{{ variation }}</badge>
        </p>
        <h2 id="buttons">Buttons</h2>
        <div v-for="variation in variations" :key="'button-' + variation">
            <link-button :variation="variation">Button for {{ variation }}</link-button>
            <br>
            <br>
        </div>
        <div v-for="variation in variations" :key="'button-hollow-' + variation">
            <link-button :variation="variation" hollow>Button for hollow {{ variation }}</link-button>
            <br>
            <br>
        </div>
        <div v-for="size in sizes" :key="'button-' + size">
            <link-button variation="secondary" :size="size">Button for {{ size }}</link-button>
            <br>
            <br>
        </div>
        <div>
            <link-button variation="secondary" expanded>Expanded Button</link-button>
            <br>
            <br>
        </div>
        <div>
            <link-button-group>
                <link-button variation="secondary">left</link-button>
                <link-button variation="secondary">middle</link-button>
                <link-button variation="secondary">right</link-button>
            </link-button-group>
            <br>
            <br>
        </div>
        <div>
            <link-button-group>
                <link-button variation="secondary" hollow>left</link-button>
                <link-button variation="secondary" hollow>middle</link-button>
                <link-button variation="secondary" hollow>right</link-button>
            </link-button-group>
            <br>
            <br>
        </div>
        <div>
            <link-button-group expanded>
                <link-button variation="secondary" hollow>left</link-button>
                <link-button variation="secondary" hollow>middle</link-button>
                <link-button variation="secondary" hollow>right</link-button>
            </link-button-group>
            <br>
            <br>
        </div>
        <div>
            <link-button-group column>
                <link-button variation="secondary">top</link-button>
                <link-button variation="secondary">middle</link-button>
                <link-button variation="secondary">bottom</link-button>
            </link-button-group>
            <br>
            <br>
        </div>
        <div>
            <link-button-group column>
                <link-button variation="secondary" hollow>top</link-button>
                <link-button variation="secondary" hollow>middle</link-button>
                <link-button variation="secondary" hollow>bottom</link-button>
            </link-button-group>
            <br>
            <br>
        </div>
        <div>
            <link-button-group column expanded>
                <link-button variation="secondary" hollow>top</link-button>
                <link-button variation="secondary" hollow>middle</link-button>
                <link-button variation="secondary" hollow>bottom</link-button>
            </link-button-group>
            <br>
            <br>
        </div>
        <h2 id="cards">Cards</h2>
        <p>
            <card style="max-width:18rem;" image-position="top">
                <card-image
                    source="https://pbs.twimg.com/profile_images/438889890315378689/LD8sjmQ_.jpeg"
                    lazy
                />
                <card-body>
                    <h3>Test Card</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                </card-body>
            </card>
        </p>
        <p>
            <card style="max-width:18rem;" image-position="bottom">
                <card-image
                    source="https://pbs.twimg.com/profile_images/438889890315378689/LD8sjmQ_.jpeg"
                    lazy
                />
                <card-body>
                    <h3>Test Card</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                </card-body>
            </card>
        </p>
        <p>
            <card style="max-width:50%;" image-position="left">
                <card-image
                    source="https://pbs.twimg.com/profile_images/438889890315378689/LD8sjmQ_.jpeg"
                    lazy
                    cover
                />
                <card-body>
                    <h3>Test Card</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                </card-body>
            </card>
        </p>
        <p>
            <card style="max-width:50%;" image-position="right">
                <card-image
                    source="https://pbs.twimg.com/profile_images/438889890315378689/LD8sjmQ_.jpeg"
                    lazy
                    cover
                />
                <card-body>
                    <h3>Test Card</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                </card-body>
            </card>
        </p>
        <p>
            <card style="max-width:50%;color:white;" image-position="overlay">
                <card-image
                    source="https://tse1.mm.bing.net/th?id=OIP.BFHqtcqZdlrdG0MgWUWI6QHaJl&pid=Api"
                    lazy
                />
                <card-body position="top">
                    <h3>Test Card</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                </card-body>
            </card>
        </p>
        <p>
            <card-group>
                <card image-position="top">
                    <card-image
                        source="http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg"
                        lazy
                    />
                    <card-body position="top">
                        <h3>Test Card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                    </card-body>
                </card>
                <card image-position="top">
                    <card-image
                        source="http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg"
                        lazy
                    />
                    <card-body position="top">
                        <h3>Test Card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                    </card-body>
                </card>
                <card image-position="top">
                    <card-image
                        source="http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg"
                        lazy
                    />
                    <card-body position="top">
                        <h3>Test Card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                    </card-body>
                </card>
            </card-group>
        </p>
        <p>
            <card-group gutters>
                <card image-position="top">
                    <card-image
                        source="http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg"
                        lazy
                    />
                    <card-body position="top">
                        <h3>Test Card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                    </card-body>
                </card>
                <card image-position="top">
                    <card-image
                        source="http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg"
                        lazy
                    />
                    <card-body position="top">
                        <h3>Test Card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eligendi soluta? Animi earum veniam error doloribus voluptas sed ratione nemo odio numquam laboriosam deserunt deleniti eum nisi, dolor recusandae dolorum!</p>
                    </card-body>
                </card>
                <card image-position="top">
                    <card-image
                        source="http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg"
                        lazy
                    />
                    <card-body position="top">
                        <h3>Test Card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </card-body>
                </card>
            </card-group>
        </p>
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Alert from './components/Alert';
import Badge from './components/Badge';
import { Breadcrumbs, BreadcrumbItem } from './components/Breadcrumbs';
import MediaImage from './components/Media';
import { LinkButton, LinkButtonGroup } from './components/LinkButton';
import { Card, CardImage, CardGroup, CardBody } from './components/Card';

@Component({
    components: {
        HelloWorld,
        Alert,
        Badge,
        Breadcrumbs,
        BreadcrumbItem,
        MediaImage,
        LinkButton,
        LinkButtonGroup,
        Card,
        CardImage,
        CardGroup,
        CardBody
    }
})
export default class App extends Vue {
    variations = [
        'primary',
        'secondary',
        'default',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'dark',
        'black',
        'white',
        'link'
    ];

    sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    alertIsShown = false;

    toggleAlert() {
        this.alertIsShown = !this.alertIsShown;
    }
    dismiss(variation: string) {
        return alert(`You closed the ${variation} alert!`);
    }
}
</script>

<style lang="scss">
#app {
    max-width: 960px;
    margin: auto;
}
</style>
