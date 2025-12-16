/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,
    useGLTF,
    Environment,
    ContactShadows,
    Center,
    Html,
    useProgress,
    Shadow
} from '@react-three/drei';

/* ---------------- Loader ---------------- */

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html center>
            <div className="bg-black/80 backdrop-blur text-white px-6 py-4 rounded-2xl flex flex-col items-center border border-white/20 shadow-2xl">
                <div className="text-3xl font-bold mb-1">
                    {Math.round(progress)}%
                </div>
                <div className="text-xs uppercase tracking-widest opacity-70">
                    Loading High-Res Model
                </div>
            </div>
        </Html>
    );
};

/* ---------------- Model Settings Map ---------------- */
const MODEL_SETTINGS = {
    '/thar.glb': { scale: 0.55, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/thar_draco.glb': { scale: 0.55, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/harrier.glb': { scale: 0.0105, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/safari.glb': { scale: 0.0105, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/scorpion.glb': { scale: 0.95, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/tata_punch.glb': { scale: 1.1, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/swift.glb': { scale: 1.55, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/baleno.glb': { scale: 1.55, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/verna.glb': { scale: 0.0105, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/fortuner.glb': { scale: 0.0085, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/chevrolet_corvette_c7.glb': { scale: 1.35, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/amgs63.glb': { scale: 1.3, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/chiron.glb': { scale: 0.015, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/lamborghini_aventador.glb': { scale: 1.3, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/2021_suzuki_ciaz.glb': { scale: 1.3, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    '/toyota_camry_2020.glb': { scale: 1.3, rotation: [0, Math.PI / 2, 0], zoomRange: [5, 40] },
    // Defaults will be handled if not found
};

/* ---------------- Car Model ---------------- */

const CarModel = ({ path, setZoomRange }) => {
    const { scene } = useGLTF(path);

    // Get specific settings or defaults
    const settings = useMemo(() =>
        MODEL_SETTINGS[path] || { scale: 0.6, rotation: [0, Math.PI / 2, 0], zoomRange: [4, 30] },
        [path]);

    useEffect(() => {
        if (setZoomRange && settings.zoomRange) {
            setZoomRange(settings.zoomRange);
        }

        scene.traverse((o) => {
            if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
                if (o.material) o.material.envMapIntensity = 1;
            }
        });
    }, [scene, settings, setZoomRange]);

    return (
        <Center>
            <primitive
                object={scene}
                rotation={settings.rotation}
                scale={settings.scale}
            />
        </Center>
    );
};

/* ---------------- Main Component ---------------- */

const VehicleGlb = ({ modelPath = '/thar.glb' }) => {
    const [zoomRange, setZoomRange] = React.useState([4, 30]);

    return (
        <div className="w-full h-full relative group">
            <Canvas
                shadows
                dpr={[1, 1.25]}
                camera={{
                    position: [9, 4, 9], // zoomed backward (further out)
                    fov: 55
                }}
                gl={{ preserveDrawingBuffer: true, alpha: true }}
                className="outline-none"
            >
                {/* Lighting */}
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[7, 7, 7]}
                    intensity={1}
                    castShadow
                />
                <directionalLight
                    position={[-6, 5, 4]}
                    intensity={0.5}
                />

                {/* Environment */}
                <Environment preset="city" />

                {/* Model */}
                <group position={[0, -0.45, 0]}>
                    <Suspense fallback={<Loader />}>
                        <CarModel path={modelPath} setZoomRange={setZoomRange} />

                        {/* Base "Fill" Shadow (Oval) */}
                        <Shadow
                            position={[0, -0.78, 0]}
                            scale={[2.2, 4.5]}
                            color="black"
                            colorStop={0}
                            opacity={0.8}
                        />

                        {/* Detailed Contact Shadows for Wheels */}
                        <ContactShadows
                            position={[0, -0.78, 0]}
                            opacity={0.8}
                            scale={14}
                            blur={2}
                            far={1.5}
                            resolution={1024}
                            color="#000000"
                        />
                    </Suspense>
                </group>

                {/* Controls */}
                <OrbitControls
                    makeDefault
                    enablePan={false}
                    enableZoom
                    autoRotate
                    autoRotateSpeed={0.8}
                    minDistance={zoomRange[0]}
                    maxDistance={zoomRange[1]}
                    minPolarAngle={0.5}
                    maxPolarAngle={Math.PI / 1.7}
                />
            </Canvas>
        </div>
    );
};

export default VehicleGlb;
