"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const AccordionContext = createContext(null);

export function Accordion({
    type = "single",
    collapsible = false,
    className = "",
    children,
}) {
    const [openValues, setOpenValues] = useState([]);

    const isSingle = type === "single";

    const value = useMemo(
        () => ({
            isSingle,
            collapsible,
            openValues,
            toggle: (val) => {
                setOpenValues((prev) => {
                    const isOpen = prev.includes(val);
                    if (isSingle) {
                        if (isOpen) {
                            return collapsible ? [] : prev;
                        }
                        return [val];
                    }
                    // multiple mode (not used here, but supported)
                    if (isOpen) return prev.filter((v) => v !== val);
                    return [...prev, val];
                });
            },
        }),
        [isSingle, collapsible, openValues]
    );

    return (
        <AccordionContext.Provider value={value}>
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    );
}

export function AccordionItem({ value, className = "", children }) {
    return (
        <div data-accordion-item="" data-value={value} className={className}>
            {React.Children.map(children, (child) => {
                if (!child) return child;
                return React.cloneElement(child, { __accordionItemValue: value });
            })}
        </div>
    );
}

export function AccordionTrigger({
    className = "",
    children,
    __accordionItemValue: itemValue,
}) {
    const ctx = useContext(AccordionContext);
    const isOpen = ctx.openValues.includes(itemValue);
    const base =
        "w-full py-4 flex items-center justify-between cursor-pointer select-none";
    return (
        <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => ctx.toggle(itemValue)}
            className={`${base} ${className}`}
        >
            <span className="flex-1 text-left">{children}</span>
            <span className={`ml-3 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                ▾
            </span>
        </button>
    );
}

export function AccordionContent({
    className = "",
    children,
    __accordionItemValue: itemValue,
}) {
    const ctx = useContext(AccordionContext);
    const isOpen = ctx.openValues.includes(itemValue);
    return (
        <div
            className={`${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                } grid transition-all duration-200 ease-in-out overflow-hidden`}
        >
            <div className={`min-h-0 ${className}`}>{children}</div>
        </div>
    );
}

export default Accordion;


