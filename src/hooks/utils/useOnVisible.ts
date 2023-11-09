import * as React from 'react';

export function useOnVisible(onVisible: () => void) {
    const targetElementRef = React.useRef<HTMLDivElement | null>(null);
    const observer = React.useRef<IntersectionObserver | null>(null);

    React.useEffect(() => {
        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onVisible();
            }
        });

        if (targetElementRef.current) {
            observer.current.observe(targetElementRef.current);
        }

        return () => {
            if (observer.current && targetElementRef.current) {
                observer.current.unobserve(targetElementRef.current);
            }
        };
    }, [onVisible]);

    return targetElementRef;
}