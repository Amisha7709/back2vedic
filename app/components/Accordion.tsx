type AccordionProps = {
    children: React.ReactNode
    title: string
    id: string,
    index: number,
    active: boolean,
    onAccordionClick: (key: number, value: boolean) => void
}

export default function Accordion({
    children,
    title,
    id,
    active,
    index,
    onAccordionClick
}: AccordionProps) {

    const accordionHeadingClass = active ? 'accordionHeading' : '';
    const accordionTextClass = active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0';
    const handleAccordionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onAccordionClick(index, !active);
    };

    return (
        <div className={`py-2 rounded shadow ${active ? 'shadow-blue-500' : ''}`}>
            <h2 className={`px-5  ${accordionHeadingClass}`}>
                <button
                    className="max-w-7xl mx-auto uppercase text-blue-900 flex items-center text-base lg:text-lg justify-between w-full text-left font-semibold py-2"
                    onClick={handleAccordionClick}
                    aria-expanded={active}
                    aria-controls={`accordion-text-${id}`}
                >
                    <span>{title}</span>
                    <svg className="shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${active && '!rotate-180'}`} />
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-180 transition duration-200 ease-out ${active && '!rotate-90'}`} />
                    </svg>
                </button>
            </h2>
            <div className='px-5'>
                <div
                    id={`accordion-text-${id}`}
                    role="region"
                    aria-labelledby={`accordion-title-${id}`}
                    className={`max-w-7xl mx-auto grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionTextClass}`}
                >
                    <div className="overflow-hidden">
                        <p className="pb-3 text-base lg:text-lg ">
                            {children}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}