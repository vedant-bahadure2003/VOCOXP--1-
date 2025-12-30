import { useCallback, useRef } from 'react';

/**
 * Creates a debounced version of a callback function
 * @param {Function} callback - The function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const useDebouncedCallback = (callback, delay) => {
    const timeoutRef = useRef(null);

    return useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
};

/**
 * Creates a throttled version of a callback function
 * @param {Function} callback - The function to throttle
 * @param {number} limit - Minimum time between calls in milliseconds
 * @returns {Function} Throttled function
 */
export const useThrottledCallback = (callback, limit) => {
    const lastRunRef = useRef(0);
    const timeoutRef = useRef(null);

    return useCallback((...args) => {
        const now = Date.now();
        const timeSinceLastRun = now - lastRunRef.current;

        if (timeSinceLastRun >= limit) {
            lastRunRef.current = now;
            callback(...args);
        } else {
            // Schedule for later if not called within limit
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                lastRunRef.current = Date.now();
                callback(...args);
            }, limit - timeSinceLastRun);
        }
    }, [callback, limit]);
};
