import * as THREE from 'three';

let scene, camera, renderer, cube;
let ADD = 0.03;

let createCube = function() {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({color: 0x00a1cb});
    cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
};

// set up the environment - 
// initiallize scene, camera, objects and renderer
let init = function() {
    // create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    
    
    // create an locate the camera
    
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);

    camera.position.z = 5;

    let axes = new THREE.AxesHelper(5)
    scene.add(axes)
    camera.position.x = 2


    createCube();
    
    // create the renderer   
    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
};


// main animation loop - calls 50-60 in a second.
let mainLoop = function() {
    // cube.position.x += ADD
    // cube.rotation.z -= ADD
    cube.rotation.y += ADD

    // if(cube.position.x <= -3 || cube.position.x >= 3) ADD *= -1

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();