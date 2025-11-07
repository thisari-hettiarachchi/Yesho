"use client";

import React from "react";

export const Input = React.forwardRef(function Input(
    { className = "", ...props },
    ref
) {
    const base =
        "w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary";
    return <input ref={ref} className={`${base} ${className}`} {...props} />;
});

export default Input;


