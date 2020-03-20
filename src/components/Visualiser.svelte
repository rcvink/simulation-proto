<script>
    import { onMount } from 'svelte';
    import Two from 'two.js';

    const id = "canvas";
    const height = 300;
    const width = 300;
    let canvas;
    let context;
    let two;
    let circle1;
    let circle2;
    let group;

    const setupTwo = () => {
        canvas = document.getElementById(id);
        const params = { width: 285, height: 200 };
        two = new Two({ width, height }).appendTo(canvas);
    }

    const rotateOnUpdate = () => {
        two.bind('update', (frameCount) => {
            if (group.scale > 0.9999) {
                group.scale = group.rotation = 0;
            }
            var t = (1 - group.scale) * 0.0625;
            group.scale += t;
            group.rotation += t * 4 * Math.PI;
        });
    }

    const createInitalShapes = () => {
        circle1 = two.makeCircle(72, 100, 20);
        circle1.fill = 'rgb(0, 0, 30)';
        circle2 = two.makeCircle(100, 100, 20);
        circle2.fill = 'rgb(0, 0, 102)';
        group = two.makeGroup(circle1, circle2);
        group.translation.set(two.width / 2, two.height / 2);
        group.scale = 0;
        group.noStroke();
    }

    onMount(() => {
        setupTwo();
        createInitalShapes();
        two.update();
        rotateOnUpdate();
        two.play();
    });
</script>

<div id={id} width="{width}" height="{height}"/>