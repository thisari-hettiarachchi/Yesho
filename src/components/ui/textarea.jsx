"use client";

import React from "react";

export const Textarea = React.forwardRef(function Textarea(
    { className = "", rows = 4, ...props },
    ref
) {
    const base =
        "w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-y";
    return (
        <textarea ref={ref} className={`${base} ${className}`} rows={rows} {...props} />
    );
});

export default Textarea;


