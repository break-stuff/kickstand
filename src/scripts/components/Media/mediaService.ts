// @ts-ignore
import objectFitImages from 'object-fit-images';

interface IMediaService {
    setLazyLoadImageObserver(sourceList: any[], sourceSet: string, source: string): void;
    setObjectFitListener(): void;
}

const mediaService: IMediaService = {
    setLazyLoadImageObserver(sourceList: any[], sourceSet: string, source: string): void {
        document.addEventListener('DOMContentLoaded', () => {
            const lazyImages = [].slice.call(
                document.querySelectorAll('.lazy-image')
            );

            const lazyImageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const lazyImage: any = entry.target;
                        const image = document.createElement('img');
                        image.src = sourceList 
                                        ? lazyImage.querySelector('source').getAttribute('srcset') 
                                        : sourceSet || source;

                        image.classList.add('image-tag');
                        lazyImage.append(image);
                        lazyImage.classList.remove('lazy-image');
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach((lazyImage: any) => {
                lazyImageObserver.observe(lazyImage);
            });
        });
    },

    setObjectFitListener(): void {
        const images = document.querySelectorAll('img.cover');
        objectFitImages(images);
    }
};

export default mediaService;
