import { useState, useRef, useEffect } from "react";

function CustomSelect({ 
    options, 
    placeholder = "Seleccionar...", 
    onSelect, 
    className = "",
    disabled = false,
    value = ""
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    const [selectedLabel, setSelectedLabel] = useState("");
    const selectRef = useRef(null);

    // Encontrar la etiqueta inicial basada en el valor
    useEffect(() => {
        if (value && options.length > 0) {
            const option = options.find(opt => opt.value === value);
            if (option) {
                setSelectedValue(value);
                setSelectedLabel(option.label);
            }
        }
    }, [value, options]);

    // Cerrar dropdown al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue, optionLabel) => {
        setSelectedValue(optionValue);
        setSelectedLabel(optionLabel);
        setIsOpen(false);
        onSelect && onSelect(optionValue);
    };

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={`relative ${className}`} ref={selectRef}>
            {/* Selector principal */}
            <div
                onClick={toggleDropdown}
                className={`
                    w-full 
                    bg-[#5D7A4F] 
                    border-2 
                    border-[#46603B] 
                    text-white 
                    text-lg 
                    rounded-xl 
                    px-4 
                    py-3 
                    cursor-pointer 
                    flex 
                    justify-between 
                    items-center
                    transition-all 
                    duration-200
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-white/30
                    ${disabled 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#46603B]'
                    }
                `}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={(e) => {
                    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        toggleDropdown();
                    }
                }}
            >
                <span className={selectedLabel ? "text-white" : "text-white/80"}>
                    {selectedLabel || placeholder}
                </span>
                <svg 
                    className={`
                        w-5 h-5 transition-transform duration-200 
                        ${isOpen ? 'rotate-180' : ''}
                        ${disabled ? 'opacity-50' : ''}
                    `}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Dropdown de opciones */}
            {isOpen && !disabled && (
                <div className="
                    absolute 
                    top-full 
                    left-0 
                    right-0 
                    mt-1 
                    bg-[#141c12] 
                    border-2 
                    border-[#2d3e27] 
                    rounded-xl 
                    shadow-2xl 
                    z-50
                    overflow-hidden
                    animate-in
                    slide-in-from-top-2
                    duration-200
                ">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option.value, option.label)}
                            className="
                                px-4 
                                py-3 
                                text-white 
                                cursor-pointer 
                                hover:bg-[#5D7A4F] 
                                hover:text-white
                                transition-all 
                                duration-150
                                border-b 
                                border-[#2d3e27] 
                                last:border-b-0
                                text-lg
                                active:bg-[#46603B]
                            "
                        >
                            {option.label}
                        </div>
                    ))}
                    
                    {/* Si no hay opciones */}
                    {options.length === 0 && (
                        <div className="px-4 py-3 text-white/60 text-lg">
                            No hay opciones disponibles
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;