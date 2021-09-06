import * as THREE from 'three';
import React, { useState, useEffect, useRef } from 'react';

// let camera, scene, renderer;
// let geometry, material, mesh;

// init();

// function init() {
// 	camera = new THREE.PerspectiveCamera(
// 		70,
// 		window.innerWidth / window.innerHeight,
// 		0.01,
// 		10
// 	);
// 	camera.position.z = 1;

// 	scene = new THREE.Scene();

// 	geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
// 	material = new THREE.MeshNormalMaterial();

// 	mesh = new THREE.Mesh(geometry, material);
// 	scene.add(mesh);

// 	renderer = new THREE.WebGLRenderer({ antialias: true });
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	renderer.setAnimationLoop(animation);
// 	document.body.appendChild(renderer.domElement);
// }

// function animation(time) {
// 	mesh.rotation.x = time / 2000;
// 	mesh.rotation.y = time / 1000;

// 	renderer.render(scene, camera);
// }

export const Cube = () => {
	const mount = useRef(null);
	const [isAnimating, setAnimating] = useState(true);
	const controls = useRef(null);

	useEffect(() => {
		let width = mount.current.clientWidth;
		let height = mount.current.clientHeight;
		console.log(width);
		console.log(height);
		console.log(mount);
		let frameId;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
		const cube = new THREE.Mesh(geometry, material);

		camera.position.z = 4;
		scene.add(cube);
		renderer.setClearColor('#000000');
		renderer.setSize(width, height);

		const renderScene = () => {
			renderer.render(scene, camera);
		};

		const handleResize = () => {
			width = mount.current.clientWidth;
			height = mount.current.clientHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderScene();
		};

		const animate = () => {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderScene();
			frameId = window.requestAnimationFrame(animate);
		};

		const start = () => {
			if (!frameId) {
				frameId = requestAnimationFrame(animate);
			}
		};

		const stop = () => {
			cancelAnimationFrame(frameId);
			frameId = null;
		};

		mount.current.appendChild(renderer.domElement);
		window.addEventListener('resize', handleResize);
		start();

		controls.current = { start, stop };

		return () => {
			stop();
			window.removeEventListener('resize', handleResize);
			// mount.current.removeChild(renderer.domElement);

			scene.remove(cube);
			geometry.dispose();
			material.dispose();
		};
	}, []);

	useEffect(() => {
		if (isAnimating) {
			controls.current.start();
		} else {
			controls.current.stop();
		}
	}, [isAnimating]);

	return (
		<div
			className="vis"
			ref={mount}
			onClick={() => setAnimating(!isAnimating)}
		/>
	);
};
