'use client';
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/kibo-ui/marquee';

const logos = [{
    id: 1,
    url: "./icons/logo-1.webp"
},
{
    id: 2,
    url: "./icons/logo-2.webp"
},
{
    id: 3,
    url: "./icons/logo-3.webp"
}]
const LogoCarousel = () => (

    <Marquee>
        <MarqueeContent pauseOnHover={false}>
            {logos.map((item, index) => (
                <MarqueeItem className="h-full w-full" key={index}>
                    <img
                        alt={`Placeholder ${index}`}
                        className="overflow-hidden rounded-full mx-3"
                        src={item.url}
                    />
                </MarqueeItem>
            ))}
        </MarqueeContent>
    </Marquee>
);
export default LogoCarousel;