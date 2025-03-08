import React, { useEffect } from 'react';

const Accessibility = () => {
    useEffect(() => {
        import("./AccessibilityScripts.jsx").then((module) => {
            module.default();
    
        });
    }, []);

    return (
        <div>
            <h1>Accessibility Features</h1>
        </div>
    );
};

export default Accessibility;
