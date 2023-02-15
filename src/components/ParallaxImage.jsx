import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export default function ParallaxImage() {
    return (
        <ParallaxProvider>
            <ParallaxBanner className="h-[600px] aspect-[2/1]" layers={[{ image: 'https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', speed: -15 }]}></ParallaxBanner>
        </ParallaxProvider>
    );
}
