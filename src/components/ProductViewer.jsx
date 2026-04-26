import useMacbookStore from "../store";
import clsx from 'clsx';
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Center } from "@react-three/drei"
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from 'react-responsive'

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <section className="relative container mx-auto min-h-[93vh] px-5 2xl:px-0 mt-40">
            <h2 className="text-white font-semibold text-3xl lg:text-6xl mb-20">Take a closer look</h2>

            <div className="absolute z-50 bottom-20 2xl:bottom-52 left-1/2 -translate-x-1/2">
                <p className="text-xs text-white bg-black/20 px-2 py-1 rounded-lg">MacbookPro | Available in 14" and 16" in Space Gray & Dark Colors</p>

                <div className="flex items-center justify-center gap-5 mt-5">
                    <div className="flex items-center justify-between bg-neutral-800 rounded-full px-6 py-3 gap-4">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx(
                                "size-7 rounded-full cursor-pointer bg-neutral-300", // Static classes
                                color === '#adb5bd' && 'ring-5 size-5 ring-light-100'                   // Conditional class
                            )}
                        />

                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx(
                                "size-7 rounded-full cursor-pointer bg-neutral-900", // Static classes
                                color === '#2e2c2e' && 'ring-5 size-5 ring-light-100'                   // Conditional class
                            )}
                        />

                    </div>

                    <div className="font-medium text-xs flex items-center justify-between bg-neutral-800 
                    rounded-full px-6 py-2.5 gap-2">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(
                                "size-7 rounded-full cursor-pointer flex items-center justify-center", // Static classes
                                scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white'              // Conditional class
                            )}
                        >
                            <p>14"</p>
                        </div>

                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(
                                "size-7 rounded-full cursor-pointer flex items-center justify-center", // Static classes
                                scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white'              // Conditional class
                            )}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas
                camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
                /*className="w-full h-screen lg:h-screen z-40 relative"*/
                style={{
                    width: '100%',
                    height: '80vh',
                    position: 'relative',
                    zIndex: 40,

                }}
            >
                <StudioLights />
                <ModelSwitcher
                    scale={isMobile ? scale - 0.03 : scale}
                    isMobile={isMobile}

                />


            </Canvas>
        </section>
    );
}

export default ProductViewer;