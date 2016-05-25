angular
    .module('chatApp')
    .directive('presentation', presentation);

function presentation() {
    return {
        scope: {},

        template: `<section id="presentation" class="centered">
                        <h1>Anonymous Chat</h1>
                        <h4>Live in fear | <a href="#">Chat now</a></h4>
                    </section>`
    }
}
