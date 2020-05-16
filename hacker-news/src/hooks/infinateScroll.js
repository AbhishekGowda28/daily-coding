/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants/constants";

function infiniteScroll() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = () => {

        const innerHeight = window.innerHeight;
        const scrollPosition = window.document.documentElement.scrollTop;
        const offSetHeight = window.document.documentElement.offsetHeight

        const totalScroll = innerHeight + scrollPosition;
        if ((totalScroll > offSetHeight || totalScroll === offSetHeight) && loading === false) {
            setLoading(true);
        }
        setLoading(false);

    }

    useEffect(() => {
        if (!loading) {
            return;
        }

        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES);
        } else {
            setCount(count + STORY_INCREMENT);
        }
        setLoading(false);
    }, [loading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Removing handleScroll
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return count;
}

export { infiniteScroll };