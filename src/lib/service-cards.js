import ux from "./lotties/ux-services";
import development from './lotties/development-services';
import iot from './lotties/iot-services';

export const serviceCards = [
    {
        id: 'ux',
        title: 'UX/UI Design',
        subtitle: 'Thoughtful User Interfaces for All Kind of Products',
        text: 'Interactive prototyping, explicit UI/UX design and branding with clear message for your web, desktop, mobile, smartwatch and IoT products. This is how we’re becoming advocates of actual user needs and business goals.',
        direction: 'odd',
        href: 'design',
        animationOptions: {
            loop: true,
            autoplay: true,
            animationData: ux,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }
    },
    {
        id: 'development',
        title: 'Product Development',
        subtitle: 'Short attractive description will be dispayed here',
        text: 'Interactive prototyping, explicit UI/UX design and branding with clear message for your web, desktop, mobile, smartwatch and IoT products. This is how we’re becoming advocates of actual user needs and business goals.',
        direction: 'even',
        href: 'development',
        animationOptions: {
            loop: true,
            autoplay: true,
            animationData: development,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }
    },
    {
        id: 'iot',
        title: 'IoT',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.',
        direction: 'odd',
        href: 'iot',
        animationOptions: {
            loop: true,
            autoplay: true,
            animationData: iot,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }
    },
];