function main() {


const controls = new THREE.OrbitControls(camera, canvas);
controls.target.set(0, 5, 0);
controls.update();

  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  {
    const color = 0xFFFFFF;
    const intensity = 1.25;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 0.5;
  const boxHeight = 25;
  const boxDepth = 25;
  const geometry = new THREE.SphereGeometry(boxWidth, boxHeight, boxDepth);
  const Cylinder = new THREE.CylinderGeometry( 0.05, 0.05, 1, 30 );

function makeShapeSphere(radius,widthSegments,heightSegments) {
	const shpere = new THREE.SphereGeometry(radius,widthSegments,heightSegments)
	return shpere;
	// body...
}

  function makeInstance(geometry, color, x ,s) {
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;
    cube.radius=s;

    return cube;
  }
  Sphere1 = makeShapeSphere(0.5 , 100, 100);
  Sphere2 = makeShapeSphere(0.35 ,100,100);

  const cubes = [
    makeInstance(Sphere2, 0x44aa88,  0, 1),
    makeInstance(Cylinder, 0x8844aa, 0, 1),
    makeInstance(Sphere1, 0xaa8844,  1.2,0.5),
  ];

  var Hcl = new THREE.Group();
    cubes[1].rotateX(0);
    cubes[1].rotateZ(1.5708);
    cubes[1].rotateY(0);
    cubes[1].position.set(0.5,0,0);
    Hcl.add(cubes[0]);
    Hcl.add(cubes[1]);
    Hcl.add(cubes[2]);
    scene.add(Hcl);
 /* cubes[0].position.x(-2);
    cubes[1].position.x(-3);
      cubes[3].position.x(-4);*/

  function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
  

  function render(time) {
    time *= 0.001;  // convert time to seconds
    speed = 1+ 1*1;
    rot= time * speed;

    Hcl.rotation.y= rot;
  cubes.forEach((cube, ndx) => {

     
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}

main();
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;


}